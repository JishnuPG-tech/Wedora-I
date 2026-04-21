import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';

// Floating decorative lantern SVG
const LanternSvg = ({ className }) => (
  <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M40 10 L45 25 L35 25 Z" fill="var(--gold)" fillOpacity="0.15" />
    <rect x="30" y="25" width="20" height="40" rx="3" fill="var(--gold)" fillOpacity="0.08" stroke="var(--gold)" strokeWidth="0.8" strokeOpacity="0.3" />
    <path d="M25 65 L55 65 L50 80 L30 80 Z" fill="var(--gold)" fillOpacity="0.15" />
    <path d="M40 0 L40 10" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.4" />
  </svg>
);

// Minimalist Moon/Star accent
const CrescentMini = () => (
  <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-10 mx-auto opacity-70">
    <path d="M35 15 A 15 15 0 1 1 20 40 A 10 10 0 1 0 35 15 Z" fill="var(--gold)" fillOpacity="0.6" stroke="var(--gold)" strokeWidth="0.5" />
    <circle cx="20" cy="20" r="2" fill="var(--gold)" opacity="0.8" />
    <circle cx="45" cy="45" r="1.5" fill="var(--gold)" opacity="0.6" />
    <circle cx="15" cy="55" r="1" fill="var(--gold)" opacity="0.4" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function HeroCover({ guestName }) {
  return (
    <section className="scroll-section relative flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background decorative lanterns */}
      <div className="float-leaf absolute -top-4 -left-6 opacity-40 pointer-events-none" style={{ width: 100 }}>
        <LanternSvg />
      </div>
      <div className="float-leaf-delay absolute -top-2 -right-8 opacity-30 pointer-events-none scale-x-[-1]" style={{ width: 80 }}>
        <LanternSvg />
      </div>
      <div className="float-leaf absolute -bottom-8 -left-4 opacity-25 pointer-events-none rotate-180" style={{ width: 90 }}>
        <LanternSvg />
      </div>
      <div className="float-leaf-delay absolute -bottom-6 -right-6 opacity-25 pointer-events-none rotate-180 scale-x-[-1]" style={{ width: 70 }}>
        <LanternSvg />
      </div>

      {/* Main card */}
      <div className="w-full max-w-sm mx-auto px-6 py-12 text-center z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-card floral-border rounded-[20px] px-8 py-10 relative"
        >
          {/* Corner flourishes */}
          <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-[var(--gold)] border-opacity-20 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-[var(--gold)] border-opacity-20 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-[var(--gold)] border-opacity-20 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-[var(--gold)] border-opacity-20 rounded-br-lg" />

          {/* Guest personalization badge */}
          {guestName ? (
            <motion.div variants={itemVariants} className="flex justify-center mb-5">
              <motion.div
                animate={{ boxShadow: ['0px 0px 0px rgba(184,145,58,0)', '0px 4px 24px rgba(184,145,58,0.25)', '0px 0px 0px rgba(184,145,58,0)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block relative rounded-full px-7 py-3 bg-gradient-to-br from-[var(--ivory)] to-[#F2EBE0] border border-[var(--gold)]/30 overflow-hidden shadow-sm"
              >
                <motion.div
                  animate={{ x: ['-200%', '250%'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
                  className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 z-0"
                />
                <p className="relative z-10 font-inter text-[9px] uppercase tracking-[0.25em] text-[var(--text-muted)] leading-relaxed">
                  Exclusively Invited
                  <span className="font-semibold text-[var(--gold)] tracking-[0.2em] text-[11px] mt-0.5 block drop-shadow-sm">{guestName}</span>
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div variants={itemVariants} className="flex justify-center mb-5">
              <div className="inline-block border border-[var(--gold)]/20 shadow-sm rounded-full px-6 py-2 bg-[var(--cream)]/40 backdrop-blur-sm">
                <p className="font-inter text-[10px] uppercase tracking-[0.35em] text-[var(--gold)] font-medium">
                  Wedding Invitation
                </p>
              </div>
            </motion.div>
          )}

          {/* Bismillah */}
          <motion.div variants={itemVariants} className="mb-5 mt-0 px-2">
            <p className="font-amiri text-xl text-[var(--gold)] leading-none mb-2 opacity-90 drop-shadow-sm">
              {weddingData.strings.bismillahArabic}
            </p>
            <p className="font-cormorant text-[15px] italic text-[var(--text-muted)] opacity-80 leading-relaxed max-w-[240px] mx-auto">
              {weddingData.strings.inviteSecondaryEn}
            </p>
          </motion.div>

          {/* Couple names */}
          <motion.h1 variants={itemVariants} className="font-playfair font-bold text-5xl leading-[0.9] tracking-[-0.02em] mb-2 gold-shimmer drop-shadow-sm">
            {weddingData.couple.groom}
          </motion.h1>
          <motion.p variants={itemVariants} className="font-cormorant italic text-lg text-[var(--sage)] opacity-60 mb-2">
            {weddingData.couple.ampersand}
          </motion.p>
          <motion.h1 variants={itemVariants} className="font-playfair font-bold text-5xl leading-[0.9] tracking-[-0.02em] mb-8 gold-shimmer drop-shadow-sm">
            {weddingData.couple.bride}
          </motion.h1>

          {/* Crescent icon */}
          <motion.div variants={itemVariants} className="mb-4">
            <CrescentMini />
          </motion.div>

          {/* Date teaser */}
          <motion.div variants={itemVariants}>
            <div className="ornamental-divider text-[var(--gold)] text-xs mb-4">
              <span className="opacity-30">✧</span>
            </div>
            <p className="font-inter text-[12px] uppercase tracking-[0.3em] text-[var(--text-dark)] opacity-70 font-medium">
              {weddingData.dates.headerDisplay}
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] opacity-70">Swipe up to open</p>
          <div className="scroll-indicator text-[var(--sage)] opacity-50">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
