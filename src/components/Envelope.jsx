import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 2400); 
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F2620] overflow-hidden"
      animate={{ 
         backgroundColor: isOpen ? 'rgba(31,38,32,0)' : '#1F2620',
         opacity: isOpen ? 0 : 1
      }}
      transition={{ delay: 1.6, duration: 0.8 }}
    >
      <motion.div className="relative w-[320px] h-[220px]">
        {/* Back of Envelope */}
        <motion.div 
          className="absolute inset-0 bg-[#E8E6E0] rounded-sm shadow-2xl"
          animate={{ y: isOpen ? 500 : 0, opacity: isOpen ? [1, 1, 1, 0] : 1 }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeIn' }}
        />

        {/* The Invitation Card sliding up and scaling - Structural Parity */}
        <motion.div 
          className="absolute inset-x-3 top-4 h-[200px] bg-[var(--ivory)] rounded-t-lg flex flex-col items-center justify-start pt-8 border border-[var(--gold)]/15 z-10"
          initial={{ y: 0, scale: 1 }}
          animate={{ 
            y: isOpen ? -180 : 0,
            scale: isOpen ? [1, 1, 1, 10] : 1, 
          }}
          transition={{ duration: 2.2, times: [0, 0.2, 0.6, 1], ease: "easeInOut" }}
        >
          <motion.div 
            animate={{ opacity: isOpen ? 0 : 1 }} 
            transition={{ delay: 0.8, duration: 0.4 }}
            className="px-4 text-center"
          >
            <p className="font-inter text-[8px] uppercase tracking-[0.3em] text-[var(--gold)] mb-3 opacity-80">{weddingData.strings.envelopeSmallTitle}</p>
            <p className="font-playfair italic text-3xl text-[var(--text-dark)] drop-shadow-sm">
              {weddingData.couple.groom} 
              <span className="text-[var(--sage)] text-xl mx-2">&amp;</span> 
              {weddingData.couple.bride}
            </p>
          </motion.div>
        </motion.div>

        {/* Front Flaps Layer (Parity with Hindu) */}
        <motion.div 
          className="absolute inset-0 overflow-hidden rounded-sm pointer-events-none z-20"
          animate={{ y: isOpen ? 500 : 0, opacity: isOpen ? [1, 1, 1, 0] : 1 }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeIn' }}
        >
          {/* Left Flap */}
          <div 
            className="absolute bg-[#F0EEEA] border-r border-t border-white/40"
            style={{
              width: '240px', height: '240px',
              transform: 'rotate(45deg)',
              left: '-120px', top: '10px'
            }}
          />
          {/* Right Flap */}
          <div 
            className="absolute bg-[#F0EEEA] border-l border-t border-white/40"
            style={{
              width: '240px', height: '240px',
              transform: 'rotate(45deg)',
              right: '-120px', top: '10px'
            }}
          />
          {/* Bottom Flap */}
          <div 
            className="absolute bg-[#EAE8E2] shadow-[0_-4px_15px_rgba(0,0,0,0.02)]"
            style={{
              width: '320px', height: '320px',
              transform: 'rotate(45deg)',
              left: '0px', top: '70px'
            }}
          />
        </motion.div>

        {/* Top Flap (Animated - Parity) */}
        <motion.div 
          className="absolute inset-x-0 top-0 h-[120px] origin-top z-30"
          initial={{ rotateX: 0, y: 0, opacity: 1 }}
          animate={{ 
            rotateX: isOpen ? -180 : 0,
            y: isOpen ? [0, 0, 500] : 0,
            opacity: isOpen ? [1, 1, 0] : 1
          }}
          transition={{ duration: 1.8, times: [0, 0.3, 1], ease: "easeInOut" }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* The Flap Triangle */}
          <div 
            className="absolute w-full h-[160px] bg-[#DED9CE] drop-shadow-md origin-top flex items-end justify-center"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          />

          {/* Wax Seal Button (Gold/Emerald Seal) */}
          {!isOpen && (
            <button 
              onClick={handleOpen} 
              className="absolute z-10 bottom-[-24px] left-1/2 -ml-9 w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[var(--gold)] via-[var(--gold-light)] to-[#B39330] shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center justify-center text-white border-2 border-[#fff]/40 hover:scale-105 active:scale-95 transition-all group"
            >
              {/* Wax effect + Islamic Initials */}
              <div className="flex flex-col items-center">
                <span className="font-playfair italic text-xl drop-shadow-md tracking-tighter text-[#4A634A]">{weddingData.couple.initials}</span>
                <div className="w-4 h-4 mt-1 opacity-80 text-[#4A634A]">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15 10H22L16 15L18 22L12 17L6 22L8 15L2 10H9L12 2Z" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>
              </div>
            </button>
          )}
        </motion.div>
      </motion.div>
      
      {/* Instruction text */}
      {!isOpen && (
        <motion.p 
          className="absolute bottom-12 text-white/50 font-inter text-[10px] tracking-[0.4em] uppercase pointer-events-none"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          Tap the seal to open
        </motion.p>
      )}
    </motion.div>
  );
}
