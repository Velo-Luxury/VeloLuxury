
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { Lock, User } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useData();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { success, error: loginError } = await login(username, password);
      if (success) {
        navigate('/admin/dashboard');
      } else {
        setError(loginError || 'Invalid credentials or connection error.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-dark-800 p-8 rounded-2xl border border-white/5 shadow-2xl">
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>
        <h2 className="text-2xl text-white font-serif text-center mb-2">Admin Portal</h2>
        <p className="text-neutral-500 text-center text-sm mb-8">Authenticate via Supabase</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-neutral-400 text-sm mb-2">Username / Email</label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors pl-10"
                placeholder="Enter username"
                disabled={isLoading}
              />
              <User className="absolute left-3 top-3.5 text-neutral-500" size={18} />
            </div>
          </div>

          <div>
            <label className="block text-neutral-400 text-sm mb-2">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors pl-10"
                placeholder="Enter password"
                disabled={isLoading}
              />
              <Lock className="absolute left-3 top-3.5 text-neutral-500" size={18} />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? 'Authenticating...' : 'Login'}
          </Button>

          <p className="text-xs text-neutral-600 text-center">
            Enter your assigned credentials to access the dashboard.
          </p>
        </form>
      </div>
    </div>
  );
};
