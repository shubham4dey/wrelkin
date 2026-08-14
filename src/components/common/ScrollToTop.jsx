import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  /* =========================================
     ROUTE CHANGE PAR TOP PAR LE JAO
  ========================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  /* =========================================
     BUTTON VISIBILITY
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     SCROLL TO TOP
  ========================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 20,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="fixed bottom-6 right-5 z-[100] sm:bottom-8 sm:right-8"
        >
          {/* =====================================
              TOOLTIP
          ===================================== */}

          <div className="pointer-events-none absolute right-full top-1/2 mr-4 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 dark:bg-white dark:text-gray-900">
            Back to top
          </div>

          {/* =====================================
              BUTTON
          ===================================== */}

          <motion.button
            onClick={scrollToTop}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-green-600 shadow-2xl backdrop-blur-xl transition-colors duration-300 hover:bg-green-600 hover:text-white dark:bg-[#0D2116]/90 dark:text-green-400 dark:hover:bg-green-500"
            aria-label="Back to top"
          >
            {/* =====================================
                PULSING GLOW
            ===================================== */}

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full bg-green-500/30 blur-xl"
            />

            {/* =====================================
                PROGRESS RING
            ===================================== */}

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
              viewBox="0 0 56 56"
            >
              {/* Background Ring */}

              <circle
                cx="28"
                cy="28"
                r="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-200 dark:text-white/10"
              />

              {/* Progress Ring */}

              <motion.circle
                cx="28"
                cy="28"
                r="25"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{
                  pathLength: smoothProgress,
                }}
              />

              <defs>
                <linearGradient
                  id="progressGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="#10b981"
                  />

                  <stop
                    offset="100%"
                    stopColor="#84cc16"
                  />
                </linearGradient>
              </defs>
            </svg>

            {/* =====================================
                ARROW
            ===================================== */}

            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="relative z-10"
            >
              <ArrowUp
                size={22}
                strokeWidth={2.5}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}