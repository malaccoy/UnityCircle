import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Disclaimer } from './components/Disclaimer';
import { StatsOverview } from './components/StatsOverview';
import { GroupCard } from './components/GroupCard';
import { Leaderboard } from './components/Leaderboard';
import { InviteCard } from './components/InviteCard';
import { NextStepsCard } from './components/NextStepsCard';
import { GroupDetails } from './components/GroupDetails';
import { DonationGroup } from './types';
import { PlusCircle, Sparkles } from 'lucide-react';

// Mock Data
const activeGroups: DonationGroup[] = [
  {
    id: 'g1023',
    name: 'Ciclo Solidário Alpha',
    level: 1,
    value: 50,
    progress: 75,
    status: 'active',
    participants: []
  },
  {
    id: 'g1024',
    name: 'Grupo Beta - Expansão',
    level: 2,
    value: 100,
    progress: 40,
    status: 'forming',
    participants: []
  },
  {
    id: 'g1020',
    name: 'Elite Circle',
    level: 3,
    value: 500,
    progress: 90,
    status: 'active',
    participants: []
  }
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'details'>('dashboard');
  const [selectedGroup, setSelectedGroup] = useState<DonationGroup | null>(null);

  const handleGroupClick = (group: DonationGroup) => {
    setSelectedGroup(group);
    setCurrentView('details');
  };

  const handleBackToDashboard = () => {
    setSelectedGroup(null);
    setCurrentView('dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      {/* Navigation */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-72 transition-all duration-300">
        <Header />

        {/* Scrollable Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            
            {/* Disclaimer Section - Always visible but styled cleaner */}
            <Disclaimer />

            {/* View Switching */}
            {currentView === 'dashboard' ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Dashboard Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Painel de Controle</h1>
                    <p className="text-slate-500 mt-2 font-medium">Visão geral do seu progresso e crescimento.</p>
                  </div>
                  <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white rounded-xl hover:from-brand-700 hover:to-brand-600 transition-all shadow-glow hover:shadow-lg hover:-translate-y-0.5 font-bold text-sm group">
                    <PlusCircle size={18} className="mr-2 group-hover:rotate-90 transition-transform" />
                    Entrar em Novo Ciclo
                  </button>
                </div>

                {/* Stats */}
                <StatsOverview />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Main Column: Active Groups */}
                  <div className="lg:col-span-2 space-y-8">
                    
                    {/* Active Groups Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {activeGroups.map(group => (
                        <GroupCard key={group.id} group={group} onClick={handleGroupClick} />
                      ))}
                      
                      {/* Create New Placeholder */}
                      <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-brand-300 hover:bg-brand-50/30 transition-all cursor-pointer group h-full min-h-[280px]">
                         <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Sparkles size={28} className="text-slate-300 group-hover:text-brand-500" />
                         </div>
                         <h3 className="text-lg font-bold text-slate-700 group-hover:text-brand-700 transition-colors">Explorar Novos Grupos</h3>
                         <p className="text-sm text-slate-400 mt-2 max-w-xs font-medium">Encontre comunidades alinhadas aos seus objetivos.</p>
                      </div>
                    </div>

                    {/* Section: Recommended Opportunities */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-slate-900">Oportunidades Recomendadas</h2>
                            <button className="text-sm font-bold text-brand-600 hover:text-brand-800">Ver todas</button>
                        </div>
                        <div className="bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden">
                            <table className="min-w-full divide-y divide-slate-100">
                                <thead className="bg-slate-50/50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Grupo</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Nível</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Entrada</th>
                                        <th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Ação</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-100">
                                    {[1, 2, 3].map((i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 font-bold text-sm mr-4 group-hover:bg-brand-100 transition-colors">G{i}</div>
                                                    <div>
                                                        <div className="text-sm font-bold text-slate-900">Comunidade Global {i}</div>
                                                        <div className="text-xs text-slate-400">Início imediato</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                                                    Iniciante
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">R$ 25,00</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button className="text-brand-600 hover:text-brand-800 font-bold bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-lg transition-colors">
                                                    Visualizar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                  </div>

                  {/* Right Column: Widgets */}
                  <div className="space-y-6">
                     {/* New Widgets */}
                     <div className="h-64">
                        <InviteCard />
                     </div>
                     <div className="h-64">
                        <NextStepsCard />
                     </div>

                     <Leaderboard />
                  </div>

                </div>
              </div>
            ) : (
                /* Group Details View */
                selectedGroup && <GroupDetails group={selectedGroup} onBack={handleBackToDashboard} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;