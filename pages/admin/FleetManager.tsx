import React, { useState, useRef } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useData } from '../../context/DataContext';
import { Button } from '../../components/Button';
import { Car, CarCategory } from '../../types';
import { Plus, Edit2, Trash2, X, Loader2, Eye, EyeOff, Star, MoreVertical } from 'lucide-react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { SmartTextButton, SmartImageButton } from '../../components/admin/SmartButtons';

// --- Sortable Image Component ---
const SortableImage = ({
  url,
  index,
  onRemove
}: {
  url: string;
  index: number;
  onRemove: () => void;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: url });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative aspect-video bg-dark-900 rounded border border-white/10 overflow-hidden group touch-none"
    >
      <img src={url} alt={`Gallery ${index}`} className="w-full h-full object-cover" />

      {/* MAIN BADGE */}
      {index === 0 && (
        <div className="absolute top-1 left-1 bg-gold-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10">
          MAIN
        </div>
      )}

      {/* Remove Button - Stop propagation to prevent drag start */}
      <button
        type="button"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <X size={12} />
      </button>
    </div>
  );
};

// --- Action Menu Component ---
const ActionMenu = ({
  car,
  onToggleStatus,
  onDelete
}: {
  car: Car;
  onToggleStatus: (car: Car, field: 'isVisible' | 'isFeatured') => void;
  onDelete: (id: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-white/10 rounded-full text-neutral-400 hover:text-white transition-colors"
      >
        <MoreVertical size={18} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-dark-800 border border-white/10 rounded-lg shadow-xl z-20 overflow-hidden">
          <button
            onClick={() => { onToggleStatus(car, 'isVisible'); setIsOpen(false); }}
            className="w-full text-left px-4 py-3 text-sm text-neutral-300 hover:bg-white/5 flex items-center gap-2"
          >
            {car.isVisible ? <><Eye size={16} className="text-green-400" /> Hide Vehicle</> : <><EyeOff size={16} className="text-neutral-500" /> Show Vehicle</>}
          </button>

          <button
            onClick={() => { onToggleStatus(car, 'isFeatured'); setIsOpen(false); }}
            className="w-full text-left px-4 py-3 text-sm text-neutral-300 hover:bg-white/5 flex items-center gap-2"
          >
            <Star size={16} className={car.isFeatured ? "text-gold-500 fill-gold-500" : "text-neutral-500"} />
            {car.isFeatured ? 'Unfeature' : 'Feature'}
          </button>

          <div className="border-t border-white/5 my-1"></div>

          <button
            onClick={() => { onDelete(car.id); setIsOpen(false); }}
            className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-400/10 flex items-center gap-2"
          >
            <Trash2 size={16} /> Delete Vehicle
          </button>
        </div>
      )}
    </div>
  );
};

export const FleetManager: React.FC = () => {
  const { cars, addCar, updateCar, deleteCar, uploadImage } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [uploading, setUploading] = useState(false);

  const galleryInputRef = useRef<HTMLInputElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const emptyCar: Car = {
    id: '',
    name: '',
    model: '',
    category: 'Elegance',
    pricePerDay: '',
    imageUrl: '',
    gallery: [],
    engine: '',
    zeroToSixty: '',
    topSpeed: '',
    seats: 2,
    features: [],
    description: { en: '', ar: '' },
    isVisible: true,
    isFeatured: false
  };

  const [formData, setFormData] = useState<Car>(emptyCar);

  const openAddModal = () => {
    setEditingCar(null);
    setFormData({ ...emptyCar, id: Date.now().toString() });
    setIsModalOpen(true);
  };

  const openEditModal = (car: Car) => {
    setEditingCar(car);
    setFormData(car);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Set Main Image URL to the first gallery image if available
    const finalData = {
      ...formData,
      imageUrl: formData.gallery.length > 0 ? formData.gallery[0] : ''
    };

    if (editingCar) {
      await updateCar(finalData);
    } else {
      await addCar(finalData);
    }
    setIsModalOpen(false);
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    setUploading(true);
    try {
      const files = Array.from(e.target.files);
      const uploadPromises = files.map(file => uploadImage(file, 'cars'));
      const urls = await Promise.all(uploadPromises);

      setFormData(prev => ({
        ...prev,
        gallery: [...prev.gallery, ...urls]
      }));
    } catch (error) {
      alert('Failed to upload gallery images');
    } finally {
      setUploading(false);
    }
  };

  const removeGalleryImage = (indexToRemove: number) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.filter((_, idx) => idx !== indexToRemove)
    }));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setFormData((prev) => {
        const oldIndex = prev.gallery.indexOf(active.id as string);
        const newIndex = prev.gallery.indexOf(over.id as string);

        return {
          ...prev,
          gallery: arrayMove(prev.gallery, oldIndex, newIndex),
        };
      });
    }
  };

  const handleFeatureChange = (idx: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[idx] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const handleStatusToggle = async (car: Car, field: 'isVisible' | 'isFeatured') => {
    try {
      const updatedCar = { ...car, [field]: !car[field] };
      await updateCar(updatedCar);
    } catch (error: any) {
      console.error("Toggle Error:", error);
      if (error.message?.includes('column') || error.code === '42703') {
        alert("Database Error: 'isVisible' or 'isFeatured' columns rely on a database update. Please run the SQL command provided.");
      } else {
        alert(`Failed to update status: ${error.message}`);
      }
    }
  };

  // AI Helpers
  const [generationColor, setGenerationColor] = useState('Black');

  // BRAND IDENTITY CONTEXT
  const VELO_SCENE_CONTEXT = "in a high-end, dark luxury showroom with glossy black reflective floors, warm ambient golden lighting, cinematic 8k resolution, sleek and modern atmosphere, photorealistic.";

  const generateDescription = (lang: 'en' | 'ar') => {
    const base = `Write a luxurious, high-end car description for a ${formData.name} ${formData.model}.`;
    return lang === 'en'
      ? `${base} Focus on performance, comfort, and prestige. Max 3 sentences. English.`
      : `${base} Focus on performance, comfort, and prestige. Max 3 sentences. Arabic.`;
  };

  const generateFeaturesPrompt = () => {
    return `List 4 key features (comma separated) for a ${formData.name} ${formData.model}. No numbering, just text. Example: Starlight Headliner, Massage Seats, V12 Engine`;
  };

  const generateSpecsPrompt = () => {
    return `Return a valid JSON object (no markdown formatting, just raw JSON) for a ${formData.name} ${formData.model} with these exact keys: "engine" (string), "zeroToSixty" (string, e.g. "3.5s"), "topSpeed" (string, e.g. "250 km/h"), "seats" (number).`;
  };

  const generateImagePrompt = () => {
    // Smart Missing Angle Logic
    const currentCount = formData.gallery.length;
    const angles = [
      `Front 3/4 view of a ${generationColor} ${formData.name} ${formData.model} with license plate clearly reading "VELO LUXURY"`,
      `Side profile view of a ${generationColor} ${formData.name} ${formData.model}`,
      `Rear 3/4 view of a ${generationColor} ${formData.name} ${formData.model} with license plate clearly reading "VELO LUXURY"`,
      `Interior driver seat view of a ${generationColor} ${formData.name} ${formData.model}, showing steering wheel and dashboard details`
    ];

    // If we have less than 4 images, generate the next specific angle contextually
    if (currentCount < 4) {
      return `${angles[currentCount]}, ${VELO_SCENE_CONTEXT}`;
    }

    // Fallback for extra images
    return `Cinematic, photorealistic outdoor shot of a ${generationColor} ${formData.name} ${formData.model} luxury car, majestic lighting, 8k resolution, automotive photography style, shallow depth of field.`;
  };

  // BATCH GENERATION
  const handleGenerateGallerySet = async () => {
    if (!formData.name) return alert("Please enter Car Name first.");

    setUploading(true); // Reuse uploading state
    try {
      const angles = [
        `Front 3/4 view of a ${generationColor} ${formData.name} ${formData.model} with license plate reading "VELO LUXURY"`,
        `Side profile view of a ${generationColor} ${formData.name} ${formData.model}`,
        `Rear 3/4 view of a ${generationColor} ${formData.name} ${formData.model} with license plate reading "VELO LUXURY"`,
        `Interior driver seat view of a ${generationColor} ${formData.name} ${formData.model}, showing steering wheel and dashboard details`
      ];

      // We need to import generateImage from gemini directly to loop here
      const { generateImage } = await import('../../lib/gemini');

      const uploadPromises = angles.map(async (angleDescription) => {
        const fullPrompt = `${angleDescription}, ${VELO_SCENE_CONTEXT}`;
        const blob = await generateImage(fullPrompt);
        const fileName = `ai-gen-${Date.now()}-${Math.random().toString(36).substring(7)}.png`;
        const file = new File([blob], fileName, { type: 'image/png' });
        return uploadImage(file, 'cars');
      });

      const newUrls = await Promise.all(uploadPromises);

      setFormData(prev => ({
        ...prev,
        gallery: [...prev.gallery, ...newUrls]
      }));

    } catch (error) {
      console.error(error);
      alert(`Failed to generate gallery set: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-white">Fleet Manager</h1>
        <Button onClick={openAddModal} className="flex items-center gap-2">
          <Plus size={18} /> Add Vehicle
        </Button>
      </div>

      {/* Car List */}
      <div className="grid grid-cols-1 gap-4">
        {cars.map(car => (
          <div key={car.id} className="bg-dark-800 p-4 rounded-lg border border-white/5 flex items-center gap-6 hover:border-gold-500/30 transition-colors">
            <img src={car.imageUrl} alt={car.name} className="w-32 h-20 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="text-xl text-white font-bold">{car.name}</h3>
              <p className="text-neutral-400">{car.model}</p>
              <span className="text-gold-500 text-sm font-medium">{car.category}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => openEditModal(car)}
                className="p-2 hover:bg-blue-500/10 text-blue-400 rounded-full transition-colors mr-1"
                title="Edit Vehicle"
              >
                <Edit2 size={18} />
              </button>

              <ActionMenu
                car={car}
                onToggleStatus={handleStatusToggle}
                onDelete={deleteCar}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-dark-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-white/10 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-white font-serif">{editingCar ? 'Edit Vehicle' : 'Add New Vehicle'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-neutral-400 hover:text-white"><X /></button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 flex gap-8 p-4 bg-dark-900 border border-white/5 rounded">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.isVisible ? 'bg-green-500 border-green-500' : 'border-neutral-500'}`}>
                      {formData.isVisible && <Eye size={12} className="text-black" />}
                    </div>
                    <input type="checkbox" checked={formData.isVisible} onChange={e => setFormData({ ...formData, isVisible: e.target.checked })} className="hidden" />
                    <span className="text-white text-sm group-hover:text-green-400 transition-colors">Visible on Website</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.isFeatured ? 'bg-gold-500 border-gold-500' : 'border-neutral-500'}`}>
                      {formData.isFeatured && <Star size={12} className="text-black" fill="currentColor" />}
                    </div>
                    <input type="checkbox" checked={formData.isFeatured} onChange={e => setFormData({ ...formData, isFeatured: e.target.checked })} className="hidden" />
                    <span className="text-white text-sm group-hover:text-gold-500 transition-colors">Featured Car</span>
                  </label>
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm mb-1">Name</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white" />
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm mb-1">Model</label>
                  <input type="text" required value={formData.model} onChange={e => setFormData({ ...formData, model: e.target.value })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white" />
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm mb-1">Category</label>
                  <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value as CarCategory })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white">
                    <option value="Elegance">Elegance</option>
                    <option value="Executive">Executive</option>
                    <option value="Adrenaline">Adrenaline</option>
                    <option value="Majestic">Majestic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm mb-1">Price Per Day</label>
                  <input type="text" required value={formData.pricePerDay} onChange={e => setFormData({ ...formData, pricePerDay: e.target.value })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white" />
                </div>

                {/* Specs */}
                <div className="md:col-span-2 flex items-center justify-between border-b border-white/10 pb-2 mt-2">
                  <h3 className="text-white text-lg font-serif">Technical Specifications</h3>
                  <SmartTextButton
                    label="Auto-Fill Specs"
                    prompt={generateSpecsPrompt()}
                    onGenerate={(text) => {
                      try {
                        const cleanText = text.replace(/```json|```/g, '').trim();
                        const data = JSON.parse(cleanText);
                        setFormData(prev => ({
                          ...prev,
                          engine: data.engine || prev.engine,
                          zeroToSixty: data.zeroToSixty || prev.zeroToSixty,
                          topSpeed: data.topSpeed || prev.topSpeed,
                          seats: data.seats || prev.seats
                        }));
                      } catch (e) {
                        alert("Failed to parse specs data. Please try again.");
                        console.error(e);
                      }
                    }}
                    disabled={!formData.name || !formData.model}
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm mb-1">Engine</label>
                  <input type="text" required value={formData.engine} onChange={e => setFormData({ ...formData, engine: e.target.value })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white" />
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm mb-1">0-100 km/h</label>
                  <input type="text" required value={formData.zeroToSixty} onChange={e => setFormData({ ...formData, zeroToSixty: e.target.value })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white" />
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm mb-1">Top Speed</label>
                  <input type="text" required value={formData.topSpeed} onChange={e => setFormData({ ...formData, topSpeed: e.target.value })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white" />
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm mb-1">Seats</label>
                  <input type="number" required value={formData.seats} onChange={e => setFormData({ ...formData, seats: parseInt(e.target.value) })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white" />
                </div>
              </div>

              {/* Descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-neutral-400 text-sm">Description (EN)</label>
                    <SmartTextButton
                      prompt={generateDescription('en')}
                      onGenerate={(text) => setFormData(prev => ({ ...prev, description: { ...prev.description, en: text } }))}
                      disabled={!formData.name || !formData.model}
                    />
                  </div>
                  <textarea rows={3} value={formData.description.en} onChange={e => setFormData({ ...formData, description: { ...formData.description, en: e.target.value } })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white"></textarea>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-neutral-400 text-sm">Description (AR)</label>
                    <SmartTextButton
                      prompt={generateDescription('ar')}
                      onGenerate={(text) => setFormData(prev => ({ ...prev, description: { ...prev.description, ar: text } }))}
                      disabled={!formData.name || !formData.model}
                    />
                  </div>
                  <textarea rows={3} dir="rtl" value={formData.description.ar} onChange={e => setFormData({ ...formData, description: { ...formData.description, ar: e.target.value } })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white"></textarea>
                </div>
              </div>

              {/* GALLERY UPLOAD & DND */}
              <div>
                <label className="block text-neutral-400 text-sm mb-2">Gallery Images (Drag to Reorder - First is Main)</label>

                {/* AI Gallery Controls */}
                <div className="bg-dark-900 border border-gold-500/20 rounded p-3 mb-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gold-500 text-xs font-bold uppercase tracking-wider">AI Generation</span>
                    <select
                      value={generationColor}
                      onChange={(e) => setGenerationColor(e.target.value)}
                      className="bg-dark-800 border border-white/10 rounded px-2 py-1 text-xs text-white w-32 focus:border-gold-500 outline-none appearance-none cursor-pointer"
                    >
                      <option value="Onyx Black">Onyx Black</option>
                      <option value="Crystal White">Crystal White</option>
                      <option value="Silver Metallic">Silver Metallic</option>
                      <option value="Midnight Blue">Midnight Blue</option>
                      <option value="Emerald Green">Emerald Green</option>
                      <option value="Gunmetal Grey">Gunmetal Grey</option>
                      <option value="Burgundy Red">Burgundy Red</option>
                      <option value="Gold">Gold</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={handleGenerateGallerySet}
                    disabled={uploading || !formData.name || !formData.model || !generationColor}
                    className={`text-black text-xs font-bold px-3 py-1.5 rounded flex items-center gap-2 transition-colors shadow-lg ${!formData.name || !formData.model || !generationColor
                      ? 'bg-neutral-600 cursor-not-allowed text-neutral-400'
                      : 'bg-gold-500 hover:bg-gold-400 shadow-gold-500/10'
                      }`}
                    title={!formData.name || !formData.model || !generationColor ? "Enter Name, Model, and Color first" : "Generate Gallery"}
                  >
                    {uploading ? <Loader2 className="animate-spin" size={14} /> : <Star size={14} fill={!formData.name || !formData.model || !generationColor ? "currentColor" : "black"} />}
                    Generate Full Gallery Set (4 Angles)
                  </button>
                  <span className="text-[10px] text-neutral-500 hidden md:inline">Generates Front, Side, Rear, Interior angles with Velo identity.</span>
                </div>

                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={formData.gallery}
                    strategy={rectSortingStrategy}
                  >
                    <div className="grid grid-cols-4 gap-2 mb-2">
                      {formData.gallery.map((url, idx) => (
                        <SortableImage
                          key={url}
                          url={url}
                          index={idx}
                          onRemove={() => removeGalleryImage(idx)}
                        />
                      ))}

                      <button
                        type="button"
                        onClick={() => galleryInputRef.current?.click()}
                        className="aspect-video bg-dark-900 border border-white/10 border-dashed rounded flex flex-col items-center justify-center text-neutral-500 hover:text-gold-500 hover:border-gold-500 transition-colors"
                        disabled={uploading}
                      >
                        {uploading ? <Loader2 className="animate-spin mb-1" size={20} /> : <Plus className="mb-1" size={20} />}
                        <span className="text-[10px] uppercase tracking-wider">Add Photos</span>
                      </button>
                    </div>
                  </SortableContext>
                </DndContext>

                <div className="flex gap-2 items-center mt-2 justify-end">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    ref={galleryInputRef}
                    onChange={handleGalleryUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => galleryInputRef.current?.click()}
                    className="text-xs text-neutral-500 hover:text-white underline"
                  >
                    Upload manual images
                  </button>
                  <span className="text-neutral-600">|</span>
                  <SmartImageButton
                    prompt={generateImagePrompt()}
                    bucket="cars"
                    label="Gen Single Image"
                    onImageGenerated={(url) => setFormData(prev => ({ ...prev, gallery: [...prev.gallery, url] }))}
                    disabled={!formData.name || !formData.model || !generationColor}
                  />
                </div>
              </div>

              {/* Features */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-neutral-400 text-sm">Features</label>
                  <SmartTextButton
                    label="Auto-Fill Features"
                    prompt={generateFeaturesPrompt()}
                    onGenerate={(text) => {
                      const feats = text.split(',').map(s => s.trim()).filter(Boolean);
                      setFormData(prev => ({ ...prev, features: feats }));
                    }}
                    disabled={!formData.name || !formData.model}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {formData.features.map((feat, idx) => (
                    <input key={idx} type="text" value={feat} onChange={e => handleFeatureChange(idx, e.target.value)} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white" />
                  ))}
                  <button type="button" onClick={() => setFormData({ ...formData, features: [...formData.features, ''] })} className="text-gold-500 text-sm text-left">+ Add Feature</button>
                </div>
              </div>

              <div className="flex justify-end gap-4 border-t border-white/10 pt-6">
                <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button type="submit" disabled={uploading}>
                  {uploading ? 'Uploading...' : (editingCar ? 'Update Vehicle' : 'Create Vehicle')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};
