import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Factory,
  Leaf,
  Recycle,
  Zap,
  TrendingUp,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const cards = [
  {
    icon: Recycle,
    number: "01",
    title: "Organic Waste",
    text: "Agricultural, food and organic waste becomes a valuable resource instead of going to waste.",
    color: "from-emerald-400 to-green-600",
    glowColor: "rgba(52, 211, 153, 0.20)",
  },
  {
    icon: Factory,
    number: "02",
    title: "Biogas Plant",
    text: "Advanced anaerobic digestion systems convert organic feedstock into green  renewable biogas.",
    color: "from-lime-400 to-emerald-500",
    glowColor: "rgba(163, 230, 53, 0.20)",
  },
  {
    icon: Zap,
    number: "03",
    title: "Green Energy",
    text: "Biogas can be utilised for power, heat, cooking fuel and upgraded renewable energy applications.",
    color: "from-amber-400 to-orange-500",
    glowColor: "rgba(251, 191, 36, 0.18)",
  },
];

export default function AboutPreview() {
  return (
    <section
      data-component="AboutPreview"
      className="relative overflow-hidden bg-white py-20 text-gray-900 transition-colors duration-500 dark:bg-[#04100a] dark:text-white sm:py-24 lg:py-28"
    >
      <CinematicBackground />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 dark:border-green-800/40 dark:bg-green-900/20 dark:text-green-300"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Leaf size={15} />
              </motion.div>

              <span>Turning Waste Into Value</span>
            </motion.div>

            <p className="mt-6 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
              Sustainable technology that transforms organic waste into
              renewable energy and useful resources.
            </p>
          </motion.div>

          {/* RIGHT HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
              <SplitText text="We turn" delay={0.1} />

              <span className="relative inline-block text-green-600 dark:text-green-400">
                <motion.span
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-x-0 bottom-1 top-1 -z-0 rounded-lg bg-gradient-to-r from-emerald-400/20 to-lime-400/20"
                />

                <span className="relative z-10"> waste</span>
              </span>{" "}

              into

              <br className="hidden sm:block" />

              <SplitText text="green energy." delay={0.45} />
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <AdvancedCircularVisual />
          <AdvancedRightContent />
        </div>

        {/* =====================================================
            PROCESS CARDS
        ====================================================== */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <AdvancedProcessCard
              key={card.number}
              card={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CINEMATIC BACKGROUND
========================================================= */

function CinematicBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Left Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-emerald-300/30 blur-[120px] dark:bg-emerald-600/10"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-lime-300/25 blur-[120px] dark:bg-lime-600/10"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 80%)",
        }}
      />

      {/* Small particles */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -18, 0],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-emerald-500 dark:bg-emerald-400"
          style={{
            left: `${12 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   SPLIT TEXT
========================================================= */

function SplitText({ text, delay }) {
  const words = text.split(" ");

  return (
    <span className="inline-block">
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.08,
          }}
          className="mr-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* =========================================================
   MAIN VISUAL
========================================================= */

function AdvancedCircularVisual() {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });

  const glowX = useTransform(smoothX, (value) => value * 0.25);
  const glowY = useTransform(smoothY, (value) => value * 0.25);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-green-200/20 bg-[#092217] shadow-xl shadow-green-950/10 dark:border-green-900/40 dark:shadow-black/20"
    >
      {/* Main Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-400 blur-[100px]"
      />

      {/* Mouse Glow */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/15 blur-3xl"
      />

      {/* =====================================================
          CIRCULAR SYSTEM
      ====================================================== */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Outer Ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative h-72 w-72 rounded-full border border-green-400/15"
        >
          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />

          <span className="absolute bottom-8 left-4 h-2 w-2 rounded-full bg-emerald-300" />

          <span className="absolute right-3 top-1/2 h-2 w-2 rounded-full bg-green-300" />

          <span className="absolute bottom-12 left-8 h-1.5 w-1.5 rounded-full bg-lime-300" />
        </motion.div>

        {/* Middle Ring */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/20"
        >
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />

          <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-lime-300" />
        </motion.div>

        {/* Inner Ring */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-400/25"
        />

        {/* Core */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-green-300/30 bg-green-500/10 backdrop-blur-md"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 50px rgba(34,197,94,0.25)",
                "0 0 70px rgba(34,197,94,0.45)",
                "0 0 50px rgba(34,197,94,0.25)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 text-white"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Leaf size={34} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          FLOATING STATS
      ====================================================== */}

      <FloatingStatCard
        icon={TrendingUp}
        label="Efficiency"
        value="94.7%"
        position="left-4 top-5 sm:left-6 sm:top-6"
        delay={0}
      />

      <FloatingStatCard
        icon={Zap}
        label="Energy Output"
        value="2.4 MW"
        position="right-4 top-5 sm:right-6 sm:top-6"
        delay={0.2}
      />

      <FloatingStatCard
        icon={Globe}
        label="Carbon Offset"
        value="12.4K T"
        position="bottom-20 left-4 sm:left-6"
        delay={0.4}
      />

      {/* Bottom Branding */}
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-6 sm:left-6 sm:right-6">
        <div>
          <p className="text-xs font-medium text-green-300">
            WRELKIN
          </p>

          <p className="mt-1 text-base font-semibold text-white sm:text-xl">
            Waste → Biogas → Energy
          </p>
        </div>

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 45,
          }}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-green-300 backdrop-blur-md sm:flex"
        >
          <ArrowUpRight size={19} />
        </motion.div>
      </div>

      {/* Connection Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="20%"
          y1="30%"
          x2="50%"
          y2="50%"
          stroke="#34d399"
          strokeWidth="1"
          strokeDasharray="4 5"
          initial={{
            pathLength: 0,
          }}
          whileInView={{
            pathLength: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.8,
          }}
        />

        <motion.line
          x1="80%"
          y1="25%"
          x2="50%"
          y2="50%"
          stroke="#a3e635"
          strokeWidth="1"
          strokeDasharray="4 5"
          initial={{
            pathLength: 0,
          }}
          whileInView={{
            pathLength: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.8,
            delay: 0.25,
          }}
        />
      </svg>
    </motion.div>
  );
}

/* =========================================================
   FLOATING STAT CARD
========================================================= */

function FloatingStatCard({
  icon: Icon,
  label,
  value,
  position,
  delay,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute z-20 ${position} rounded-2xl border border-white/10 bg-black/30 px-3 py-2.5 backdrop-blur-xl sm:px-4 sm:py-3`}
    >
      <div className="flex items-center gap-2 sm:gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-lg sm:h-9 sm:w-9">
          <Icon size={15} />
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-wider text-gray-400 sm:text-[10px]">
            {label}
          </p>

          <p className="text-xs font-bold text-white sm:text-sm">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   RIGHT CONTENT
========================================================= */

function AdvancedRightContent() {
  const features = [
    {
      text: "Organic waste management",
      icon: Recycle,
      progress: 95,
    },
    {
      text: "Biogas plant solutions",
      icon: Factory,
      progress: 88,
    },
    {
      text: "Renewable energy generation",
      icon: Zap,
      progress: 92,
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-7 dark:border-white/10 dark:bg-white/[0.025] sm:p-9"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl"
      />

      <div className="relative">
        <p className="max-w-xl text-lg leading-8 text-gray-700 dark:text-gray-300">
          WRELKIN INDIA PRIVATE LIMITED focuses on building sustainable
          biogas solutions that help industries, businesses and communities
          manage organic waste while generating green and renewable energy.
        </p>

        <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 dark:text-gray-400">
          Our approach connects waste management, anaerobic digestion and
          energy generation into one practical ecosystem — creating value
          from resources that would otherwise be lost.
        </p>
      </div>

      {/* Feature Points */}
      <div className="mt-10 space-y-5">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.text}
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15 + index * 0.08,
              }}
              className="group"
            >
              <div className="flex items-center gap-3 pb-2">
                <motion.span
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                >
                  <Icon size={14} />
                </motion.span>

                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {item.text}
                </span>
              </div>

              <div className="h-1 overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${item.progress}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.25 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-9">
        <Link to="/about">
          <motion.button
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/15 transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/20 dark:bg-green-500 dark:hover:bg-green-600"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 3,
              }}
            />

            <span className="relative z-10">
              Discover WRELKIN
            </span>

            <ArrowUpRight
              size={17}
              className="relative z-10 transition-transform duration-300 group-hover:rotate-45"
            />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PROCESS CARD
========================================================= */

function AdvancedProcessCard({ card, index }) {
  const Icon = card.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-green-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
    >
      {/* Hover Glow */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.35,
        }}
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl"
        style={{
          background: card.glowColor,
        }}
      />

      {/* Top Row */}
      <div className="relative z-10 flex items-start justify-between">
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg`}
        >
          <Icon size={20} />
        </motion.div>

        <span className="text-xs font-medium text-gray-400 dark:text-gray-600">
          {card.number}
        </span>
      </div>

      <h3 className="relative z-10 mt-6 text-lg font-semibold text-gray-900 dark:text-white">
        {card.title}
      </h3>

      <p className="relative z-10 mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
        {card.text}
      </p>

      {/* Arrow */}
      <motion.div
        initial={{
          opacity: 0,
          x: -8,
        }}
        whileHover={{
          opacity: 1,
          x: 0,
        }}
        className="absolute bottom-6 right-6"
      >
        <ArrowUpRight
          size={18}
          className="text-green-500"
        />
      </motion.div>

      {/* Shine */}
      <motion.div
        initial={{
          x: "-120%",
        }}
        whileHover={{
          x: "120%",
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 z-20 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-gray-900/5 to-transparent dark:via-white/10"
      />
    </motion.div>
  );
}