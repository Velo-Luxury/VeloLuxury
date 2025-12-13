
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Language } from './types';
import { DataProvider } from './context/DataContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Fleet } from './pages/Fleet';
import { CarDetail } from './pages/CarDetail';
import { About } from './pages/About';
import { Offers } from './pages/Offers';
import { Contact } from './pages/Contact';
import { Policies } from './pages/Policies';
import { WhatsAppButton } from './components/WhatsAppButton';

// Admin Imports
import { AdminLogin } from './pages/admin/AdminLogin';
import { FleetManager } from './pages/admin/FleetManager';
import { FaqManager } from './pages/admin/FaqManager';
import { ContactManager } from './pages/admin/ContactManager';
import { DashboardOverview } from './pages/admin/DashboardOverview';

const AppContent: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  // Update document dir for accessibility/layout
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white flex flex-col">
        {/* Navbar handles its own display logic, we might want to hide it on admin pages? 
            For now, we can leave it or conditional render. 
            Let's conditionally render Navbar only on non-admin routes for cleanliness.
        */}
        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="*" element={<Navbar lang={lang} setLang={setLang} />} />
        </Routes>

        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/fleet" element={<Fleet lang={lang} />} />
            <Route path="/car/:id" element={<CarDetail lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/offers" element={<Offers lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
            <Route path="/policies" element={<Policies lang={lang} />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<DashboardOverview />} />
            <Route path="/admin/fleet" element={<FleetManager />} />
            <Route path="/admin/faqs" element={<FaqManager />} />
            <Route path="/admin/contact" element={<ContactManager />} />
          </Routes>
        </main>

        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="*" element={<Footer lang={lang} />} />
        </Routes>

        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="*" element={<WhatsAppButton />} />
        </Routes>
      </div>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
};

export default App;
