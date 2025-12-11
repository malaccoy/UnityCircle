import React from 'react';
import { LayoutGrid, Users, History, Settings, HelpCircle, LogOut, Disc } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: LayoutGrid, label: 'Painel Principal', active: true },
    { icon: Users, label: 'Meus Grupos', active: false },
    { icon: History, label: 'Histórico', active: false },
    { icon: Settings, label: 'Configurações', active: false },
  ];

  return (
    <aside className="hidden md:flex flex-col w-72 h-screen bg-white border-r border-slate-100 fixed left-0 top-0 z-50 shadow-sm">
      <div className="p-8 flex items-center gap-3">
        <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-600 rounded-full opacity-10"></div>
            <div className="absolute inset-2 bg-brand-600 rounded-full opacity-20"></div>
            <Disc className="text-brand-700 w-6 h-6" />
        </div>
        <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900 tracking-tight leading-none">UnityCircle</span>
            <span className="text-[10px] font-semibold text-brand-600 tracking-widest uppercase mt-1">Plataforma Premium</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto mt-4">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-4">Menu Principal</div>
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
              item.active 
                ? 'bg-brand-50 text-brand-700 shadow-sm border border-brand-100' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
            }`}
          >
            <item.icon size={20} className={item.active ? "text-brand-600" : "text-slate-400 group-hover:text-slate-600"} />
            {item.label}
          </button>
        ))}

        <div className="mt-10 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-4">Suporte & Ajuda</div>
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
          <HelpCircle size={20} className="text-slate-400" />
          Central de Ajuda
        </button>
      </nav>

      <div className="p-6 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors">
          <LogOut size={20} />
          Sair da Conta
        </button>
      </div>
    </aside>
  );
};