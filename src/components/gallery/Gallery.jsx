import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Expand,
  Factory,
  Images,
  Leaf,
  MapPin,
  Recycle,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import g1 from "../../assets/g1.jpeg";
import g2 from "../../assets/g2.jpeg";
import g3 from "../../assets/g3.jpeg";
import g4 from "../../assets/g4.jpeg";
import g5 from "../../assets/g5.jpeg";
import g6 from "../../assets/g6.jpeg";
import g7 from "../../assets/g7.jpeg";
import g8 from "../../assets/g8.jpeg";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  /*
   * IMPORTANT:
   * These are the image files currently available in the project.
   * No unverified project/client/location claims are added.
   */

  const galleryItems = [
  {
    id: 1,
    category: "Bio-CNG / CBG",
    title: "Bio-CNG Plant Entrance",
    location: "Plant Premises",
    image: g1,
    size: "large",
  },

  {
    id: 2,
    category: "Bio-CNG / CBG",
    title: "Feedstock Processing Area",
    location: "Plant Operations",
    image: g2,
    size: "normal",
  },

  {
    id: 3,
    category: "Bio-CNG / CBG",
    title: "Process Pipeline Network",
    location: "Engineering Section",
    image: g3,
    size: "normal",
  },

  {
    id: 4,
    category: "Bio-CNG / CBG",
    title: "Bio-CNG Upgrading Unit",
    location: "Gas Purification Area",
    image: g4,
    size: "large",
  },

  {
    id: 5,
    category: "Bio-CNG / CBG",
    title: "Plant Utility Block",
    location: "Utility & Control Section",
    image: g5,
    size: "normal",
  },

  {
    id: 6,
    category: "Bio-CNG / CBG",
    title: "Bio-CNG Storage Tanks",
    location: "Storage & Utility Area",
    image: g6,
    size: "normal",
  },

  {
    id: 7,
    category: "Bio-CNG / CBG",
    title: "Gas Processing Vessels",
    location: "Process Equipment Section",
    image: g7,
    size: "large",
  },

  {
    id: 8,
    category: "Bio-CNG / CBG",
    title: "Plant Tank Farm",
    location: "Bio-CNG Plant Overview",
    image: g8,
    size: "normal",
  },

  // Repeat images (different views)

  {
    id: 9,
    category: "Project Execution",
    title: "Bio-CNG Facility Overview",
    location: "Project Execution Site",
    image: g1,
    size: "large",
  },

  {
    id: 10,
    category: "Project Execution",
    title: "Storage Tank Installation",
    location: "Plant Infrastructure",
    image: g6,
    size: "normal",
  },

  {
    id: 11,
    category: "Project Execution",
    title: "Industrial Process Equipment",
    location: "Engineering Works",
    image: g7,
    size: "normal",
  },

  {
    id: 12,
    category: "Project Execution",
    title: "Renewable Energy Facility",
    location: "Industrial Plant",
    image: g8,
    size: "large",
  },
];
  /*
   * Categories are aligned with WRELKIN's broader company capabilities.
   *
   * Some categories currently have no uploaded gallery image.
   * They are still included so the gallery structure is ready
   * when relevant photographs are added later.
   */

const filters = [
  "All",
  "Bio-CNG / CBG",
  "Project Execution",
];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const currentIndex = selectedImage
    ? filteredItems.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const openImage = (item) => {
    setSelectedImage(item);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    if (!filteredItems.length) return;

    const previousIndex =
      currentIndex <= 0 ? filteredItems.length - 1 : currentIndex - 1;

    setSelectedImage(filteredItems[previousIndex]);
  };

  const showNext = () => {
    if (!filteredItems.length) return;

    const nextIndex =
      currentIndex >= filteredItems.length - 1 ? 0 : currentIndex + 1;

    setSelectedImage(filteredItems[nextIndex]);
  };

  /*
   * Keyboard navigation
   */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentIndex, filteredItems]);

  /*
   * Lock page scroll while lightbox is open
   */

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="overflow-hidden bg-white transition-colors duration-500 dark:bg-[#031009]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white pt-10 transition-colors duration-500 dark:bg-[#031009] sm:pt-16 lg:pt-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.06, 0.14, 0.06],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[120px] dark:bg-emerald-500/20 sm:h-[500px] sm:w-[500px] sm:blur-[130px]"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-lime-300/10 blur-[120px] dark:bg-lime-400/10 sm:h-[500px] sm:w-[500px] sm:blur-[130px]"
          />

          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
              backgroundSize: "70px 70px",
              maskImage:
                "radial-gradient(circle at center, black 20%, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 20%, transparent 78%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-2 text-xs font-semibold text-green-700 dark:border-green-400/20 dark:bg-green-500/10 dark:text-green-300 sm:px-4 sm:text-sm">
                <Images size={15} />

                <span>WRELKIN Gallery</span>
              </div>

              <h1 className="mt-5 max-w-4xl text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.045em] text-gray-950 dark:text-white sm:mt-6 sm:text-5xl lg:mt-7 lg:text-[4.7rem]">
                Engineering a{" "}
                <span className="text-green-600 dark:text-green-400">
                  cleaner energy
                </span>{" "}
                future.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                Explore selected visuals representing WRELKIN's renewable energy
                infrastructure, engineering capabilities, plant systems and
                project execution across multiple clean energy applications.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <a
                  href="#gallery"
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition-all hover:bg-green-700 dark:bg-green-500 dark:shadow-green-500/20 dark:hover:bg-green-400 sm:px-7 sm:py-3.5"
                >
                  Explore Gallery
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/enquiry"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-green-400 hover:bg-green-50 hover:text-green-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-gray-200 dark:hover:border-green-400/40 dark:hover:bg-green-400/10 sm:px-7 sm:py-3.5"
                >
                  Start Your Project
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>

            {/* =====================================================
                RIGHT VISUAL — REDESIGNED (LIGHT + DARK)
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="relative w-full"
            >
              <div className="relative mx-auto w-full max-w-[430px] sm:max-w-[460px] lg:max-w-[480px]">

                {/* OUTER SOFT GLOW */}

                <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-green-200/60 via-emerald-100/50 to-lime-200/60 blur-2xl dark:from-green-500/10 dark:via-transparent dark:to-lime-400/10" />

                {/* MAIN 3D CARD */}

                <div className="relative aspect-square rounded-[2.5rem] border border-green-200 bg-gradient-to-br from-white via-green-50/80 to-emerald-100/90 shadow-[0_35px_80px_-25px_rgba(22,101,52,0.4)] dark:border-green-400/20 dark:from-white/[0.04] dark:via-white/[0.02] dark:to-green-950/50 dark:shadow-black/40 sm:rounded-[3rem]">

                  {/* TOP LIGHT REFLECTION */}

                  <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent dark:via-white/20" />

                  {/* INNER DASHED RING */}

                  <div className="absolute inset-3 rounded-[2rem] border border-dashed border-green-300/70 dark:border-green-400/15 sm:inset-4 sm:rounded-[2.4rem]" />

                  {/* SUBTLE GRID TEXTURE */}

                  <div
                    className="absolute inset-0 rounded-[2.5rem] opacity-[0.05] dark:opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
                      backgroundSize: "34px 34px",
                    }}
                  />

                  {/* ROTATING ORBIT */}

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-9 rounded-full border border-green-400/40 dark:border-green-400/15 sm:inset-11"
                  >
                    <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-green-500 shadow-md shadow-green-500/50" />

                    <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-lime-400 shadow-md shadow-lime-400/50" />
                  </motion.div>

                  {/* CENTER TILE */}

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative flex h-28 w-28 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 text-white shadow-2xl shadow-green-600/40 ring-1 ring-white/40 dark:shadow-green-500/20 sm:h-32 sm:w-32 sm:rounded-[2rem]"
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_55%)]" />

                      <Images
                        size={50}
                        strokeWidth={1.4}
                        className="relative sm:h-[54px] sm:w-[54px]"
                      />
                    </motion.div>

                    {/* FLOATING SHADOW UNDER TILE */}

                    <div className="mx-auto mt-5 h-3.5 w-24 rounded-full bg-green-900/25 blur-[6px] dark:bg-black/60" />

                  </div>

                  {/* CORNER TILE — LEAF */}

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="absolute left-6 top-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-green-200 bg-white/95 text-green-600 shadow-lg shadow-green-900/10 backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-400 dark:shadow-black/30 sm:left-9 sm:top-9 sm:h-14 sm:w-14"
                  >
                    <Leaf size={22} className="sm:h-6 sm:w-6" />
                  </motion.div>

                  {/* CORNER TILE — BUILDING */}

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7,
                    }}
                    className="absolute right-6 top-10 flex h-11 w-11 items-center justify-center rounded-xl border border-green-200 bg-white/95 text-green-600 shadow-lg shadow-green-900/10 backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-400 dark:shadow-black/30 sm:right-10 sm:top-12 sm:h-12 sm:w-12"
                  >
                    <Building2 size={20} />
                  </motion.div>

                  {/* CORNER TILE — FACTORY */}

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.1,
                    }}
                    className="absolute bottom-7 right-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-green-200 bg-white/95 text-green-600 shadow-lg shadow-green-900/10 backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-400 dark:shadow-black/30 sm:bottom-9 sm:right-9 sm:h-14 sm:w-14"
                  >
                    <Factory size={22} className="sm:h-6 sm:w-6" />
                  </motion.div>

                  {/* CORNER TILE — ZAP */}

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                    className="absolute bottom-10 left-8 flex h-11 w-11 items-center justify-center rounded-xl border border-green-200 bg-white/95 text-green-600 shadow-lg shadow-green-900/10 backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-400 dark:shadow-black/30 sm:bottom-14 sm:left-12 sm:h-12 sm:w-12"
                  >
                    <Zap size={20} />
                  </motion.div>

                  {/* BOTTOM PILLS */}

                  <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-6">

                    <span className="whitespace-nowrap rounded-full border border-green-200 bg-white/95 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-green-700 shadow-sm backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-300 sm:text-[10px]">
                      Plant Visuals
                    </span>

                    <span className="whitespace-nowrap rounded-full border border-green-200 bg-white/95 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-green-700 shadow-sm backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-300 sm:text-[10px]">
                      Project Execution
                    </span>

                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-16 dark:bg-[#04100a] sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-green-400/5 blur-[110px]" />

          <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-lime-400/5 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Project Gallery
              </p>

              <div className="mt-5 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <MapPin size={16} className="text-green-500" />
                Renewable Energy & EPC
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-gray-950 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                A closer look at our{" "}
                <span className="text-green-600 dark:text-green-400">
                  work and capabilities.
                </span>
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                Browse selected visuals from renewable energy infrastructure,
                plant systems, engineering activities and project execution
                environments. The gallery complements WRELKIN's wider
                capabilities across renewable gas, solar power, sustainable
                fuels, waste-to-energy and related infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        id="gallery"
        className="relative overflow-hidden bg-gray-50 py-16 dark:bg-[#031009] sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
              Visual Portfolio
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Explore WRELKIN's renewable energy work.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
              Explore selected plant visuals, engineering systems and project
              execution environments across WRELKIN's renewable energy and EPC
              capabilities.
            </p>
          </motion.div>

          {/* Filters */}

          <div className="mt-8 flex flex-wrap gap-2 sm:mt-10">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter);
                    setSelectedImage(null);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-5 ${
                    isActive
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-green-300 hover:text-green-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300 dark:hover:border-green-500/40 dark:hover:text-green-400"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}

          <motion.div
            layout
            className="mt-8 grid auto-rows-[220px] grid-cols-1 gap-4 sm:mt-10 sm:auto-rows-[240px] sm:grid-cols-2 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  layout
                  type="button"
                  onClick={() => openImage(item)}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white text-left shadow-sm dark:border-white/10 dark:bg-white/[0.025] ${
                    item.size === "large"
                      ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                      : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-0 bg-green-500/0 transition-colors duration-500 group-hover:bg-green-500/10" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-300 sm:text-xs">
                          {item.category}
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                          {item.title}
                        </h3>

                        <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-300">
                          <MapPin size={12} />

                          {item.location}
                        </div>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                        <Expand size={16} />
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-[1.5rem] border border-gray-200 bg-white p-10 text-center dark:border-white/10 dark:bg-white/[0.025]"
            >
              <Images className="mx-auto text-gray-400" size={38} />

              <p className="mt-4 text-base font-semibold text-gray-700 dark:text-gray-300">
                Gallery images coming soon
              </p>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
                Visuals for this project area will be added as relevant
                photographs and project documentation become available.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* =====================================================
          CAPABILITY STRIP
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-16 dark:bg-[#04100a] sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              WRELKIN Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              More than project photographs.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
              WRELKIN's capabilities extend from engineering and EPC execution
              to installation, commissioning and long-term technical support
              across renewable energy applications.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Leaf,
                title: "Renewable Energy",
                text: "Bio-CNG, Biogas, Solar, Biodiesel, Bioethanol and Biomass solutions.",
              },
              {
                icon: Factory,
                title: "Plant Engineering",
                text: "Project-specific plant design, equipment integration and engineering support.",
              },
              {
                icon: Building2,
                title: "EPC & Execution",
                text: "Procurement, installation, commissioning and project execution support.",
              },
              {
                icon: ShieldCheck,
                title: "Technical Support",
                text: "O&M, troubleshooting, training and long-term technical assistance.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-[1.5rem] border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY STATS
      ===================================================== */}

      <section className="relative overflow-hidden bg-gray-50 py-16 dark:bg-[#031009] sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Images,
                value: "09",
                label: "Gallery Visuals",
              },
              {
                icon: Leaf,
                value: "10+",
                label: "Energy & Plant Solutions",
              },
              {
                icon: Building2,
                value: "2023",
                label: "Company Established",
              },
              {
                icon: Zap,
                value: "10+",
                label: "Years Combined Experience",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
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
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  className="rounded-[1.5rem] border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.025]"
                >
                  <Icon
                    size={21}
                    className="text-green-600 dark:text-green-400"
                  />

                  <p className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-16 dark:bg-[#04100a] sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-950/30 dark:via-[#04100a] dark:to-emerald-950/20" />

        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
            className="rounded-[1.75rem] border border-green-200 bg-white/70 p-7 shadow-xl shadow-green-900/5 backdrop-blur-xl dark:border-green-800/30 dark:bg-white/[0.025] sm:rounded-[2rem] sm:p-10 lg:p-12"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-600/20 dark:bg-green-500">
              <Images size={25} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              Work With WRELKIN
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Have a renewable energy project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              Discuss your Bio-CNG, Biogas, Solar, Biodiesel, Bioethanol,
              Biomass or Waste-to-Energy requirements with the WRELKIN team.
            </p>

            <div className="mt-7">
              <Link to="/enquiry">
                <motion.span
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition-all hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 sm:px-7 sm:py-3.5"
                >
                  Start Your Project
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-6"
            onClick={closeImage}
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={closeImage}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6 sm:top-6"
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>

            {/* PREVIOUS */}

            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#07130d] shadow-2xl"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain sm:max-h-[80vh]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16 sm:p-6 sm:pt-20">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-300">
                  {selectedImage.category}
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  {selectedImage.title}
                </h3>

                <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-300 sm:text-sm">
                  <MapPin size={13} />

                  {selectedImage.location}
                </div>
              </div>
            </motion.div>

            {/* NEXT */}

            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}