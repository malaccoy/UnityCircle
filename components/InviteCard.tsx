import React from 'react';
import { Share2, Copy, QrCode } from 'lucide-react';

export const InviteCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-brand-900 to-brand-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between h-full">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <Share2 size={20} className="text-brand-200" />
            </div>
            <h3 className="font-bold text-lg">Convide e Acelere</h3>
        </div>
        <p className="text-brand-100 text-sm mb-6 leading-relaxed">
            Traga amigos de confiança para o seu círculo e reduza o tempo de espera em até 50%.
        </p>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
        <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg">
                <QrCode size={40} className="text-slate-900" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-xs text-brand-200 mb-1 uppercase tracking-wide">Seu Link de Convite</p>
                <div className="flex items-center gap-2 bg-brand-950/30 rounded p-1.5 border border-white/10">
                    <span className="text-xs text-white truncate font-mono">unity.app/c/carlos-m8</span>
                    <button className="p-1 hover:bg-white/20 rounded transition-colors">
                        <Copy size={12} />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};