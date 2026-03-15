import React from 'react';
import { Download, Upload, CheckCircle2, Globe, Settings, Activity } from 'lucide-react';
import { APPS } from '../constants/tools';

interface ToolRendererProps {
  activeTool: string;
  selectedApps: string[];
  toggleApp: (id: string) => void;
  downloadLimit: string;
  setDownloadLimit: (val: string) => void;
  uploadLimit: string;
  setUploadLimit: (val: string) => void;
  burstDownload: string;
  setBurstDownload: (val: string) => void;
  burstUpload: string;
  setBurstUpload: (val: string) => void;
  priority: string;
  setPriority: (val: string) => void;
  vpnProtocols: string[];
  setVpnProtocols: (val: string[]) => void;
  wanCount: string;
  setWanCount: (val: string) => void;
  lanInterface: string;
  setLanInterface: (val: string) => void;
  routerIdentity: string;
  setRouterIdentity: (val: string) => void;
  dnsServers: string;
  setDnsServers: (val: string) => void;
  networkIp: string;
  setNetworkIp: (val: string) => void;
  startIp: string;
  setStartIp: (val: string) => void;
  endIp: string;
  setEndIp: (val: string) => void;
  globalDown: string;
  setGlobalDown: (val: string) => void;
  globalUp: string;
  setGlobalUp: (val: string) => void;
  clientDown: string;
  setClientDown: (val: string) => void;
  clientUp: string;
  setClientUp: (val: string) => void;
}

const ToolRenderer: React.FC<ToolRendererProps> = (props) => {
  const { activeTool } = props;

  const inputClass = "w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none font-mono text-slate-700 transition-all shadow-sm";
  const labelClass = "text-sm font-semibold text-slate-700 mb-2 block";
  const sectionTitleClass = "text-lg font-bold text-slate-800 mb-4 flex items-center gap-2";

  switch (activeTool) {
    case 'imowhatsapp':
    case 'social':
      return (
        <div className="space-y-8">
          <section>
            <h3 className={sectionTitleClass}>
              <Activity size={20} className="text-blue-500" />
              Apps to Prioritize
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {APPS.map((app) => (
                <div
                  key={app.id}
                  onClick={() => props.toggleApp(app.id)}
                  className={`
                    flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all
                    ${props.selectedApps.includes(app.id) 
                      ? 'border-blue-500 bg-blue-50/50 shadow-sm' 
                      : 'border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{app.icon}</div>
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">{app.name}</div>
                      <div className="text-xs text-slate-500">{app.description}</div>
                    </div>
                  </div>
                  <div className={`
                    w-5 h-5 rounded-full border flex items-center justify-center
                    ${props.selectedApps.includes(app.id) ? 'bg-blue-500 border-blue-500' : 'border-slate-300'}
                  `}>
                    {props.selectedApps.includes(app.id) && <CheckCircle2 size={14} className="text-white" />}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-5 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                <Download size={18} className="text-blue-500" /> Download Limits
              </h4>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Max Limit (Mbps)</label>
                  <input 
                    type="number" 
                    value={props.downloadLimit}
                    onChange={(e) => props.setDownloadLimit(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Burst Limit (Mbps)</label>
                  <input 
                    type="number" 
                    value={props.burstDownload}
                    onChange={(e) => props.setBurstDownload(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                <Upload size={18} className="text-green-500" /> Upload Limits
              </h4>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Max Limit (Mbps)</label>
                  <input 
                    type="number" 
                    value={props.uploadLimit}
                    onChange={(e) => props.setUploadLimit(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Burst Limit (Mbps)</label>
                  <input 
                    type="number" 
                    value={props.burstUpload}
                    onChange={(e) => props.setBurstUpload(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <label className={labelClass}>Queue Priority (1-8)</label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((p) => (
                <button
                  key={p}
                  onClick={() => props.setPriority(p.toString())}
                  className={`
                    w-12 h-12 rounded-xl font-semibold transition-all
                    ${props.priority === p.toString() 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'}
                  `}
                >
                  {p}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-2">1 is highest priority, 8 is lowest.</p>
          </section>
        </div>
      );

    case 'vpn':
      return (
        <section className="space-y-6">
          <h3 className={sectionTitleClass}>Protocols to Block</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['pptp', 'l2tp', 'sstp', 'openvpn'].map((proto) => (
              <button
                key={proto}
                onClick={() => {
                  if (props.vpnProtocols.includes(proto)) {
                    props.setVpnProtocols(props.vpnProtocols.filter(p => p !== proto));
                  } else {
                    props.setVpnProtocols([...props.vpnProtocols, proto]);
                  }
                }}
                className={`
                  p-4 rounded-xl border-2 font-semibold uppercase transition-all
                  ${props.vpnProtocols.includes(proto) 
                    ? 'border-red-500 bg-red-50 text-red-700 shadow-sm' 
                    : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'}
                `}
              >
                {proto}
              </button>
            ))}
          </div>
        </section>
      );

    case 'pcc':
    case 'nth':
      return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClass}>Number of WANs</label>
            <input 
              type="number" 
              value={props.wanCount}
              onChange={(e) => props.setWanCount(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>LAN Interface Name</label>
            <input 
              type="text" 
              value={props.lanInterface}
              onChange={(e) => props.setLanInterface(e.target.value)}
              className={inputClass}
              placeholder="e.g., ether5-LAN"
            />
          </div>
        </section>
      );

    case 'basic':
      return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClass}>Router Identity</label>
            <input 
              type="text" 
              value={props.routerIdentity}
              onChange={(e) => props.setRouterIdentity(e.target.value)}
              className={inputClass}
              placeholder="FiberLinkBD-Router"
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>DNS Servers (comma separated)</label>
            <input 
              type="text" 
              value={props.dnsServers}
              onChange={(e) => props.setDnsServers(e.target.value)}
              className={inputClass}
              placeholder="8.8.8.8, 1.1.1.1"
            />
          </div>
        </section>
      );

    case 'pcq':
      return (
        <div className="space-y-8">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className={labelClass}>Network IP</label>
              <input 
                type="text" 
                value={props.networkIp}
                onChange={(e) => props.setNetworkIp(e.target.value)}
                className={inputClass}
                placeholder="192.168.1.0/24"
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Start IP (Last Octet)</label>
              <input 
                type="number" 
                value={props.startIp}
                onChange={(e) => props.setStartIp(e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>End IP (Last Octet)</label>
              <input 
                type="number" 
                value={props.endIp}
                onChange={(e) => props.setEndIp(e.target.value)}
                className={inputClass}
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-5 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                <Globe size={18} className="text-blue-500" /> Global Bandwidth
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Download</label>
                  <input 
                    type="text" 
                    value={props.globalDown}
                    onChange={(e) => props.setGlobalDown(e.target.value)}
                    className={inputClass}
                    placeholder="10M"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Upload</label>
                  <input 
                    type="text" 
                    value={props.globalUp}
                    onChange={(e) => props.setGlobalUp(e.target.value)}
                    className={inputClass}
                    placeholder="5M"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                <Activity size={18} className="text-green-500" /> Per Client Limit
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Download</label>
                  <input 
                    type="text" 
                    value={props.clientDown}
                    onChange={(e) => props.setClientDown(e.target.value)}
                    className={inputClass}
                    placeholder="1M"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Upload</label>
                  <input 
                    type="text" 
                    value={props.clientUp}
                    onChange={(e) => props.setClientUp(e.target.value)}
                    className={inputClass}
                    placeholder="512K"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      );

    default:
      return (
        <div className="p-12 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <Settings className="mx-auto text-slate-300 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-slate-700 mb-2">Tool Configuration</h3>
          <p className="text-slate-500 text-sm">This tool uses default parameters. Click generate to see the script.</p>
        </div>
      );
  }
};

export default ToolRenderer;
