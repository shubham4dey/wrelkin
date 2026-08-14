import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Cog,
  Factory,
  HardHat,
  Leaf,
  MapPin,
  Recycle,
  Settings2,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projectAreas = [
    {
      number: "01",
      icon: Leaf,
      category: "Bio-CNG / CBG",
      title: "CBG & SATAT Project Support",
      description:
        "Engineering, EPC and technical project support for Compressed Bio Gas projects aligned with the SATAT initiative, supporting cleaner fuels, resource recovery and circular economy objectives.",
      tags: [
        "CBG Plant Engineering",
        "EPC Support",
        "SATAT Alignment",
        "Gas Upgrading",
        "Compression Systems",
      ],
    },
    {
      number: "02",
      icon: Building2,
      category: "Government & Institutional",
      title: "Government & Institutional Projects",
      description:
        "Renewable energy engineering and project support for government organizations, institutional requirements and public-sector applications.",
      tags: [
        "Government Sector",
        "Institutional Projects",
        "Engineering Support",
        "Technical Documentation",
        "Project Execution",
      ],
    },
    {
      number: "03",
      icon: HardHat,
      category: "Railway Sector",
      title: "Indian Railways Project Experience",
      description:
        "Technical and engineering experience supporting renewable energy and sanitation-related requirements for Indian Railways and associated infrastructure applications.",
      tags: [
        "Railway Applications",
        "Bio-Toilet Systems",
        "Engineering",
        "Installation Support",
        "Technical Services",
      ],
    },
    {
      number: "04",
      icon: Sun,
      category: "Solar Power",
      title: "Solar EPC Projects",
      description:
        "Rooftop and ground-mounted solar EPC solutions for industrial, commercial and institutional applications, covering engineering, supply, installation and commissioning.",
      tags: [
        "Rooftop Solar",
        "Ground-Mounted Solar",
        "Engineering",
        "Equipment Supply",
        "Commissioning",
      ],
    },
    {
      number: "05",
      icon: Recycle,
      category: "Biogas & Waste-to-Energy",
      title: "Biogas & Resource Recovery Projects",
      description:
        "Project solutions for organic waste treatment, biogas generation, slurry management, resource recovery and suitable waste-to-energy applications.",
      tags: [
        "Anaerobic Digestion",
        "Biogas Generation",
        "Waste Processing",
        "Slurry Management",
        "Resource Recovery",
      ],
    },
    {
      number: "06",
      icon: Factory,
      category: "Sustainable Fuels",
      title: "Biodiesel, Bioethanol & Biomass Projects",
      description:
        "Engineering and project support across sustainable fuel and biomass applications, including biodiesel, bioethanol and biomass pellet & briquette systems.",
      tags: [
        "Biodiesel",
        "Bioethanol",
        "Biomass Processing",
        "Plant Engineering",
        "Project Support",
      ],
    },
  ];

  const capabilities = [
    {
      icon: Settings2,
      title: "Engineering & Design",
      description:
        "Project-specific engineering and customized plant design focused on efficiency, safety and long-term performance.",
    },
    {
      icon: Cog,
      title: "EPC Execution",
      description:
        "Integrated execution support from planning and procurement to installation, commissioning and project handover.",
    },
    {
      icon: HardHat,
      title: "Installation & Commissioning",
      description:
        "Professional site execution, testing, commissioning and performance validation for renewable energy projects.",
    },
    {
      icon: ShieldCheck,
      title: "O&M & Technical Support",
      description:
        "Operation and maintenance, training, troubleshooting, spare parts support and plant performance assistance.",
    },
  ];

  const projectHighlights = [
    { icon: Leaf, value: "10+", label: "Years Combined Experience" },
    { icon: CalendarDays, value: "2023", label: "Company Established" },
    { icon: Zap, value: "Multi-Tech", label: "Renewable Energy Capabilities" },
    { icon: ShieldCheck, value: "End-to-End", label: "EPC & Technical Support" },
  ];

  return (
    <main className="overflow-hidden bg-white transition-colors duration-500 dark:bg-[#031009]">
      <section className="relative overflow-hidden bg-white pt-10 dark:bg-[#031009] sm:pt-16 lg:pt-20">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.14, 0.06] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[120px] dark:bg-emerald-500/20 sm:h-[500px] sm:w-[500px]"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-lime-300/10 blur-[120px] dark:bg-lime-400/10 sm:h-[500px] sm:w-[500px]"
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
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-2 text-xs font-semibold text-green-700 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-300 sm:px-4 sm:text-sm">
                <Leaf size={15} />
                <span>Projects & Sector Experience</span>
              </div>

              <h1 className="mt-5 text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.045em] text-gray-950 dark:text-white sm:mt-6 sm:text-5xl lg:mt-7 lg:text-[4.5rem] xl:text-[4.8rem]">
                Engineering projects for a{" "}
                <span className="text-green-600 dark:text-green-400">
                  cleaner future.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                WRELKIN brings renewable energy engineering, EPC execution and
                technical project support across Bio-CNG, Biogas, Solar,
                Biodiesel, Bioethanol, Biomass, Waste-to-Energy and related
                infrastructure.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <Link to="/enquiry">
                  <motion.span
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-green-600/20 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400 sm:px-7 sm:py-3.5"
                  >
                    Start Your Project
                    <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.span>
                </Link>

                <a
                  href="#project-areas"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:border-green-400 hover:bg-green-50 hover:text-green-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-gray-200 dark:hover:border-green-400/40 dark:hover:bg-green-400/10 sm:px-7 sm:py-3.5"
                >
                  Explore Project Areas
                </a>
              </div>
            </motion.div>

            {/* =====================================================
                RIGHT CARD — REDESIGNED (LIGHT + DARK)
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
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

                      <Building2 size={25} className="relative" />
                    </motion.div>

                    <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-400 sm:text-xs">
                      WRELKIN INDIA PRIVATE LIMITED
                    </p>

                    <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                      Renewable Energy Project Experience
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      Engineering, EPC and technical support across renewable
                      energy, government, institutional and industrial sectors.
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7">

                      <div className="rounded-2xl border border-green-200/80 bg-white/90 p-3.5 shadow-lg shadow-green-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-4">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-md shadow-green-600/30">
                          <CalendarDays size={17} />
                        </div>

                        <p className="mt-2.5 text-xl font-bold text-gray-950 dark:text-white sm:mt-3 sm:text-2xl">
                          2023
                        </p>

                        <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-500 sm:text-xs">
                          Established
                        </p>

                      </div>

                      <div className="rounded-2xl border border-green-200/80 bg-white/90 p-3.5 shadow-lg shadow-green-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:p-4">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-md shadow-green-600/30">
                          <Zap size={17} />
                        </div>

                        <p className="mt-2.5 text-xl font-bold text-gray-950 dark:text-white sm:mt-3 sm:text-2xl">
                          10+
                        </p>

                        <p className="mt-1 text-[11px] leading-4 text-gray-500 dark:text-gray-500 sm:text-xs">
                          Years Combined Experience
                        </p>

                      </div>

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
                  <HardHat size={20} />
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
                  <MapPin size={20} />
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </section>

      <section className="relative overflow-hidden bg-white py-16 dark:bg-[#04100a] sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-green-400/5 blur-[100px]" />
          <div className="absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-lime-400/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Project Portfolio
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
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
                Practical project capabilities for{" "}
                <span className="text-green-600 dark:text-green-400">
                  real-world energy needs.
                </span>
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:mt-6 sm:text-base">
                WRELKIN supports renewable energy requirements through
                engineering, procurement, construction, commissioning and
                long-term technical support. Our experience includes
                government organizations, Indian Railways, industrial clients
                and private enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="project-areas" className="relative overflow-hidden bg-gray-50 py-16 dark:bg-[#031009] sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">Project Areas</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Renewable energy experience across multiple sectors.
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
              Explore the sectors and technologies where WRELKIN provides
              engineering, EPC and technical project support.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {projectAreas.map((project, index) => (
              <ProjectAreaCard key={project.number} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 dark:bg-[#04100a] sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">Sector Experience</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
                Experience across{" "}
                <span className="text-green-600 dark:text-green-400">demanding applications.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                Our project understanding extends across public-sector,
                institutional, industrial and private applications, with
                solutions adapted to the technical requirements of each site.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ExperienceCard icon={Building2} title="Government Organizations" text="Technical and engineering project support for government-sector renewable energy and infrastructure requirements." />
              <ExperienceCard icon={HardHat} title="Indian Railways" text="Experience supporting railway-related applications including bio-toilet and technical infrastructure solutions." />
              <ExperienceCard icon={Factory} title="Industrial Clients" text="Renewable energy, utility and process solutions for industrial project requirements." />
              <ExperienceCard icon={Leaf} title="Private Enterprises" text="Project-specific engineering and EPC support for private-sector renewable energy initiatives." />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gray-50 py-16 dark:bg-[#031009] sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">Our Approach</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
                From concept to{" "}
                <span className="text-green-600 dark:text-green-400">commissioning.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                Our integrated approach helps clients move from project
                planning and engineering to procurement, installation,
                commissioning and long-term technical support.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item, index) => (
                <CapabilityCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 dark:bg-[#04100a] sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projectHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.07 }}
                  whileHover={{ y: -5 }}
                  className="rounded-[1.5rem] border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.025]"
                >
                  <Icon size={21} className="text-green-600 dark:text-green-400" />
                  <p className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

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
              <Zap size={24} />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">Start a Conversation</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Have a renewable energy project in mind?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              Talk to WRELKIN about your project requirements and discover
              practical engineering, EPC and renewable energy solutions tailored
              to your needs.
            </p>
            <div className="mt-7">
              <Link to="/enquiry">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-green-600/20 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 sm:px-7 sm:py-3.5"
                >
                  Discuss Your Project
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function ProjectAreaCard({ project, index }) {
  const Icon = project.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay: index * 0.07 }}
      whileHover={{ y: -7 }}
      className="group relative h-full overflow-hidden rounded-[1.6rem] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-2xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50 sm:p-7"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.2em] text-green-600 dark:text-green-400">{project.number}</span>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900/20 dark:text-green-400">
            <Icon size={22} strokeWidth={1.8} />
          </div>
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-green-600 dark:text-green-400">{project.category}</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400">{project.description}</p>
        <div className="mt-6 space-y-2.5">
          {project.tags.map((tag) => (
            <div key={tag} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <CheckCircle2 size={15} className="shrink-0 text-green-500" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
        <div className="mt-7 h-px w-10 bg-green-500 transition-all duration-300 group-hover:w-20" />
      </div>
    </motion.article>
  );
}

function ExperienceCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="rounded-[1.5rem] border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.025]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
        <Icon size={20} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">{text}</p>
    </motion.div>
  );
}

function CapabilityCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="rounded-[1.5rem] border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.025] sm:p-6"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
        <Icon size={20} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">{item.description}</p>
    </motion.div>
  );
}