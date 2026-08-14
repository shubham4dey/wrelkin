import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  FileText,
  Leaf,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const company = formData.get("company");
    const mobile = formData.get("mobile");
    const email = formData.get("email");
    const product = formData.get("product");
    const capacity = formData.get("capacity");
    const location = formData.get("location");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `New Project Enquiry - ${product || "Renewable Energy"}`
    );

    const body = encodeURIComponent(
      `WRELKIN INDIA PRIVATE LIMITED - PROJECT ENQUIRY\n\n` +
        `Name: ${name}\n` +
        `Company: ${company || "Not Provided"}\n` +
        `Mobile: ${mobile}\n` +
        `Email: ${email}\n` +
        `Product / Plant: ${product}\n` +
        `Required Capacity: ${capacity || "Not Provided"}\n` +
        `Project Location: ${location || "Not Provided"}\n\n` +
        `Project Requirements:\n${message}\n\n` +
        `Regards,\n${name}`
    );

    window.location.href = `mailto:wrelkinindustries@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const products = [
    "Bio-CNG (CBG) Plant",
    "Biogas Plant",
    "Solar Power Plant",
    "Biodiesel Production Plant",
    "Bioethanol Plant",
    "Biomass Pellet & Briquette Plant",
    "Waste-to-Energy Plant",
    "Organic Fertilizer & Slurry Management System",
    "Industrial Utilities & Process Equipment",
    "EPC / Engineering Consultancy",
    "Operation & Maintenance (O&M)",
    "Other Renewable Energy Requirement",
  ];

  const supportAreas = [
    {
      icon: Leaf,
      title: "Renewable Energy Projects",
      text: "Bio-CNG, Biogas, Solar, Biodiesel and other sustainable energy projects.",
    },
    {
      icon: Factory,
      title: "Turnkey EPC Solutions",
      text: "Engineering, procurement, installation, commissioning and project handover.",
    },
    {
      icon: FileText,
      title: "Project Consultancy",
      text: "Feasibility studies, DPR preparation, technology selection and project planning.",
    },
    {
      icon: ShieldCheck,
      title: "Technical Support",
      text: "Commissioning, O&M, maintenance, troubleshooting and technical assistance.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white transition-colors duration-500 dark:bg-[#031009]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white pt-8 transition-colors duration-500 dark:bg-[#031009] sm:pt-12 lg:pt-16">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          {/* Green glow */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-[130px] dark:bg-emerald-500/20"
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
            className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[130px] dark:bg-lime-400/10"
          />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)",
              backgroundSize: "70px 70px",
              maskImage:
                "radial-gradient(circle at center, black 20%, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 20%, transparent 78%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* =================================================
                LEFT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-700 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-300">
                <Send size={16} />

                <span>Start a Project with WRELKIN</span>
              </div>

              {/* Heading */}

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-gray-950 transition-colors duration-500 dark:text-white sm:text-6xl lg:text-[4.7rem]">
                Let's discuss your{" "}
                <span className="text-green-600 dark:text-green-400">
                  renewable energy project.
                </span>
              </h1>

              {/* Description */}

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 transition-colors duration-500 dark:text-gray-400 sm:text-lg sm:leading-8">
                Share your project requirements with WRELKIN INDIA PRIVATE
                LIMITED. Our team can assist with engineering, EPC, plant
                design, equipment supply, installation, commissioning and
                technical support.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#enquiry-form"
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400"
                >
                  Submit Enquiry

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="mailto:wrelkinindustries@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-7 py-3.5 text-sm font-semibold text-gray-700 backdrop-blur-xl transition hover:border-green-400/40 hover:bg-green-50 hover:text-green-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-gray-200 dark:hover:border-green-400/40 dark:hover:bg-green-400/10"
                >
                  <Mail size={17} />

                  Email Us
                </a>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.1,
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-7 shadow-xl shadow-gray-900/5 backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-2xl sm:p-8">
                {/* Card Glow */}

                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-400/5 blur-3xl dark:bg-green-400/10" />

                <div className="relative">
                  {/* Icon */}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white shadow-xl shadow-green-600/20 dark:bg-green-500">
                    <Building2 size={25} />
                  </div>

                  {/* Company */}

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                    WRELKIN INDIA PVT LTD
                  </p>

                  {/* Title */}

                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 transition-colors duration-500 dark:text-white sm:text-3xl">
                    Renewable Energy & EPC
                  </h2>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-gray-600 transition-colors duration-500 dark:text-gray-400">
                    Complete engineering and project support for renewable
                    energy plants, EPC projects and sustainable infrastructure.
                  </p>

                  {/* Support Items */}

                  <div className="mt-7 space-y-3">
                    <InfoItem
                      icon={Leaf}
                      title="Renewable Energy"
                      text="Bio-CNG, Biogas, Solar & Biodiesel"
                    />

                    <InfoItem
                      icon={Factory}
                      title="EPC & Engineering"
                      text="Design, Procurement, Installation & Commissioning"
                    />

                    <InfoItem
                      icon={Wrench}
                      title="Technical Support"
                      text="O&M, Maintenance & Project Assistance"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-[#04100a] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Project Enquiry
              </p>

              <div className="mt-5 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Sparkles size={17} className="text-green-500" />

                Tell us what you need
              </div>
            </motion.div>

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
                duration: 0.8,
              }}
            >
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
                Tell us about your{" "}
                <span className="text-green-600 dark:text-green-400">
                  project requirements.
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                Whether you are planning a new renewable energy plant,
                expanding an existing facility or looking for engineering and
                EPC support, share your requirements with our team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENQUIRY FORM
      ===================================================== */}

      <section
        id="enquiry-form"
        className="relative overflow-hidden bg-gray-50 py-20 transition-colors duration-500 dark:bg-[#031009] sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* =================================================
                FORM
            ================================================= */}

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
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
              }}
              className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.025] sm:p-9"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  <Send size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
                    Project Enquiry
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                    Start a Conversation
                  </h2>
                </div>
              </div>

              {submitted && (
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800/30 dark:bg-green-900/10 dark:text-green-300">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0" />

                  <div>
                    <p className="font-semibold">
                      Enquiry prepared successfully.
                    </p>

                    <p className="mt-1 text-sm">
                      Your email application should open with the enquiry
                      details.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                  <Input
                    label="Company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    label="Mobile Number"
                    name="mobile"
                    type="tel"
                    placeholder="Enter mobile number"
                    required
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* PRODUCT */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Product / Plant Requirement
                  </label>

                  <select
                    name="product"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/10 dark:border-white/10 dark:bg-[#0D2116] dark:text-gray-200 dark:[color-scheme:dark]"
                  >
                    <option
                      value=""
                      className="bg-white text-gray-700 dark:bg-[#0D2116] dark:text-gray-200"
                    >
                      Select a product or plant
                    </option>

                    {products.map((product) => (
                      <option
                        key={product}
                        value={product}
                        className="bg-white text-gray-700 dark:bg-[#0D2116] dark:text-gray-200"
                      >
                        {product}
                      </option>
                    ))}
                  </select>
                </div>

                {/* CAPACITY + LOCATION */}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    label="Required Capacity"
                    name="capacity"
                    type="text"
                    placeholder="Example: 5 TPD / 1 MW"
                  />

                  <Input
                    label="Project Location"
                    name="location"
                    type="text"
                    placeholder="City / State"
                  />
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Project Requirements
                  </label>

                  <textarea
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell us about your project, feedstock, capacity, technology requirements or other technical requirements..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200 dark:placeholder:text-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 sm:w-auto"
                >
                  Submit Enquiry

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </motion.div>

            {/* =================================================
                RIGHT INFO
            ================================================= */}

            <div className="space-y-5">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
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
                className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.025]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  <Building2 size={20} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                  WRELKIN INDIA PRIVATE LIMITED
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-gray-400">
                  Renewable Energy Engineering and EPC company established in
                  2023, providing sustainable plant and project solutions
                  across India.
                </p>

                <div className="mt-5 space-y-3">
                  <InfoRow
                    icon={Mail}
                    text="wrelkinindustries@gmail.com"
                    href="mailto:wrelkinindustries@gmail.com"
                  />

                  <InfoRow
                    icon={Mail}
                    text="infowrelkin@gmail.com"
                    href="mailto:infowrelkin@gmail.com"
                  />

                  <InfoRow
                    icon={MapPin}
                    text="Makardah Road, Kantalia, Domjur, West Bengal - 711409"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
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
                  delay: 0.1,
                }}
                className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.025]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  <Zap size={20} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                  What We Can Help With
                </h3>

                <div className="mt-5 space-y-3">
                  {supportAreas.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        <div className="flex gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                            <Icon size={17} />
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                              {item.title}
                            </h4>

                            <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-[#04100a] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              How We Work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              From enquiry to project execution.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
              Our team works with clients to understand project requirements
              and develop practical renewable energy solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ProcessCard
              number="01"
              title="Requirement"
              text="Understand your project goals, capacity, location and technical requirements."
            />

            <ProcessCard
              number="02"
              title="Feasibility"
              text="Evaluate the project requirements and identify suitable technology and engineering solutions."
            />

            <ProcessCard
              number="03"
              title="Engineering & EPC"
              text="Develop engineering, procurement, installation and commissioning requirements."
            />

            <ProcessCard
              number="04"
              title="Support"
              text="Provide commissioning, O&M, technical assistance and long-term project support."
            />
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
              <Sparkles size={26} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              WRELKIN INDIA PRIVATE LIMITED
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Have a renewable energy project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              Talk to our team about Bio-CNG, Biogas, Solar, Biodiesel,
              Bioethanol, Waste-to-Energy or complete EPC requirements.
            </p>

            <div className="mt-8">
              <a
                href="#enquiry-form"
                className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
              >
                Send Project Enquiry

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   INPUT
========================================================= */

function Input({
  label,
  name,
  type,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200 dark:placeholder:text-gray-500"
      />
    </div>
  );
}

/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3 transition-colors duration-500 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
        <Icon size={18} />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </p>

        <p className="mt-0.5 text-xs leading-5 text-gray-500 dark:text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   INFO ROW
========================================================= */

function InfoRow({
  icon: Icon,
  text,
  href,
}) {
  const content = (
    <>
      <Icon size={17} className="shrink-0 text-green-500" />

      <span>{text}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-3 text-sm text-gray-600 transition hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
      {content}
    </div>
  );
}

/* =========================================================
   PROCESS CARD
========================================================= */

function ProcessCard({
  number,
  title,
  text,
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
      }}
      className="group rounded-[1.5rem] border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.2em] text-green-600 dark:text-green-400">
          {number}
        </span>

        <ArrowRight
          size={17}
          className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-green-500"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
        {text}
      </p>

      <div className="mt-6 h-px w-10 origin-left bg-green-500 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-200" />
    </motion.div>
  );
}