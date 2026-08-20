import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Factory,
  Globe2,
  Leaf,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   BACKEND CONFIGURATION
   ========================================================= */

// Backend ka base URL — apna actual URL yahan daal do
const BACKEND_URL = "http://localhost:5000"; // development
// const BACKEND_URL = "https://your-backend-domain.com"; // production

const CONTACT_API_ENDPOINT = `${BACKEND_URL}/api/contact`;

/* =========================================================
   WRELKIN CONTACT DETAILS
========================================================= */

const contactDetails = {
  company: "WRELKIN INDIA PRIVATE LIMITED",

  email: "wrelkinindustries@gmail.com",

  secondaryEmail: "infowrelkin@gmail.com",

  // Replace these when actual number is available
  phone: "01169310316",
  whatsapp: "3335650403",

  office: {
    title: "Corporate Office",
    address: "Makardah Road, Kantalia, Domjur, West Bengal - 711409",
  },

  factory: {
    title: "Project & Plant Locations",
    address: "Renewable energy projects and plant installations across India.",
  },

  mapUrl: "YOUR_GOOGLE_MAPS_URL",

  workingHours: "Monday – Saturday | 9:00 AM – 6:00 PM",
};

export default function Contact() {
  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // "success" | "error" | null
  const [errorMessage, setErrorMessage] = useState("");
  const abortControllerRef = useRef(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company") || null,
      service: formData.get("service") || null,
      message: formData.get("message"),
      source: "WRELKIN Website - Contact Form",
      submittedAt: new Date().toISOString(),
    };

    // Reset status
    setSubmissionStatus(null);
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      abortControllerRef.current = new AbortController();

      const response = await fetch(CONTACT_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: abortControllerRef.current.signal,
      });

      // Try to parse response as JSON (most backends return JSON)
      let data;
      const contentType = response.headers.get("content-type") || "";

      if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }

      if (!response.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            `Server responded with status ${response.status}`,
        );
      }

      // SUCCESS
      setSubmissionStatus("success");
      form.reset();

      // Auto-hide success message after 8 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 8000);
    } catch (error) {
      // Ignore abort errors
      if (error.name === "AbortError") {
        return;
      }

      console.error("Contact form submission error:", error);
      setSubmissionStatus("error");
      setErrorMessage(
        error.message ||
          "Something went wrong. Please try again or email us directly.",
      );

      // Auto-hide error after 10 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
        setErrorMessage("");
      }, 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Optional: fallback mailto in case backend fail kare
  const handleMailtoFallback = () => {
    const form = document.querySelector("#contact-form form");
    if (!form) return;

    const formData = new FormData(form);
    const name = formData.get("name") || "Customer";
    const subject = encodeURIComponent(`New Enquiry from ${name} - WRELKIN`);

    const body = encodeURIComponent(
      `WRELKIN INDIA PRIVATE LIMITED - CONTACT ENQUIRY\n\n` +
        `Name: ${name}\n` +
        `Email: ${formData.get("email")}\n` +
        `Phone: ${formData.get("phone")}\n` +
        `Company: ${formData.get("company") || "Not provided"}\n` +
        `Interested In: ${formData.get("service") || "Not specified"}\n\n` +
        `Message:\n${formData.get("message")}\n\n` +
        `Regards,\n${name}`,
    );

    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  };

  const services = [
    "Bio-CNG / CBG",
    "Biogas",
    "Solar Power",
    "Biodiesel",
    "Bioethanol",
    "Biomass",
    "Waste-to-Energy",
    "Organic Fertilizer & Slurry Management",
    "Industrial Utilities & Process Equipment",
    "EPC",
    "Engineering",
    "Consultancy",
    "Operation & Maintenance (O&M)",
  ];

  return (
    <main className="overflow-hidden bg-white transition-colors duration-500 dark:bg-[#031009]">
      {/* =====================================================
          CONTACT HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white pt-12 transition-colors duration-500 dark:bg-[#031009] sm:pt-16 lg:pt-16">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.08, 0.18, 0.08],
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
              opacity: [0.06, 0.14, 0.06],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-green-400/10 blur-[130px]"
          />

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

        <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* LEFT */}

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
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-300">
                <Leaf size={16} />

                <span>Contact WRELKIN</span>
              </div>

              <h1 className="mt-6 max-w-3xl text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.05em] text-gray-950 transition-colors duration-500 dark:text-white sm:text-6xl sm:leading-[0.98] lg:text-[4.7rem]">
                Let's build a{" "}
                <span className="text-green-600 dark:text-green-400">
                  greener energy
                </span>{" "}
                future together.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 transition-colors duration-500 dark:text-gray-400 sm:text-lg sm:leading-8">
                Have a renewable energy project in mind? Connect with WRELKIN
                for engineering, EPC, plant design, installation, commissioning
                and long-term technical support.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400"
                >
                  Send an Enquiry
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href={`https://wa.me/${contactDetails.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur-xl transition hover:border-green-400 hover:bg-green-50 hover:text-green-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-gray-200 dark:hover:border-green-400/40 dark:hover:bg-green-400/10"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* =====================================================
    RIGHT CARD — REDESIGNED (MOBILE FIXED)
===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              className="relative w-full min-w-0 px-1.5 sm:px-0"
            >
              <div className="relative mx-auto w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[480px]">
                {/* OUTER SOFT GLOW (mobile pe chhota taaki edge tak na jaaye) */}

                <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-green-200/60 via-emerald-100/50 to-lime-200/60 blur-2xl dark:from-green-500/10 dark:via-transparent dark:to-lime-400/10 sm:-inset-5" />

                {/* MAIN 3D CARD */}

                <div className="relative overflow-hidden rounded-[2.5rem] border border-green-200 bg-gradient-to-br from-white via-green-50/80 to-emerald-100/90 p-6 shadow-[0_35px_80px_-25px_rgba(22,101,52,0.45)] dark:border-green-400/20 dark:from-white/[0.04] dark:via-white/[0.02] dark:to-green-950/50 dark:shadow-black/40 sm:p-9">
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

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-400">
                      {contactDetails.company}
                    </p>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                      Renewable Energy & EPC
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      Engineering and project support for Bio-CNG, Biogas, Solar
                      Power, Biodiesel and sustainable energy projects.
                    </p>

                    <div className="mt-7 space-y-3">
                      <ContactMiniItem
                        icon={Mail}
                        label="Email"
                        value={contactDetails.email}
                        href={`mailto:${contactDetails.email}`}
                      />

                      <ContactMiniItem
                        icon={Mail}
                        label="Email"
                        value={contactDetails.secondaryEmail}
                        href={`mailto:${contactDetails.secondaryEmail}`}
                      />

                      <ContactMiniItem
                        icon={Phone}
                        label="Phone"
                        value={contactDetails.phone}
                        href={`tel:${contactDetails.phone}`}
                      />

                      <ContactMiniItem
                        icon={Clock3}
                        label="Working Hours"
                        value={contactDetails.workingHours}
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
                  <Mail size={20} />
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
                  <Phone size={20} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </section>

      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-[#04100a] sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-green-400/5 blur-[110px]" />

          <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-emerald-400/5 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
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
                Get In Touch
              </p>

              <div className="mt-5 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Leaf size={17} className="text-green-500" />
                Let's discuss your project
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
                  energy project.
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                Whether you are planning a new renewable energy plant, expanding
                an existing facility or looking for technical support, WRELKIN
                can help you explore the right solution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM + INFO
      ===================================================== */}

      <section
        id="contact-form"
        className="relative overflow-hidden bg-gray-50 py-20 transition-colors duration-500 dark:bg-[#031009] sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* FORM */}

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
              className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.025] sm:p-9"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  <Send size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
                    Contact Enquiry
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                    Start a Conversation
                  </h2>
                </div>
              </div>

              {/* SUCCESS / ERROR MESSAGES */}
              {submissionStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 dark:border-green-400/30 dark:bg-green-400/10"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-green-600 dark:text-green-400"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                      Thank you! Your enquiry has been received.
                    </p>
                    <p className="mt-1 text-xs text-green-700 dark:text-green-400/80">
                      Our team will get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {submissionStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 dark:border-red-400/30 dark:bg-red-400/10"
                >
                  <XCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-red-600 dark:text-red-400"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                      Oops! Something went wrong.
                    </p>
                    <p className="mt-1 text-xs text-red-700 dark:text-red-400/80">
                      {errorMessage}
                    </p>
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="mt-2 text-xs font-semibold text-red-700 underline hover:text-red-800 dark:text-red-300 dark:hover:text-red-200"
                    >
                      Send via email instead →
                    </button>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    label="Your Name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    required
                    disabled={isSubmitting}
                  />

                  <Input
                    label="Company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    disabled={isSubmitting}
                  />
                </div>

                {/* SERVICE DROPDOWN */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Interested In
                  </label>

                  <select
                    name="service"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-[#0b1a13] dark:text-gray-200 dark:[color-scheme:dark]"
                  >
                    <option
                      value=""
                      className="bg-white text-gray-700 dark:bg-[#0b1a13] dark:text-gray-200"
                    >
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-white text-gray-700 dark:bg-[#0b1a13] dark:text-gray-200"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Project Details
                  </label>

                  <textarea
                    name="message"
                    rows="6"
                    required
                    disabled={isSubmitting}
                    placeholder="Tell us about your project requirements..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200 dark:placeholder:text-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-green-500 dark:hover:bg-green-600 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* INFO */}

            <div className="space-y-5">
              <ContactAddressCard
                icon={Building2}
                title={contactDetails.office.title}
                address={contactDetails.office.address}
              />

              <ContactAddressCard
                icon={Factory}
                title={contactDetails.factory.title}
                address={contactDetails.factory.address}
              />

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
                className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.025]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  <Globe2 size={20} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                  Connect With Us
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Reach out to our team for project discussions, technical
                  requirements and renewable energy solutions.
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                  >
                    <Mail size={17} className="text-green-500" />

                    {contactDetails.email}
                  </a>

                  <a
                    href={`mailto:${contactDetails.secondaryEmail}`}
                    className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                  >
                    <Mail size={17} className="text-green-500" />

                    {contactDetails.secondaryEmail}
                  </a>

                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                  >
                    <Phone size={17} className="text-green-500" />

                    {contactDetails.phone}
                  </a>

                  <a
                    href={`https://wa.me/${contactDetails.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                  >
                    <MessageCircle size={17} className="text-green-500" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-[#04100a] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-600 dark:text-green-400">
              Find Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Our location
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
              Visit or connect with WRELKIN for your renewable energy project
              requirements.
            </p>
          </div>

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
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.025]"
          >
            {contactDetails.mapUrl &&
            contactDetails.mapUrl !== "YOUR_GOOGLE_MAPS_URL" ? (
              <iframe
                src={contactDetails.mapUrl}
                title="WRELKIN Location"
                className="h-[380px] w-full border-0 sm:h-[450px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-[380px] flex-col items-center justify-center px-6 text-center sm:h-[450px]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                  <MapPin size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                  WRELKIN Location
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Add the Google Maps embed URL in the{" "}
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    contactDetails.mapUrl
                  </span>{" "}
                  field to display the map here.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHY CONTACT WRELKIN
      ===================================================== */}

      <section className="relative overflow-hidden bg-gray-50 py-20 transition-colors duration-500 dark:bg-[#031009] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Leaf,
                title: "Renewable Focus",
                text: "Solutions built around sustainable energy and resource recovery.",
              },
              {
                icon: ShieldCheck,
                title: "Engineering",
                text: "Practical engineering and project planning for real-world requirements.",
              },
              {
                icon: Factory,
                title: "EPC Support",
                text: "Integrated execution support from planning through commissioning.",
              },
              {
                icon: CheckCircle2,
                title: "Long-Term Support",
                text: "Technical assistance, maintenance and operational support.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  className="rounded-[1.5rem] border border-gray-200 bg-white p-6 transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.025]"
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
          WHATSAPP CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-[#04100a] sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-950/30 dark:via-[#04100a] dark:to-emerald-950/20" />

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
              <MessageCircle size={26} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              Quick Connect
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              Talk directly with WRELKIN about your renewable energy,
              engineering or EPC requirements.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${contactDetails.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 transition hover:border-green-400 hover:text-green-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200 dark:hover:border-green-500 dark:hover:text-green-400"
              >
                Explore Services
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
   INPUT
========================================================= */

function Input({
  label,
  name,
  type,
  placeholder,
  required = false,
  disabled = false,
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
        disabled={disabled}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200 dark:placeholder:text-gray-500"
      />
    </div>
  );
}

/* =========================================================
   MINI CONTACT ITEM — UPGRADED GLASS TILE
========================================================= */

function ContactMiniItem({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-md shadow-green-600/30">
        <Icon size={18} />
      </div>

      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-500">
          {label}
        </p>

        <p className="mt-0.5 truncate text-sm font-medium text-gray-800 dark:text-gray-200">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-3 rounded-xl border border-green-200/80 bg-white/90 p-3 shadow-md shadow-green-900/5 backdrop-blur transition hover:border-green-400/60 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-green-400/30 dark:hover:bg-white/[0.08]"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-green-200/80 bg-white/90 p-3 shadow-md shadow-green-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
      {content}
    </div>
  );
}

/* =========================================================
   ADDRESS CARD
========================================================= */

function ContactAddressCard({ icon: Icon, title, address }) {
  return (
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
      className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.025]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
        <Icon size={20} />
      </div>

      <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      <div className="mt-3 flex gap-3">
        <MapPin size={18} className="mt-1 shrink-0 text-green-500" />

        <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
          {address}
        </p>
      </div>
    </motion.div>
  );
}
