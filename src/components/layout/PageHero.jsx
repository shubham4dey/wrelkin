import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  Recycle,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";
import about1 from "../../assets/about/about1.avif";
import about2 from "../../assets/about/about2.avif";
import about3 from "../../assets/about/about3.avif";


export default function PageHero({
  title = "About Us",
  subtitle = "Powering the Future with Renewable Energy",
  description = "WRELKIN INDIA PRIVATE LIMITED delivers innovative renewable energy and EPC solutions across India, transforming resources into greener energy for a sustainable future.",
  showButton = false,
  buttonText = "Get Started",
  buttonLink = "/enquiry",
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // =========================================================
  // SLIDER DATA
  // =========================================================

  const slides = [
    {
      id: 1,
      label: "WRELKIN INDIA PRIVATE LIMITED",
      title: title,
      subtitle: subtitle,
      description: description,
      icon: Leaf,
      badge: "01",
      image: about1,
    },

    {
      id: 2,
      label: "RENEWABLE ENERGY & EPC",
      title: "Engineering a Greener Energy Future",
      subtitle: "Innovation • Engineering • Sustainability",
      description:
        "We deliver complete renewable energy and EPC solutions across Bio-CNG, Biogas, Solar Power, Biodiesel and Waste-to-Energy projects.",
      icon: Sun,
      badge: "02",
      image: about2,
    },

    {
      id: 3,
      label: "OUR COMMITMENT",
      title: "Turning Resources into Renewable Energy",
      subtitle: "Building a Greener & Energy-Secure Future",
      description:
        "With engineering excellence, advanced technology and responsible project execution, WRELKIN works towards creating sustainable long-term value for industries and communities.",
      icon: Recycle,
      badge: "03",
      image: about3,
    },
  ];

  // =========================================================
  // AUTO SLIDER
  // =========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // =========================================================
  // NEXT SLIDE
  // =========================================================

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // =========================================================
  // PREVIOUS SLIDE
  // =========================================================

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden

        min-h-[700px]

        bg-[#eef8f0]

        transition-colors
        duration-700

        dark:bg-[#031009]

        sm:min-h-[720px]

        lg:min-h-[760px]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{
            opacity: 0,
            scale: 1.06,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 1.1,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url("${slide.image}")`,
          }}
        />
      </AnimatePresence>

      {/* =====================================================
          DAY / NIGHT IMAGE OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-white/20

          transition-all
          duration-700

          dark:bg-[#031009]/62
        "
      />

      {/* =====================================================
          SOFT DAY / NIGHT GRADIENT
      ====================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-white/10
          via-transparent
          to-white/25

          transition-all
          duration-700

          dark:from-[#031009]/25
          dark:via-transparent
          dark:to-[#031009]/72
        "
      />

      {/* =====================================================
          PREMIUM GREEN ATMOSPHERE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-emerald-100/15
          via-transparent
          to-green-200/15

          dark:from-emerald-950/30
          dark:via-transparent
          dark:to-green-950/35
        "
      />

      {/* =====================================================
          RADIAL VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_18%,rgba(255,255,255,0.14)_100%)]

          dark:bg-[radial-gradient(circle_at_center,transparent_16%,rgba(0,20,10,0.58)_100%)]
        "
      />

      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* LEFT GREEN GLOW */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-0

            h-[420px]
            w-[420px]

            rounded-full

            bg-emerald-400/15

            blur-[130px]

            dark:bg-emerald-500/12
          "
        />

        {/* RIGHT GREEN GLOW */}

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.18, 0.08],
            x: [0, -25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-0

            h-[420px]
            w-[420px]

            rounded-full

            bg-lime-300/15

            blur-[130px]

            dark:bg-lime-500/10
          "
        />

        {/* CENTER GLOW */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2

            h-[420px]
            w-[420px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-green-400/10

            blur-[120px]
          "
        />

        {/* =====================================================
            PREMIUM GRID
        ====================================================== */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.025]

            dark:opacity-[0.045]
          "
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black 20%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 20%, transparent 82%)",
          }}
        />

        {/* =====================================================
            TOP FADE
        ====================================================== */}

        <div
          className="
            absolute
            inset-x-0
            top-0

            h-24

            bg-gradient-to-b
            from-white/20
            to-transparent

            dark:from-[#031009]/55
          "
        />

        {/* =====================================================
            BOTTOM FADE
        ====================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0

            h-32

            bg-gradient-to-t
            from-white/30
            to-transparent

            dark:from-[#031009]/80
          "
        />
      </div>

      {/* =====================================================
          MAIN HERO CONTAINER
          BALANCED TOP / BOTTOM SPACING
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto

          flex
          min-h-[700px]

          max-w-7xl

          items-center

          px-5

          pt-10
          pb-24

          sm:min-h-[720px]
          sm:px-8
          sm:pt-12
          sm:pb-24

          lg:min-h-[760px]
          lg:px-10
          lg:pt-14
          lg:pb-28
        "
      >
        {/* ===================================================
            SLIDE
        ===================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -25,
              scale: 0.98,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="w-full"
          >
            {/* =================================================
                PREMIUM TRANSPARENT GLASS CARD
            ================================================== */}

            <div
              className="
                relative
                mx-auto

                flex
                min-h-[450px]
                items-center

                max-w-5xl

                overflow-hidden

                rounded-[2rem]

                border
                border-white/45

                bg-white/25

                p-7

                shadow-[0_25px_80px_rgba(15,23,42,0.10)]

                backdrop-blur-xl

                transition-all
                duration-700

                dark:border-white/[0.08]
                dark:bg-[#061810]/30
                dark:shadow-[0_25px_90px_rgba(0,0,0,0.32)]

                sm:min-h-[470px]
                sm:p-10

                lg:min-h-[490px]
                lg:p-12
              "
            >
              {/* =================================================
                  CARD GLASS LIGHT
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-gradient-to-br
                  from-white/25
                  via-transparent
                  to-emerald-100/10

                  dark:from-white/[0.025]
                  dark:via-transparent
                  dark:to-green-400/[0.05]
                "
              />

              {/* =================================================
                  CARD BORDER GLOW
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  rounded-[2rem]

                  ring-1
                  ring-inset
                  ring-white/10

                  dark:ring-green-400/[0.08]
                "
              />

              {/* =================================================
                  CARD TOP SHINE
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-16
                  top-0

                  h-px

                  bg-gradient-to-r
                  from-transparent
                  via-white/70
                  to-transparent

                  dark:via-green-400/25
                "
              />

              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <div className="relative z-10 w-full text-center">

                {/* =================================================
                    ICON
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.05,
                  }}
                  className="
                    mx-auto
                    mb-4

                    flex
                    h-16
                    w-16

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-green-500/25

                    bg-white/40

                    text-green-600

                    shadow-lg
                    shadow-green-900/10

                    backdrop-blur-md

                    dark:border-green-400/20
                    dark:bg-green-500/10
                    dark:text-green-400
                  "
                >
                  <SlideIcon
                    size={27}
                    strokeWidth={1.8}
                  />
                </motion.div>

                {/* =================================================
                    LABEL
                ================================================== */}

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
                    duration: 0.55,
                    delay: 0.12,
                  }}
                  className="
                    mb-4

                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-green-600/20

                    bg-white/35

                    px-5
                    py-2.5

                    text-xs
                    font-semibold
                    uppercase

                    tracking-[0.17em]

                    text-green-700

                    shadow-sm

                    backdrop-blur-md

                    dark:border-green-500/20
                    dark:bg-green-500/10
                    dark:text-green-400
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5

                      rounded-full

                      bg-green-600

                      shadow-[0_0_8px_rgba(22,163,74,0.8)]

                      dark:bg-green-400
                    "
                  />

                  {slide.label}
                </motion.div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.18,
                  }}
                  className="
                    mx-auto

                    max-w-4xl

                    text-4xl
                    font-bold

                    leading-[1.05]

                    tracking-[-0.045em]

                    text-gray-950

                    drop-shadow-[0_2px_8px_rgba(255,255,255,0.45)]

                    dark:text-white
                    dark:drop-shadow-[0_3px_15px_rgba(0,0,0,0.72)]

                    sm:text-5xl

                    lg:text-6xl

                    xl:text-7xl
                  "
                >
                  {slide.title}
                </motion.h1>

                {/* =================================================
                    SUBTITLE
                ================================================== */}

                {slide.subtitle && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.28,
                    }}
                    className="
                      mx-auto
                      mt-4

                      max-w-3xl

                      text-lg
                      font-semibold

                      text-green-700

                      drop-shadow-sm

                      dark:text-green-300
                      dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]

                      sm:text-xl

                      lg:text-2xl
                    "
                  >
                    {slide.subtitle}
                  </motion.p>
                )}

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                {slide.description && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.35,
                    }}
                    className="
                      mx-auto
                      mt-4

                      max-w-3xl

                      text-sm
                      leading-7

                      text-gray-800

                      drop-shadow-sm

                      dark:text-gray-200
                      dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.72)]

                      sm:text-base

                      lg:text-lg
                    "
                  >
                    {slide.description}
                  </motion.p>
                )}

                {/* =================================================
                    OPTIONAL BUTTON
                ================================================== */}

                {showButton && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.45,
                    }}
                    className="mt-7"
                  >
                    <Link to={buttonLink}>
                      <motion.span
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className="
                          group

                          inline-flex
                          items-center
                          gap-2

                          rounded-full

                          bg-green-600

                          px-6
                          py-3.5

                          text-sm
                          font-semibold
                          text-white

                          shadow-xl
                          shadow-green-600/25

                          transition-all

                          hover:bg-green-700

                          dark:bg-green-500
                          dark:hover:bg-green-600
                        "
                      >
                        {buttonText}

                        <ArrowRight
                          size={17}
                          className="
                            transition-transform
                            duration-300

                            group-hover:translate-x-1
                          "
                        />
                      </motion.span>
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* =====================================================
            PREVIOUS BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="
            absolute
            left-2
            top-1/2

            z-30

            hidden

            h-12
            w-12

            -translate-y-1/2

            items-center
            justify-center

            rounded-full

            border
            border-white/40

            bg-white/35

            text-gray-800

            shadow-lg

            backdrop-blur-lg

            transition-all
            duration-300

            hover:scale-105
            hover:border-green-400
            hover:bg-white/60
            hover:text-green-600

            dark:border-white/10
            dark:bg-black/20
            dark:text-white

            dark:hover:border-green-400/40
            dark:hover:bg-green-500/10
            dark:hover:text-green-400

            sm:flex

            lg:left-4
          "
        >
          <ArrowLeft size={19} />
        </button>

        {/* =====================================================
            NEXT BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            absolute
            right-2
            top-1/2

            z-30

            hidden

            h-12
            w-12

            -translate-y-1/2

            items-center
            justify-center

            rounded-full

            border
            border-white/40

            bg-white/35

            text-gray-800

            shadow-lg

            backdrop-blur-lg

            transition-all
            duration-300

            hover:scale-105
            hover:border-green-400
            hover:bg-white/60
            hover:text-green-600

            dark:border-white/10
            dark:bg-black/20
            dark:text-white

            dark:hover:border-green-400/40
            dark:hover:bg-green-500/10
            dark:hover:text-green-400

            sm:flex

            lg:right-4
          "
        >
          <ArrowRight size={19} />
        </button>
      </div>

      {/* =====================================================
          BOTTOM SLIDER CONTROLS
          FIXED & ALWAYS VISIBLE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-6
          left-1/2

          z-40

          flex
          -translate-x-1/2

          items-center
          gap-4

          rounded-full

          border
          border-white/20

          bg-white/10

          px-4
          py-2

          shadow-lg

          backdrop-blur-md

          dark:border-white/10
          dark:bg-black/15
        "
      >
        {/* CURRENT NUMBER */}

        <span
          className="
            text-xs
            font-bold
            tracking-[0.2em]

            text-green-600

            dark:text-green-400
          "
        >
          {slide.badge}
        </span>

        {/* DOTS */}

        <div className="flex items-center gap-2">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-1.5
                rounded-full

                transition-all
                duration-500

                ${
                  currentSlide === index
                    ? "w-10 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.55)] dark:bg-green-400"
                    : "w-2 bg-gray-500/45 hover:bg-green-500/70 dark:bg-white/25 dark:hover:bg-white/45"
                }
              `}
            />
          ))}
        </div>

        {/* TOTAL */}

        <span
          className="
            text-xs
            font-bold
            tracking-[0.2em]

            text-gray-600

            dark:text-gray-300
          "
        >
          0{slides.length}
        </span>
      </div>
    </section>
  );
}