import React from 'react';
import { DonationGroup } from '../types';
import { Users, ChevronRight, Layers, ArrowRight } from 'lucide-react';

interface GroupCardProps {
  group: DonationGroup;
  onClick: (group: DonationGroup) => void;
}

export const GroupCard: React.FC<GroupCardProps> = ({ group, onClick }) => {
  const isForming = group.status === 'forming';
  const isCompleted = group.status === 'completed';
  
  const totalSlots = 8;
  const filledSlots = Math.floor((group.progress / 100) * totalSlots);

  // Status Badge Logic
  let statusBadge;
  if (isForming) {
    statusBadge = <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200 shadow-sm">Em Formação</span>;
  } else if (isCompleted) {
    statusBadge = <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">Concluído</span>;
  } else {
    statusBadge = <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-accent-500/10 text-accent-600 border border-accent-500/20 shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2 animate-pulse"></span>
      Ativo
    </span>;
  }

  return (
    <div 
      onClick={() => onClick(group)}
      className="bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden group flex flex-col h-full"
    >
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          {statusBadge}
          <div className="flex flex-col items-end">
             <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Valor</span>
             <span className="text-lg font-bold text-slate-900">R$ {group.value.toLocaleString('pt-BR')}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">{group.name}</h3>
        <p className="text-sm text-slate-500 mb-6 flex items-center gap-1">
           <Layers size={14} /> Nível {group.level} • ID: #{group.id.substring(0,6)}
        </p>

        {/* Custom Progress Visual */}
        <div className="relative pt-2">
            <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-2">
                <span>Progresso do Ciclo</span>
                <span>{group.progress}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out relative ${isForming ? 'bg-blue-500' : 'bg-gradient-to-r from-brand-500 to-accent-500'}`}
                    style={{ width: `${group.progress}%` }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-[shimmer_2s_infinite]"></div>
                </div>
            </div>
        </div>

        {/* Participants Avatars */}
        <div className="mt-6 flex items-center justify-between">
            <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                   <div key={i} className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center overflow-hidden bg-slate-100 shadow-sm ${i===0 ? 'z-30' : i===1 ? 'z-20' : 'z-10'}`}>
                      <img src={`https://picsum.photos/seed/${group.id}${i}/100`} className="w-full h-full object-cover" />
                   </div>
                ))}
                {totalSlots > 3 && (
                   <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-500 z-0">
                      +{totalSlots - 3}
                   </div>
                )}
            </div>
            <div className="text-xs text-slate-500 font-medium bg-slate-50 px-3 py-1.5 rounded-lg">
                {filledSlots}/{totalSlots} Membros
            </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="bg-slate-50/50 p-4 border-t border-slate-100 flex justify-end">
         <span className="text-sm font-bold text-brand-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
            Gerenciar Ciclo <ArrowRight size={16} />
         </span>
      </div>
    </div>
  );
};