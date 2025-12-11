import React, { useState } from 'react';
import { Info, X } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 p-4 mb-8 rounded-xl relative animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
          <Info className="h-5 w-5 text-brand-600" aria-hidden="true" />
        </div>
        <div className="flex-1 pt-1">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            Aviso de Transparência
            <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 text-[10px] uppercase font-bold tracking-wide">Institucional</span>
          </h3>
          <div className="mt-2 text-sm text-slate-600 leading-relaxed max-w-4xl">
            <p>
              A UnityCircle é uma plataforma de gestão para grupos de <strong>ajuda mútua voluntária</strong>. 
              Não operamos como instituição financeira, nem garantimos retornos. A participação é baseada em confiança mútua e doações espontâneas.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          type="button"
          className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <span className="sr-only">Fechar</span>
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};