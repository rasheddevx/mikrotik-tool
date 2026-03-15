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
  hotspotName: string;
  setHotspotName: (val: string) => void;
  hotspotDns: string;
  setHotspotDns: (val: string) => void;
  bgpAsn: string;
  setBgpAsn: (val: string) => void;
  bgpRouterId: string;
  setBgpRouterId: (val: string) => void;
  knockPort: string;
  setKnockPort: (val: string) => void;
  poolName: string;
  setPoolName: (val: string) => void;
  poolRange: string;
  setPoolRange: (val: string) => void;
  profileName: string;
  setProfileName: (val: string) => void;
  profileLocalAddress: string;
  setProfileLocalAddress: (val: string) => void;
  profileRemoteAddress: string;
  setProfileRemoteAddress: (val: string) => void;
  profileRateLimit: string;
  setProfileRateLimit: (val: string) => void;
  profileDns: string;
  setProfileDns: (val: string) => void;
  secretName: string;
  setSecretName: (val: string) => void;
  secretPassword: string;
  setSecretPassword: (val: string) => void;
  secretProfile: string;
  setSecretProfile: (val: string) => void;
  secretService: string;
  setSecretService: (val: string) => void;
  secretLocalAddress: string;
  setSecretLocalAddress: (val: string) => void;
  secretRemoteAddress: string;
  setSecretRemoteAddress: (val: string) => void;
}

const ToolRenderer: React.FC<ToolRendererProps> = (props) => {
  const { activeTool } = props;

  const inputClass = "w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none font-mono text-slate-700 transition-all shadow-sm";
  const labelClass = "text-sm font-semibold text-slate-700 mb-2 block";
  const sectionTitleClass = "text-lg font-bold text-slate-800 mb-4 flex items-center gap-2";

  const isValidIp = (ip: string) => {
    if (!ip) return true;
    return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);
  };

  const isValidNetworkIp = (ip: string) => {
    if (!ip) return true;
    return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\/(?:[0-9]|[1-2][0-9]|3[0-2])|:\d{1,5})?$/.test(ip);
  };

  const isValidDns = (ip: string) => {
    if (!ip) return true;
    return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\s*,\s*(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$/.test(ip);
  };

  const isValidIpRange = (range: string) => {
    if (!range) return true;
    const ipPattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    const regex = new RegExp(`^${ipPattern}-${ipPattern}$`);
    return regex.test(range);
  };

  const getIpInputClass = (isValid: boolean) => 
    `w-full p-3 bg-white border rounded-xl focus:ring-2 outline-none font-mono text-slate-700 transition-all shadow-sm ${
      isValid 
        ? 'border-slate-200 focus:ring-blue-500 focus:border-blue-500' 
        : 'border-red-500 focus:ring-red-500 focus:border-red-500'
    }`;

  const generatePremiumIpRange = () => {
    const types = ['classA', 'classB', 'classC', 'cgnat'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let octet1, octet2, octet3;
    
    switch(type) {
      case 'classA':
        octet1 = 10;
        octet2 = Math.floor(Math.random() * 256);
        octet3 = Math.floor(Math.random() * 256);
        break;
      case 'classB':
        octet1 = 172;
        octet2 = Math.floor(Math.random() * 16) + 16; // 16 to 31
        octet3 = Math.floor(Math.random() * 256);
        break;
      case 'classC':
        octet1 = 192;
        octet2 = 168;
        octet3 = Math.floor(Math.random() * 256);
        break;
      case 'cgnat':
      default:
        octet1 = 100;
        octet2 = Math.floor(Math.random() * 64) + 64; // 64 to 127
        octet3 = Math.floor(Math.random() * 256);
        break;
    }
    
    const randomRange = `${octet1}.${octet2}.${octet3}.2-${octet1}.${octet2}.${octet3}.254`;
    props.setPoolRange(randomRange);
    
    const poolNames = ['Premium-Pool', 'VIP-Network', 'Ultra-Fast-Pool', 'Dedicated-IPs', 'Pro-Gaming-Pool', 'Corporate-Net', 'Elite-Bandwidth'];
    const randomName = poolNames[Math.floor(Math.random() * poolNames.length)];
    props.setPoolName(`${randomName}-${octet3}`);
  };

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
              className={getIpInputClass(isValidDns(props.dnsServers))}
              placeholder="8.8.8.8, 1.1.1.1"
            />
            {!isValidDns(props.dnsServers) && <p className="text-red-500 text-xs mt-1">Invalid DNS IP format</p>}
          </div>
        </section>
      );

    case 'ippool':
      return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClass}>Pool Name</label>
            <input 
              type="text" 
              value={props.poolName}
              onChange={(e) => props.setPoolName(e.target.value)}
              className={inputClass}
              placeholder="Premium-Pool"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-slate-700">IP Range</label>
              <button 
                type="button"
                onClick={generatePremiumIpRange}
                className="text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded transition-colors"
              >
                Auto Generate
              </button>
            </div>
            <input 
              type="text" 
              value={props.poolRange}
              onChange={(e) => props.setPoolRange(e.target.value)}
              className={getIpInputClass(isValidIpRange(props.poolRange))}
              placeholder="10.10.10.2-10.10.10.254"
            />
            {!isValidIpRange(props.poolRange) && <p className="text-red-500 text-xs mt-1">Invalid IP Range format (e.g. 192.168.1.2-192.168.1.254)</p>}
          </div>
        </section>
      );

    case 'pppoe-profile':
      return (
        <div className="space-y-8">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className={labelClass}>Profile Name</label>
              <input 
                type="text" 
                value={props.profileName}
                onChange={(e) => props.setProfileName(e.target.value)}
                className={inputClass}
                placeholder="Premium-Profile"
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Rate Limit (Rx/Tx)</label>
              <input 
                type="text" 
                value={props.profileRateLimit}
                onChange={(e) => props.setProfileRateLimit(e.target.value)}
                className={inputClass}
                placeholder="5M/5M"
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Local Address</label>
              <input 
                type="text" 
                value={props.profileLocalAddress}
                onChange={(e) => props.setProfileLocalAddress(e.target.value)}
                className={inputClass}
                placeholder="192.168.1.1"
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Remote Address (IP or Pool)</label>
              <input 
                type="text" 
                value={props.profileRemoteAddress}
                onChange={(e) => props.setProfileRemoteAddress(e.target.value)}
                className={inputClass}
                placeholder="Premium-Pool"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className={labelClass}>DNS Servers</label>
              <input 
                type="text" 
                value={props.profileDns}
                onChange={(e) => props.setProfileDns(e.target.value)}
                className={getIpInputClass(isValidDns(props.profileDns))}
                placeholder="8.8.8.8, 1.1.1.1"
              />
              {!isValidDns(props.profileDns) && <p className="text-red-500 text-xs mt-1">Invalid DNS IP format</p>}
            </div>
          </section>
        </div>
      );

    case 'pppoe-secret':
      return (
        <div className="space-y-8">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className={labelClass}>Username (Name)</label>
              <input 
                type="text" 
                value={props.secretName}
                onChange={(e) => props.setSecretName(e.target.value)}
                className={inputClass}
                placeholder="user1"
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Password</label>
              <input 
                type="text" 
                value={props.secretPassword}
                onChange={(e) => props.setSecretPassword(e.target.value)}
                className={inputClass}
                placeholder="1234"
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Profile</label>
              <input 
                type="text" 
                value={props.secretProfile}
                onChange={(e) => props.setSecretProfile(e.target.value)}
                className={inputClass}
                placeholder="Premium-Profile"
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Service</label>
              <select
                value={props.secretService}
                onChange={(e) => props.setSecretService(e.target.value)}
                className={inputClass}
              >
                <option value="any">any</option>
                <option value="async">async</option>
                <option value="l2tp">l2tp</option>
                <option value="ovpn">ovpn</option>
                <option value="pppoe">pppoe</option>
                <option value="pptp">pptp</option>
                <option value="sstp">sstp</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Local Address (Optional)</label>
              <input 
                type="text" 
                value={props.secretLocalAddress}
                onChange={(e) => props.setSecretLocalAddress(e.target.value)}
                className={inputClass}
                placeholder="Leave blank for profile default"
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Remote Address (Optional)</label>
              <input 
                type="text" 
                value={props.secretRemoteAddress}
                onChange={(e) => props.setSecretRemoteAddress(e.target.value)}
                className={inputClass}
                placeholder="Leave blank for profile default"
              />
            </div>
          </section>
        </div>
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
                className={getIpInputClass(isValidNetworkIp(props.networkIp))}
                placeholder="192.168.1.0/24"
              />
              {!isValidNetworkIp(props.networkIp) && <p className="text-red-500 text-xs mt-1">Invalid Network IP format</p>}
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

    case 'pcqburst':
      return (
        <div className="space-y-8">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-5 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                <Download size={18} className="text-blue-500" /> PCQ Burst Download
              </h4>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Client Rate (e.g., 5M)</label>
                  <input 
                    type="text" 
                    value={props.clientDown}
                    onChange={(e) => props.setClientDown(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Burst Rate (Mbps)</label>
                  <input 
                    type="number" 
                    value={props.burstDownload}
                    onChange={(e) => props.setBurstDownload(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                <Upload size={18} className="text-green-500" /> PCQ Burst Upload
              </h4>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Client Rate (e.g., 5M)</label>
                  <input 
                    type="text" 
                    value={props.clientUp}
                    onChange={(e) => props.setClientUp(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Burst Rate (Mbps)</label>
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
        </div>
      );

    case 'hotspot':
      return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClass}>Hotspot Name</label>
            <input 
              type="text" 
              value={props.hotspotName}
              onChange={(e) => props.setHotspotName(e.target.value)}
              className={inputClass}
              placeholder="FiberLinkBD-Hotspot"
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>DNS Name</label>
            <input 
              type="text" 
              value={props.hotspotDns}
              onChange={(e) => props.setHotspotDns(e.target.value)}
              className={inputClass}
              placeholder="hotspot.fiberlinkbd.net"
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>Network IP</label>
            <input 
              type="text" 
              value={props.networkIp}
              onChange={(e) => props.setNetworkIp(e.target.value)}
              className={getIpInputClass(isValidNetworkIp(props.networkIp))}
              placeholder="192.168.1.0/24"
            />
            {!isValidNetworkIp(props.networkIp) && <p className="text-red-500 text-xs mt-1">Invalid Network IP format</p>}
          </div>
          <div className="space-y-2">
            <label className={labelClass}>LAN Interface</label>
            <input 
              type="text" 
              value={props.lanInterface}
              onChange={(e) => props.setLanInterface(e.target.value)}
              className={inputClass}
              placeholder="ether5-LAN"
            />
          </div>
        </section>
      );

    case 'bgp':
      return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClass}>BGP AS Number</label>
            <input 
              type="text" 
              value={props.bgpAsn}
              onChange={(e) => props.setBgpAsn(e.target.value)}
              className={inputClass}
              placeholder="65530"
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>Router ID</label>
            <input 
              type="text" 
              value={props.bgpRouterId}
              onChange={(e) => props.setBgpRouterId(e.target.value)}
              className={getIpInputClass(isValidIp(props.bgpRouterId))}
              placeholder="10.0.0.1"
            />
            {!isValidIp(props.bgpRouterId) && <p className="text-red-500 text-xs mt-1">Invalid IP format</p>}
          </div>
        </section>
      );

    case 'knocking':
      return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClass}>Knock Port</label>
            <input 
              type="text" 
              value={props.knockPort}
              onChange={(e) => props.setKnockPort(e.target.value)}
              className={inputClass}
              placeholder="1337"
            />
          </div>
        </section>
      );

    case 'calc':
      return (
        <div className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <Activity size={18} className="text-blue-500" /> Bandwidth Converter
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={labelClass}>Megabits per second (Mbps)</label>
                <input 
                  type="number" 
                  value={props.downloadLimit}
                  onChange={(e) => {
                    props.setDownloadLimit(e.target.value);
                    props.setUploadLimit((Number(e.target.value) * 1024).toString()); // kbps
                    props.setBurstDownload((Number(e.target.value) / 8).toString()); // MB/s
                  }}
                  className={inputClass}
                  placeholder="e.g., 10"
                />
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-sm text-slate-500 block mb-1">Kilobits per second (Kbps)</span>
                  <span className="text-lg font-bold text-slate-800">{Number(props.downloadLimit) * 1024 || 0} Kbps</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-sm text-slate-500 block mb-1">Megabytes per second (MB/s)</span>
                  <span className="text-lg font-bold text-slate-800">{(Number(props.downloadLimit) / 8).toFixed(2) || 0} MB/s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'burst':
      return (
        <div className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <Activity size={18} className="text-blue-500" /> Burst Rate Calculator
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className={labelClass}>Max Limit (Mbps)</label>
                  <input 
                    type="number" 
                    value={props.downloadLimit}
                    onChange={(e) => props.setDownloadLimit(e.target.value)}
                    className={inputClass}
                    placeholder="e.g., 5"
                  />
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>Burst Limit (Mbps)</label>
                  <input 
                    type="number" 
                    value={props.burstDownload}
                    onChange={(e) => props.setBurstDownload(e.target.value)}
                    className={inputClass}
                    placeholder="e.g., 10"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-sm text-slate-500 block mb-1">Recommended Burst Threshold (80%)</span>
                  <span className="text-lg font-bold text-slate-800">{Math.floor(Number(props.burstDownload) * 0.8) || 0} Mbps</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-sm text-slate-500 block mb-1">Recommended Burst Time</span>
                  <span className="text-lg font-bold text-slate-800">10s - 16s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'expired':
      return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClass}>Expired Users Address List</label>
            <input 
              type="text" 
              value={props.routerIdentity}
              onChange={(e) => props.setRouterIdentity(e.target.value)}
              className={inputClass}
              placeholder="EXPIRED_USERS"
            />
          </div>
          <div className="space-y-2">
            <label className={labelClass}>Redirect IP / Port</label>
            <input 
              type="text" 
              value={props.networkIp}
              onChange={(e) => props.setNetworkIp(e.target.value)}
              className={getIpInputClass(isValidNetworkIp(props.networkIp))}
              placeholder="192.168.1.10:8080"
            />
            {!isValidNetworkIp(props.networkIp) && <p className="text-red-500 text-xs mt-1">Invalid IP/Port format</p>}
          </div>
        </section>
      );

    case 'database':
      return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={labelClass}>Database Server IP</label>
            <input 
              type="text" 
              value={props.networkIp}
              onChange={(e) => props.setNetworkIp(e.target.value)}
              className={getIpInputClass(isValidNetworkIp(props.networkIp))}
              placeholder="10.0.0.5"
            />
            {!isValidNetworkIp(props.networkIp) && <p className="text-red-500 text-xs mt-1">Invalid IP format</p>}
          </div>
          <div className="space-y-2">
            <label className={labelClass}>Database Port</label>
            <input 
              type="text" 
              value={props.knockPort}
              onChange={(e) => props.setKnockPort(e.target.value)}
              className={inputClass}
              placeholder="3306"
            />
          </div>
        </section>
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
