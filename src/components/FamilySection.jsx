import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { weddingData } from '../config/weddingData';

const FamilyCard = ({ side, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const data = weddingData.family[side];
  const isGroom = side === 'groom';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className="glass-card rounded-2xl px-6 py-6 relative overflow-hidden"
    >
      {/* Side accent bar */}
      <div
        className={`absolute top-0 bottom-0 w-[3px] ${isGroom ? 'left-0' : 'right-0'} bg-gradient-to-b from-transparent via-[var(--sage)]/50 to-transparent`}
      />

      <div className="text-center">
        {/* Role label */}
        <p className="font-inter text-[9px] uppercase tracking-[0.35em] text-[var(--sage-dark)] mb-2 opacity-80">
          {isGroom ? "Groom's Family" : "Bride's Family"}
        </p>

        {/* Name */}
        <p className="font-cormorant italic font-semibold text-xl text-[var(--text-dark)] mb-3">
          {data.name}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--gold)]/20" />
          <span className="text-[var(--gold)] text-[10px] opacity-60">◆</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--gold)]/20" />
        </div>

        {/* Relation line */}
        <p className="font-inter text-[9.5px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2 opacity-70">
          {data.relation}
        </p>

        {/* Father */}
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="font-inter text-[10px] text-[var(--sage)] opacity-70">S/o</span>
          <p className="font-cormorant text-base text-[var(--text-dark)] font-medium">{data.father}</p>
        </div>

        {/* Mother */}
        <div className="flex items-center justify-center gap-2">
          <span className="font-inter text-[10px] text-[var(--sage)] opacity-70">&</span>
          <p className="font-cormorant text-base text-[var(--text-dark)] font-medium">{data.mother}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function FamilySection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section className="scroll-section flex items-center justify-center bg-transparent px-5 py-10 overflow-hidden">
      <div className="w-full max-w-sm mx-auto">

        {/* Heading */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <p className="font-inter text-[10px] uppercase tracking-[0.4em] text-[var(--gold)] mb-3 opacity-80">
            With Blessings Of
          </p>
          <h2 className="font-cormorant italic text-3xl font-medium text-[var(--text-dark)] drop-shadow-sm">
            Our Families
          </h2>
          <p className="font-amiri text-base text-[var(--gold)] mt-2 opacity-70">
            بِبَرَكَةِ الْوَالِدَيْن
          </p>
          <p className="font-cormorant italic text-xs text-[var(--text-muted)] mt-1 opacity-60">
            With the blessings of our parents
          </p>
        </motion.div>

        {/* Two family cards */}
        <div className="flex flex-col gap-4">
          <FamilyCard side="groom" delay={0.1} />

          {/* Centre divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--sage)]/30 to-[var(--sage)]/30" />
            <div className="w-9 h-9 rounded-full border border-[var(--gold)]/30 flex items-center justify-center bg-white/60 shadow-sm">
              <span className="font-cormorant italic text-xl text-[var(--gold)] font-bold">&</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--sage)]/30 to-[var(--sage)]/30" />
          </motion.div>

          <FamilyCard side="bride" delay={0.45} />
        </div>

        {/* Blessing footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-6"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent mx-auto mb-3" />
          <p className="font-cormorant italic text-[13px] text-[var(--text-muted)] leading-relaxed opacity-80">
            Together with our parents' duas,<br />
            we begin our journey as one
          </p>
        </motion.div>

      </div>
    </section>
  );
}
