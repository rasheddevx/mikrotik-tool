import React from 'react';
import { Network, Facebook, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Network className="text-white" size={24} />
            </div>
            <span>FiberLink<span className="text-blue-400">BD</span></span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Corporate IT Solutions, Networking, Cloud Infrastructure, and MikroTik Consultancy Services.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
              <span>Mirpur, Dhaka, Bangladesh.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400 shrink-0" />
              <span>+88 01730173050</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400 shrink-0" />
              <a href="mailto:fiberlinkbd31@gmail.com" className="hover:text-white transition-colors">
                fiberlinkbd31@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="https://wa.me/8801730173050" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} FiberLinkBD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
