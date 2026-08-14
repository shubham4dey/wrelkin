import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

import {
  ArrowUpRight,
  BadgeCheck,
  Factory,
  Leaf,
  ShieldCheck,
  Settings,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useRef } from "react";

export default function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      icon: Factory,
      title: "Complete EPC Solutions",
      description:
        "From initial planning and engineering to procurement, installation, commissioning and handover, we manage the complete project lifecycle.",
      color: "from-emerald-400 to-green-600",
      glow: "rgba(16, 185, 129, 0.15)",
    },
    {
      number: "02",
      icon: Settings,
      title: "Engineering Excellence",
      description:
        "Our technical approach combines practical plant design, process engineering and customized solutions for efficient and reliable operations.",
      color: "from-blue-400 to-cyan-600",
      glow: "rgba(59, 130, 246, 0.15)",
    },
    {
      number: "03",
      icon: Leaf,
      title: "Sustainable Technology",
      description:
        "We transform organic waste and renewable resources into valuable energy while supporting cleaner and more sustainable operations.",
      color: "from-lime-400 to-emerald-600",
      glow: "rgba(132, 204, 22, 0.15)",
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Quality & Safety",
      description:
        "Quality control, safety-focused execution and systematic project management remain central to every solution we deliver.",
      color: "from-indigo-400 to-purple-600",
      glow: "rgba(99, 102, 241, 0.15)",
    },
    {
      number: "05",
      icon: Wrench,
      title: "Installation & O&M",
      description:
        "Our support continues beyond installation with commissioning, maintenance, troubleshooting and technical assistance.",
      color: "from-orange-400 to-red-600",
      glow: "rgba(249, 115, 22, 0.15)",
    },
    {
      number: "06",
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Every project is developed around the client's feedstock, capacity, operational requirements and long-term business objectives.",
      color: "from-teal-400 to-cyan-600",
      glow: "rgba(20, 184, 166, 0.15)",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 transition-colors duration-500 dark:bg-[#04100a] sm:py-24 lg:py-28">
      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Aurora */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-[120px] dark:bg-emerald-600/10"
        />

        {/* Right Aurora */}
        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-green-200/40 blur-[120px] dark:bg-green-700/10"
        />

        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 80%)",
          }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -18, 0],
              opacity: [0.12, 0.35, 0.12],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 6 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]"
            style={{
              left: `${8 + index * 12}%`,
              top: `${18 + (index % 4) * 22}%`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 dark:border-green-800/40 dark:bg-green-900/20 dark:text-green-300"
            >
              <Sparkles size={15} />
              <span>Why WRELKIN</span>
            </motion.div>

            <p className="mt-6 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
              Built around engineering expertise, sustainable technology and
              dependable project execution.
            </p>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
              <SplitText text="Engineering" delay={0.1} />

              <span className="relative inline-block text-green-600 dark:text-green-400">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.25,
                    ease: "easeOut",
                  }}
                  className="absolute inset-x-0 bottom-1 top-1 origin-left rounded-lg bg-gradient-to-r from-emerald-400/25 to-lime-400/25 -z-10"
                />

                <span className="relative"> that creates</span>
              </span>

              <br className="hidden sm:block" />

              <SplitText text="lasting value." delay={0.4} />
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            EXPERIENCE STRIP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-green-200/50 bg-[#0a2115] shadow-2xl shadow-green-950/20 dark:border-green-900/40"
        >
          {/* Gradient Border */}

          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-emerald-500 via-lime-400 to-green-600 opacity-20 blur-[1px] dark:opacity-35" />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #10b981 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Glow */}

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.12, 0.22, 0.12],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-green-400 blur-[100px]"
            />

            {/* Main Content */}

            <div className="relative p-7 sm:p-9 lg:p-10">
              <div className="flex items-start gap-5">
                <motion.div
                  whileHover={{
                    scale: 1.06,
                    rotate: 4,
                  }}
                  transition={{ duration: 0.25 }}
                  className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-green-500/15 text-green-300 ring-1 ring-green-400/20"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.25, 0.45, 0.25],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-green-400/30 blur-xl"
                  />

                  <Zap size={26} className="relative z-10" />
                </motion.div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">
                    Renewable Energy EPC
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                    From organic waste to renewable energy.
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300">
                    WRELKIN delivers integrated solutions across Bio-CNG,
                    Biogas, Solar, Biodiesel and Waste-to-Energy projects —
                    combining technology, engineering and execution under one
                    roof.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}

            <div className="relative grid grid-cols-2 border-t border-white/10 lg:border-l lg:border-t-0">
              <Stat
                value="10+"
                label="Years Combined Experience"
                delay={0.2}
              />

              <Stat
                value="360°"
                label="Project Support"
                delay={0.3}
              />

              <Stat
                value="EPC"
                label="Turnkey Execution"
                delay={0.4}
              />

              <Stat
                value="24/7"
                label="Technical Support"
                delay={0.5}
              />
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            REASONS GRID
        ====================================================== */}

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={reason.number}
              reason={reason}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mt-10 overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.025] sm:p-9"
        >
          {/* Border Glow */}

          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-emerald-500 via-lime-400 to-green-600 opacity-15 dark:opacity-30"
            style={{
              backgroundSize: "200% 200%",
            }}
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <BadgeCheck
                    size={18}
                    className="text-green-600 dark:text-green-400"
                  />
                </motion.div>

                <span className="text-sm font-bold text-green-700 dark:text-green-400">
                  Built for long-term performance
                </span>
              </div>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Have a renewable energy project in mind?
              </h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Let our team help you plan the right solution for your project.
              </p>
            </div>

            <Link to="/enquiry">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 22,
                }}
                className="group relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30"
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
                    repeatDelay: 4,
                  }}
                />

                <span className="relative z-10">
                  Start a Project
                </span>

                <ArrowUpRight
                  size={17}
                  className="relative z-10 transition-transform duration-300 group-hover:rotate-45"
                />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   SPLIT TEXT
========================================================= */

function SplitText({ text, delay = 0 }) {
  const words = text.split(" ");

  return (
    <span className="inline-block">
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: [0.22, 1, 0.36, 1],
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
   STAT
========================================================= */

function Stat({ value, label, delay }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.045)",
      }}
      className="flex min-h-[125px] cursor-default flex-col justify-center border-b border-white/10 p-5 transition-colors duration-300 last:border-b-0 sm:p-6"
    >
      <p className="text-2xl font-bold text-green-300 transition-transform duration-300 group-hover:scale-105 sm:text-3xl">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-400">
        {label}
      </p>
    </motion.div>
  );
}

/* =========================================================
   REASON CARD
========================================================= */

function ReasonCard({ reason, index }) {
  const Icon = reason.icon;
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* Smooth mouse values */

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 25,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 25,
    mass: 0.4,
  });

  /* Smooth 3D tilt */

  const rotateX = useTransform(
    smoothY,
    [-150, 150],
    [5, -5]
  );

  const rotateY = useTransform(
    smoothX,
    [-150, 150],
    [-5, 5]
  );

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-green-300/60 hover:shadow-xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-500/30 dark:hover:shadow-green-950/20"
    >
      {/* =====================================================
          CURSOR SPOTLIGHT
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) =>
              `radial-gradient(
                380px circle at ${x + 50}% ${y + 50}%,
                ${reason.glow},
                transparent 65%
              )`
          ),
        }}
      />

      {/* =====================================================
          SOFT HOVER BORDER
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(
            135deg,
            ${reason.glow},
            transparent 45%,
            rgba(16,185,129,0.08)
          )`,
        }}
      />

      {/* =====================================================
          TOP
      ====================================================== */}

      <div className="relative z-10 flex items-start justify-between">
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 20,
          }}
          className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${reason.color} text-white shadow-lg`}
        >
          {/* Icon glow */}

          <motion.div
            animate={{
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute inset-0 bg-gradient-to-br ${reason.color} blur-md`}
          />

          <Icon
            size={20}
            className="relative z-10"
          />
        </motion.div>

        <span className="text-xs font-bold tracking-widest text-gray-300 transition-colors duration-300 group-hover:text-green-500/60 dark:text-gray-700">
          {reason.number}
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <h3 className="relative z-10 mt-6 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700 dark:text-white dark:group-hover:text-green-400">
        {reason.title}
      </h3>

      <p className="relative z-10 mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
        {reason.description}
      </p>

      {/* =====================================================
          BOTTOM LINE
      ====================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r ${reason.color}`}
      />
    </motion.div>
  );
}