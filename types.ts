export enum UserRank {
  BRONZE = 'Iniciante',
  SILVER = 'Membro Ativo',
  GOLD = 'Líder de Ciclo',
  PLATINUM = 'Embaixador',
}

export interface User {
  id: string;
  name: string;
  rank: UserRank;
  cyclesCompleted: number;
  avatarUrl: string;
  joinDate: string;
}

export interface GroupParticipant {
  user: User;
  position: 'center' | 'inner' | 'outer'; // Center = Receiver, Outer = Giver
  status: 'pending' | 'completed';
}

export interface DonationGroup {
  id: string;
  name: string;
  level: number; // 1, 2, 3... indicates the value tier
  value: number;
  progress: number; // 0 to 100
  participants: GroupParticipant[];
  status: 'active' | 'completed' | 'forming';
}

export interface StatMetric {
  label: string;
  value: string;
  trend: number; // percentage
  trendUp: boolean;
}