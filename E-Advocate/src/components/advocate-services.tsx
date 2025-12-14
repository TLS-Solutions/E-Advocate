"use client"; // For Next.js app router (13+)
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { DashboardHeader } from "@/components/dashboard-header";
import { WelcomePage } from "@/components/welcome-page";

const letterVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.12,
    },
  },
};

export default function LogoWelcomeAnimation() {
  // phase control:
  // 0 = show image
  // 1 = show name animation
  // 2 = finished (nothing shown)
  const [phase, setPhase] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    // image visible for 1.2s, then fade out -> show name after short gap
    const t1 = setTimeout(() => setPhase(1), 1200); // moves to name
    // hide name after additional time (name animation + hold)
    const t2 = setTimeout(() => setPhase(2), 1200 + 800); // total ~2.0s
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const welcomeText = "Welcome ";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-slate-900">
      <AnimatePresence mode="wait">
        {phase === 0 && (
          <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: [0.98, 1.12, 1] }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5 } }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center gap-6 p-6"
          >
            <motion.div
              className="w-40 h-40 md:w-72 md:h-72 relative"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/logo-NoBG.png"
                alt="E Advocate Services Logo"
                width={800}
                height={800}
                priority
                className="bg-white rounded-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}

        {phase === 1 && (
          <motion.div
            key="name"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 1.5 } }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center p-6"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/Lawyer-gavel.png"
                alt="E Advocate Services Logo"
                width={500}
                height={500}
                priority
                className="object-cover rounded"
              />
            </motion.div>

            <motion.div
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white"
            >
              {welcomeText.split("").map((char, i) => (
                <motion.span
                  key={`w-${i}`}
                  variants={letterVariant}
                  className="inline-block text-md"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}

        {phase === 2 && (
          <main>
            <DashboardHeader />
            <WelcomePage />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
