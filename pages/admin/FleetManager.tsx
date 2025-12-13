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
      const uploadPromises = files.map(file => uploadImage(file));
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
    const updatedCar = { ...car, [field]: !car[field] };
    await updateCar(updatedCar);
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
                  <label className="block text-neutral-400 text-sm mb-1">Description (EN)</label>
                  <textarea rows={3} value={formData.description.en} onChange={e => setFormData({ ...formData, description: { ...formData.description, en: e.target.value } })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white"></textarea>
                </div>
                <div>
                  <label className="block text-neutral-400 text-sm mb-1">Description (AR)</label>
                  <textarea rows={3} dir="rtl" value={formData.description.ar} onChange={e => setFormData({ ...formData, description: { ...formData.description, ar: e.target.value } })} className="w-full bg-dark-900 border border-white/10 rounded p-2 text-white"></textarea>
                </div>
              </div>

              {/* GALLERY UPLOAD & DND */}
              <div>
                <label className="block text-neutral-400 text-sm mb-2">Gallery Images (Drag to Reorder - First is Main)</label>

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

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  ref={galleryInputRef}
                  onChange={handleGalleryUpload}
                  className="hidden"
                />
              </div>

              {/* Features */}
              <div>
                <label className="block text-neutral-400 text-sm mb-2">Features</label>
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
