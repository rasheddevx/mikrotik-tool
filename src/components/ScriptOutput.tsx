import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, CheckCircle2, Download, Terminal } from 'lucide-react';

interface ScriptOutputProps {
  generatedScript: string;
  osVersion: string;
  isCopied: boolean;
  copyToClipboard: () => void;
}

const ScriptOutput: React.FC<ScriptOutputProps> = ({ 
  generatedScript, 
  osVersion, 
  isCopied, 
  copyToClipboard 
}) => {
  return (
    <AnimatePresence>
      {generatedScript && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 space-y-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="font-semibold text-slate-700">Script Ready — RouterOS {osVersion}</span>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button 
                onClick={copyToClipboard}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600 px-4 py-2 rounded-lg font-medium transition-colors shadow-sm"
              >
                {isCopied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
                {isCopied ? 'Copied!' : 'Copy Script'}
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg font-medium transition-colors shadow-sm">
                <Download size={18} />
                .rsc
              </button>
            </div>
          </div>
          
          <div className="bg-[#0D1117] rounded-xl shadow-xl overflow-hidden border border-slate-800">
            <div className="h-10 bg-[#161B22] border-b border-slate-800 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-slate-400 font-mono text-xs">
                <Terminal size={14} />
                <span>mikrotik_script.rsc</span>
              </div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-[#E6EDF3] font-mono text-sm leading-relaxed whitespace-pre selection:bg-blue-500/30">
                {generatedScript}
              </pre>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-blue-100 p-2 rounded-lg shrink-0">
              <Terminal size={20} className="text-blue-600" />
            </div>
            <div>
              <span className="font-semibold block mb-1">How to use (কিভাবে ব্যবহার করবেন):</span>
              <p className="text-blue-700/80">
                Paste into <span className="font-mono bg-blue-100/50 px-1.5 py-0.5 rounded font-semibold">Winbox → New Terminal</span> and press Enter. 
                Or save as file and run <span className="font-mono bg-blue-100/50 px-1.5 py-0.5 rounded">/import file=script.rsc</span>.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScriptOutput;
