
import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useData } from '../../context/DataContext';
import { Car, LayoutDashboard, Key, Star, MessageSquare, Plus, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DashboardOverview: React.FC = () => {
    const { cars, faqs } = useData();

    const totalCars = cars.length;
    const activeCars = cars.filter(c => c.isVisible).length;
    const featuredCars = cars.filter(c => c.isFeatured).length;
    const totalFaqs = faqs.length;

    const stats = [
        { label: 'Total Vehicles', value: totalCars, icon: Car, color: 'text-blue-400', bg: 'bg-blue-400/10' },
        { label: 'Active on Site', value: activeCars, icon: Key, color: 'text-green-400', bg: 'bg-green-400/10' },
        { label: 'Featured Cars', value: featuredCars, icon: Star, color: 'text-gold-500', bg: 'bg-gold-500/10' },
        { label: 'FAQ Items', value: totalFaqs, icon: MessageSquare, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    ];

    const recentCars = cars.slice(0, 3);

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-serif text-white mb-2">Dashboard</h1>
                <p className="text-neutral-400">Welcome back, Admin. Here is what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-dark-800 p-6 rounded-xl border border-white/5 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-neutral-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Quick Actions */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-xl text-white font-serif">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/admin/hero" className="bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-gold-500/50 transition-colors group flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                    <Star size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Hero Section</h3>
                                    <p className="text-sm text-neutral-400">Update homepage banner</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/admin/fleet" className="bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-gold-500/50 transition-colors group flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <Plus size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Manage Fleet</h3>
                                    <p className="text-sm text-neutral-400">Add or edit vehicles</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/admin/contact" className="bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-gold-500/50 transition-colors group flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Update Contact</h3>
                                    <p className="text-sm text-neutral-400">Change phone or email</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <h2 className="text-xl text-white font-serif mt-8">Recent Inventory</h2>
                    <div className="space-y-3">
                        {recentCars.map(car => (
                            <div key={car.id} className="bg-dark-800 p-4 rounded-lg border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img src={car.imageUrl} alt={car.name} className="w-16 h-10 object-cover rounded" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{car.name}</h4>
                                        <p className="text-xs text-neutral-500">{car.model}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    {car.isVisible ? <span className="text-green-400 bg-green-400/10 px-2 py-1 rounded">Active</span> : <span className="text-red-400 bg-red-400/10 px-2 py-1 rounded">Hidden</span>}
                                    {car.isFeatured && <span className="text-gold-500 bg-gold-500/10 px-2 py-1 rounded">Featured</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Status / Info */}
                <div className="bg-dark-800 p-6 rounded-xl border border-white/5 h-fit">
                    <h2 className="text-xl text-white font-serif mb-4">System Status</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-neutral-400 text-sm">Website Status</span>
                            <span className="text-green-400 text-sm font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Online</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-neutral-400 text-sm">Database</span>
                            <span className="text-green-400 text-sm font-bold">Connected</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-neutral-400 text-sm">Last Backup</span>
                            <span className="text-white text-sm">Automated</span>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                        <h4 className="text-blue-400 font-bold mb-1 text-sm">Admin Tip</h4>
                        <p className="text-neutral-400 text-xs leading-relaxed">
                            Remember to keep your "Featured" list small (3-5 cars) to ensure the homepage loads quickly and looks curated.
                        </p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};
