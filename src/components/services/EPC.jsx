import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  Factory,
  GraduationCap,
  HardHat,
  Leaf,
  Lightbulb,
  Recycle,
  Settings,
  ShieldCheck,
  Sun,
  Wrench,
  Fuel,
  Wheat,
  Droplets,
  Toilet,
  Building2,
  Landmark,
  FileText,
  HandCoins,
  Network,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";
import biogasImg from "../../assets/products/p2.png";

export default function Services() {
  return (
    <main className="overflow-hidden bg-white transition-colors duration-500 dark:bg-[#031009]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white pt-10 transition-colors duration-500 dark:bg-[#031009] sm:pt-16 lg:pt-20">
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

        <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-2 text-xs font-semibold text-green-700 transition-colors duration-500 dark:border-green-400/20 dark:bg-green-500/10 dark:text-green-300 sm:px-4 sm:text-sm">
                <Leaf size={15} />
                <span>Engineering, Procurement & Construction (EPC)</span>
              </div>

              <h1 className="mt-5 text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.045em] text-gray-950 transition-colors duration-500 dark:text-white sm:mt-6 sm:text-5xl sm:leading-[1] lg:mt-7 lg:text-[4.5rem] xl:text-[4.8rem]">
                Engineering a{" "}
                <span className="text-green-600 dark:text-green-400">
                  greener
                </span>{" "}
                energy future.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 transition-colors duration-500 dark:text-gray-300 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
               Complete Engineering, Procurement & Construction (EPC) solutions for Domestic Biogas Plants, Commercial Biogas Plants, Compressed Bio Gas (CBG) Plants, Bio-CNG Plants, Biodiesel Plants, Solar Plants, Railway Fabrication, Structural, Maintenance & Engineering Works and Road & Civil Infrastructure Works.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <Link to="/enquiry">
                  <motion.span
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition hover:bg-green-700 dark:bg-green-500 dark:shadow-green-500/20 dark:hover:bg-green-400 sm:px-7 sm:py-3.5"
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

            {/* =====================================================
                RIGHT SIDE VISUAL — REDESIGNED (LIGHT + DARK)
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

                  {/* =====================================================
                      CENTER IMAGE — ORBIT CIRCLE KE BARABAR BADA
                  ====================================================== */}

                  <div className="absolute inset-11 sm:inset-14">
                    <div className="h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl shadow-green-900/30 ring-1 ring-green-200 dark:border-white/20 dark:ring-green-800/40">
                      <img
                        src={biogasImg}
                        alt="Biogas Plant"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* CORNER TILE — SUN */}

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="absolute left-6 top-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-green-200 bg-white/95 text-green-600 shadow-lg shadow-green-900/10 backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-400 dark:shadow-black/30 sm:left-9 sm:top-9 sm:h-14 sm:w-14 sm:rounded-2xl"
                  >
                    <Sun size={22} className="sm:h-6 sm:w-6" />
                  </motion.div>

                  {/* CORNER TILE — FACTORY */}

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.9,
                    }}
                    className="absolute bottom-7 right-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-green-200 bg-white/95 text-green-600 shadow-lg shadow-green-900/10 backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-400 dark:shadow-black/30 sm:bottom-9 sm:right-9 sm:h-14 sm:w-14"
                  >
                    <Factory size={22} className="sm:h-6 sm:w-6" />
                  </motion.div>

                  {/* CORNER TILE — COG */}

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
                    <Cog size={20} className="sm:h-[22px] sm:w-[22px]" />
                  </motion.div>

                  {/* BOTTOM PILLS */}

                  <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-6">

                    <span className="whitespace-nowrap rounded-full border border-green-200 bg-white/95 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-green-700 shadow-sm backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-300 sm:text-[10px]">
                      Turnkey EPC
                    </span>

                    <span className="whitespace-nowrap rounded-full border border-green-200 bg-white/95 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-green-700 shadow-sm backdrop-blur dark:border-green-400/20 dark:bg-white/[0.06] dark:text-green-300 sm:text-[10px]">
                      O&M Support
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
          SERVICES INTRODUCTION
      ===================================================== */}

      <ServicesIntroduction />

      {/* =====================================================
          CORE SERVICES
      ===================================================== */}

      <CoreServices />

      {/* =====================================================
          SPECIALIZED SOLUTIONS
      ===================================================== */}

      <SpecializedSolutions />

      {/* =====================================================
          ADDITIONAL TECHNOLOGY SOLUTIONS
      ===================================================== */}

      <AdditionalTechnologySolutions />

      {/* =====================================================
          PROJECT EXECUTION
      ===================================================== */}

      <ProjectServices />

      {/* =====================================================
          GOVERNMENT & FINANCIAL SUPPORT
      ===================================================== */}

      <GovernmentSupport />

      {/* =====================================================
          ADDITIONAL SUPPORT SERVICES
      ===================================================== */}

      <AdditionalSupport />

      {/* =====================================================
          CTA
      ===================================================== */}

      <ServicesCTA />
    </main>
  );
}

/* =========================================================
   SERVICES INTRODUCTION
========================================================= */

function ServicesIntroduction() {
  return (
    <section className="relative overflow-hidden bg-white py-16 transition-colors duration-500 dark:bg-[#04100a] sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[380px] w-[380px] rounded-full bg-emerald-400/20 blur-[110px] dark:bg-emerald-500/10"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.06, 0.16, 0.06],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-lime-300/20 blur-[110px] dark:bg-lime-500/10"
        />

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 20%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 dark:border-green-800/40 dark:bg-green-900/20 dark:text-green-300">
              <Leaf size={16} />
              <span>Engineering, Procurement & Construction (EPC)</span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500 dark:text-gray-400">
              WRELKIN INDIA PRIVATE LIMITED provides complete Engineering, Procurement & Construction (EPC) solutions for Domestic Biogas Plants, Commercial Biogas Plants, Compressed Bio Gas (CBG) Plants, Bio-CNG Plants, Biodiesel Plants, Solar Plants, Railway Fabrication, Structural Engineering, Maintenance Engineering and Road & Civil Infrastructure Works across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-gray-950 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Engineering solutions for a{" "}
              <span className="text-green-600 dark:text-green-400">
                greener
              </span>{" "}
              tomorrow.
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.025] sm:mt-12 sm:rounded-[2rem] sm:p-8 lg:p-10"
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-green-400/10 blur-3xl" />

          <div className="relative z-10 grid gap-7 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white shadow-xl shadow-green-600/20 dark:bg-green-500 sm:h-16 sm:w-16">
              <Settings size={27} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
                Complete Renewable Energy Solutions
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                From concept to commissioning and beyond.
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:mt-4 sm:text-base">
                WRELKIN provides complete renewable energy and EPC services
                covering design, engineering, manufacturing, installation,
                commissioning, consultancy, training, project management and
                long-term operation and maintenance. Our solutions are designed
                to maximize efficiency, safety, reliability and operational
                performance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CORE SERVICES
========================================================= */

function CoreServices() {
  const services = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Design",
      description:
        "We provide innovative and customized engineering designs for Bio-CNG, Biogas, Solar Power, Biodiesel and other renewable energy plants, ensuring maximum efficiency, safety and long-term performance.",
    },
    {
      number: "02",
      icon: Cog,
      title: "Engineering",
      description:
        "We provide complete engineering and customized plant design solutions with process engineering, equipment selection, technical specifications and operational planning.",
    },
    {
      number: "03",
      icon: Factory,
      title: "Manufacturing",
      description:
        "We manufacture and supply high-quality renewable energy equipment and process systems using advanced technology and strict quality control for reliable plant operation.",
    },
    {
      number: "04",
      icon: HardHat,
      title: "Installation & Commissioning",
      description:
        "Our expert engineers perform complete installation, testing, commissioning and performance validation to ensure smooth and efficient plant operation.",
    },
    {
      number: "05",
      icon: ClipboardCheck,
      title: "Consultancy",
      description:
        "We offer end-to-end consultancy including feasibility studies, DPR preparation, technology selection, statutory approvals, subsidy guidance, financial assistance support and project planning.",
    },
    {
      number: "06",
      icon: GraduationCap,
      title: "Technical Training & Support",
      description:
        "We provide technical training, plant operation guidance, maintenance training, safety programs and after-sales support to help clients achieve efficient and trouble-free plant operation.",
    },
    {
      number: "07",
      icon: ClipboardList,
      title: "Project Management",
      description:
        "We support project planning, coordination, scheduling, technical documentation, execution monitoring and project handover for renewable energy and EPC projects.",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16 dark:bg-[#031009] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
            Core Capabilities
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
            Complete services for every stage of your project.
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            Our multidisciplinary capabilities allow us to support renewable
            energy projects from initial planning and engineering through
            execution, commissioning, project handover and long-term support.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              featured={index === 0 || index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ service, index, featured = false }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
      }}
      whileHover={{ y: -7 }}
      className={`group relative overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50 sm:p-7 ${
        featured ? "lg:col-span-3" : "lg:col-span-2"
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.18em] text-green-600 dark:text-green-400">
          {service.number}
        </span>

        <ArrowRight
          size={17}
          className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-500 dark:text-gray-600"
        />
      </div>

      <div className="relative mt-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:group-hover:bg-green-900/30">
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <h3 className="relative mt-5 text-xl font-bold text-gray-900 dark:text-white">
        {service.title}
      </h3>

      <p className="relative mt-3 text-sm leading-7 text-gray-500 dark:text-gray-400">
        {service.description}
      </p>

      <div className="mt-6 h-px w-10 bg-green-500 transition-all duration-300 group-hover:w-20" />
    </motion.div>
  );
}

/* =========================================================
   SPECIALIZED SOLUTIONS
========================================================= */

function SpecializedSolutions() {
  const solutions = [
    {
      icon: Recycle,
      label: "01",
      title: "Domestic, Commercial Biogas & Bio-CNG Plants",
      description:
        "We provide complete EPC solutions for Domestic Biogas Plants, Commercial Biogas Plants, Compressed Bio Gas (CBG) Plants and Bio-CNG Plants including design, engineering, equipment supply, installation, commissioning, gas purification, compression systems and long-term technical support.",
      points: [
        "Domestic Biogas Plants",
        "Commercial Biogas Plants",
        "CBG Processing",
        "Bio-CNG Systems",
        "Gas Purification & Compression",
      ],
    },

    {
      icon: Sun,
      label: "02",
      title: "Turnkey EPC Solar Plants",
      description:
        "We design, engineer, procure, install and commission turnkey solar power plants for industrial, commercial and institutional applications with complete EPC project execution.",
      points: [
        "Turnkey EPC",
        "Rooftop Solar",
        "Ground Mounted Solar",
        "Engineering & Procurement",
        "Installation & Commissioning",
      ],
    },

    {
      icon: Fuel,
      label: "03",
      title: "Biodiesel Plant Solutions",
      description:
        "We provide complete turnkey EPC solutions for biodiesel plants including process engineering, plant design, equipment manufacturing, installation, commissioning and operational support.",
      points: [
        "Plant Design",
        "Process Engineering",
        "Equipment Supply",
        "Turnkey EPC",
        "Commissioning",
      ],
    },

    {
      icon: Recycle,
      label: "04",
      title: "Railway & Civil Infrastructure Works",
      description:
        "We execute Railway Fabrication, Structural Engineering, Maintenance Engineering Works, Road & Civil Infrastructure projects along with complete EPC engineering services for industrial and infrastructure development.",
      points: [
        "Railway Fabrication",
        "Structural Engineering",
        "Maintenance Works",
        "Road & Civil Infrastructure",
        "EPC Engineering Services",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-[#04100a] sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/5 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
            Specialized Solutions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
            Renewable energy solutions built around your needs.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            Specialized plant solutions designed for efficient energy
            production, reliable operation and sustainable long-term value.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.label}
              solution={solution}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SOLUTION CARD
========================================================= */

function SolutionCard({ solution, index }) {
  const Icon = solution.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      whileHover={{ y: -7 }}
      className="group relative h-full overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-2xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] sm:p-7 lg:p-8"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-green-400/10 blur-3xl transition-opacity duration-500 group-hover:bg-green-400/20" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.2em] text-green-600 dark:text-green-400">
            {solution.label}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-200 bg-white text-green-600 shadow-sm dark:border-green-800/40 dark:bg-green-900/20 dark:text-green-400 sm:h-14 sm:w-14">
            <Icon size={22} strokeWidth={1.8} />
          </div>
        </div>

        <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          {solution.title}
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
          {solution.description}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {solution.points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300"
            >
              <CheckCircle2 size={16} className="shrink-0 text-green-500" />

              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   ADDITIONAL TECHNOLOGY SOLUTIONS
========================================================= */

function AdditionalTechnologySolutions() {
  const solutions = [
    {
      icon: Fuel,
      title: "Bioethanol Solutions",
      description:
        "Engineering and project support for bioethanol production systems focused on sustainable fuel production, efficient processing and responsible resource utilization.",
    },

    {
      icon: Wheat,
      title: "Biomass Pellet & Briquette Plants",
      description:
        "Solutions for biomass processing, pelletization and briquetting to convert suitable biomass resources into useful renewable fuel products.",
    },

    {
      icon: Droplets,
      title: "Organic Fertilizer & Slurry Management",
      description:
        "Integrated slurry handling, treatment and organic fertilizer solutions supporting resource recovery and circular economy practices.",
    },

    {
      icon: Toilet,
      title: "Bio-Toilet Systems",
      description:
        "Technical solutions for bio-toilet systems designed to support improved sanitation, responsible waste treatment and environmentally sustainable applications.",
    },

    {
      icon: Building2,
      title: "Industrial Utilities & Process Equipment",
      description:
        "Engineering and technical support for industrial utility systems and process equipment required for renewable energy and industrial projects.",
    },

    {
      icon: Recycle,
      title: "Resource Recovery Solutions",
      description:
        "Integrated solutions that help convert suitable organic and waste resources into renewable energy, useful by-products and long-term environmental value.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 dark:bg-[#031009] sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
            Extended Solutions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
            Beyond conventional renewable energy.
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            Our capabilities extend across sustainable fuels, biomass, resource
            recovery, sanitation systems and industrial utility solutions.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <TechnologyCard
              key={solution.title}
              solution={solution}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TECHNOLOGY CARD
========================================================= */

function TechnologyCard({ solution, index }) {
  const Icon = solution.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
      }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
    >
      <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-green-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900/20 dark:text-green-400">
          <Icon size={21} />
        </div>

        <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
          {solution.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-gray-400">
          {solution.description}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PROJECT EXECUTION
========================================================= */

function ProjectServices() {
  const services = [
    {
      icon: Cog,
      number: "01",
      title: "Engineering & Plant Design",
      description:
        "We provide complete engineering and customized plant design solutions for Bio-CNG, Biogas, Solar Power, Biodiesel and related renewable energy plants.",
    },

    {
      icon: Boxes,
      number: "02",
      title: "EPC",
      description:
        "We undertake complete turnkey EPC projects including planning, engineering, procurement, manufacturing coordination, installation, commissioning, testing and project handover.",
    },

    {
      icon: Wrench,
      number: "03",
      title: "Operation & Maintenance (O&M)",
      description:
        "We provide preventive maintenance, annual maintenance contracts (AMC), troubleshooting, technical support, spare parts supply and plant performance optimization.",
    },

    {
      icon: ClipboardList,
      number: "04",
      title: "Project Management",
      description:
        "We support project planning, coordination, execution monitoring, documentation, stakeholder coordination and successful project handover.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-[#04100a] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
              Project Execution
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500 dark:text-gray-400">
              Integrated project services to help clients move from initial
              engineering concepts to reliable long-term plant operation.
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Complete project execution with{" "}
            <span className="text-green-600 dark:text-green-400">
              engineering excellence.
            </span>
          </motion.h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {services.map((service, index) => (
            <ProjectServiceCard
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECT SERVICE CARD
========================================================= */

function ProjectServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.025] sm:p-7"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 opacity-70" />

      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.2em] text-green-600 dark:text-green-400">
          {service.number}
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
          <Icon size={20} />
        </div>
      </div>

      <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-gray-400">
        {service.description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-green-600 dark:text-green-400">
        <ShieldCheck size={15} />
        Reliable Project Support
      </div>
    </motion.div>
  );
}

/* =========================================================
   GOVERNMENT & FINANCIAL SUPPORT
========================================================= */

function GovernmentSupport() {
  const services = [
    {
      icon: Landmark,
      title: "MNRE Support",
      description:
        "Technical guidance for renewable energy project planning, documentation and applicable government support programmes under MNRE frameworks.",
    },

    {
      icon: Recycle,
      title: "SATAT / CBG Projects",
      description:
        "EPC and technical project support for Compressed Bio Gas projects aligned with the SATAT initiative and India's clean transportation fuel objectives.",
    },

    {
      icon: HandCoins,
      title: "IREDA & Financial Assistance",
      description:
        "Technical consultancy and documentation assistance for renewable energy projects seeking financial support from IREDA and other financial institutions.",
    },

    {
      icon: Network,
      title: "CBG / CGD Synchronization",
      description:
        "Engineering and technical support for CBG integration with City Gas Distribution networks, including gas quality, pressure regulation, metering and pipeline connectivity requirements.",
    },

    {
      icon: FileText,
      title: "Government Subsidy Guidance",
      description:
        "Support in understanding applicable renewable energy incentives, subsidy programmes and project documentation requirements.",
    },

    {
      icon: ClipboardCheck,
      title: "Statutory & Compliance Support",
      description:
        "Assistance in understanding applicable statutory, technical and renewable energy compliance requirements during project development.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 dark:bg-[#031009] sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
            Government & Project Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
            Supporting projects beyond engineering.
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            WRELKIN provides technical, documentation and coordination support
            for renewable energy projects involving government programmes,
            financial assistance and CBG infrastructure integration.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {services.map((service, index) => (
            <GovernmentSupportCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   GOVERNMENT SUPPORT CARD
========================================================= */

function GovernmentSupportCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
      }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
    >
      <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-green-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900/20 dark:text-green-400">
          <Icon size={19} />
        </div>

        <h3 className="mt-5 text-base font-bold text-gray-900 dark:text-white">
          {service.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   ADDITIONAL SUPPORT SERVICES
========================================================= */

function AdditionalSupport() {
  const supportServices = [
    {
      icon: Boxes,
      title: "DPR Preparation",
      description:
        "Technical and project documentation support for preparing Detailed Project Reports.",
    },

    {
      icon: ShieldCheck,
      title: "Statutory Approvals",
      description:
        "Support in understanding and coordinating applicable statutory and project approval requirements.",
    },

    {
      icon: FileText,
      title: "Technical Documentation",
      description:
        "Preparation and support for technical documents required during project development and execution.",
    },

    {
      icon: Lightbulb,
      title: "Project Feasibility Study",
      description:
        "Technical evaluation of project requirements, feedstock, capacity, technology and implementation considerations.",
    },

    {
      icon: Cog,
      title: "EPC Consultancy",
      description:
        "Engineering and project consultancy support for renewable energy and EPC project development.",
    },

    {
      icon: Wrench,
      title: "Commissioning Support",
      description:
        "Technical assistance during testing, commissioning and performance validation of renewable energy systems.",
    },

    {
      icon: Factory,
      title: "OMC Coordination",
      description:
        "Technical coordination support with OMC stakeholders including IOCL, BPCL and HPCL where applicable.",
    },

    {
      icon: BadgeCheck,
      title: "Renewable Energy Compliance Assistance",
      description:
        "Support in understanding applicable technical, project and renewable energy compliance requirements.",
    },

    {
      icon: HandCoins,
      title: "Financial Assistance Support",
      description:
        "Documentation and technical assistance for projects exploring applicable financial assistance and institutional funding options.",
    },

    {
      icon: ClipboardList,
      title: "Project Planning",
      description:
        "Support for project planning, implementation strategy, technical coordination and execution preparation.",
    },

    {
      icon: Network,
      title: "Technical Coordination",
      description:
        "Coordination support among clients, engineering teams, technology partners, suppliers and other project stakeholders.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-[#04100a] sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-green-300/20 blur-[120px] dark:bg-green-500/10"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-lime-300/20 blur-[120px] dark:bg-lime-500/10"
        />

        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 20%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 dark:border-green-800/40 dark:bg-green-900/20 dark:text-green-300">
            <ShieldCheck size={16} />

            <span>Additional Support</span>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
            More than documentation.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            From feasibility and DPR preparation to statutory support,
            commissioning, financial assistance and compliance, WRELKIN supports
            renewable energy projects across their development lifecycle.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {supportServices.map((service, index) => (
            <SupportServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SUPPORT SERVICE CARD
========================================================= */

function SupportServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
      }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-lg hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-transform duration-300 group-hover:scale-105 dark:bg-green-900/20 dark:text-green-400">
            <Icon size={19} />
          </div>

          <ArrowRight
            size={16}
            className="mt-2 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-500 dark:text-gray-600"
          />
        </div>

        <h3 className="mt-5 text-base font-bold text-gray-900 dark:text-white">
          {service.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CTA
========================================================= */

function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-[#04100a] sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-950/30 dark:via-[#04100a] dark:to-emerald-950/20" />

      <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="rounded-[1.75rem] border border-green-200 bg-white/70 p-7 shadow-xl shadow-green-900/5 backdrop-blur-xl dark:border-green-800/30 dark:bg-white/[0.025] sm:rounded-[2rem] sm:p-10 lg:p-12"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-600/20 dark:bg-green-500">
            <BadgeCheck size={26} />
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
            Powering the Future
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
            Let's build a greener energy future together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Discover how WRELKIN can help turn your renewable energy
            requirements into practical, reliable and sustainable solutions.
          </p>

          <div className="mt-7">
            <Link to="/enquiry">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
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
  );
}