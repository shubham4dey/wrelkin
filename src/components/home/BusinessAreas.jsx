import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Factory,
  Flame,
  Leaf,
  Recycle,
  Sun,
  Droplets,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const businessAreas = [
  {
    number: "01",
    title: "Bio-CNG / CBG Plants",
    shortTitle: "Bio-CNG",
    description:
      "Turnkey Bio-CNG and CBG plant solutions from feedstock handling and anaerobic digestion to gas purification, compression and bottling.",
    icon: Factory,
    tag: "Clean Transportation Fuel",
    gradient: "from-emerald-400 via-green-500 to-green-700",
    glow: "rgba(34,197,94,0.18)",
  },
  {
    number: "02",
    title: "Biogas Plants",
    shortTitle: "Biogas",
    description:
      "Efficient biogas systems designed to convert organic and agricultural waste into reliable renewable energy.",
    icon: Flame,
    tag: "Waste → Energy",
    gradient: "from-lime-400 via-emerald-500 to-green-600",
    glow: "rgba(163,230,53,0.18)",
  },
  {
    number: "03",
    title: "Solar Power Plants",
    shortTitle: "Solar EPC",
    description:
      "Rooftop and ground-mounted solar EPC solutions for industrial, commercial and institutional applications.",
    icon: Sun,
    tag: "Solar EPC",
    gradient: "from-yellow-300 via-amber-400 to-orange-500",
    glow: "rgba(251,191,36,0.18)",
  },
  {
    number: "04",
    title: "Biodiesel Plants",
    shortTitle: "Biodiesel",
    description:
      "Complete biodiesel production plant solutions covering process engineering, equipment supply, installation and commissioning.",
    icon: Droplets,
    tag: "Renewable Fuel",
    gradient: "from-cyan-300 via-teal-400 to-emerald-600",
    glow: "rgba(45,212,191,0.18)",
  },
  {
    number: "05",
    title: "Waste-to-Energy",
    shortTitle: "Waste Energy",
    description:
      "Integrated solutions that transform organic and other suitable waste streams into valuable renewable energy resources.",
    icon: Recycle,
    tag: "Circular Economy",
    gradient: "from-green-300 via-emerald-500 to-teal-600",
    glow: "rgba(52,211,153,0.18)",
  },
  {
    number: "06",
    title: "Organic Fertilizer & Slurry",
    shortTitle: "Organic Resources",
    description:
      "Slurry management and organic fertilizer solutions that help recover additional value from biogas plant operations.",
    icon: Leaf,
    tag: "Resource Recovery",
    gradient: "from-lime-300 via-green-400 to-emerald-600",
    glow: "rgba(132,204,22,0.18)",
  },
];

export default function BusinessAreas() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 transition-colors duration-500 dark:bg-[#04100a] sm:py-28 lg:py-32">
      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Aurora */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -35, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-[120px] dark:bg-emerald-600/10"
        />

        {/* Right Aurora */}
        <motion.div
          animate={{
            x: [0, -45, 0],
            y: [0, 35, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-green-200/40 blur-[120px] dark:bg-green-700/10"
        />

        {/* Center subtle glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-[130px] dark:bg-emerald-500/5"
        />

        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 40%, transparent 80%)",
          }}
        />

        {/* Floating Particles */}
        {[...Array(10)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -25, 0],
              x: [0, Math.sin(index) * 12, 0],
              opacity: [0.1, 0.45, 0.1],
            }}
            transition={{
              duration: 5 + index * 0.35,
              repeat: Infinity,
              delay: index * 0.25,
              ease: "easeInOut",
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
            style={{
              left: `${7 + index * 9}%`,
              top: `${15 + (index % 4) * 22}%`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
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
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 shadow-sm dark:border-green-800/40 dark:bg-green-900/20 dark:text-green-300"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Zap size={15} />
              </motion.div>

              <span>Our Renewable Energy Solutions</span>
            </motion.div>

            <p className="mt-6 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
              From organic waste management to renewable fuel and energy
              generation, we deliver integrated solutions for a cleaner future.
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
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-x-0 bottom-1 top-1 origin-left rounded-lg bg-emerald-300/30 dark:bg-emerald-400/10"
                />

                <span className="relative"> clean energy</span>
              </span>

              <br />

              <SplitText
                text="for a sustainable India."
                delay={0.4}
              />
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            BUSINESS CARDS
        ====================================================== */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {businessAreas.map((area, index) => (
            <BusinessCard
              key={area.number}
              area={area}
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
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-green-200 bg-white p-7 shadow-sm dark:border-green-900/40 dark:bg-white/[0.025] sm:p-9"
        >
          {/* Animated border */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-20 dark:opacity-40"
            style={{
              background:
                "linear-gradient(90deg, rgba(16,185,129,0.8), rgba(163,230,53,0.8), rgba(34,197,94,0.8), rgba(16,185,129,0.8))",
              backgroundSize: "300% 100%",
              padding: "1px",
            }}
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Complete EPC Solutions
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-gray-950 dark:text-white sm:text-3xl">
                Have a renewable energy project in mind?
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                Talk to our team about plant design, engineering, EPC,
                installation, commissioning and O&M requirements.
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
                className="group relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
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

function SplitText({ text, delay }) {
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
   BUSINESS CARD
========================================================= */

function BusinessCard({ area, index }) {
  const Icon = area.icon;

  const cardRef = useRef(null);

  /*
   * Raw mouse values.
   * These don't trigger React renders.
   */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /*
   * Smooth values for 3D tilt.
   */
  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 24,
    mass: 0.6,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 24,
    mass: 0.6,
  });

  /*
   * Smooth spotlight coordinates.
   */
  const spotlightX = useSpring(mouseX, {
    stiffness: 120,
    damping: 30,
    mass: 0.5,
  });

  const spotlightY = useSpring(mouseY, {
    stiffness: 120,
    damping: 30,
    mass: 0.5,
  });

  const rotateX = useTransform(
    springY,
    [-180, 180],
    [6, -6]
  );

  const rotateY = useTransform(
    springX,
    [-180, 180],
    [-6, 6]
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
        duration: 0.65,
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
      className="group relative overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-emerald-300/60 hover:shadow-2xl hover:shadow-emerald-900/10 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-emerald-500/30 dark:hover:shadow-emerald-950/30"
    >
      {/* =====================================================
          SMOOTH CURSOR SPOTLIGHT
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-[1.75rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) =>
              `radial-gradient(
                420px circle at ${x + 180}px ${y + 150}px,
                ${area.glow},
                transparent 65%
              )`
          ),
        }}
      />

      {/* =====================================================
          SOFT HOVER BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(145deg, rgba(16,185,129,0.07), rgba(163,230,53,0.035), transparent 65%)",
        }}
      />

      {/* =====================================================
          TOP GRADIENT BORDER
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-[1.75rem] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        style={{
          padding: "1px",
          background:
            "linear-gradient(135deg, rgba(52,211,153,0.7), rgba(74,222,128,0.35), rgba(163,230,53,0.65))",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}

      <div className="relative z-10">
        {/* Icon + Number */}
        <div className="flex items-start justify-between">
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 4,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${area.gradient} text-white shadow-lg`}
          >
            {/* Icon glow */}
            <motion.div
              className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${area.gradient} blur-lg`}
              animate={{
                opacity: [0.25, 0.45, 0.25],
                scale: [0.95, 1.08, 0.95],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <Icon
              size={24}
              className="relative z-10"
            />
          </motion.div>

          <motion.span
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.25 + index * 0.08,
            }}
            className="text-xs font-bold tracking-widest text-gray-300 transition-colors duration-500 group-hover:text-emerald-500/60 dark:text-gray-700 dark:group-hover:text-emerald-400/50"
          >
            {area.number}
          </motion.span>
        </div>

        {/* Tag */}
        <div className="mt-7">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green-100 bg-green-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-700 transition-all duration-500 group-hover:border-green-200 group-hover:bg-green-100/70 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-400 dark:group-hover:bg-green-900/30">
            <span
              className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${area.gradient}`}
            />

            {area.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-gray-950 transition-colors duration-500 group-hover:text-green-700 dark:text-white dark:group-hover:text-green-400">
          {area.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-500 transition-colors duration-500 dark:text-gray-400">
          {area.description}
        </p>

        {/* Bottom CTA */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5 transition-colors duration-500 group-hover:border-emerald-100 dark:border-white/10 dark:group-hover:border-emerald-900/40">
          <motion.span
            className="text-xs font-semibold text-gray-400 transition-all duration-500 group-hover:translate-x-1 group-hover:text-green-600 dark:group-hover:text-green-400"
          >
            Explore solution
          </motion.span>

          <motion.div
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-500 transition-all duration-500 group-hover:border-green-500 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-500/20 dark:border-white/10 dark:bg-white/5"
          >
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ENERGY LINE
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
        className={`absolute bottom-0 left-0 z-20 h-1 w-full origin-left bg-gradient-to-r ${area.gradient}`}
      />

      {/* =====================================================
          CORNER GLOW
      ====================================================== */}

      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
        style={{
          background: area.glow,
        }}
      />
    </motion.div>
  );
}