import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Handshake,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const clients = [
  {
    name: "Indian Railways",
    short: "IR",
    type: "Government Sector",
  },
  {
    name: "Industrial Partners",
    short: "IP",
    type: "Industrial",
  },
  {
    name: "Government Organizations",
    short: "GO",
    type: "Government",
  },
  {
    name: "Private Enterprises",
    short: "PE",
    type: "Enterprise",
  },
  {
    name: "Energy Partners",
    short: "EP",
    type: "Renewable Energy",
  },
];

export default function ClientsSection() {
  return (
    <section
      data-component="ClientsSection"
      className="relative overflow-hidden bg-gray-50 py-24 transition-colors duration-500 dark:bg-[#06120b] sm:py-28 lg:py-32"
    >
      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Ambient Glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-green-200/40 blur-[120px] dark:bg-green-800/15"
        />

        {/* Right Ambient Glow */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-200/40 blur-[120px] dark:bg-emerald-800/15"
        />

        {/* Radial Grid */}
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
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
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
              className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 dark:border-green-800/40 dark:bg-green-900/20 dark:text-green-300"
            >
              <Handshake size={15} />

              <span>Trusted Partnerships</span>
            </motion.div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
              Building long-term relationships with government organizations,
              industrial clients and private enterprises across renewable energy
              projects.
            </p>
          </motion.div>

          {/* RIGHT */}
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
              <SplitText text="Trusted by organisations" delay={0.1} />

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
                  className="absolute inset-x-0 bottom-1 top-1 origin-left rounded-lg bg-gradient-to-r from-emerald-400/20 to-lime-400/20"
                />

                <span className="relative"> building tomorrow.</span>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            TRUST STRIP
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 grid gap-4 sm:grid-cols-3"
        >
          <TrustItem
            icon={ShieldCheck}
            title="Quality Focused"
            text="Engineering with strict quality standards"
            delay={0}
          />

          <TrustItem
            icon={Building2}
            title="Multi-Sector"
            text="Government, industrial & commercial"
            delay={0.1}
          />

          <TrustItem
            icon={CheckCircle2}
            title="Project Driven"
            text="Focused on reliable project execution"
            delay={0.2}
          />
        </motion.div>

        {/* =====================================================
            CLIENT CARDS
        ====================================================== */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {clients.map((client, index) => (
            <ClientCard key={client.name} client={client} index={index} />
          ))}
        </div>

        {/* =====================================================
            PARTNERSHIP CTA
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-green-200 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-7 dark:border-green-900/30 dark:from-[#0b2115] dark:via-[#081810] dark:to-[#0c2417] sm:p-9"
        >
          {/* Animated Gradient Border */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-25 dark:opacity-40"
            style={{
              background:
                "linear-gradient(90deg, #10b981, #a3e635, #16a34a, #10b981)",
              backgroundSize: "300% 300%",
            }}
          />

          {/* Ambient Glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.22, 0.12],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-400/20 blur-3xl"
          />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* CTA CONTENT */}

            <div className="flex items-start gap-4">
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
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-600/20"
              >
                <Sparkles size={21} />
              </motion.div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
                  Partner With WRELKIN
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                  Let’s build a greener energy future together.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                  From biogas and Bio-CNG plants to solar and waste-to-energy
                  projects, our team delivers practical renewable energy
                  solutions.
                </p>
              </div>
            </div>

            {/* CTA BUTTON */}

            <Link to="/enquiry">
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
                className="group relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30"
              >
                {/* Button Shine */}
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 4,
                  }}
                />

                <span className="relative z-10">Start a Partnership</span>

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
   TRUST ITEM
========================================================= */

function TrustItem({ icon: Icon, title, text, delay }) {
  return (
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group relative flex items-center gap-4 overflow-hidden
        rounded-2xl
        border border-gray-200
bg-white
dark:border-white/10
dark:bg-white/[0.025]
        p-5
        shadow-sm
        transition-all duration-500 ease-out
        hover:border-green-500/30
        hover:bg-green-500/[0.06]
        hover:shadow-lg hover:shadow-green-200/60
dark:hover:shadow-green-950/20
      "
    >
      {/* Smooth Hover Glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-r
          from-green-500/[0.06]
          via-transparent
          to-emerald-500/[0.04]
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

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
        relative z-10
        flex h-11 w-11 shrink-0
        items-center justify-center
        rounded-xl
        border border-green-200
        bg-green-100
        text-green-700
        transition-all duration-500
        group-hover:border-green-400
        group-hover:bg-green-200
        group-hover:text-green-800

        dark:border-green-500/20
        dark:bg-green-500/10
        dark:text-green-400
        dark:group-hover:border-green-400/30
        dark:group-hover:bg-green-500/20
        dark:group-hover:text-green-300
      "
      >
        <Icon size={20} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-sm font-bold text-gray-900 transition-colors duration-300 dark:text-white">
          {title}
        </p>

        <p className="mt-1 text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
          {text}
        </p>
      </div>

      {/* Bottom Accent */}
      <div
        className="
          absolute bottom-0 left-0
          h-[2px] w-full
          origin-left scale-x-0
          bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400
          transition-transform duration-500 ease-out
          group-hover:scale-x-100
        "
      />
    </motion.div>
  );
}

/* =========================================================
   CLIENT CARD
   CLEAN + SMOOTH HOVER
========================================================= */

function ClientCard({ client, index }) {
  return (
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
      }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:border-green-300/70 hover:bg-green-50/30 hover:shadow-xl hover:shadow-green-900/10 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50 dark:hover:bg-green-900/[0.06] dark:hover:shadow-black/30"
    >
      {/* =====================================================
          SOFT HOVER GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-green-400/10 opacity-0 blur-3xl transition-all duration-700 ease-out group-hover:opacity-100 dark:bg-green-400/5" />

      <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-emerald-400/10 opacity-0 blur-3xl transition-all duration-700 ease-out group-hover:opacity-100" />

      {/* =====================================================
          SOFT GRADIENT BORDER
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] border border-transparent opacity-0 transition-opacity duration-500 group-hover:border-green-400/30 group-hover:opacity-100" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10">
        {/* Top Row */}

        <div className="flex items-center justify-between">
          {/* Initials */}

          <motion.div
            whileHover={{
              scale: 1.06,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-green-100 bg-green-50 text-lg font-bold text-green-700 shadow-sm transition-all duration-500 group-hover:border-green-300 group-hover:bg-green-100 group-hover:shadow-md dark:border-green-900/30 dark:bg-green-900/20 dark:text-green-400 dark:group-hover:border-green-700 dark:group-hover:bg-green-900/40"
          >
            {/* Static Soft Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-green-400/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative z-10">{client.short}</span>
          </motion.div>

          {/* Arrow */}

          <motion.div
            initial={{
              opacity: 0.35,
              x: 0,
              y: 0,
            }}
            whileHover={{
              opacity: 1,
              x: 3,
              y: -3,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <ArrowUpRight
              size={18}
              className="text-green-600 transition-colors duration-300 dark:text-green-400"
            />
          </motion.div>
        </div>

        {/* Name */}

        <h3 className="mt-6 text-base font-bold text-gray-900 transition-colors duration-500 group-hover:text-green-700 dark:text-white dark:group-hover:text-green-400">
          {client.name}
        </h3>

        {/* Type */}

        <p className="mt-1.5 text-xs font-medium text-gray-400 transition-colors duration-500 group-hover:text-green-600/70 dark:text-gray-500 dark:group-hover:text-green-400/70">
          {client.type}
        </p>
      </div>

      {/* =====================================================
          SMOOTH SHINE
      ====================================================== */}

      <motion.div
        initial={{
          x: "-140%",
        }}
        whileHover={{
          x: "140%",
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute inset-y-0 z-20 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent dark:via-white/10"
      />

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </motion.div>
  );
}
