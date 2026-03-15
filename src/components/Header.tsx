import React from 'react';
import { Network, Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Network className="text-white" size={24} />
            </div>
            <span>FiberLink<span className="text-blue-400">BD</span></span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
            <a href="mailto:fiberlinkbd31@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} className="text-blue-400" />
              fiberlinkbd31@gmail.com
            </a>
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700 text-white">
              <Phone size={16} className="text-blue-400" />
              <span>01730173050</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
