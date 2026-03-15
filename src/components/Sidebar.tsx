import React from 'react';
import { SIDEBAR_TOOLS } from '../constants/tools';
import { Tool } from '../types';

interface SidebarProps {
  activeTool: string;
  setActiveTool: (id: string) => void;
  sidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTool, setActiveTool, sidebarOpen }) => {
  return (
    <aside 
      className={`
        bg-white border-r border-slate-200 transition-all duration-300 ease-in-out
        fixed md:sticky top-16 h-[calc(100vh-4rem)] z-40 overflow-y-auto shadow-lg md:shadow-none
        ${sidebarOpen ? 'w-72 translate-x-0' : 'w-0 md:w-20 -translate-x-full md:translate-x-0'}
      `}
    >
      <div className="p-4 space-y-1.5">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3 hidden md:block">
          {sidebarOpen ? 'Configuration Tools' : 'Tools'}
        </div>
        {SIDEBAR_TOOLS.map((tool: Tool) => {
          const Icon = tool.icon;
          const isActive = activeTool === tool.id;
          
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`
                w-full flex items-center gap-3 p-3 rounded-xl transition-all group
                ${isActive 
                  ? 'bg-blue-50 text-blue-700 font-semibold shadow-sm border border-blue-100' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium border border-transparent'}
              `}
            >
              <div className={`
                p-2 rounded-lg transition-colors flex-shrink-0
                ${isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700'}
              `}>
                <Icon size={20} />
              </div>
              <span className={`text-sm whitespace-nowrap transition-opacity duration-300 ${!sidebarOpen && 'md:opacity-0 hidden md:block'}`}>
                {tool.name}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
