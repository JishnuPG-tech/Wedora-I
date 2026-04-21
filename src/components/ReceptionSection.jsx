import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { weddingData } from '../config/weddingData';

export default function ReceptionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="scroll-section flex items-center justify-center bg-transparent px-6 py-8">
      <div className="w-full max-w-sm mx-auto">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-inter text-[10px] uppercase tracking-[0.4em] text-[var(--gold)] mb-2 opacity-80">
            Following the Nikah
          </p>
          <h2 className="font-cormorant italic text-3xl font-medium text-[var(--text-dark)] drop-shadow-sm">
            Walima Reception
          </h2>
          {/* Islamic geometric divider */}
          <div className="flex items-center gap-3 justify-center mt-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold)]/40" />
            <svg viewBox="0 0 30 20" fill="none" className="w-6 h-4 opacity-60">
              <path d="M15 4 L20 10 L15 16 L10 10 Z" fill="var(--gold)" fillOpacity="0.5"/>
              <circle cx="5" cy="10" r="1.5" fill="var(--sage-dark)" />
              <circle cx="25" cy="10" r="1.5" fill="var(--sage-dark)" />
            </svg>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold)]/40" />
          </div>
        </motion.div>

        {/* Reception Card */}
        <div className="glass-card floral-border rounded-[20px] overflow-hidden">

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="w-full relative overflow-hidden"
            style={{ height: 150 }}
          >
            <iframe
              title="Reception Venue Map"
              src={weddingData.reception.links.googleMapsEmbed}
              className="w-full h-full border-0 pointer-events-none"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[var(--sage)] opacity-10 pointer-events-none" />
          </motion.div>

          <div className="px-6 py-5">
            {/* Time badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-inter uppercase tracking-[0.2em] text-[var(--sage-dark)] bg-[var(--sage)]/10 border border-[var(--sage)]/20">
                🕐 {weddingData.reception.timeText}
              </span>
            </motion.div>

            {/* Venue name & address */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-center mb-5"
            >
              <h3 className="font-cormorant font-semibold text-xl text-[var(--text-dark)] mb-1">
                {weddingData.reception.name}
              </h3>
              <p className="font-inter text-sm text-[var(--text-muted)] leading-relaxed">
                {weddingData.reception.addressEn[0]}<br />
                {weddingData.reception.addressEn[1]}
              </p>
            </motion.div>

            {/* Get Directions Button */}
            <motion.a
              href={weddingData.reception.links.googleMapsDirect}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.32, duration: 0.55 }}
              className="btn-primary flex items-center gap-2 justify-center w-full"
              style={{ textDecoration: 'none' }}
            >
              <MapPin size={16} strokeWidth={2} />
              <span>Get Directions</span>
            </motion.a>
          </div>
        </div>

        {/* Connecting note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-5 font-cormorant italic text-sm text-[var(--text-muted)] opacity-80"
        >
          All guests are warmly invited to the Walima
        </motion.p>

      </div>
    </section>
  );
}
