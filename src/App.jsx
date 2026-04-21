import React, { useEffect, useState } from 'react';
import './features.css';
import Envelope from './components/Envelope';
import HeroCover from './components/HeroCover';
import InsideDetails from './components/InsideDetails';
import Gallery from './components/Gallery';
import VenueSection from './components/VenueSection';
import ReceptionSection from './components/ReceptionSection';
import FamilySection from './components/FamilySection';
import RSVPForm from './components/RSVPForm';
import MusicWidget from './components/MusicWidget';
import AdminDashboard from './components/AdminDashboard';
import ScrollProgress from './components/ScrollProgress';
import { DarkModeToggle } from './components/UIControls';
import { useDarkMode } from './hooks/useLabHooks';
import { trackOpen } from './utils/analytics';

function FloatingLantern({ style, className }) {
  return (
    <div className={`fixed pointer-events-none z-0 ${className}`} style={style}>
      <svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <path d="M25 15 L35 15 L38 30 L22 30 Z" fill="var(--gold)" fillOpacity="0.15" />
        <path d="M22 30 L38 30 L45 75 L15 75 Z" fill="var(--gold)" fillOpacity="0.08" stroke="var(--gold)" strokeWidth="0.5" strokeOpacity="0.2" />
        <path d="M15 75 L45 75 L40 85 L20 85 Z" fill="var(--gold)" fillOpacity="0.15" />
        <path d="M30 0 L30 15" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="30" cy="52" r="5" fill="var(--gold)" fillOpacity="0.2" />
      </svg>
    </div>
  );
}

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [dark, setDark] = useDarkMode();

  const params = new URLSearchParams(window.location.search);
  const guestName = params.get('guest') || '';

  useEffect(() => { if (loaderDone) trackOpen(guestName); }, [loaderDone, guestName]);

  if (window.location.pathname === '/admin') return <AdminDashboard />;

  return (
    <div className="relative w-full">
      {loaderDone && <ScrollProgress />}
      {loaderDone && <DarkModeToggle dark={dark} setDark={setDark} />}
      {!loaderDone && <Envelope onOpen={() => setLoaderDone(true)} />}

      <FloatingLantern className="float-leaf"       style={{ top: '8%',  left:  '-15px', width: 75, height: 100, opacity: 0.6 }} />
      <FloatingLantern className="float-leaf-delay" style={{ top: '12%', right: '-15px', width: 60, height: 85,  opacity: 0.5, transform: 'scaleX(-1)' }} />
      <FloatingLantern className="float-leaf"       style={{ top: '50%', left:  '-12px', width: 50, height: 75,  opacity: 0.4, transform: 'rotate(15deg)' }} />
      <FloatingLantern className="float-leaf-delay" style={{ top: '58%', right: '-12px', width: 50, height: 75,  opacity: 0.4, transform: 'rotate(-15deg) scaleX(-1)' }} />

      <div className="scroll-container">
        <HeroCover guestName={guestName} />
        <InsideDetails />
        <VenueSection />
        <ReceptionSection />
        <Gallery />
        <FamilySection />
        <RSVPForm />
      </div>

      {loaderDone && <MusicWidget />}
    </div>
  );
}

