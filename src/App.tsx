import React, { useEffect } from 'react';
import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings';
import { runStatsigAutoCapture } from '@statsig/web-analytics';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Download from './components/Download';
import Footer from './components/Footer';

function StatsigWrapper() {
  const { client } = useClientAsyncInit('client-qmO9d1ziTV2OtgTHK7W8l7LBIbXAlz2V0w7hmQZugHJ', {
    userID: '1WvIjnkhDxOBiBoKtrKy6b', // Replace with actual user ID if available
  });

  useEffect(() => {
    if (client) {
      runStatsigAutoCapture(client);
    }
  }, [client]);

  return (
    <StatsigProvider client={client} loadingComponent={<div>Loading...</div>}>
      <App />
    </StatsigProvider>
  );
}

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

export default StatsigWrapper;