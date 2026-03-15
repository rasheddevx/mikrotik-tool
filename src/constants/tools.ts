import { 
  Activity, 
  ShieldAlert, 
  Zap, 
  Settings, 
  Lock, 
  Layers, 
  Network, 
  Database, 
  Calculator, 
  Layout, 
  Clock, 
  Share2, 
  Cpu, 
  Globe, 
  ShieldCheck 
} from 'lucide-react';
import { Tool, AppConfig } from '../types';

export const SIDEBAR_TOOLS: Tool[] = [
  { id: 'imowhatsapp', name: 'IMO & WhatsApp', icon: Activity, color: 'text-green-500' },
  { id: 'social', name: 'Social Media QoS', icon: Share2, color: 'text-blue-500' },
  { id: 'vpn', name: 'VPN Block', icon: ShieldAlert, color: 'text-red-500' },
  { id: 'pcc', name: 'PCC Load Balance', icon: Zap, color: 'text-yellow-500' },
  { id: 'basic', name: 'Basic Config', icon: Settings, color: 'text-gray-500' },
  { id: 'knocking', name: 'Port Knocking', icon: Lock, color: 'text-indigo-500' },
  { id: 'pcq', name: 'PCQ Generator', icon: Layers, color: 'text-purple-500' },
  { id: 'pcqburst', name: 'PCQ Burst Rate', icon: Zap, color: 'text-orange-500' },
  { id: 'nth', name: 'NTH Load Balance', icon: Network, color: 'text-cyan-500' },
  { id: 'bgp', name: 'BGP Config', icon: Globe, color: 'text-emerald-500' },
  { id: 'expired', name: 'Expired Users', icon: Clock, color: 'text-rose-500' },
  { id: 'database', name: 'Service DB', icon: Database, color: 'text-amber-500' },
  { id: 'calc', name: 'BW Calculator', icon: Calculator, color: 'text-sky-500' },
  { id: 'burst', name: 'Burst Calculator', icon: Cpu, color: 'text-lime-500' },
  { id: 'hotspot', name: 'Hotspot Design', icon: Layout, color: 'text-fuchsia-500' },
];

export const APPS: AppConfig[] = [
  { id: 'whatsapp', name: 'WhatsApp', icon: '💬', description: 'Calls & Messages' },
  { id: 'imo', name: 'IMO', icon: '📞', description: 'Video & Voice Calls' },
  { id: 'messenger', name: 'FB Messenger', icon: '🔵', description: 'Chat & Calls' },
  { id: 'telegram', name: 'Telegram', icon: '✈️', description: 'Secure Messaging' },
];
