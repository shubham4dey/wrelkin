import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Factory,
  Landmark,
  Leaf,
  Link2,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Truck,
  WalletCards,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Government() {
  const schemes = [
    {
      icon: Landmark,
      number: "01",
      title: "MNRE",
      subtitle: "Ministry of New and Renewable Energy",
      description:
        "We assist clients in developing renewable energy projects in accordance with applicable MNRE guidelines, support programmes and project requirements.",
      points: [
        "Project planning guidance",
        "Technical documentation support",
        "Eligibility guidance",
        "Renewable energy project assistance",
      ],
    },
    {
      icon: Truck,
      number: "02",
      title: "SATAT",
      subtitle: "Sustainable Alternative Towards Affordable Transportation",
      description:
        "We provide EPC and technical support for Compressed Bio Gas projects aligned with the SATAT initiative and India's clean transportation goals.",
      points: [
        "CBG plant EPC support",
        "Plant engineering",
        "Project execution support",
        "Clean fuel infrastructure",
      ],
    },
    {
      icon: WalletCards,
      number: "03",
      title: "IREDA",
      subtitle: "Indian Renewable Energy Development Agency",
      description:
        "We support renewable energy project developers with technical consultancy and documentation assistance for projects seeking financial support.",
      points: [
        "Technical consultancy",
        "Project documentation",
        "Financial support assistance",
        "Project planning support",
      ],
    },
  ];

  const supportServices = [
    "Government Subsidy Guidance",
    "DPR Preparation",
    "Statutory Approvals",
    "Technical Documentation",
    "Project Feasibility Study",
    "EPC Consultancy",
    "Commissioning Support",
    "OMC Coordination — IOCL, BPCL & HPCL",
    "Renewable Energy Compliance Assistance",
  ];

  const benefits = [
    {
      icon: FileCheck2,
      title: "Documentation Support",
      text: "Technical and project documentation assistance for renewable energy projects.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Guidance",
      text: "Support for understanding applicable technical and regulatory requirements.",
    },
    {
      icon: Building2,
      title: "Project Development",
      text: "Engineering and planning support from feasibility through project execution.",
    },
    {
      icon: Link2,
      title: "Industry Coordination",
      text: "Technical coordination support with relevant stakeholders and project partners.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white transition-colors duration-500 dark:bg-[#031009]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white pt-10 transition-colors duration-500 dark:bg-[#031009] sm:pt-14 lg:pt-16">
        {/* =================================================
            HERO BACKGROUND
        ================================================= */}

        <div className="pointer-events-none absolute inset-0">
          {/* LEFT GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-emerald-300/10 blur-[130px] dark:bg-emerald-500/20"
          />

          {/* RIGHT GLOW */}
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.04, 0.1, 0.04],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-lime-300/10 blur-[130px] dark:bg-lime-400/10"
          />

          {/* GRID */}
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.035]"
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

        {/* =================================================
            HERO CONTAINER
        ================================================= */}

        <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* BADGE */}

              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-2 text-xs font-semibold text-green-700 transition-colors duration-500 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-300 sm:px-4 sm:text-sm">
                <Landmark size={16} />

                <span>Government & Renewable Energy Support</span>
              </div>

              {/* HEADING */}

              <h1 className="mt-6 max-w-4xl text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.05em] text-gray-950 transition-colors duration-500 dark:text-white sm:text-5xl sm:leading-[0.98] lg:text-[4.7rem]">
                Navigate renewable energy projects with{" "}
                <span className="text-green-600 dark:text-green-400">
                  confidence.
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 transition-colors duration-500 dark:text-gray-400 sm:text-base sm:leading-8 lg:text-lg">
                WRELKIN INDIA PRIVATE LIMITED provides technical, engineering
                and project support for renewable energy developments involving
                government schemes, CBG projects, compliance and financial
                assistance.
              </p>

              {/* BUTTONS */}

              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                {/* PRIMARY */}

                <a
                  href="#government-schemes"
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition-all hover:bg-green-700 dark:bg-green-500 dark:shadow-green-500/20 dark:hover:bg-green-400 sm:px-7 sm:py-3.5"
                >
                  Explore Schemes
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                {/* SECONDARY */}

                <Link
                  to="/enquiry"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:border-green-400 hover:bg-green-50 hover:text-green-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-gray-200 dark:shadow-none dark:hover:border-green-400/40 dark:hover:bg-green-400/10 dark:hover:text-gray-100 sm:px-7 sm:py-3.5"
                >
                  Start an Enquiry
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT CARD — REDESIGNED (LIGHT + DARK)
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="relative w-full"
            >
              <div className="relative mx-auto w-full max-w-[480px]">

                {/* OUTER SOFT GLOW */}

                <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-green-200/60 via-emerald-100/50 to-lime-200/60 blur-2xl dark:from-green-500/10 dark:via-transparent dark:to-lime-400/10" />

                {/* MAIN 3D CARD */}

                <div className="relative overflow-hidden rounded-[2.5rem] border border-green-200 bg-gradient-to-br from-white via-green-50/80 to-emerald-100/90 p-7 shadow-[0_35px_80px_-25px_rgba(22,101,52,0.45)] dark:border-green-400/20 dark:from-white/[0.04] dark:via-white/[0.02] dark:to-green-950/50 dark:shadow-black/40 sm:p-9">

                  {/* TOP LIGHT REFLECTION */}

                  <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent dark:via-white/20" />

                  {/* INNER DASHED RING */}

                  <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-dashed border-green-300/70 dark:border-green-400/15" />

                  {/* SUBTLE GRID TEXTURE */}

                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
                      backgroundSize: "34px 34px",
                    }}
                  />

                  {/* CORNER GLOW */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-400/20 blur-3xl dark:bg-green-400/10" />

                  <div className="relative">

                    {/* ICON TILE */}

                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 text-white shadow-2xl shadow-green-600/40 ring-1 ring-white/40 dark:shadow-green-500/20"
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_55%)]" />

                      <Landmark size={25} className="relative" />
                    </motion.div>

                    {/* BRAND */}

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-400">
                      WRELKIN INDIA PVT LTD
                    </p>

                    {/* TITLE */}

                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                      Government Project Support
                    </h2>

                    {/* DESCRIPTION */}

                    <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      Technical guidance and project support for renewable
                      energy developments, CBG plants, compliance and
                      documentation.
                    </p>

                    {/* POINTS */}

                    <div className="mt-7 space-y-3">
                      <MiniPoint
                        icon={FileCheck2}
                        text="Technical Documentation"
                      />

                      <MiniPoint
                        icon={ShieldCheck}
                        text="Compliance Assistance"
                      />

                      <MiniPoint
                        icon={Zap}
                        text="Renewable Energy Projects"
                      />

                      <MiniPoint
                        icon={Building2}
                        text="EPC & Project Development"
                      />
                    </div>

                  </div>

                </div>

                {/* FLOATING LEFT ACCENT */}

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="absolute -left-5 top-10 hidden h-12 w-12 items-center justify-center rounded-2xl border border-green-200 bg-white/95 text-green-600 shadow-lg shadow-green-900/10 backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-400 sm:flex"
                >
                  <ShieldCheck size={20} />
                </motion.div>

                {/* FLOATING RIGHT ACCENT */}

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -right-5 bottom-10 hidden h-12 w-12 items-center justify-center rounded-2xl border border-green-200 bg-white/95 text-green-600 shadow-lg shadow-green-900/10 backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-400 sm:flex"
                >
                  <FileCheck2 size={20} />
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* HERO BOTTOM BORDER */}

        <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-[#04100a] sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-green-400/5 blur-[110px]" />

          <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-emerald-400/5 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Government Support
              </p>

              <div className="mt-5 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Sparkles size={17} className="text-green-500" />
                Supporting India's clean energy transition
              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
                Technical support for{" "}
                <span className="text-green-600 dark:text-green-400">
                  government-linked energy projects.
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                WRELKIN helps project developers understand technical,
                documentation and project-development requirements associated
                with renewable energy initiatives and government support
                programmes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOVERNMENT SCHEMES
      ===================================================== */}

      <section
        id="government-schemes"
        className="relative overflow-hidden bg-gray-50 py-20 transition-colors duration-500 dark:bg-[#031009] sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              Key Programmes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Government schemes & project support.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
              Our technical team supports renewable energy project development
              across key government initiatives and financing ecosystems.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {schemes.map((scheme, index) => (
              <SchemeCard key={scheme.title} scheme={scheme} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CBG / CGD
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-[#04100a] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                CBG / CGD Synchronization
              </p>

              <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                Connecting CBG plants with{" "}
                <span className="text-green-600 dark:text-green-400">
                  gas distribution networks.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                WRELKIN provides engineering and technical support for
                Compressed Bio Gas plant integration with City Gas Distribution
                networks, helping projects address technical connectivity and
                gas-quality requirements.
              </p>

              <Link
                to="/enquiry"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
              >
                Discuss Your Project
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* RIGHT */}

            <div className="grid gap-4 sm:grid-cols-2">
              <CapabilityCard
                icon={CheckCircle2}
                title="Gas Quality Compliance"
                text="Technical support for applicable gas quality and project requirements."
              />

              <CapabilityCard
                icon={Zap}
                title="Pressure Regulation"
                text="Support for pressure management and integration requirements."
              />

              <CapabilityCard
                icon={MapPinned}
                title="Pipeline Connectivity"
                text="Technical planning support for CBG pipeline connectivity."
              />

              <CapabilityCard
                icon={Link2}
                title="Network Synchronization"
                text="Engineering support for synchronization with CGD infrastructure."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SUPPORT SERVICES
      ===================================================== */}

      <section className="relative overflow-hidden bg-gray-50 py-20 transition-colors duration-500 dark:bg-[#031009] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Additional Support
              </p>

              <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                More than{" "}
                <span className="text-green-600 dark:text-green-400">
                  documentation.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                From feasibility and DPR preparation to commissioning and
                compliance, our team supports projects across their development
                lifecycle.
              </p>
            </motion.div>

            {/* RIGHT */}

            <div className="grid gap-3 sm:grid-cols-2">
              {supportServices.map((service, index) => (
                <motion.div
                  key={service}
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
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                    <CheckCircle2 size={17} />
                  </div>

                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY WRELKIN
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-[#04100a] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              Why WRELKIN
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Engineering knowledge backed by project understanding.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  className="rounded-[1.5rem] border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/[0.025]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {benefit.text}
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

      <section className="relative overflow-hidden bg-gray-50 py-20 transition-colors duration-500 dark:bg-[#031009] sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-950/30 dark:via-[#031009] dark:to-emerald-950/20" />

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-[130px]" />

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
            className="rounded-[2rem] border border-green-200 bg-white/70 p-8 shadow-xl shadow-green-900/5 backdrop-blur-xl dark:border-green-800/30 dark:bg-white/[0.025] sm:p-12 lg:p-14"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-600/20 dark:bg-green-500">
              <Leaf size={26} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              Build With WRELKIN
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Planning a renewable energy project?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              Talk to WRELKIN about project feasibility, CBG, renewable energy,
              EPC, government support and technical requirements.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/enquiry"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
              >
                Send an Enquiry
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 transition hover:border-green-400 hover:text-green-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200 dark:hover:border-green-500 dark:hover:text-green-400"
              >
                Contact WRELKIN
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SCHEME CARD
========================================================= */

function SchemeCard({ scheme, index }) {
  const Icon = scheme.icon;

  return (
    <motion.article
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
        amount: 0.12,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.07,
      }}
      whileHover={{
        y: -7,
      }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-2xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.2em] text-green-600 dark:text-green-400">
            {scheme.number}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900/20 dark:text-green-400">
            <Icon size={22} strokeWidth={1.8} />
          </div>
        </div>

        <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-green-600 dark:text-green-400">
          Government Programme
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {scheme.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          {scheme.subtitle}
        </p>

        <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400">
          {scheme.description}
        </p>

        <div className="mt-6 space-y-2.5">
          {scheme.points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
            >
              <CheckCircle2 size={15} className="shrink-0 text-green-500" />

              <span>{point}</span>
            </div>
          ))}
        </div>

        <div className="mt-7 h-px w-10 bg-green-500 transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-20" />
      </div>
    </motion.article>
  );
}

/* =========================================================
   MINI POINT — UPGRADED GLASS TILE
========================================================= */

function MiniPoint({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-green-200/80 bg-white/90 p-3 shadow-md shadow-green-900/5 backdrop-blur transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-md shadow-green-600/30">
        <Icon size={18} />
      </div>

      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   CAPABILITY CARD
========================================================= */

function CapabilityCard({ icon: Icon, title, text }) {
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
      }}
      className="rounded-[1.5rem] border border-gray-200 bg-gray-50 p-6 transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.025]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
        <Icon size={20} />
      </div>

      <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
        {text}
      </p>
    </motion.div>
  );
}