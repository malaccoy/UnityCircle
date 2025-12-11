import React from 'react';
import { Calendar, CheckCircle2, Circle, ArrowRight } from 'lucide-react';

export const NextStepsCard: React.FC = () => {
  const steps = [
    { label: 'Entrada', status: 'completed', date: '12 Jan' },
    { label: 'Doador', status: 'current', date: 'Hoje' },
    { label: 'Recebedor', status: 'upcoming', date: 'Est. 15 Fev' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
            Próximos Passos
        </h3>
        <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full font-bold border border-amber-100">
            Fase 2 de 3
        </span>
      </div>

      <div className="relative flex-1 flex flex-col justify-center">
        {/* Progress Line Background */}
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
        <div className="absolute top-1/2 left-4 w-1/3 h-0.5 bg-emerald-500 -translate-y-1/2 z-0"></div>

        <div className="relative z-10 flex justify-between px-2">
            {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 ${
                        step.status === 'completed' ? 'bg-emerald-500 border-emerald-100 text-white' :
                        step.status === 'current' ? 'bg-white border-brand-500 text-brand-600 ring-4 ring-brand-50' :
                        'bg-white border-slate-200 text-slate-300'
                    }`}>
                        {step.status === 'completed' ? <CheckCircle2 size={14} /> : 
                         step.status === 'current' ? <div className="w-2.5 h-2.5 rounded-full bg-brand-600 animate-pulse" /> :
                         <Circle size={14} />}
                    </div>
                    <div className="mt-3 text-center">
                        <p className={`text-xs font-bold ${step.status === 'current' ? 'text-brand-700' : 'text-slate-600'}`}>{step.label}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5 font-medium">{step.date}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-50">
        <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Estimativa de Recebimento</span>
            <span className="font-bold text-slate-900">~ 15 Fevereiro</span>
        </div>
      </div>
    </div>
  );
};