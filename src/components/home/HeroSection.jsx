import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

import {
  ArrowDown,
  ArrowUpRight,
  Factory,
  Flame,
  Leaf,
  Recycle,
  Sparkles,
  Zap,
  Droplets,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";

import p6 from "../../assets/products/p6.png";

import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#f8fcf8] dark:bg-[#04100a]">
      {/* =====================================================
      BACKGROUND IMAGE
  ===================================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background Image */}
        <img
          src={p6}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-65 dark:opacity-30"
        />

        {/* Left overlay for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fcf8]/95 via-[#f8fcf8]/70 to-transparent dark:from-[#04100a]/95 dark:via-[#04100a]/65 dark:to-transparent" />

        {/* Top & Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/35 dark:from-black/20 dark:to-black/45" />

        {/* Soft green glow */}
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-emerald-300/15 blur-[120px] dark:bg-emerald-500/10" />

        <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-lime-300/10 blur-[120px] dark:bg-green-500/10" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(22,163,74,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(22,163,74,.18) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(circle at center, black 45%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 45%, transparent 100%)",
          }}
        />
      </div>
      {/* =====================================================
          AURORA AMBIENT BACKGROUND
      ===================================================== */}

      <AuroraBackground />

      {/* =====================================================
          ANIMATED MESH GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #15803d 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        {/* FIX: desktop/laptop pe left-right ke beech proper gap */}
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-16 2xl:gap-20">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-10 max-w-2xl">
            {/* EYEBROW */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 inline-flex max-w-full items-center gap-2 whitespace-nowrap rounded-full border border-green-200/70 bg-white/60 px-3 py-2 text-[9px] font-semibold tracking-[0.1em] text-green-700 shadow-sm backdrop-blur-xl dark:border-green-800/40 dark:bg-green-950/30 dark:text-green-300 sm:gap-3 sm:px-4 sm:text-[11px] sm:tracking-[0.18em]"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <Recycle size={13} className="shrink-0 text-emerald-600" />

              <span>BIOGAS • GREEN ENERGY • SUSTAINABILITY</span>
            </motion.div>
            {/* =================================================
                HEADING
            ================================================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[2.75rem] font-bold leading-[0.95] tracking-[-0.04em] text-gray-950 dark:text-white sm:text-6xl lg:text-[4.5rem] xl:text-[5.4rem]"
            >
              {/* Turning */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="block"
              >
                Turning
              </motion.span>

              {/* Organic waste */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                }}
                className="relative mt-2 block"
              >
                <span className="relative inline-block bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 bg-clip-text text-transparent">
                  organic waste
                </span>

                <motion.svg
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 1.1,
                    ease: "easeOut",
                  }}
                  className="absolute -bottom-2 left-0 h-3 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 8 Q 75 2, 150 6 T 298 4"
                    stroke="url(#grad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  <defs>
                    <linearGradient id="grad" x1="0" x2="1">
                      <stop offset="0%" stopColor="#10b981" />

                      <stop offset="100%" stopColor="#84cc16" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.span>

              {/* Green Energy */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="mt-2 block"
              >
                into{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Green energy.</span>

                  <motion.span
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 1.3,
                    }}
                    className="absolute inset-0 -z-0 rounded-full bg-lime-300/40 dark:bg-lime-400/20"
                  />
                </span>
              </motion.span>
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="mt-7 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg"
            >
              <span className="font-semibold text-gray-900 dark:text-white">
                WRELKIN INDIA
              </span>{" "}
              delivers integrated biogas and renewable energy systems that
              transform organic waste into{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                high-value, carbon-neutral energy
              </span>{" "}
              — powering industries, farms, and communities "Towards a Greener
              Tomorrow".
            </motion.p>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.85,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link to="/epc">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)] transition-all duration-300"
                >
                  <span className="relative z-10">
                    Explore Biogas Solutions
                  </span>

                  <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <ArrowUpRight size={13} />
                  </span>

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </motion.button>
              </Link>

              <Link to="/projects">
                <motion.button
                  whileHover={{
                    y: -2,
                  }}
                  className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-6 py-4 text-sm font-semibold text-gray-800 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:hover:border-emerald-500/50 dark:hover:text-emerald-300"
                >
                  View Projects
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* =================================================
                STATS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-gray-200/70 pt-6 dark:border-white/10"
            >
              <StatCounter end={50} suffix="+" label="MW Installed" />

              <StatCounter end={120} suffix="+" label="Active Plants" />

              <StatCounter end={98} suffix="%" label="Carbon Saved" />
            </motion.div>

            {/* =================================================
                PROCESS (FIX: mobile pe wrap hota hai, clip nahi)
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.15,
              }}
              className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3 sm:flex-nowrap sm:gap-x-4 lg:gap-x-5"
            >
              <ProcessItem icon={<Recycle size={14} />} text="Organic Waste" />

              <ProcessArrow />

              <ProcessItem icon={<Droplets size={14} />} text="Digestion" />

              <ProcessArrow />

              <ProcessItem icon={<Flame size={14} />} text="Biogas" />

              <ProcessArrow />

              <ProcessItem icon={<Zap size={14} />} text="Green Energy" />
            </motion.div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <BiogasVisual />
        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <div className="hero-scroll-indicator absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] font-medium tracking-wider text-gray-400 md:flex dark:text-gray-500">
          <span>SCROLL</span>
          <ArrowDown size={13} />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AURORA BACKGROUND
========================================================= */

function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Aurora 1 */}

      <div className="hero-aurora hero-aurora-one absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-emerald-300/50 via-green-400/30 to-transparent blur-[100px] dark:from-emerald-500/15 dark:via-green-700/10" />

      {/* Aurora 2 */}

      <div className="hero-aurora hero-aurora-two absolute -bottom-40 -left-40 h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-lime-200/60 via-green-300/30 to-transparent blur-[110px] dark:from-lime-600/10 dark:via-green-800/10" />

      {/* Aurora 3 */}

      <div className="hero-aurora hero-aurora-three absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-300/25 to-emerald-400/15 blur-[90px] dark:from-teal-600/10" />
    </div>
  );
}

/* =========================================================
   BIOGAS VISUAL — UPGRADED
========================================================= */

function BiogasVisual() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full max-w-[680px]"
    >
      {/* OUTER SOFT GLOW */}

      <div className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-emerald-200/50 via-green-100/40 to-lime-200/50 blur-3xl dark:from-emerald-500/10 dark:via-transparent dark:to-lime-400/10" />

      {/* =================================================
          OUTER ROTATING RING
      ================================================= */}

      <div className="hero-ring hero-ring-outer absolute inset-0 rounded-[3rem] border border-dashed border-green-400/30 dark:border-green-500/20">
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />

        <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.9)]" />
      </div>

      {/* =================================================
          INNER ROTATING RING
      ================================================= */}

      <div className="hero-ring hero-ring-inner absolute inset-6 rounded-[2.5rem] border border-green-300/40 dark:border-green-600/20">
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400" />
      </div>

      {/* =================================================
          GLOW HALO
      ================================================= */}

      <div className="hero-halo absolute inset-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/25 via-green-500/15 to-lime-400/15 blur-[55px] dark:from-emerald-500/15" />

      {/* =================================================
          MAIN CARD
      ================================================= */}

      <div
        className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-emerald-300/70 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfccb] shadow-2xl shadow-emerald-900/10 dark:border-emerald-500/30 dark:from-[#062113] dark:via-[#081a11] dark:to-[#0f2e1c]"
        style={{
          boxShadow:
            "0 0 0 1px rgba(52,211,153,0.25), 0 0 40px rgba(16,185,129,0.18)",
        }}
      >
        {/* Sky */}

        <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-sky-100/50 via-transparent to-transparent dark:from-emerald-900/20" />

        {/* Ground */}

        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-emerald-200/60 via-green-100/30 to-transparent dark:from-emerald-950/60 dark:via-green-950/30" />

        {/* Subtle grid texture */}

        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* =================================================
            SUN / GLOW (PULSING)
        ================================================= */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hero-sun absolute right-[16%] top-[13%] h-20 w-20 rounded-full bg-gradient-to-br from-yellow-200 via-amber-100 to-orange-200 shadow-[0_0_50px_rgba(253,224,71,0.55)] dark:from-emerald-300/30 dark:via-green-400/20 dark:to-transparent"
        />

        {/* =================================================
            PARTICLES
        ================================================= */}

        <FloatingParticle className="left-[10%] top-[20%]" delay={0} />

        <FloatingParticle className="left-[22%] top-[12%]" delay={1.2} />

        <FloatingParticle className="right-[25%] top-[22%]" delay={2} />

        <FloatingParticle className="right-[12%] top-[15%]" delay={0.7} />

        <FloatingParticle className="left-[45%] top-[8%]" delay={1.8} />

        <FloatingParticle className="left-[70%] top-[30%]" delay={2.5} />

        {/* =================================================
            GAS BUBBLES
        ================================================= */}

        <RisingBubble className="left-[30%]" delay={0} duration={4} />

        <RisingBubble className="left-[38%]" delay={1.2} duration={5} />

        <RisingBubble className="left-[34%]" delay={2.4} duration={4.5} />

        <RisingBubble className="left-[42%]" delay={0.6} duration={5.5} />

        {/* =================================================
            WIND TURBINE
        ================================================= */}

        <div className="absolute left-[6%] top-[32%] hidden sm:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative z-10 h-0 w-0"
          >
            {[0, 120, 240].map((deg) => (
              <span
                key={deg}
                className="absolute bottom-0 left-0 h-8 w-1.5 rounded-full bg-gradient-to-t from-emerald-300/90 to-white shadow-sm dark:from-emerald-400/70"
                style={{
                  transform: `translateX(-50%) rotate(${deg}deg)`,
                  transformOrigin: "50% 100%",
                }}
              />
            ))}

            <span className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-white shadow dark:bg-emerald-200" />
          </motion.div>

          <div className="h-16 w-1 rounded-full bg-gradient-to-b from-gray-300 to-gray-500 dark:from-gray-500 dark:to-gray-700" />
        </div>

        {/* =================================================
            MAIN DIGESTER TANK (WITH ORBIT)
        ================================================= */}

        <div
          className="hero-float absolute left-[18%] top-[28%] h-[42%] w-[38%]"
          style={{
            "--float-distance": "-4px",
            "--float-duration": "5s",
          }}
        >
          {/* ORBITING ENERGY DOT */}

          <div className="absolute -inset-7">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-full w-full rounded-full border border-dashed border-emerald-400/40 dark:border-emerald-400/20"
            >
              <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.9)]" />
            </motion.div>
          </div>

          <div className="relative h-full w-full overflow-hidden rounded-[45%] border-[3px] border-emerald-700/60 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-800 shadow-[inset_-25px_-25px_60px_rgba(0,0,0,0.25),0_30px_80px_rgba(6,95,70,0.35)] dark:border-emerald-400/30 dark:from-emerald-700 dark:via-green-800 dark:to-emerald-950">
            {/* Inner energy */}

            <div className="hero-tank-glow absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-lime-300/40 via-emerald-400/30 to-transparent blur-xl" />

            {/* Animated liquid glow */}

            <motion.div
              animate={{
                opacity: [0.45, 0.9, 0.45],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[10%] left-[12%] right-[12%] h-[30%] rounded-full bg-gradient-to-r from-lime-300/50 via-emerald-400/40 to-transparent blur-[6px]"
            />

            <div className="absolute left-[10%] top-[8%] h-[60%] w-[20%] rounded-full bg-white/25 blur-md" />

            <div className="absolute inset-[15%] rounded-[45%] border border-white/15" />

            <div className="absolute inset-[25%] rounded-[45%] border border-white/10" />

            {/* Factory */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                <Factory size={22} className="text-white" />
              </div>

              <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white/90">
                BIOGAS
              </p>
            </div>

            {/* Internal bubbles */}

            <div className="hero-tank-particle hero-tank-particle-one absolute bottom-0 left-[30%] h-2 w-2 rounded-full bg-lime-300/80" />

            <div className="hero-tank-particle hero-tank-particle-two absolute bottom-0 left-[55%] h-1.5 w-1.5 rounded-full bg-lime-200/80" />

            <div className="hero-tank-particle hero-tank-particle-three absolute bottom-0 left-[70%] h-2 w-2 rounded-full bg-emerald-200/80" />
          </div>
        </div>

        {/* =================================================
            SECONDARY TANK
        ================================================= */}

        <div
          className="hero-float absolute right-[10%] top-[42%] h-[24%] w-[26%] rounded-[45%] border-2 border-emerald-700/40 bg-gradient-to-br from-emerald-300 via-green-500 to-emerald-800 shadow-xl shadow-green-900/30 dark:border-emerald-300/20 dark:from-emerald-700 dark:via-green-900 dark:to-emerald-950"
          style={{
            "--float-distance": "-3px",
            "--float-duration": "4.5s",
            "--float-delay": "0.8s",
          }}
        >
          <div className="absolute inset-[18%] rounded-[45%] border border-white/15" />

          <div className="absolute left-[12%] top-[10%] h-[55%] w-[18%] rounded-full bg-white/20 blur-md" />
        </div>

        {/* =================================================
            PIPE SYSTEM
        ================================================= */}

        <div className="absolute left-[52%] top-[33%] h-[4px] w-[30%] rounded-full bg-gradient-to-r from-emerald-800/70 to-emerald-900/70 dark:from-emerald-300/40 dark:to-emerald-500/40" />

        <div className="absolute left-[78%] top-[33%] h-[22%] w-[4px] rounded-full bg-gradient-to-b from-emerald-800/70 to-emerald-900/70 dark:from-emerald-300/40 dark:to-emerald-500/40" />

        {/* Moving gas */}

        <div className="hero-pipe-flow hero-pipe-flow-one absolute left-[52%] top-[31.5%] h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_15px_rgba(190,242,100,1)]" />

        <div className="hero-pipe-flow hero-pipe-flow-two absolute left-[52%] top-[31.5%] h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,1)]" />

        {/* =================================================
            ENERGY BUILDING
        ================================================= */}

        <div className="absolute bottom-[14%] left-[10%] h-[22%] w-[32%] rounded-t-lg border border-gray-300/70 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 shadow-xl dark:border-white/10 dark:from-[#1a3526] dark:via-[#122a1e] dark:to-[#0c2116]">
          <div className="absolute -top-5 left-[-4%] h-6 w-[108%] skew-x-[-18deg] rounded-sm bg-gradient-to-r from-gray-400 to-gray-500 dark:from-emerald-900 dark:to-green-950" />

          <div className="absolute left-[12%] top-[25%] grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <span
                key={item}
                className="hero-building-light h-5 w-4 rounded-sm bg-gradient-to-b from-amber-200 to-yellow-400 shadow-[0_0_8px_rgba(253,224,71,0.6)] dark:from-emerald-300/60 dark:to-green-400/40 dark:shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                style={{
                  "--light-delay": `${item * 0.3}s`,
                }}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-1/2 h-10 w-7 -translate-x-1/2 rounded-t bg-gradient-to-b from-gray-500 to-gray-700 dark:from-gray-700 dark:to-gray-900" />
        </div>

        {/* =================================================
            SOLAR PANELS
        ================================================= */}

        <div className="absolute bottom-[18%] right-[8%] flex gap-1.5">
          {[0, 1].map((panel) => (
            <div
              key={panel}
              className="h-7 w-10 -skew-y-6 rounded-[4px] border border-sky-300/70 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 shadow-md dark:border-sky-400/30 dark:from-sky-700 dark:via-blue-800 dark:to-indigo-900"
            >
              <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-px p-0.5 opacity-50">
                {Array.from({ length: 6 }).map((_, cell) => (
                  <span key={cell} className="bg-white/30" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* =================================================
            FLARE STACK
        ================================================= */}

        <div className="absolute bottom-[32%] right-[18%] h-[18%] w-1.5 rounded-full bg-gradient-to-t from-gray-500 to-gray-700 dark:from-gray-600 dark:to-gray-800" />

        <div className="hero-flame absolute bottom-[48%] right-[16.5%] h-[12%] w-5 origin-bottom rounded-full bg-gradient-to-t from-orange-500 via-yellow-300 to-yellow-100 blur-[1px] shadow-[0_0_25px_rgba(251,146,60,0.8)]" />

        <div className="hero-flame-inner absolute bottom-[48%] right-[17.5%] h-[8%] w-2 origin-bottom rounded-full bg-gradient-to-t from-red-500 via-orange-400 to-transparent blur-[1px]" />

        {/* Ground */}

        <div className="absolute bottom-0 left-0 right-0 h-[14%] bg-gradient-to-t from-emerald-800/40 via-emerald-700/20 to-transparent dark:from-emerald-950/70" />

        {/* =================================================
            TOP LEFT — LIVE MONITORING CHIP
        ================================================= */}

        <div
          className="hero-float absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 shadow-lg backdrop-blur dark:border-white/10 dark:bg-[#0b2417]/85"
          style={{
            "--float-distance": "-5px",
            "--float-duration": "5.5s",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-700 dark:text-gray-200">
            Live Monitoring
          </span>
        </div>

        {/* =================================================
            TOP RIGHT — ENERGY CARD (FIX: mobile pe compact)
        ================================================= */}

        <div
          className="hero-float absolute right-4 top-4 rounded-2xl border border-white/70 bg-white/85 px-3 py-2 shadow-xl backdrop-blur dark:border-white/10 dark:bg-[#0b2417]/85 sm:px-4 sm:py-3"
          style={{
            "--float-distance": "-8px",
            "--float-duration": "5s",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-lg shadow-emerald-500/30">
              <Zap size={18} />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Energy Output
              </p>

              <p className="text-sm font-bold text-gray-900 dark:text-white">
                2.4 MW
                <span className="text-emerald-500">/hr</span>
              </p>
            </div>

            {/* Equalizer bars — sirf sm+ pe dikhte hain */}
            <div className="ml-1 hidden h-8 items-end gap-1 sm:flex">
              {[0.45, 0.8, 0.6, 1, 0.7].map((value, barIndex) => (
                <motion.span
                  key={barIndex}
                  animate={{
                    scaleY: [value * 0.4, value, value * 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: barIndex * 0.18,
                  }}
                  className="h-full w-1 origin-bottom rounded-full bg-gradient-to-t from-emerald-500 to-lime-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM RIGHT — WASTE ENERGY BADGE
        ================================================= */}

        <div
          className="hero-float absolute bottom-4 right-4 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 shadow-lg dark:border-emerald-800/40 dark:bg-[#0b2417]/90"
          style={{
            "--float-distance": "6px",
            "--float-duration": "4s",
          }}
        >
          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-emerald-500" />

            <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
              Waste → Energy
            </span>
          </div>
        </div>

        {/* =================================================
            BOTTOM LEFT — EFFICIENCY CARD (PROGRESS RING)
        ================================================= */}

        <div
          className="hero-float absolute bottom-4 left-4 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-[#0b2417]/85"
          style={{
            "--float-distance": "-6px",
            "--float-duration": "6s",
            "--float-delay": "0.5s",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11">
              <svg viewBox="0 0 36 36" className="h-11 w-11 -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  strokeWidth="4"
                  className="stroke-emerald-100 dark:stroke-white/10"
                />

                <motion.circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="url(#effGrad)"
                  strokeDasharray="94.2"
                  initial={{ strokeDashoffset: 94.2 }}
                  animate={{ strokeDashoffset: 4.99 }}
                  transition={{
                    duration: 1.8,
                    delay: 1.2,
                    ease: "easeOut",
                  }}
                />

                <defs>
                  <linearGradient id="effGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#84cc16" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>

              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-emerald-600 dark:text-emerald-300">
                94.7
              </span>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Efficiency
              </p>

              <p className="text-sm font-bold text-gray-900 dark:text-white">
                94.7%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          OUTSIDE FLOATING CARDS (FIX: tablet pe clip nahi honge)
      ================================================= */}

      {/* LEFT CARD */}

      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1.1,
          duration: 0.7,
        }}
        className="absolute -left-3 top-16 hidden rounded-2xl border border-emerald-100 bg-white/90 px-4 py-3 shadow-xl sm:block dark:border-white/10 dark:bg-[#0b2417]/90 xl:-left-6"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-green-200 text-emerald-700 dark:from-emerald-900/50 dark:to-green-900/50 dark:text-emerald-300">
            <Leaf size={16} />
          </div>

          <div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500">
              Carbon Offset
            </p>

            <p className="text-xs font-bold text-gray-800 dark:text-white">
              12,400 T/yr
            </p>
          </div>
        </div>
      </motion.div>

      {/* RIGHT CARD */}

      <motion.div
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1.3,
          duration: 0.7,
        }}
        className="absolute -right-3 bottom-20 hidden rounded-2xl border border-emerald-100 bg-white/90 px-4 py-3 shadow-xl sm:block dark:border-white/10 dark:bg-[#0b2417]/90 xl:-right-6"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-200 text-orange-700 dark:from-orange-900/50 dark:to-red-900/50 dark:text-orange-300">
            <Flame size={16} />
          </div>

          <div>
            <p className="text-[10px] text-gray-400 dark:text-gray-500">
              Biogas Yield
            </p>

            <p className="text-xs font-bold text-gray-800 dark:text-white">
              850 m³/day
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   PROCESS ITEM
========================================================= */

function ProcessItem({ icon, text }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      className="flex shrink-0 items-center gap-2 rounded-full border border-emerald-100 bg-white/60 px-3 py-1.5 backdrop-blur-md transition-all hover:border-emerald-300 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:hover:border-emerald-700"
    >
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 text-white">
        {icon}
      </div>

      <span className="whitespace-nowrap text-xs font-semibold text-gray-700 dark:text-gray-200">
        {text}
      </span>
    </motion.div>
  );
}

/* =========================================================
   PROCESS ARROW
========================================================= */

function ProcessArrow() {
  return <span className="hero-process-arrow text-emerald-500">→</span>;
}

/* =========================================================
   STAT COUNTER
========================================================= */

function StatCounter({ end, suffix, label }) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, end, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, end]);

  return (
    <div>
      <div className="flex items-baseline gap-0.5">
        <motion.span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          {rounded}
        </motion.span>

        <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
          {suffix}
        </span>
      </div>

      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   FLOATING PARTICLE
========================================================= */

function FloatingParticle({ className, delay }) {
  return (
    <span
      className={`hero-particle absolute h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] ${className}`}
      style={{
        "--particle-delay": `${delay}s`,
      }}
    />
  );
}

/* =========================================================
   RISING BUBBLE
========================================================= */

function RisingBubble({ className, delay, duration }) {
  return (
    <span
      className={`hero-bubble absolute bottom-[20%] h-2 w-2 rounded-full bg-lime-300/70 shadow-[0_0_10px_rgba(190,242,100,0.8)] ${className}`}
      style={{
        "--bubble-duration": `${duration}s`,
        "--bubble-delay": `${delay}s`,
      }}
    />
  );
}
