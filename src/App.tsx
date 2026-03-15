import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Copy, 
  CheckCircle2, 
  Download, 
  Activity as NetworkIcon,
  HelpCircle,
  MessageCircle,
  Zap
} from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ToolRenderer from './components/ToolRenderer';
import ScriptOutput from './components/ScriptOutput';
import { SIDEBAR_TOOLS, APPS } from './constants/tools';

function App() {
  const [activeTool, setActiveTool] = useState('imowhatsapp');
  const [osVersion, setOsVersion] = useState('v6');
  const [generatedScript, setGeneratedScript] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Tool States
  const [selectedApps, setSelectedApps] = useState<string[]>(['whatsapp', 'imo']);
  const [downloadLimit, setDownloadLimit] = useState('50');
  const [uploadLimit, setUploadLimit] = useState('20');
  const [burstDownload, setBurstDownload] = useState('100');
  const [burstUpload, setBurstUpload] = useState('40');
  const [priority, setPriority] = useState('1');
  const [vpnProtocols, setVpnProtocols] = useState<string[]>(['pptp', 'l2tp']);
  const [wanCount, setWanCount] = useState('2');
  const [lanInterface, setLanInterface] = useState('ether5-LAN');
  const [routerIdentity, setRouterIdentity] = useState('FiberLinkBD-Router');
  const [dnsServers, setDnsServers] = useState('8.8.8.8, 1.1.1.1');
  const [networkIp, setNetworkIp] = useState('192.168.1.0/24');
  const [startIp, setStartIp] = useState('2');
  const [endIp, setEndIp] = useState('254');
  const [globalDown, setGlobalDown] = useState('100M');
  const [globalUp, setGlobalUp] = useState('100M');
  const [clientDown, setClientDown] = useState('5M');
  const [clientUp, setClientUp] = useState('5M');
  const [hotspotName, setHotspotName] = useState('FiberLinkBD-Hotspot');
  const [hotspotDns, setHotspotDns] = useState('hotspot.fiberlinkbd.net');
  const [bgpAsn, setBgpAsn] = useState('65530');
  const [bgpRouterId, setBgpRouterId] = useState('10.0.0.1');
  const [knockPort, setKnockPort] = useState('1337');
  const [poolName, setPoolName] = useState('Premium-Pool');
  const [poolRange, setPoolRange] = useState('10.10.10.2-10.10.10.254');
  
  const [profileName, setProfileName] = useState('Premium-Profile');
  const [profileLocalAddress, setProfileLocalAddress] = useState('192.168.1.1');
  const [profileRemoteAddress, setProfileRemoteAddress] = useState('Premium-Pool');
  const [profileRateLimit, setProfileRateLimit] = useState('5M/5M');
  const [profileDns, setProfileDns] = useState('8.8.8.8, 1.1.1.1');

  const [secretName, setSecretName] = useState('user1');
  const [secretPassword, setSecretPassword] = useState('1234');
  const [secretProfile, setSecretProfile] = useState('Premium-Profile');
  const [secretService, setSecretService] = useState('pppoe');
  const [secretLocalAddress, setSecretLocalAddress] = useState('');
  const [secretRemoteAddress, setSecretRemoteAddress] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToolChange = (id: string) => {
    setActiveTool(id);
    setGeneratedScript('');
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const toggleApp = (id: string) => {
    setSelectedApps(prev => 
      prev.includes(id) ? prev.filter(appId => appId !== id) : [...prev, id]
    );
  };

  const getToolDescription = (toolId: string) => {
    const descriptions: Record<string, string> = {
      'imowhatsapp': 'এই টুলটি দিয়ে আপনি IMO, WhatsApp, Facebook, Telegram এর মত অ্যাপগুলোর জন্য আলাদা ব্যান্ডউইথ (QoS) সেট করতে পারবেন। এতে করে নেটওয়ার্কে চাপ থাকলেও কল ড্রপ হবে না।',
      'social': 'ফেসবুক, ইউটিউব, টিকটক এর মত সোশ্যাল মিডিয়া সাইটগুলোর জন্য ব্যান্ডউইথ লিমিট বা প্রায়োরিটি সেট করুন।',
      'vpn': 'নেটওয়ার্কে অবাঞ্ছিত VPN কানেকশন (PPTP, L2TP, SSTP, OpenVPN) ব্লক করার জন্য রুলস তৈরি করুন।',
      'pcc': 'একাধিক ইন্টারনেট লাইন (WAN) থাকলে PCC (Per Connection Classifier) ব্যবহার করে লোড ব্যালেন্সিং কনফিগার করুন।',
      'nth': 'NTH মেথড ব্যবহার করে একাধিক ইন্টারনেট লাইনের মধ্যে ট্রাফিক সমানভাবে ভাগ করে দিন।',
      'basic': 'রাউটারের বেসিক কনফিগারেশন যেমন আইডেন্টিটি, ডিএনএস, এবং টাইম জোন সেটআপ করুন।',
      'pcq': 'PCQ (Per Connection Queue) ব্যবহার করে নেটওয়ার্কের সকল গ্রাহকের মধ্যে সমানভাবে ব্যান্ডউইথ বন্টন করুন।',
      'ippool': 'ম্যানুয়ালি অথবা অটো-জেনারেট ফিচারের মাধ্যমে আপনার নেটওয়ার্কের জন্য প্রিমিয়াম আইপি পুল (IP Pool) তৈরি করুন।',
      'pppoe-profile': 'আপনার মাইক্রোটিক রাউটারের জন্য নতুন PPPoE প্রোফাইল তৈরি করুন এবং ব্যান্ডউইথ লিমিট সেট করুন।',
      'pppoe-secret': 'আপনার গ্রাহকদের জন্য নতুন PPPoE ইউজার (Secret) তৈরি করুন এবং প্রোফাইল অ্যাসাইন করুন।',
    };
    return descriptions[toolId] || 'এই টুলের মাধ্যমে আপনার মাইক্রোটিক রাউটারের প্রয়োজনীয় কনফিগারেশন স্ক্রিপ্ট তৈরি করুন।';
  };

  const generateScript = () => {
    let script = `# ==========================================\n`;
    script += `# Generated by FiberLinkBD Script Generator\n`;
    script += `# Tool: ${SIDEBAR_TOOLS.find(t => t.id === activeTool)?.name}\n`;
    script += `# RouterOS Version: ${osVersion}\n`;
    script += `# Date: ${new Date().toLocaleString()}\n`;
    script += `# ==========================================\n\n`;

    if (activeTool === 'imowhatsapp') {
      script += `/ip firewall mangle\n`;
      selectedApps.forEach(app => {
        script += `add action=mark-connection chain=prerouting comment="${app} Connection" new-connection-mark=${app}_conn passthrough=yes protocol=udp dst-port=3478,4244,5222,5223,5228,5288,5242,5349,3478-3481,45395,50318,59234\n`;
        script += `add action=mark-packet chain=prerouting connection-mark=${app}_conn new-packet-mark=${app}_pkt passthrough=no\n`;
      });
      
      script += `\n/queue tree\n`;
      script += `add max-limit=${downloadLimit}M name="Total Download" parent=global\n`;
      script += `add max-limit=${uploadLimit}M name="Total Upload" parent=global\n`;
      
      selectedApps.forEach(app => {
        script += `add burst-limit=${burstDownload}M burst-threshold=${Math.floor(Number(burstDownload)*0.8)}M burst-time=10s limit-at=${downloadLimit}M max-limit=${downloadLimit}M name="${app}_Down" packet-mark=${app}_pkt parent="Total Download" priority=${priority}\n`;
        script += `add burst-limit=${burstUpload}M burst-threshold=${Math.floor(Number(burstUpload)*0.8)}M burst-time=10s limit-at=${uploadLimit}M max-limit=${uploadLimit}M name="${app}_Up" packet-mark=${app}_pkt parent="Total Upload" priority=${priority}\n`;
      });
    } else if (activeTool === 'vpn') {
      script += `/ip firewall filter\n`;
      vpnProtocols.forEach(proto => {
        if (proto === 'pptp') {
          script += `add action=drop chain=forward comment="Block PPTP" dst-port=1723 protocol=tcp\n`;
          script += `add action=drop chain=forward protocol=gre\n`;
        } else if (proto === 'l2tp') {
          script += `add action=drop chain=forward comment="Block L2TP" dst-port=1701 protocol=udp\n`;
        } else if (proto === 'sstp') {
          script += `add action=drop chain=forward comment="Block SSTP" dst-port=443 protocol=tcp\n`;
        } else if (proto === 'openvpn') {
          script += `add action=drop chain=forward comment="Block OpenVPN" dst-port=1194 protocol=tcp\n`;
          script += `add action=drop chain=forward dst-port=1194 protocol=udp\n`;
        }
      });
    } else if (activeTool === 'basic') {
      script += `/system identity set name="${routerIdentity}"\n`;
      script += `/ip dns set servers=${dnsServers} allow-remote-requests=yes\n`;
      script += `/system clock set time-zone-name=Asia/Dhaka\n`;
    } else if (activeTool === 'pcq') {
      script += `/queue type\n`;
      script += `add kind=pcq name=PCQ_Download pcq-classifier=dst-address pcq-rate=${clientDown}\n`;
      script += `add kind=pcq name=PCQ_Upload pcq-classifier=src-address pcq-rate=${clientUp}\n`;
      script += `\n/queue simple\n`;
      script += `add max-limit=${globalUp}/${globalDown} name="Global PCQ" queue=PCQ_Upload/PCQ_Download target=${networkIp}\n`;
    } else if (activeTool === 'hotspot') {
      script += `/ip hotspot profile\n`;
      script += `add dns-name=${hotspotDns} hotspot-address=${networkIp.split('/')[0]} name=hsprof1\n`;
      script += `/ip hotspot\n`;
      script += `add interface=${lanInterface} name=${hotspotName} profile=hsprof1\n`;
    } else if (activeTool === 'bgp') {
      script += `/routing bgp instance\n`;
      script += `set default as=${bgpAsn} router-id=${bgpRouterId}\n`;
    } else if (activeTool === 'knocking') {
      script += `/ip firewall filter\n`;
      script += `add action=add-src-to-address-list address-list=knocked address-list-timeout=1m chain=input dst-port=${knockPort} protocol=tcp\n`;
      script += `add action=accept chain=input src-address-list=knocked\n`;
    } else if (activeTool === 'ippool') {
      script += `/ip pool\n`;
      script += `add name="${poolName}" ranges=${poolRange}\n`;
    } else if (activeTool === 'pppoe-profile') {
      script += `/ppp profile\n`;
      script += `add name="${profileName}" local-address="${profileLocalAddress}" remote-address="${profileRemoteAddress}" rate-limit="${profileRateLimit}" dns-server="${profileDns}"\n`;
    } else if (activeTool === 'pppoe-secret') {
      script += `/ppp secret\n`;
      let secretCmd = `add name="${secretName}" password="${secretPassword}" profile="${secretProfile}" service=${secretService}`;
      if (secretLocalAddress) secretCmd += ` local-address="${secretLocalAddress}"`;
      if (secretRemoteAddress) secretCmd += ` remote-address="${secretRemoteAddress}"`;
      script += secretCmd + `\n`;
    } else if (activeTool === 'pcqburst') {
      script += `/queue type\n`;
      script += `add kind=pcq name=PCQ_Burst_Down pcq-classifier=dst-address pcq-rate=${clientDown} pcq-burst-rate=${burstDownload}M pcq-burst-threshold=${Math.floor(Number(burstDownload)*0.8)}M pcq-burst-time=10s\n`;
      script += `add kind=pcq name=PCQ_Burst_Up pcq-classifier=src-address pcq-rate=${clientUp} pcq-burst-rate=${burstUpload}M pcq-burst-threshold=${Math.floor(Number(burstUpload)*0.8)}M pcq-burst-time=10s\n`;
    } else if (activeTool === 'expired') {
      script += `/ip firewall nat\n`;
      script += `add action=dst-nat chain=dstnat src-address-list=${routerIdentity} dst-port=80,443 protocol=tcp to-addresses=${networkIp.split(':')[0]} to-ports=${networkIp.split(':')[1] || '80'}\n`;
      script += `/ip firewall filter\n`;
      script += `add action=drop chain=forward src-address-list=${routerIdentity}\n`;
    } else if (activeTool === 'database') {
      script += `/ip firewall nat\n`;
      script += `add action=dst-nat chain=dstnat dst-port=${knockPort} protocol=tcp to-addresses=${networkIp} to-ports=${knockPort}\n`;
    } else if (activeTool === 'calc' || activeTool === 'burst') {
      script += `# This tool is a calculator. No configuration script is generated.\n`;
      script += `# Use the UI to calculate bandwidth and burst rates.\n`;
    } else {
      script += `# Configuration script for ${activeTool} will be generated here.\n`;
      script += `# Please select specific parameters to generate the full script.\n`;
    }

    setGeneratedScript(script);
    setIsCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedScript);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 relative">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/50 z-30 md:hidden backdrop-blur-sm transition-opacity"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar 
          activeTool={activeTool} 
          setActiveTool={handleToolChange} 
          sidebarOpen={sidebarOpen} 
        />

        <main className="flex-1 min-w-0 p-4 md:p-8 max-w-6xl mx-auto w-full">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-8">
            
            {/* --- Tool Header --- */}
            <header className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="flex items-start gap-5">
                <div className={`p-4 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shadow-sm`}>
                  {React.createElement(SIDEBAR_TOOLS.find(t => t.id === activeTool)?.icon || Activity, { size: 36, strokeWidth: 2 })}
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-1">
                    {SIDEBAR_TOOLS.find(t => t.id === activeTool)?.name}
                  </h1>
                  <p className="text-slate-500 font-medium text-sm">MikroTik Script Generator</p>
                </div>
              </div>
              
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 max-w-md">
                <div className="flex items-start gap-3">
                  <HelpCircle className="text-blue-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1">What is this? (এটি কি?)</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {getToolDescription(activeTool)}
                    </p>
                  </div>
                </div>
              </div>
            </header>

            {/* --- Version Selector --- */}
            <section className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h3 className="text-sm font-semibold text-slate-700">RouterOS Version:</h3>
              <div className="flex p-1 bg-slate-100 rounded-lg w-fit border border-slate-200">
                {['v6', 'v7', 'both'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setOsVersion(v)}
                    className={`
                      px-6 py-2 rounded-md font-medium text-sm transition-all
                      ${osVersion === v 
                        ? 'bg-white text-blue-700 shadow-sm border border-slate-200/50' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'}
                    `}
                  >
                    {v === 'v6' ? 'v6 Classic' : v === 'v7' ? 'v7 New' : 'Both v6 + v7'}
                  </button>
                ))}
              </div>
            </section>

            <div className="pt-4">
              <ToolRenderer 
                activeTool={activeTool}
                selectedApps={selectedApps}
                toggleApp={toggleApp}
                downloadLimit={downloadLimit}
                setDownloadLimit={setDownloadLimit}
                uploadLimit={uploadLimit}
                setUploadLimit={setUploadLimit}
                burstDownload={burstDownload}
                setBurstDownload={setBurstDownload}
                burstUpload={burstUpload}
                setBurstUpload={setBurstUpload}
                priority={priority}
                setPriority={setPriority}
                vpnProtocols={vpnProtocols}
                setVpnProtocols={setVpnProtocols}
                wanCount={wanCount}
                setWanCount={setWanCount}
                lanInterface={lanInterface}
                setLanInterface={setLanInterface}
                routerIdentity={routerIdentity}
                setRouterIdentity={setRouterIdentity}
                dnsServers={dnsServers}
                setDnsServers={setDnsServers}
                networkIp={networkIp}
                setNetworkIp={setNetworkIp}
                startIp={startIp}
                setStartIp={setStartIp}
                endIp={endIp}
                setEndIp={setEndIp}
                globalDown={globalDown}
                setGlobalDown={setGlobalDown}
                globalUp={globalUp}
                setGlobalUp={setGlobalUp}
                clientDown={clientDown}
                setClientDown={setClientDown}
                clientUp={clientUp}
                setClientUp={setClientUp}
                hotspotName={hotspotName}
                setHotspotName={setHotspotName}
                hotspotDns={hotspotDns}
                setHotspotDns={setHotspotDns}
                bgpAsn={bgpAsn}
                setBgpAsn={setBgpAsn}
                bgpRouterId={bgpRouterId}
                setBgpRouterId={setBgpRouterId}
                knockPort={knockPort}
                setKnockPort={setKnockPort}
                poolName={poolName}
                setPoolName={setPoolName}
                poolRange={poolRange}
                setPoolRange={setPoolRange}
                profileName={profileName}
                setProfileName={setProfileName}
                profileLocalAddress={profileLocalAddress}
                setProfileLocalAddress={setProfileLocalAddress}
                profileRemoteAddress={profileRemoteAddress}
                setProfileRemoteAddress={setProfileRemoteAddress}
                profileRateLimit={profileRateLimit}
                setProfileRateLimit={setProfileRateLimit}
                profileDns={profileDns}
                setProfileDns={setProfileDns}
                secretName={secretName}
                setSecretName={setSecretName}
                secretPassword={secretPassword}
                setSecretPassword={setSecretPassword}
                secretProfile={secretProfile}
                setSecretProfile={setSecretProfile}
                secretService={secretService}
                setSecretService={setSecretService}
                secretLocalAddress={secretLocalAddress}
                setSecretLocalAddress={setSecretLocalAddress}
                secretRemoteAddress={secretRemoteAddress}
                setSecretRemoteAddress={setSecretRemoteAddress}
              />
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button 
                onClick={generateScript}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-sm shadow-blue-600/20 transition-all flex items-center justify-center gap-3 text-lg"
              >
                <Zap size={24} />
                Generate Script
              </button>
            </div>
          </div>

          <ScriptOutput 
            generatedScript={generatedScript}
            osVersion={osVersion}
            isCopied={isCopied}
            copyToClipboard={copyToClipboard}
          />
        </main>
      </div>

      <Footer />

      {/* --- Floating WhatsApp --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/8801730173050"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-600/30 flex items-center gap-3 font-semibold hover:scale-105 transition-transform border border-green-500"
        >
          <MessageCircle size={24} />
          <span className="hidden md:inline">Support</span>
        </a>
      </div>
    </div>
  );
}

export default App;
