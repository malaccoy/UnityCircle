import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { User, UserRank } from '../types';

const mockUser: User = {
  id: 'u1',
  name: 'Carlos Mendes',
  rank: UserRank.GOLD,
  cyclesCompleted: 12,
  avatarUrl: 'https://picsum.photos/seed/user1/100',
  joinDate: '2023-01-15'
};

export const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
      {/* Mobile Menu Trigger */}
      <button className="md:hidden p-2 text-slate-600">
        <Menu size={24} />
      </button>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-96 border border-transparent focus-within:border-brand-300 focus-within:bg-white transition-all">
        <Search size={18} className="text-slate-400 mr-2" />
        <input 
          type="text" 
          placeholder="Buscar grupos ou participantes..." 
          className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200 hidden md:block"></div>

        <div className="flex items-center gap-3 pl-2">
          <div className="hidden md:block text-right">
            <p className="text-sm font-semibold text-slate-900 leading-none">{mockUser.name}</p>
            <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-xs text-brand-600 font-medium bg-brand-50 px-1.5 py-0.5 rounded">{mockUser.rank}</span>
            </div>
          </div>
          <div className="relative">
            <img 
              src={mockUser.avatarUrl} 
              alt={mockUser.name} 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" 
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};