import React from 'react';
import { TrendingUp, Users, RefreshCw, Award } from 'lucide-react';
import { StatMetric } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Fev', value: 800 },
  { name: 'Mar', value: 1200 },
  { name: 'Abr', value: 1800 },
  { name: 'Mai', value: 2400 },
  { name: 'Jun', value: 3500 },
];

export const StatsOverview: React.FC = () => {
  const metrics: StatMetric[] = [
    { label: 'Doações Recebidas', value: 'R$ 12.450', trend: 12.5, trendUp: true },
    { label: 'Ciclos Completos', value: '8', trend: 2, trendUp: true },
    { label: 'Doações Realizadas', value: 'R$ 3.200', trend: 0, trendUp: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      {/* Simple Metric Cards */}
      {metrics.map((metric, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">{metric.label}</p>
            <h3 className="text-2xl font-bold text-slate-900">{metric.value}</h3>
          </div>
          <div className="mt-4 flex items-center">
            <span className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${metric.trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
              <TrendingUp size={12} className="mr-1" />
              {metric.trend > 0 ? `+${metric.trend}%` : 'Estável'}
            </span>
            <span className="text-xs text-slate-400 ml-2">vs. mês anterior</span>
          </div>
        </div>
      ))}

      {/* Mini Chart Card */}
      <div className="bg-brand-900 p-6 rounded-xl border border-brand-800 shadow-sm text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <Award size={100} />
        </div>
        <div className="relative z-10">
            <p className="text-brand-200 text-sm font-medium mb-1">Impacto da Comunidade</p>
            <h3 className="text-xl font-bold mb-4">Crescimento Contínuo</h3>
            <div className="h-20 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="value" stroke="#38bdf8" fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </div>
  );
};