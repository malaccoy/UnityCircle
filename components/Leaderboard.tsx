import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const leaders = [
    { name: 'Ana Souza', points: 1250, cycles: 15, avatar: 'https://picsum.photos/seed/ana/100', badge: 'gold' },
    { name: 'Pedro Lima', points: 980, cycles: 12, avatar: 'https://picsum.photos/seed/pedro/100', badge: 'silver' },
    { name: 'Julia Reis', points: 850, cycles: 10, avatar: 'https://picsum.photos/seed/julia/100', badge: 'bronze' },
    { name: 'Roberto K.', points: 720, cycles: 8, avatar: 'https://picsum.photos/seed/rob/100', badge: 'bronze' },
];

export const Leaderboard: React.FC = () => {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Trophy size={18} className="text-amber-500" />
                    Destaques do Mês
                </h3>
                <button className="text-xs text-brand-600 font-medium hover:text-brand-700">Ver Todos</button>
            </div>
            <div className="divide-y divide-slate-50">
                {leaders.map((leader, index) => (
                    <div key={index} className="p-4 flex items-center gap-3 hover:bg-slate-50 transition-colors cursor-pointer">
                        <div className="font-bold text-slate-300 w-4">{index + 1}</div>
                        <img src={leader.avatar} alt={leader.name} className="w-10 h-10 rounded-full object-cover" />
                        <div className="flex-1">
                            <h4 className="text-sm font-medium text-slate-900">{leader.name}</h4>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span className="flex items-center gap-1"><Star size={10} className="text-amber-400 fill-amber-400" /> {leader.cycles} Ciclos</span>
                            </div>
                        </div>
                        {leader.badge === 'gold' && <Award size={20} className="text-amber-400" />}
                        {leader.badge === 'silver' && <Award size={20} className="text-slate-400" />}
                        {leader.badge === 'bronze' && <Award size={20} className="text-amber-700" />}
                    </div>
                ))}
            </div>
            <div className="p-3 bg-slate-50 text-center">
                <p className="text-xs text-slate-500">Complete ciclos para subir no ranking</p>
            </div>
        </div>
    );
};