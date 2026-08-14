import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

import {
  ArrowUpRight,
  Building2,
  Factory,
  Leaf,
  MapPin,
  Zap,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useRef } from "react";

export default function FeaturedProjects() {
  const projects = [
    {
      number: "01",
      category: "Bio-CNG / CBG",
      title: "Compressed Bio Gas Plant",
      location: "India",
      capacity: "Turnkey EPC",
      description:
        "Integrated Bio-CNG project solutions covering feedstock handling, anaerobic digestion, gas purification, compression and associated systems.",
      icon: Factory,
      gradient: "from-emerald-500 to-green-700",
      glow: "rgba(16, 185, 129, 0.15)",
    },
    {
      number: "02",
      category: "Biogas",
      title: "Industrial Biogas Plant",
      location: "India",
      capacity: "Custom Capacity",
      description:
        "Customized biogas solutions designed to convert organic waste into renewable energy while improving waste management efficiency.",
      icon: Leaf,
      gradient: "from-lime-400 to-emerald-600",
      glow: "rgba(132, 204, 22, 0.15)",
    },
    {
      number: "03",
      category: "Solar EPC",
      title: "Solar Power Solution",
      location: "India",
      capacity: "EPC Solution",
      description:
        "Engineering, supply, installation and commissioning solutions for industrial, commercial and institutional solar applications.",
      icon: Zap,
      gradient: "from-yellow-400 to-orange-500",
      glow: "rgba(251, 191, 36, 0.15)",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-[#04100a] sm:py-24 lg:py-28">
      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Ambient Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-green-200/40 blur-[120px] dark:bg-green-900/10"
        />

        {/* Right Ambient Glow */}
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -40, 0],
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-200/40 blur-[120px] dark:bg-emerald-900/10"
        />

        {/* Radial Masked Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
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
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 dark:border-green-800/40 dark:bg-green-900/20 dark:text-green-300"
            >
              <Building2 size={15} />
              <span>Featured Projects</span>
            </motion.div>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
              <SplitText
                text="Projects built for a"
                delay={0.1}
              />

              <span className="relative inline-block text-green-600 dark:text-green-400">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                  className="absolute inset-x-0 bottom-1 top-1 origin-left rounded-lg bg-gradient-to-r from-emerald-400/25 to-lime-400/25 -z-10"
                />

                <span className="relative">
                  {" "}
                  cleaner future.
                </span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="max-w-sm"
          >
            <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
              Explore our renewable energy and EPC capabilities across
              Bio-CNG, Biogas and Solar solutions.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            PROJECT CARDS
        ====================================================== */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/[0.025] sm:p-7"
        >
          {/* Smooth Gradient Border */}
          <motion.div
            animate={{
              backgroundPosition: [
                "0% 50%",
                "100% 50%",
                "0% 50%",
              ],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-r from-emerald-500 via-lime-400 to-green-600 opacity-15 dark:opacity-30"
            style={{
              backgroundSize: "200% 200%",
            }}
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                Discover more of our project capabilities
              </p>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Explore our complete renewable energy project portfolio.
              </p>
            </div>

            <Link to="/projects">
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
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30"
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
                  View All Projects
                </span>

                <ArrowUpRight
                  size={16}
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
   PROJECT CARD
   3D TILT + SMOOTH BACKGROUND + SPOTLIGHT
========================================================= */

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  const cardRef = useRef(null);

  /* =====================================================
      RAW MOUSE VALUES
  ====================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* =====================================================
      SPRING VALUES
  ====================================================== */

  const smoothX = useSpring(mouseX, {
    stiffness: 140,
    damping: 24,
    mass: 0.45,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 140,
    damping: 24,
    mass: 0.45,
  });

  /* =====================================================
      3D TILT
  ====================================================== */

  const rotateX = useTransform(
    smoothY,
    [-180, 180],
    [5, -5]
  );

  const rotateY = useTransform(
    smoothX,
    [-180, 180],
    [-5, 5]
  );

  /* =====================================================
      SPOTLIGHT POSITION
  ====================================================== */

  const spotlightX = useTransform(
    smoothX,
    [-180, 180],
    [0, 100]
  );

  const spotlightY = useTransform(
    smoothY,
    [-180, 180],
    [0, 100]
  );

  const spotlightBackground = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(
        420px circle at ${x}% ${y}%,
        ${project.glow},
        transparent 68%
      )`
  );

  /* =====================================================
      MOUSE MOVE
  ====================================================== */

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

  /* =====================================================
      MOUSE LEAVE
  ====================================================== */

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
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-green-300/60 hover:shadow-xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-500/30 dark:hover:shadow-green-950/20"
    >
      {/* =====================================================
          BASE SMOOTH COLOR WASH
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-[2rem]"
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          background: `linear-gradient(
            135deg,
            ${project.glow},
            rgba(16,185,129,0.025),
            transparent 60%
          )`,
        }}
      />

      {/* =====================================================
          CURSOR FOLLOWING SPOTLIGHT
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-[2rem]"
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
        style={{
          background: spotlightBackground,
        }}
      />

      {/* =====================================================
          SOFT GREEN EDGE GLOW
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute -inset-[1px] z-0 rounded-[2rem]"
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        style={{
          background: `linear-gradient(
            135deg,
            ${project.glow},
            rgba(34,197,94,0.12),
            rgba(163,230,53,0.18)
          )`,
        }}
      />

      {/* =====================================================
          INNER SURFACE
          Keeps content clean above the glow
      ====================================================== */}

      <div className="relative z-[1] m-[1px] overflow-hidden rounded-[calc(2rem-1px)] bg-white dark:bg-[#07150d]">
        {/* =====================================================
            VISUAL AREA
        ====================================================== */}

        <div className="relative h-64 overflow-hidden bg-[#0a2115]">
          {/* Internal Tech Grid */}

          <div
            className="absolute inset-0 opacity-20 transition-opacity duration-700 ease-out group-hover:opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, #10b981 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Visual Area Hover Glow */}

          <motion.div
            className={`absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${project.gradient} blur-[80px]`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Extra Smooth Hover Glow */}

          <motion.div
            className={`pointer-events-none absolute -left-20 bottom-[-80px] h-56 w-56 rounded-full bg-gradient-to-br ${project.gradient} blur-[90px]`}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileHover={{
              opacity: 0.35,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* =====================================================
              OUTER ROTATING RING
          ====================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-green-300/10 transition-all duration-700 group-hover:border-green-300/20"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]" />
          </motion.div>

          {/* =====================================================
              INNER ROTATING RING
          ====================================================== */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-300/15 transition-all duration-700 group-hover:border-green-300/30"
          >
            <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,1)]" />
          </motion.div>

          {/* =====================================================
              CENTER ICON
          ====================================================== */}

          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Pulsing Core */}

            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} blur-xl`}
            />

            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className={`relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${project.gradient} text-white shadow-2xl ring-1 ring-white/10`}
            >
              <Icon
                size={34}
                className="drop-shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* =====================================================
              PROJECT BADGE
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3 + index * 0.1,
            }}
            className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur-md"
          >
            PROJECT {project.number}
          </motion.div>

          {/* =====================================================
              CATEGORY
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4 + index * 0.1,
            }}
            className="absolute bottom-5 left-5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-green-200 backdrop-blur-md ring-1 ring-white/10"
          >
            {project.category}
          </motion.div>

          {/* =====================================================
              ARROW
          ====================================================== */}

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 45,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20"
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        {/* =====================================================
            CONTENT AREA
        ====================================================== */}

        <div className="relative p-6">
          {/* Location & Capacity */}

          <div className="flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-gray-500">
            <MapPin
              size={13}
              className="text-green-500"
            />

            {project.location}

            <span className="mx-1 h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />

            {project.capacity}
          </div>

          {/* Title */}

          <h3 className="mt-4 text-xl font-bold text-gray-900 transition-colors duration-500 group-hover:text-green-700 dark:text-white dark:group-hover:text-green-400">
            {project.title}
          </h3>

          {/* Description */}

          <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
            {project.description}
          </p>

          {/* Bottom Action */}

          <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-white/10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
              Renewable Energy
            </span>

            <span className="flex items-center gap-1 text-xs font-bold text-gray-700 transition-all duration-500 group-hover:translate-x-1 group-hover:text-green-600 dark:text-gray-300 dark:group-hover:text-green-400">
              Explore

              <ArrowRight
                size={14}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </span>
          </div>

          {/* =====================================================
              BOTTOM ANIMATED LINE
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
            className={`absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r ${project.gradient}`}
          />
        </div>
      </div>
    </motion.div>
  );
}