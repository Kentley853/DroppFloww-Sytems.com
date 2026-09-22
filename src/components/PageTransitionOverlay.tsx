import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { DfLogo } from "./DfLogo";

interface PageTransitionOverlayProps {
  isTransitioning: boolean;
  destinationTitle?: string;
}

export const PageTransitionOverlay: React.FC<PageTransitionOverlayProps> = ({
  isTransitioning,
  destinationTitle,
}) => {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="page-transition-curtain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1728] text-white select-none pointer-events-auto"
          aria-live="assertive"
          aria-busy="true"
        >
          {/* Subtle atmospheric ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(62, 95, 130, 0.35) 0%, rgba(11, 23, 40, 0.95) 70%)",
            }}
          />

          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.04, opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Monogram Brand Mark with subtle soft pulse */}
            <div className="relative mb-6">
              <div className="absolute -inset-4 rounded-full bg-[#3E5F82]/20 blur-xl animate-pulse" />
              <DfLogo markSize={56} theme="dark" idPrefix="transition" />
            </div>

            {destinationTitle && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="flex items-center gap-2.5 text-[13px] text-[#8DB8E0] font-medium tracking-wide mt-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8DB8E0] animate-ping" />
                <span>{destinationTitle}</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
