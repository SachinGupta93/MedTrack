import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import ScrollToTop from './components/ScrollToTop';

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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <Screenshots />
              <HowItWorks />
              <Team />
              <Download />
            </main>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default StatsigWrapper;