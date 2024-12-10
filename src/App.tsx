import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    window.plugSDK.init({
      app_id: 'don:core:dvrv-in-1:devo/2g41CxOrxx:plug_setting/1',
      disable_plug_chat_window: true,
    });
    
    window.plugSDK.onEvent((payload) => {
      if (payload.type === 'ON_PLUG_WIDGET_READY') {
        window.plugSDK.initSearchAgent();
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <HowItWorks />
        <Team />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
export default App;