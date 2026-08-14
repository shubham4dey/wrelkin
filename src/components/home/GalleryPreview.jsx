import { motion } from "framer-motion";
import { ArrowUpRight, Factory, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import g1 from "../../assets/g1.jpeg";
import g2 from "../../assets/g2.jpeg";
import g3 from "../../assets/g3.jpeg";
import g4 from "../../assets/g4.jpeg";
import g5 from "../../assets/g5.jpeg";

const galleryItems = [
  {
    title: "Filter Press Unit",
    category: "Industrial Processing",
    image: g1,
    size: "large",
  },
  {
    title: "Thermic Fluid Heater",
    category: "Utility Systems",
    image: g2,
    size: "small",
  },
  {
    title: "Biodiesel Processing Plant",
    category: "Plant Infrastructure",
    image: g3,
    size: "small",
  },
  {
    title: "Storage & Mixing Tanks",
    category: "Process Equipment",
    image: g4,
    size: "small",
  },
  {
    title: "Reaction Vessel System",
    category: "Chemical Processing",
    image: g5,
    size: "small",
  },
];

export default function GalleryPreview() {
  return (
    <section
      data-component="GalleryPreview"
      className="relative overflow-hidden bg-white py-24 transition-colors duration-500 dark:bg-[#04100a] sm:py-28 lg:py-32"
    >
      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Ambient Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-emerald-300/25 blur-[120px] dark:bg-emerald-700/10"
        />

        {/* Right Ambient Glow */}
        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-green-300/25 blur-[120px] dark:bg-green-700/10"
        />

        {/* Simple Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
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
              <Sparkles size={15} />
              <span>Our Work in Action</span>
            </motion.div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
              Explore our renewable energy projects, plant infrastructure,
              engineering systems and the technology behind sustainable energy
              solutions.
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
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
              <SplitText text="See the technology" delay={0.1} />
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

                <span className="relative"> behind</span>
              </span>{" "}
              <SplitText text="the energy." delay={0.4} />
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            FEATURED GALLERY
        ====================================================== */}

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
          <GalleryCard
            item={galleryItems[0]}
            className="min-h-[420px] lg:col-span-7 lg:row-span-2 lg:min-h-[620px]"
            featured
            index={0}
          />

          <GalleryCard
            item={galleryItems[1]}
            className="min-h-[280px] lg:col-span-5 lg:min-h-[300px]"
            index={1}
          />

          <GalleryCard
            item={galleryItems[2]}
            className="min-h-[280px] lg:col-span-5 lg:min-h-[300px]"
            index={2}
          />
        </div>

        {/* =====================================================
            SMALL CARDS
        ====================================================== */}

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <GalleryCard
            item={galleryItems[3]}
            className="min-h-[280px]"
            index={3}
          />

          <GalleryCard
            item={galleryItems[4]}
            className="min-h-[280px]"
            index={4}
          />
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
          }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/[0.025] sm:p-8"
        >
          {/* Gradient Border */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-r from-emerald-500 via-lime-400 to-green-600 opacity-15 dark:opacity-30" />

          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                <Factory size={22} />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  From waste to renewable energy
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Discover more of our projects and plant solutions.
                </p>
              </div>
            </div>

            <Link to="/gallery">
              <motion.button
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
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30"
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

                <span className="relative z-10">View Full Gallery</span>

                <ArrowRight
                  size={17}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
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
   GALLERY CARD
   LIGHTWEIGHT + SMOOTH HOVER
========================================================= */

function GalleryCard({ item, className = "", featured = false, index = 0 }) {
  return (
    <motion.div
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-100 shadow-sm transition-[transform,box-shadow,border-color] duration-500 ease-out hover:border-green-300 hover:shadow-xl hover:shadow-green-900/10 dark:border-white/10 dark:bg-[#0a1c12] dark:hover:border-green-700/50 ${className}`}
    >
      {/* =====================================================
          SMOOTH HOVER COLOR
      ====================================================== */}

      <motion.div
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
        className="pointer-events-none absolute inset-0 z-[1] rounded-[1.75rem] bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10"
      />

      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden rounded-[1.75rem]">
        <motion.img
          src={item.image}
          alt={item.title}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
        {/* Gallery Page Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-green-500/0 transition-colors duration-500 group-hover:bg-green-500/10" />

        <div
          className="
    absolute inset-0
    z-10
    flex items-center justify-center
    transition-all duration-500
    group-hover:opacity-0
    group-hover:scale-75
  "
        >
          <div
            className="
      flex h-16 w-16 items-center justify-center
      rounded-full
      border border-white/40
      bg-white/10
      backdrop-blur-md
      shadow-lg
    "
          >
            <ArrowUpRight size={28} className="rotate-45 text-white" />
          </div>
        </div>
      </div>

      {/* =====================================================
          TOP BADGE
      ====================================================== */}

      <div
        className="
    absolute
    left-5
    top-5
    z-20
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-500
  "
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
          {item.category}
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
    absolute inset-0
    z-20
    flex items-end
    p-6
    bg-gradient-to-t
    from-black/90
    via-black/45
    to-transparent
    opacity-0
    transition-all
    duration-500
    group-hover:opacity-100
  "
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-green-300 opacity-80 transition-opacity duration-500 group-hover:opacity-100">
              WRELKIN INDIA PRIVATE LIMITED
            </p>

            <h3
              className={`font-bold tracking-tight text-white transition-colors duration-500 group-hover:text-green-300 ${
                featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
              }`}
            >
              {item.title}
            </h3>

            <p className="mt-1 text-xs text-white/60">{item.category}</p>
          </div>

          {/* =====================================================
              ARROW
          ====================================================== */}

          <Link to="/gallery">
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
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-[background-color,border-color] duration-300 group-hover:border-green-400/40 group-hover:bg-green-500/20"
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* =====================================================
          LIGHTWEIGHT SHINE
      ====================================================== */}

      <motion.div
        initial={{
          x: "-130%",
        }}
        whileHover={{
          x: "130%",
        }}
        transition={{
          duration: 0.75,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 z-20 w-1/3 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
    </motion.div>
  );
}
