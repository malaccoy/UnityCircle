import React from 'react';
import { DonationGroup } from '../types';
import { ArrowLeft, Clock, ShieldCheck, Users, Banknote, AlertCircle, CheckCircle } from 'lucide-react';

interface GroupDetailsProps {
  group: DonationGroup;
  onBack: () => void;
}

export const GroupDetails: React.FC<GroupDetailsProps> = ({ group, onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-300">
      {/* Navigation Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
            <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                <span>Painel</span>
                <span>/</span>
                <span>Meus Grupos</span>
                <span>/</span>
                <span className="text-brand-600 font-medium">{group.id}</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{group.name}</h1>
        </div>
        <div className="hidden md:block text-right">
             <div className="text-sm text-slate-500">Valor do Ciclo</div>
             <div className="text-2xl font-bold text-brand-600">R$ {group.value.toLocaleString('pt-BR')}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Left Column */}
        <div className="lg:col-span-2 space-y-6">
            
            {/* Status & Timeline Card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Clock className="text-brand-500" size={20} />
                    Linha do Tempo do Ciclo
                </h2>
                
                {/* Visual Timeline */}
                <div className="relative pl-8 border-l-2 border-slate-100 space-y-8">
                    <div className="relative">
                        <div className="absolute -left-[39px] bg-emerald-500 rounded-full p-1 border-4 border-white shadow-sm">
                            <CheckCircle size={14} className="text-white" />
                        </div>
                        <h4 className="font-bold text-slate-900">Entrada no Grupo</h4>
                        <p className="text-sm text-slate-500">Concluído em 12 de Jan</p>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute -left-[39px] bg-brand-600 rounded-full p-1 border-4 border-brand-50 shadow-sm ring-2 ring-brand-100">
                            <Banknote size={14} className="text-white" />
                        </div>
                        <h4 className="font-bold text-brand-700">Realizar Doação</h4>
                        <p className="text-sm text-slate-600 mb-3">Sua doação de R$ {group.value} está pendente para o líder do ciclo.</p>
                        <button className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200">
                            Realizar Pagamento
                        </button>
                    </div>

                    <div className="relative opacity-50">
                        <div className="absolute -left-[39px] bg-slate-200 rounded-full p-1 border-4 border-white">
                            <Users size={14} className="text-slate-500" />
                        </div>
                        <h4 className="font-bold text-slate-900">Convidar 2 Amigos</h4>
                        <p className="text-sm text-slate-500">Próxima etapa</p>
                    </div>
                </div>
            </div>

            {/* Participants Table */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-slate-900">Participantes</h2>
                    <span className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">8 Slots Totais</span>
                </div>
                <table className="min-w-full divide-y divide-slate-100">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Membro</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Posição</th>
                            <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-100">
                        {[1,2,3,4].map((i) => (
                            <tr key={i} className="hover:bg-slate-50/50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden mr-3">
                                            <img src={`https://picsum.photos/seed/u${i}/100`} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="text-sm font-medium text-slate-900">Usuário {i}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                    {i === 1 ? 'Recebedor (Centro)' : 'Doador (Borda)'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    {i === 1 ? (
                                        <span className="px-2 py-1 text-xs font-bold text-emerald-600 bg-emerald-50 rounded-full border border-emerald-100">Qualificado</span>
                                    ) : (
                                        <span className="px-2 py-1 text-xs font-bold text-amber-600 bg-amber-50 rounded-full border border-amber-100">Pendente</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* Sidebar: Right Column */}
        <div className="space-y-6">
            {/* Rules Card */}
            <div className="bg-indigo-900 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 relative z-10">
                    <ShieldCheck size={20} className="text-indigo-300" />
                    Regras do Grupo
                </h3>
                <ul className="space-y-3 text-indigo-100 text-sm relative z-10">
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5"></span>
                        <span>Doações devem ser confirmadas em até 24h.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5"></span>
                        <span>Convide apenas pessoas de confiança.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5"></span>
                        <span>Respeito e transparência são obrigatórios.</span>
                    </li>
                </ul>
            </div>

            {/* Help Info */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card">
                <div className="flex items-start gap-3">
                    <AlertCircle className="text-slate-400 mt-0.5" size={20} />
                    <div>
                        <h4 className="text-sm font-bold text-slate-900">Precisa de ajuda?</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            Se houver problemas com um membro ou transação, contate o suporte imediatamente informando o ID #{group.id}.
                        </p>
                        <button className="mt-3 text-xs font-bold text-brand-600 hover:text-brand-800">
                            Abrir Chamado
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};