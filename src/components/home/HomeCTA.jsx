import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Factory,
  Leaf,
  Recycle,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeCTA() {
  return (
    <section
      data-component="HomeCTA"
      className="
        relative overflow-hidden
        bg-gray-50
        py-24
        text-gray-900
        transition-colors duration-500
        dark:bg-[#04100a]
        dark:text-white
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.22, 0.35, 0.22],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute left-1/2 top-1/2
            h-[600px] w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-green-200/40
            blur-[140px]
            dark:bg-green-500/15
          "
        />

        {/* Left Glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -left-40 top-10
            h-[400px] w-[400px]
            rounded-full
            bg-emerald-200/30
            blur-[120px]
            dark:bg-emerald-500/10
          "
        />

        {/* Right Glow */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -right-40 bottom-0
            h-[450px] w-[450px]
            rounded-full
            bg-lime-200/30
            blur-[130px]
            dark:bg-lime-400/10
          "
        />

        {/* Radial Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.025]
            dark:opacity-[0.045]
          "
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 80%)",
          }}
        />

        {/* =====================================================
            SUBTLE FLOATING PARTICLES
        ====================================================== */}

        {[...Array(4)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(index) * 8, 0],
              opacity: [0.12, 0.3, 0.12],
            }}
            transition={{
              duration: 7 + index * 0.6,
              repeat: Infinity,
              delay: index * 0.8,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-1.5 w-1.5
              rounded-full
              bg-emerald-500
              shadow-[0_0_10px_rgba(16,185,129,0.45)]
              dark:bg-emerald-400
              dark:shadow-[0_0_10px_rgba(52,211,153,0.6)]
            "
            style={{
              left: `${15 + index * 23}%`,
              top: `${22 + (index % 2) * 40}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            TOP BADGE
        ====================================================== */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-green-200
              bg-green-50
              px-4 py-2
              text-xs font-medium
              text-green-700
              backdrop-blur-md

              dark:border-green-400/20
              dark:bg-green-400/5
              dark:text-green-300
            "
          >
            <Sparkles size={14} />

            <span>
              Build a cleaner future with WRELKIN
            </span>
          </motion.div>
        </motion.div>

        {/* =====================================================
            HEADING
        ====================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-8 max-w-4xl text-center"
        >
          <h2
            className="
              text-4xl
              font-bold
              leading-[1.05]
              tracking-[-0.045em]
              text-gray-950

              dark:text-white

              sm:text-5xl
              lg:text-7xl
            "
          >
            <SplitText
              text="Turn your"
              delay={0.1}
            />

            <span className="relative inline-block text-green-600 dark:text-green-400">
              {/* Highlight */}
              <motion.span
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  inset-x-0
                  bottom-1
                  top-1
                  origin-left
                  rounded-lg
                  bg-gradient-to-r
                  from-emerald-400/25
                  to-lime-400/25
                  -z-10

                  dark:from-emerald-400/20
                  dark:to-lime-400/20
                "
              />

              <span className="relative">
                {" "}
                waste
              </span>
            </span>

            <br />

            <span className="text-gray-900 dark:text-white">
              into{" "}
            </span>

            <span className="text-lime-600 dark:text-lime-300">
              opportunity.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-gray-600

              dark:text-green-100/65

              sm:text-lg
            "
          >
            From Bio-CNG and Biogas plants to Solar, Biodiesel and
            Waste-to-Energy solutions, WRELKIN delivers complete renewable
            energy and EPC solutions designed around your requirements.
          </p>
        </motion.div>

        {/* =====================================================
            CTA BUTTONS
        ====================================================== */}

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
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="
            mt-9
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
          "
        >
          {/* =====================================================
              PRIMARY BUTTON
          ====================================================== */}

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
              className="
                group
                relative
                flex
                cursor-pointer
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-green-600
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                shadow-xl
                shadow-green-600/20

                transition-all
                duration-300

                hover:bg-green-700
                hover:shadow-green-600/30

                dark:bg-green-500
                dark:hover:bg-green-600
                dark:shadow-green-900/30
              "
            >
              {/* Soft Glow */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-full
                  bg-green-400/10
                  blur-md
                  transition-opacity duration-500
                  group-hover:bg-green-300/20
                "
              />

              {/* Shine */}
              <motion.span
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/25
                  to-transparent
                "
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "200%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 4,
                }}
              />

              <span className="relative z-10">
                Start Your Project
              </span>

              <ArrowUpRight
                size={18}
                className="
                  relative z-10
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              />
            </motion.div>
          </Link>

          {/* =====================================================
              SECONDARY BUTTON
          ====================================================== */}

          <Link to="/contact">
            <motion.div
              whileHover={{
                scale: 1.03,
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
              className="
                group
                relative
                flex
                cursor-pointer
                items-center
                gap-2
                overflow-hidden
                rounded-full
                border
                border-gray-200
                bg-white
                px-7
                py-4
                text-sm
                font-semibold
                text-gray-900
                shadow-sm
                backdrop-blur-md

                transition-all
                duration-300

                hover:border-green-300
                hover:bg-green-50/60
                hover:shadow-md

                dark:border-white/15
                dark:bg-white/5
                dark:text-white
                dark:hover:border-green-400/40
                dark:hover:bg-white/10
              "
            >
              {/* Hover Background */}
              <motion.div
                initial={{
                  x: "-100%",
                }}
                whileHover={{
                  x: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-r
                  from-green-500/5
                  to-emerald-500/5

                  dark:from-green-500/10
                  dark:to-emerald-500/10
                "
              />

              <span className="relative z-10">
                Talk to Our Team
              </span>

              <ArrowRight
                size={16}
                className="
                  relative z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* =====================================================
            SOLUTION CARDS
        ====================================================== */}

        <div
          className="
            mt-16
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          <SolutionCard
            icon={Factory}
            title="Bio-CNG & Biogas"
            text="Turn organic feedstock into renewable gas."
            delay={0}
          />

          <SolutionCard
            icon={Recycle}
            title="Waste-to-Energy"
            text="Create value from waste through smart systems."
            delay={0.1}
          />

          <SolutionCard
            icon={Zap}
            title="Solar EPC"
            text="Reliable renewable power for modern operations."
            delay={0.2}
          />

          <SolutionCard
            icon={Leaf}
            title="Sustainable Solutions"
            text="Engineering designed for long-term impact."
            delay={0.3}
          />
        </div>

        {/* =====================================================
            BOTTOM BRAND LINE
        ====================================================== */}

        <motion.div
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
            duration: 0.8,
            delay: 0.4,
          }}
          className="
            relative
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-gray-200
            pt-7

            dark:border-white/10

            sm:flex-row
          "
        >
          {/* Gradient Line */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-green-500/40
              to-transparent
            "
          />

          {/* Brand */}
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="
                flex
                h-8 w-8
                items-center
                justify-center
                rounded-full
                bg-green-100
                text-green-600

                dark:bg-green-500/10
                dark:text-green-400
              "
            >
              <Leaf size={15} />
            </motion.div>

            <span
              className="
                text-xs
                font-medium
                tracking-wide
                text-gray-600

                dark:text-green-100/50
              "
            >
              WRELKIN INDIA PRIVATE LIMITED
            </span>
          </div>

          <p
            className="
              text-xs
              text-gray-500

              dark:text-green-100/40
            "
          >
            Powering the Future with Renewable Energy
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   SPLIT TEXT ANIMATION
========================================================= */

function SplitText({
  text,
  delay = 0,
}) {
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
   SOLUTION CARD
   PREMIUM + LIGHT/DARK OPTIMIZED
========================================================= */

function SolutionCard({
  icon: Icon,
  title,
  text,
  delay,
}) {
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
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-sm

        transition-all
        duration-500
        ease-out

        hover:border-green-300
        hover:bg-green-50/40
        hover:shadow-lg
        hover:shadow-green-900/10

        dark:border-white/10
        dark:bg-white/[0.035]
        dark:hover:border-green-400/20
        dark:hover:bg-white/[0.06]
        dark:hover:shadow-green-950/20
      "
    >
      {/* =====================================================
          CENTERED HOVER GLOW
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
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-28
          w-28
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

      <div className="relative z-10 flex items-start gap-4">
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
            relative
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-green-200
            bg-green-50
            text-green-700

            transition-all
            duration-500

            group-hover:border-green-300
            group-hover:bg-green-100
            group-hover:text-green-700

            dark:border-green-900/40
            dark:bg-green-500/10
            dark:text-green-400

            dark:group-hover:border-green-700
            dark:group-hover:bg-green-900/40
            dark:group-hover:text-green-300
          "
        >
          {/* Soft Hover Glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-xl
              bg-green-400/10
              opacity-0
              blur-md
              transition-opacity
              duration-500

              group-hover:opacity-100

              dark:bg-green-400/10
            "
          />

          <Icon
            size={18}
            className="relative z-10"
          />
        </motion.div>

        {/* Text */}
        <div className="min-w-0">
          <h3
            className="
              text-sm
              font-bold
              text-gray-900
              transition-colors
              duration-300

              group-hover:text-green-700

              dark:text-white
              dark:group-hover:text-green-300
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-1.5
              text-xs
              leading-5
              text-gray-500
              transition-colors
              duration-300

              dark:text-green-100/50
              dark:group-hover:text-green-100/65
            "
          >
            {text}
          </p>
        </div>
      </div>

      {/* =====================================================
          BOTTOM HOVER LINE
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
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          origin-left
          rounded-full
          bg-gradient-to-r
          from-emerald-400
          via-green-500
          to-lime-400
        "
      />

      {/* =====================================================
          SHINE EFFECT
      ====================================================== */}

      <motion.div
        initial={{
          x: "-120%",
        }}
        whileHover={{
          x: "120%",
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-y-0
          z-20
          w-1/3
          skew-x-[-20deg]
          bg-gradient-to-r
          from-transparent
          via-gray-900/5
          to-transparent

          dark:via-white/10
        "
      />
    </motion.div>
  );
}