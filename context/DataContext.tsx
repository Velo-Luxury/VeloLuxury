
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Car, FAQ, ContactInfo } from '../types';
import { CARS, FAQS, CONTACT_INFO } from '../constants';
import { supabase } from '../lib/supabase';

interface DataContextType {
  cars: Car[];
  loading: boolean;
  addCar: (car: Omit<Car, 'id'>) => Promise<void>;
  updateCar: (car: Car) => Promise<void>;
  deleteCar: (id: string) => Promise<void>;

  faqs: FAQ[];
  addFaq: (faq: Omit<FAQ, 'id'>) => Promise<void>;
  updateFaq: (faq: FAQ) => Promise<void>;
  deleteFaq: (id: string) => Promise<void>;

  contactInfo: ContactInfo;
  updateContactInfo: (info: ContactInfo) => Promise<void>;

  isAdmin: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;

  uploadImage: (file: File) => Promise<string>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo>(CONTACT_INFO);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch Data on Mount
  useEffect(() => {
    checkSession();
    fetchData();
  }, []);

  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAdmin(!!session);

    supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session);
    });
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch Cars
      const { data: carsData, error: carsError } = await supabase
        .from('cars')
        .select('*')
        .order('created_at', { ascending: false });

      if (carsData && carsData.length > 0) {
        // Map DB snake_case/lowercase to camelCase
        const mappedCars: Car[] = carsData.map((dbCar: any) => ({
          ...dbCar,
          isVisible: dbCar.isvisible ?? true, // Handle existing records that might be null
          isFeatured: dbCar.isfeatured ?? false
        }));
        setCars(mappedCars);
      } else if (!carsError) {
        // SEED DATA IF EMPTY
        await seedData();
      }

      // Fetch FAQs
      const { data: faqData } = await supabase.from('faqs').select('*');
      if (faqData) setFaqs(faqData);

      // Fetch Contact Info (Singleton ID 1)
      const { data: contactData } = await supabase.from('contact_info').select('*').eq('id', 1).single();
      if (contactData) {
        setContactInfo({
          phone: contactData.phone,
          whatsapp: contactData.whatsapp,
          email: contactData.email,
          address: contactData.address,
          mapUrl: contactData.mapUrl
        });
      } else {
        // If no contact info exists in DB, create the initial row
        await supabase.from('contact_info').insert([{ id: 1, ...CONTACT_INFO }]);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const seedData = async () => {
    // Helper to seed initial constants if DB is empty
    console.log("Seeding database with initial content...");
    const carsPayload = CARS.map(({ id, ...rest }) => rest); // Let DB handle IDs
    const faqsPayload = FAQS.map(({ id, ...rest }) => rest);

    const { data: newCars } = await supabase.from('cars').insert(carsPayload).select();
    if (newCars) setCars(newCars);

    const { data: newFaqs } = await supabase.from('faqs').insert(faqsPayload).select();
    if (newFaqs) setFaqs(newFaqs);
  };

  // --- CAR ACTIONS ---
  const addCar = async (car: Omit<Car, 'id'>) => {
    // Add default values and map to lowercase DB columns
    const dbCar = {
      name: car.name,
      model: car.model,
      category: car.category,
      pricePerDay: car.pricePerDay,
      imageUrl: car.imageUrl || '',
      gallery: car.gallery || [],
      engine: car.engine,
      zeroToSixty: car.zeroToSixty,
      topSpeed: car.topSpeed,
      seats: car.seats,
      features: car.features,
      description: car.description,
      isvisible: car.isVisible ?? true,   // Map to lowercase
      isfeatured: car.isFeatured ?? false // Map to lowercase
    };

    const { data, error } = await supabase.from('cars').insert([dbCar]).select();
    if (error) throw error;

    // Map back to camelCase for local state
    if (data) {
      const newCarLocal: Car = {
        ...data[0],
        isVisible: data[0].isvisible,
        isFeatured: data[0].isfeatured
      };
      setCars([newCarLocal, ...cars]);
    }
  };

  const updateCar = async (updatedCar: Car) => {
    // Map to lowercase for DB update
    const dbUpdate = {
      name: updatedCar.name,
      model: updatedCar.model,
      category: updatedCar.category,
      pricePerDay: updatedCar.pricePerDay,
      imageUrl: updatedCar.imageUrl,
      gallery: updatedCar.gallery,
      engine: updatedCar.engine,
      zeroToSixty: updatedCar.zeroToSixty,
      topSpeed: updatedCar.topSpeed,
      seats: updatedCar.seats,
      features: updatedCar.features,
      description: updatedCar.description,
      isvisible: updatedCar.isVisible,    // Map to lowercase
      isfeatured: updatedCar.isFeatured   // Map to lowercase
    };

    const { data, error } = await supabase.from('cars').update(dbUpdate).eq('id', updatedCar.id).select();
    if (error) throw error;

    // Map DB snake_case/lowercase to camelCase
    if (data && data.length > 0) {
      const mappedUpdatedCar: Car = {
        ...data[0],
        isVisible: data[0].isvisible ?? true, // Handle existing records that might be null
        isFeatured: data[0].isfeatured ?? false
      };
      setCars(cars.map(c => c.id === mappedUpdatedCar.id ? mappedUpdatedCar : c));
    }
  };

  const deleteCar = async (id: string) => {
    const { error } = await supabase.from('cars').delete().eq('id', id);
    if (error) throw error;
    setCars(cars.filter(c => c.id !== id));
  };

  // --- IMAGE UPLOAD ACTION ---
  const uploadImage = async (file: File): Promise<string> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('cars')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('cars').getPublicUrl(filePath);
      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  // --- FAQ ACTIONS ---
  const addFaq = async (faq: Omit<FAQ, 'id'>) => {
    const { data, error } = await supabase.from('faqs').insert([faq]).select();
    if (error) throw error;
    if (data) setFaqs([...faqs, data[0]]);
  };

  const updateFaq = async (updatedFaq: FAQ) => {
    const { error } = await supabase.from('faqs').update(updatedFaq).eq('id', updatedFaq.id);
    if (error) throw error;
    setFaqs(faqs.map(f => f.id === updatedFaq.id ? updatedFaq : f));
  };

  const deleteFaq = async (id: string) => {
    const { error } = await supabase.from('faqs').delete().eq('id', id);
    if (error) throw error;
    setFaqs(faqs.filter(f => f.id !== id));
  };

  // --- CONTACT ACTIONS ---
  const updateContactInfo = async (info: ContactInfo) => {
    const { error } = await supabase.from('contact_info').update(info).eq('id', 1);
    if (error) throw error;
    setContactInfo(info);
  };

  // --- AUTH ACTIONS ---
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    console.log(`[Debug] Attempting login for email: '${email}'`); // Debug log

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error("Login failed:", error.message);
      return { success: false, error: error.message };
    }
    return { success: !!data.session };
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <DataContext.Provider value={{
      cars, loading, addCar, updateCar, deleteCar,
      faqs, addFaq, updateFaq, deleteFaq,
      contactInfo, updateContactInfo,
      isAdmin, login, logout,
      uploadImage
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
