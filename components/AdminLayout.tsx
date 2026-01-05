
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Logo } from './Logo';
import { LayoutDashboard, Car, HelpCircle, Phone, LogOut, ExternalLink, BookOpen, Briefcase } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { isAdmin, logout } = useData();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Overview' },
    { path: '/admin/fleet', icon: Car, label: 'Fleet Manager' },
    { path: '/admin/journal', icon: BookOpen, label: 'Journal Manager' },
    { path: '/admin/services', icon: Briefcase, label: 'Services Manager' },
    { path: '/admin/faqs', icon: HelpCircle, label: 'FAQ Manager' },
    { path: '/admin/contact', icon: Phone, label: 'Contact Info' },
  ];

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col md:flex-row text-white font-sans">

      {/* --- MOBILE HEADER (Visible only on mobile) --- */}
      <div className="md:hidden bg-dark-800 border-b border-white/5 p-4 flex justify-between items-center sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <Logo size="sm" />
          <span className="text-[10px] text-gold-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">Admin</span>
        </div>
        <Link to="/" className="text-neutral-400 hover:text-white">
          <ExternalLink size={18} />
        </Link>
      </div>

      {/* --- DESKTOP SIDEBAR (Hidden on mobile) --- */}
      <div className="hidden md:flex w-64 bg-dark-800 border-r border-white/5 flex-col fixed h-full z-20">
        <div className="p-6 border-b border-white/5 flex flex-col items-center">
          <Logo size="md" />
          <span className="text-xs text-gold-500 uppercase tracking-widest mt-2">Admin Panel</span>
        </div>

        <nav className="flex-grow py-6">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-6 py-3 transition-colors ${isActive ? 'bg-gold-500/10 text-gold-500 border-r-2 border-gold-500' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}
                  >
                    <Icon size={20} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 border-t border-white/5 space-y-3">
          <Link to="/" className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors text-sm">
            <ExternalLink size={18} /> View Website
          </Link>
          <button
            onClick={() => { logout(); navigate('/admin'); }}
            className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors text-sm w-full"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-grow ml-0 md:ml-64 p-4 pb-24 md:p-8 bg-dark-900">
        {children}
      </div>

      {/* --- MOBILE BOTTOM NAVIGATION (Hidden on Desktop) --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-dark-800 border-t border-white/10 z-30 px-6 py-3 safe-area-pb">
        <ul className="flex justify-between items-center">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex flex-col items-center gap-1 ${isActive ? 'text-gold-500' : 'text-neutral-500'}`}
                >
                  <Icon size={20} />
                  <span className="text-[10px] font-medium">{item.label.split(' ')[0]}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => { logout(); navigate('/admin'); }}
              className="flex flex-col items-center gap-1 text-red-400 opacity-80"
            >
              <LogOut size={20} />
              <span className="text-[10px] font-medium">Logout</span>
            </button>
          </li>
        </ul>
      </div>

    </div>
  );
};
