import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Factory,
  FileCheck2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Recycle,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Users,
  Wind,
} from "lucide-react";
import { Link } from "react-router-dom";

import PageHero from "../components/layout/PageHero";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900 transition-colors duration-500 dark:bg-[#04100a] dark:text-white">
      {/* =====================================================
          PAGE HERO
      ====================================================== */}

      <PageHero
        title="About Us"
        subtitle="Powering the Future with Renewable Energy"
        description="WRELKIN INDIA PRIVATE LIMITED delivers innovative renewable energy and EPC solutions across India, transforming resources into cleaner energy for a sustainable future."
      />

      {/* =====================================================
          COMPANY INTRODUCTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-20 dark:bg-[#04100a] sm:py-24 lg:py-28">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.3, 0.15],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-emerald-300/30 blur-[120px] dark:bg-emerald-600/10"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.12, 0.25, 0.12],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-lime-300/30 blur-[120px] dark:bg-lime-600/10"
          />

          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(circle at center, black 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 30%, transparent 80%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Heading */}

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 dark:border-green-800/40 dark:bg-green-900/20 dark:text-green-300">
                <Leaf size={15} />
                <span>Who We Are</span>
              </div>

              <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
                Building practical renewable energy solutions through
                engineering, technology and sustainable project execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
                Engineering a
                <span className="text-green-600 dark:text-green-400">
                  {" "}
                  cleaner
                </span>
                <br />
                energy future.
              </h2>
            </motion.div>
          </div>

          {/* Company Introduction */}

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.025] sm:p-9"
            >
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-green-400/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <Building2 size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600 dark:text-green-400">
                      Company Introduction
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      WRELKIN INDIA PRIVATE LIMITED
                    </p>
                  </div>
                </div>

                <p className="text-lg leading-8 text-gray-700 dark:text-gray-200 sm:text-xl">
                  <strong className="font-semibold text-gray-950 dark:text-white">
                    WRELKIN INDIA PRIVATE LIMITED
                  </strong>{" "}
                  is a leading renewable energy and EPC solutions company
                  established in{" "}
                  <strong className="text-green-600 dark:text-green-400">
                    2023
                  </strong>
                  , dedicated to delivering innovative and sustainable energy
                  solutions across India.
                </p>

                <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  We specialize in the design, engineering, manufacturing,
                  supply, installation, commissioning and maintenance of{" "}
                  <strong className="font-semibold text-gray-800 dark:text-gray-200">
                    Bio-CNG (CBG), Biogas, Solar Power, Biodiesel and
                    Waste-to-Energy Plants.
                  </strong>
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  With a commitment to quality, innovation and environmental
                  sustainability, we provide complete turnkey solutions
                  tailored to industrial, commercial, municipal and
                  agricultural sectors.
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  Our experienced engineering team focuses on delivering
                  high-performance systems that maximize energy efficiency,
                  reduce carbon emissions and promote clean energy adoption.
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  At WRELKIN INDIA PRIVATE LIMITED, we believe in transforming
                  organic waste into valuable renewable energy resources
                  through advanced technologies and industry best practices.
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  Since our inception in{" "}
                  <strong className="font-semibold text-green-600 dark:text-green-400">
                    2023
                  </strong>
                  , we have remained committed to supporting India's clean
                  energy mission through reliable, cost-effective and
                  environmentally responsible renewable energy solutions.
                </p>
              </div>
            </motion.div>

            {/* Company Snapshot */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            >
              <AboutStat
                value="2023"
                label="Year Established"
                text="Established with a vision to build India's clean energy future."
                icon={Building2}
              />

              <AboutStat
                value="10+"
                label="Years Combined Experience"
                text="Combined industry experience across renewable energy engineering and EPC."
                icon={Factory}
              />

              <AboutStat
                value="10+"
                label="Plant & Energy Solutions"
                text="Solutions across renewable gas, solar, sustainable fuels and resource recovery."
                icon={Recycle}
              />

              <AboutStat
                value="India"
                label="Project Focus"
                text="Supporting renewable energy and EPC requirements across India."
                icon={Globe2}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE BUSINESS AREAS
      ====================================================== */}

      <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-[#06140c] sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Our Expertise"
            title="Core Business Areas"
            description="Our core capabilities cover renewable energy technologies and complete EPC project requirements."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <BusinessArea
              number="01"
              icon={Recycle}
              title="Bio-CNG / CBG"
              text="Renewable gas production and complete CBG plant solutions."
            />

            <BusinessArea
              number="02"
              icon={Leaf}
              title="Biogas"
              text="Anaerobic digestion and organic waste-to-energy systems."
            />

            <BusinessArea
              number="03"
              icon={Sun}
              title="Solar Power"
              text="Rooftop and ground-mounted solar EPC solutions."
            />

            <BusinessArea
              number="04"
              icon={Factory}
              title="Biodiesel"
              text="Sustainable biodiesel production plant solutions."
            />

            <BusinessArea
              number="05"
              icon={Wind}
              title="Waste-to-Energy"
              text="Solutions for resource recovery and useful energy generation from suitable waste streams."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR JOURNEY / HISTORY
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-20 dark:bg-[#04100a] sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 dark:border-green-800/40 dark:bg-green-900/20 dark:text-green-300">
                <Globe2 size={16} />
                <span>Our Journey</span>
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                Building experience.
                <span className="block text-green-600 dark:text-green-400">
                  Creating impact.
                </span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                WRELKIN INDIA PRIVATE LIMITED brings together renewable energy
                engineering, EPC execution and project support across multiple
                clean energy technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.025] sm:p-9"
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-400/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-600/20 dark:bg-green-500">
                    <Target size={25} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
                      Established 2023
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                      Renewable Energy Engineering & EPC
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  WRELKIN INDIA PRIVATE LIMITED was established in{" "}
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    2023
                  </strong>{" "}
                  with a focus on developing practical and sustainable
                  renewable energy solutions for India's growing clean energy
                  requirements.
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  With over{" "}
                  <strong className="font-semibold text-green-600 dark:text-green-400">
                    10 years of combined industry experience
                  </strong>{" "}
                  across renewable energy engineering and project execution,
                  our team brings technical knowledge and practical project
                  understanding to every engagement.
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  Our capabilities extend across Bio-CNG (CBG), Biogas, Solar
                  Power, Biodiesel, Bioethanol, Biomass, Waste-to-Energy,
                  Organic Fertilizer and Slurry Management Systems, Bio-Toilet
                  Systems and industrial utility solutions.
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  We provide integrated{" "}
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    Engineering, Procurement & Construction (EPC),
                    Commissioning and Operation & Maintenance (O&M)
                  </strong>{" "}
                  support, helping clients move from project planning and
                  engineering through execution and long-term operation.
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  WRELKIN is also engaged in EPC and technical project support
                  for Compressed Bio Gas projects aligned with the{" "}
                  <strong className="font-semibold text-gray-900 dark:text-white">
                    SATAT initiative
                  </strong>
                  , supporting India's transition towards cleaner fuels,
                  resource recovery and a circular economy.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <HistoryPoint text="Renewable Energy Engineering" />
                  <HistoryPoint text="Turnkey EPC Solutions" />
                  <HistoryPoint text="Multi-Technology Projects" />
                  <HistoryPoint text="Long-Term Technical Support" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ====================================================== */}

      <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-[#06140c] sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Core Values"
            description="Our values define how we work, how we build relationships and how we approach every renewable energy project."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <ValueCard
              icon={ShieldCheck}
              title="Integrity & Transparency"
              text="Honest communication, ethical practices and transparent project execution."
            />

            <ValueCard
              icon={HeartHandshake}
              title="Customer Satisfaction"
              text="Understanding client requirements and delivering practical solutions that create lasting value."
            />

            <ValueCard
              icon={Factory}
              title="Engineering Excellence"
              text="Technical expertise, planning and practical engineering for reliable solutions."
            />

            <ValueCard
              icon={Lightbulb}
              title="Innovation & Technology"
              text="Exploring better technologies and smarter approaches for renewable energy projects."
            />

            <ValueCard
              icon={Leaf}
              title="Environmental Responsibility"
              text="Promoting clean energy, resource recovery and sustainable project development."
            />

            <ValueCard
              icon={Shield}
              title="Safety First"
              text="Safety remains an important consideration across engineering and project execution."
            />

            <ValueCard
              icon={Users}
              title="Teamwork & Collaboration"
              text="Collaborating with clients, engineers, partners and project stakeholders."
            />

            <ValueCard
              icon={BadgeCheck}
              title="Quality Without Compromise"
              text="Focusing on dependable systems, quality processes and professional execution."
            />

            <ValueCard
              icon={Globe2}
              title="Sustainable Development"
              text="Creating renewable energy solutions with long-term environmental and economic value."
            />

            <ValueCard
              icon={GraduationCap}
              title="Continuous Learning"
              text="Encouraging continuous improvement, knowledge development and technical growth."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATIONS & REGISTRATIONS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-20 dark:bg-[#04100a] sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Certifications & Registrations"
            title="Built on recognized standards."
            description="WRELKIN INDIA PRIVATE LIMITED maintains the required business registrations and certifications supporting its professional approach to renewable energy and EPC activities."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CertificationCard
              icon={Award}
              title="ISO"
              subtitle="ISO Certified"
              text="Quality and management standards supporting professional project execution."
            />

            <CertificationCard
              icon={FileCheck2}
              title="GST"
              subtitle="GST Registered"
              text="Registered under the applicable Goods and Services Tax framework."
            />

            <CertificationCard
              icon={BadgeCheck}
              title="MSME"
              subtitle="MSME Registered"
              text="Registered as a Micro, Small and Medium Enterprise."
            />

            <CertificationCard
              icon={ShieldCheck}
              title="STARTUP"
              subtitle="Startup Recognition"
              text="Recognized startup registration supporting the company's growth journey."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION & MISSION
      ====================================================== */}

      <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-[#06140c] sm:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-green-300/20 blur-[120px] dark:bg-green-600/10"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-emerald-300/20 blur-[120px] dark:bg-emerald-600/10"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Our Direction"
            title="Vision & Mission"
            description="Guided by engineering excellence, innovation and environmental responsibility, we work towards building a cleaner and sustainable energy future."
            centered
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <VisionMissionCard
              icon={Leaf}
              label="Our Vision"
              title="A cleaner, greener and energy-secure future."
              text="At WRELKIN INDIA PRIVATE LIMITED, our vision is to become one of India's most trusted and innovative renewable energy companies by delivering sustainable, reliable and high-quality green energy solutions. We aim to contribute to India's renewable energy mission while supporting a cleaner, greener and energy-secure future."
            />

            <VisionMissionCard
              icon={Sparkles}
              label="Our Mission"
              title="Engineering solutions that create lasting value."
              text="We are committed to integrity, quality, innovation, safety, teamwork and customer satisfaction. Our mission is to deliver innovative and environmentally responsible renewable energy solutions while reducing pollution, conserving resources, supporting circular economy practices and creating long-term value for our customers and society."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CAREER
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-20 dark:bg-[#04100a] sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.025] sm:p-9 lg:p-10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-400/10 blur-[100px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700 dark:border-green-800/40 dark:bg-green-900/20 dark:text-green-300">
                  <Users size={14} />
                  <span>Career at WRELKIN</span>
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Build your career in renewable energy.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  We welcome talented engineers, project professionals and
                  passionate individuals who want to contribute to India's
                  clean energy future and work on meaningful renewable energy
                  and EPC projects.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <CareerPoint text="Engineering & Technical Roles" />
                  <CareerPoint text="Project & EPC Opportunities" />
                  <CareerPoint text="Sales & Business Development" />
                  <CareerPoint text="Operations & Support" />
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href="mailto:wrelkinindustries@gmail.com?subject=Career%20Enquiry%20-%20WRELKIN"
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition-all hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                >
                  Send Your Resume
                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-20 dark:bg-[#04100a] sm:py-24">
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-green-200 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-8 shadow-sm dark:border-green-900/40 dark:from-[#0a2415] dark:via-[#07170e] dark:to-[#0b2114] sm:p-12"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-400/20 blur-3xl"
            />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
                Powering the Future
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
                Building a cleaner energy future together.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                Discover how WRELKIN can help turn your renewable energy
                requirements into practical, reliable and sustainable
                solutions.
              </p>

              <Link to="/enquiry">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-colors hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
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
    </main>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   ABOUT STAT
========================================================= */

function AboutStat({ value, label, text, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-lg hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-3xl font-bold tracking-tight text-green-600 dark:text-green-400">
            {value}
          </p>

          <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
            {label}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
          <Icon size={18} />
        </div>
      </div>

      <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-gray-400">
        {text}
      </p>
    </motion.div>
  );
}

/* =========================================================
   BUSINESS AREA
========================================================= */

function BusinessArea({ number, icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.15em] text-green-600 dark:text-green-400">
          {number}
        </span>

        <ArrowRight
          size={16}
          className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-500 dark:text-gray-600"
        />
      </div>

      <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900/20 dark:text-green-400">
        <Icon size={20} />
      </div>

      <h3 className="mt-5 text-base font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
        {text}
      </p>
    </motion.div>
  );
}

/* =========================================================
   HISTORY POINT
========================================================= */

function HistoryPoint({ text }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-green-100 bg-white px-4 py-3 text-sm font-medium text-gray-700 dark:border-green-900/30 dark:bg-green-900/10 dark:text-gray-300">
      <CheckCircle2 size={16} className="shrink-0 text-green-500" />
      <span>{text}</span>
    </div>
  );
}

/* =========================================================
   CORE VALUE CARD
========================================================= */

function ValueCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900/20 dark:text-green-400">
          <Icon size={19} />
        </div>

        <h3 className="mt-5 text-base font-bold leading-6 text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CERTIFICATION CARD
========================================================= */

function CertificationCard({
  icon: Icon,
  title,
  subtitle,
  text,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900/20 dark:text-green-400">
          <Icon size={20} />
        </div>

        <BadgeCheck
          size={17}
          className="text-green-500 opacity-70"
        />
      </div>

      <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-green-600 dark:text-green-400">
        {title}
      </p>

      <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
        {subtitle}
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
        {text}
      </p>
    </motion.div>
  );
}

/* =========================================================
   VISION / MISSION CARD
========================================================= */

function VisionMissionCard({
  icon: Icon,
  label,
  title,
  text,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -5 }}
      className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50 sm:p-9"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
        <Icon size={21} />
      </div>

      <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
        {label}
      </p>

      <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
        {text}
      </p>
    </motion.div>
  );
}

/* =========================================================
   CAREER POINT
========================================================= */

function CareerPoint({ text }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300">
      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
      {text}
    </div>
  );
}