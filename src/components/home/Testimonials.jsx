import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Quote,
  ShieldCheck,
  Star,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    category: "Project Collaboration",
    title: "Engineering with a purpose",
    text: "WRELKIN focuses on practical renewable energy solutions that connect engineering, sustainability and long-term project performance.",
    rating: 5,
    author: "Project Director",
    company: "Infrastructure Partner",
  },
  {
    category: "Renewable Energy",
    title: "Built around sustainable solutions",
    text: "From organic waste management to renewable energy generation, the approach is designed around creating measurable value from available resources.",
    rating: 5,
    author: "Sustainability Lead",
    company: "Energy Corporation",
  },
  {
    category: "EPC Solutions",
    title: "A complete project approach",
    text: "The combination of engineering, procurement, installation, commissioning and technical support creates a complete EPC ecosystem for renewable energy projects.",
    rating: 5,
    author: "Operations Manager",
    company: "Industrial Client",
  },
  {
    category: "Long-term Partnership",
    title: "Reliable execution, every time",
    text: "Their commitment to quality and timelines has made them our go-to partner for renewable energy infrastructure across multiple projects.",
    rating: 5,
    author: "VP Engineering",
    company: "Manufacturing Group",
  },
];

const marqueeQuotes = [
  "Exceptional engineering quality",
  "Delivered ahead of schedule",
  "True sustainability partner",
  "World-class EPC execution",
  "Reliable & innovative team",
  "Outstanding project delivery",
  "Trusted renewable partner",
  "Precision in every project",
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const SLIDE_DURATION = 5000;

  /* =====================================================
     SLIDE CONTROLS
  ====================================================== */

  const goToSlide = useCallback(
    (index) => {
      if (index === current) return;

      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const nextSlide = useCallback(() => {
    setDirection(1);

    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);

    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  /* =====================================================
     AUTOPLAY
  ====================================================== */

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  /* =====================================================
     SLIDE ANIMATION
  ====================================================== */

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <section
      data-component="Testimonials"
      className="relative overflow-hidden bg-white py-24 transition-colors duration-500 dark:bg-[#04100a] sm:py-28 lg:py-32"
    >
      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-emerald-200/30 blur-[120px] dark:bg-emerald-700/10"
        />

        {/* Right Glow */}
        <motion.div
          animate={{
            scale: [1.08, 1, 1.08],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-green-200/30 blur-[120px] dark:bg-green-700/10"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 80%)",
          }}
        />

        {/* Floating Particles */}
        {[...Array(5)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -18, 0],
              opacity: [0.08, 0.25, 0.08],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
            style={{
              left: `${12 + index * 18}%`,
              top: `${22 + (index % 3) * 24}%`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
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
              <Users size={15} />
              <span>Client Experience</span>
            </motion.div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
              Creating lasting value through dependable engineering,
              sustainable technology and customer-focused project execution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
              <SplitText
                text="Relationships built on"
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
                  className="absolute inset-x-0 bottom-1 top-1 origin-left rounded-lg bg-gradient-to-r from-emerald-400/20 to-lime-400/20 -z-10"
                />

                <span className="relative"> trust.</span>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            SLIDER AREA
        ====================================================== */}

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* ===================================================
              MAIN SLIDER
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            className="group relative overflow-hidden rounded-[2rem] border border-green-200/30 bg-gradient-to-br from-green-800 via-emerald-800 to-green-900 p-7 text-white shadow-2xl shadow-green-900/20 dark:border-green-900/40 sm:p-10"
          >
            {/* Animated Border */}
            <motion.div
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-r from-emerald-400/30 via-lime-300/20 to-green-500/30 opacity-50"
              style={{
                backgroundSize: "200% 200%",
              }}
            />

            {/* Ambient Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.08, 0.16, 0.08],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl"
            />

            {/* Top */}
            <div className="relative z-10 flex items-start justify-between">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-lime-300 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/10"
              >
                <Quote size={25} />
              </motion.div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-md">
                <span className="text-sm font-bold text-white">
                  {String(current + 1).padStart(2, "0")}
                </span>

                <span className="text-xs text-green-200/50">
                  /
                </span>

                <span className="text-sm text-green-200/60">
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* =================================================
                SLIDE CONTENT
            ================================================== */}

            <div className="relative z-10 mt-10 min-h-[300px] overflow-hidden">
              <AnimatePresence
                mode="wait"
                custom={direction}
              >
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 260,
                      damping: 28,
                    },
                    opacity: {
                      duration: 0.3,
                    },
                    scale: {
                      duration: 0.3,
                    },
                  }}
                  className="absolute inset-x-0 top-0"
                >
                  {/* Category */}
                  <span className="inline-block rounded-full border border-lime-300/20 bg-lime-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-lime-300">
                    {testimonials[current].category}
                  </span>

                  {/* Title */}
                  <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                    {testimonials[current].title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-green-100/75 sm:text-base">
                    {testimonials[current].text}
                  </p>

                  {/* Stars */}
                  <div className="mt-6 flex items-center gap-1">
                    {[...Array(testimonials[current].rating)].map(
                      (_, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            opacity: 0,
                            scale: 0.8,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            delay: 0.15 + index * 0.05,
                            duration: 0.25,
                          }}
                        >
                          <Star
                            size={16}
                            fill="currentColor"
                            className="text-lime-300"
                          />
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-lime-300 to-emerald-500 text-sm font-bold text-green-950">
                      {testimonials[current].author.charAt(0)}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {testimonials[current].author}
                      </p>

                      <p className="text-xs text-green-200/60">
                        {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =================================================
                PROGRESS BAR
            ================================================== */}

            <div className="relative z-10 mt-8">
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  key={current}
                  initial={{ width: "0%" }}
                  animate={{
                    width: isPlaying ? "100%" : "0%",
                  }}
                  transition={{
                    duration: isPlaying
                      ? SLIDE_DURATION / 1000
                      : 0.2,
                    ease: "linear",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-lime-300 to-emerald-400"
                />
              </div>
            </div>

            {/* =================================================
                NAVIGATION
            ================================================== */}

            <div className="relative z-10 mt-6 flex items-center justify-between">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className="group relative"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ease-out ${
                        index === current
                          ? "w-8 bg-lime-300"
                          : "w-2 bg-white/25 hover:bg-white/45"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={prevSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={18} />
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setIsPlaying((prev) => !prev)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause size={16} />
                  ) : (
                    <Play size={16} />
                  )}
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={nextSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  aria-label="Next slide"
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              TRUST STATS
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4"
          >
            <TrustStat
              icon={ShieldCheck}
              value="100%"
              label="Client Satisfaction"
              delay={0.1}
            />

            <TrustStat
              icon={Star}
              value="5.0"
              label="Average Rating"
              delay={0.2}
            />

            <TrustStat
              icon={Users}
              value="50+"
              label="Trusted Partners"
              delay={0.3}
            />

            <TrustStat
              icon={Quote}
              value="100+"
              label="Projects Delivered"
              delay={0.4}
            />
          </motion.div>
        </div>

        {/* =====================================================
            MARQUEE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-10 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-50 py-5 dark:border-white/10 dark:bg-white/[0.025]"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeQuotes, ...marqueeQuotes].map(
              (quote, index) => (
                <div
                  key={`${quote}-${index}`}
                  className="mx-6 flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                  {quote}
                </div>
              )
            )}
          </div>
        </motion.div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/[0.025] sm:p-7"
        >
          {/* Gradient Border */}
          <motion.div
            animate={{
              backgroundPosition: [
                "0% 50%",
                "100% 50%",
                "0% 50%",
              ],
            }}
            transition={{
              duration: 8,
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
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
                Work With Us
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                Have a renewable energy project in mind?
              </h3>
            </div>

            <Link to="/enquiry">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 22,
                }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30"
              >
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
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
                  Discuss Your Project
                </span>

                <ArrowRight
                  size={17}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          MARQUEE ANIMATION
      ====================================================== */}

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
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
   TRUST STAT
========================================================= */

/* =========================================================
   TRUST STAT
========================================================= */

function TrustStat({
  icon: Icon,
  value,
  label,
  delay,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
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
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group relative overflow-hidden rounded-2xl
        border border-gray-200
        bg-white
        p-5
        shadow-sm
        transition-all duration-500 ease-out

        hover:border-green-300
        hover:bg-green-50/40
        hover:shadow-lg
        hover:shadow-green-900/10

        dark:border-white/10
        dark:bg-white/[0.025]
        dark:hover:border-green-500/30
        dark:hover:bg-green-500/[0.05]
        dark:hover:shadow-green-950/20
      "
    >
      {/* =====================================================
          HOVER GLOW
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileHover={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-32 w-32
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-green-400/10
          blur-3xl
          dark:bg-green-400/5
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex items-center gap-4">
        {/* Icon */}
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
          className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-xl
            border border-green-200
            bg-green-50
            text-green-600
            transition-all duration-500

            group-hover:border-green-300
            group-hover:bg-green-100
            group-hover:text-green-700

            dark:border-green-900/40
            dark:bg-green-900/20
            dark:text-green-400

            dark:group-hover:border-green-700
            dark:group-hover:bg-green-900/40
            dark:group-hover:text-green-300
          "
        >
          <Icon size={20} />
        </motion.div>

        {/* Text */}
        <div>
          <p
            className="
              text-2xl font-bold
              text-gray-900
              transition-colors duration-300

              dark:text-white
            "
          >
            {value}
          </p>

          <p
            className="
              mt-0.5
              text-xs font-medium
              text-gray-500
              transition-colors duration-300

              group-hover:text-gray-600

              dark:text-gray-400
              dark:group-hover:text-gray-300
            "
          >
            {label}
          </p>
        </div>
      </div>

      {/* =====================================================
          BOTTOM HOVER LINE
      ====================================================== */}

      <div
        className="
          absolute bottom-0 left-0
          h-[2px] w-full
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-emerald-400
          via-green-500
          to-lime-400
          transition-transform
          duration-500
          ease-out
          group-hover:scale-x-100
        "
      />
    </motion.div>
  );
}