import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Zap, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import wrelkinLogo from "../../assets/Wrelkin_Logo.jpeg.png";

export default function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading");

  useEffect(() => {
    let current = 0;
    let finishTimer;
    let completeTimer;

    /*
     * FAST + SMOOTH LOADING
     *
     * Earlier loader intentionally took several seconds.
     * This version reaches 100% much faster while keeping
     * the same cinematic animation.
     */

    const interval = setInterval(() => {
      let increment;

      if (current < 55) {
        // Fast initial loading
        increment = 5;
      } else if (current < 80) {
        // Still fast but slightly smoother
        increment = 3;
      } else if (current < 95) {
        // Slow down near completion
        increment = 1.5;
      } else {
        // Final stage
        increment = 1;
      }

      current = Math.min(100, current + increment);

      setProgress(Math.floor(current));

      if (current >= 100) {
        clearInterval(interval);

        setPhase("finishing");

        /*
         * Very small finish delay so the final glow
         * animation remains visible without slowing
         * the website opening.
         */
        finishTimer = setTimeout(() => {
          completeTimer = setTimeout(() => {
            setPhase("done");
            onComplete?.();
          }, 180);
        }, 220);
      }
    }, 35);

    return () => {
      clearInterval(interval);

      if (finishTimer) {
        clearTimeout(finishTimer);
      }

      if (completeTimer) {
        clearTimeout(completeTimer);
      }
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#fafff7] dark:bg-[#04100a]"
        >
          <CinematicBackground phase={phase} />

          <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center">
            <LogoAnimation phase={phase} />

            <TextReveal />

            <ProgressBar progress={progress} />

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.35,
              }}
              className="mt-8 whitespace-nowrap"
            >
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500 sm:text-[10px]">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600" />
                WRELKIN INDIA PRIVATE LIMITED
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600" />
              </div>
            </motion.div>
          </div>

          {phase === "finishing" && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.22, 0],
              }}
              transition={{
                duration: 0.35,
              }}
              className="pointer-events-none absolute inset-0 z-50 bg-white dark:bg-emerald-950"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================================================
   BACKGROUND
========================================================= */

function CinematicBackground({ phase }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* CENTER GLOW */}

      <motion.div
        animate={{
          scale: phase === "finishing" ? 1.3 : 1,
          opacity: phase === "finishing" ? 0.8 : 0.55,
        }}
        transition={{
          duration: 0.6,
        }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-emerald-400/30 via-green-300/20 to-lime-400/30 blur-[100px] dark:from-emerald-500/20 dark:via-green-700/10 dark:to-lime-500/10"
      />

      {/* TOP LEFT */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-green-200/40 to-emerald-300/20 blur-[90px] dark:from-green-900/20 dark:to-emerald-900/10"
      />

      {/* BOTTOM RIGHT */}

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-lime-200/40 to-green-300/20 blur-[90px] dark:from-lime-900/20 dark:to-green-900/10"
      />

      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22,101,52,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,101,52,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black 35%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 35%, transparent 80%)",
        }}
      />

      {/* PARTICLES */}

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400"
          style={{
            left: `${25 + i * 25}%`,
            top: `${25 + (i % 2) * 30}%`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   LOGO
========================================================= */

function LogoAnimation({ phase }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 15,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mb-8"
    >
      {/* WAVES */}

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: phase === "finishing" ? 2.2 : 1.7,
            opacity: phase === "finishing" ? 0 : [0, 0.35, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            delay: i * 0.9,
            ease: "easeOut",
          }}
          className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/30 dark:border-emerald-400/20"
          style={{
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* OUTER RING */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-14px] rounded-full border border-dashed border-green-500/30 dark:border-green-400/20"
        style={{
          willChange: "transform",
        }}
      />

      {/* INNER RING */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-7px] rounded-full border border-transparent border-b-emerald-400 border-t-emerald-400"
        style={{
          willChange: "transform",
        }}
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400" />

        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-lime-400" />
      </motion.div>

      {/* LOGO */}

      <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-green-500/40 bg-white p-3 shadow-2xl dark:border-green-400/30 dark:bg-[#0D2116] sm:h-32 sm:w-32 sm:p-4">
        <img
          src={wrelkinLogo}
          alt="WRELKIN"
          className="h-full w-full rounded-full object-cover"
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   TEXT
========================================================= */

function TextReveal() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.15,
        duration: 0.4,
      }}
      className="mb-10"
    >
      <h1 className="text-3xl font-bold tracking-[0.15em] text-gray-900 dark:text-white sm:text-4xl">
        WRELKIN
      </h1>

      <div className="mt-4 flex items-center justify-center gap-3">
        <Leaf size={14} className="text-emerald-500" />

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Makes Way For Future
        </p>

        <Leaf size={14} className="text-emerald-500" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   PROGRESS
========================================================= */

function ProgressBar({ progress }) {
  return (
    <div className="w-full max-w-xs">
      {/* LABEL */}

      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap size={12} className="text-emerald-500" />

          <span className="text-[10px] font-semibold tracking-[0.12em] text-gray-500 dark:text-gray-400 sm:text-xs">
            INITIALIZING SYSTEMS
          </span>
        </div>

        <div className="flex items-baseline gap-0.5">
          <span className="text-lg font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
            {progress}
          </span>

          <span className="text-xs text-emerald-600/70 dark:text-emerald-400/70">
            %
          </span>
        </div>
      </div>

      {/* BAR */}

      <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-emerald-600 via-green-500 to-lime-400 transition-[width] duration-75 ease-linear"
          style={{
            width: `${progress}%`,
          }}
        />

        {/* SHINE */}

        <motion.div
          animate={{
            x: ["-100%", "500%"],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/35 to-transparent"
          style={{
            willChange: "transform",
          }}
        />
      </div>

      {/* FOOTER */}

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500">
        <Sparkles size={12} className="text-emerald-500" />
        Sustainable solutions. Smarter tomorrow.
      </p>
    </div>
  );
}
