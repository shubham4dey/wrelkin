import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Eye,
  Factory,
  FileText,
  Flame,
  Leaf,
  Mail,
  Recycle,
  Settings2,
  ShieldCheck,
  Sparkles,
  Sun,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import p1 from "../../assets/products/p1.png";
import p2 from "../../assets/products/p2.png";
import p3 from "../../assets/products/p3.png";
import p4 from "../../assets/products/p4.png";
import p5 from "../../assets/products/p5.png";
import p6 from "../../assets/products/p6.png";
import p7 from "../../assets/products/p7.png";
import p8 from "../../assets/products/p8.png";
import p9 from "../../assets/products/p9.png";
import p10 from "../../assets/products/p10.png";
import p11 from "../../assets/products/p11.png";
import p12 from "../../assets/products/p12.png";
import p13 from "../../assets/products/p13.png";

const productImages = [
  {
    id: 1,
    image: p1,
    title: "Bio-CNG Plant",
    tag: "Renewable Gas",
  },
  {
    id: 2,
    image: p2,
    title: "Biogas Plant",
    tag: "Green Energy",
  },
  {
    id: 3,
    image: p3,
    title: "Solar Power Plant",
    tag: "Solar Energy",
  },
  {
    id: 4,
    image: p4,
    title: "Biodiesel Plant",
    tag: "Biofuel",
  },
  {
    id: 5,
    image: p5,
    title: "Bioethanol Plant",
    tag: "Biofuel",
  },
  {
    id: 6,
    image: p6,
    title: "Biomass Pellet Plant",
    tag: "Biomass",
  },
  {
    id: 7,
    image: p7,
    title: "Waste-to-Energy Plant",
    tag: "Energy Recovery",
  },
  {
    id: 8,
    image: p8,
    title: "Organic Fertilizer System",
    tag: "Resource Recovery",
  },
  {
    id: 9,
    image: p9,
    title: "Bio-Toilet System",
    tag: "Sanitation",
  },
  {
    id: 10,
    image: p10,
    title: "Industrial Utility System",
    tag: "Utilities",
  },
  {
    id: 11,
    image: p11,
    title: "Process Equipment",
    tag: "Engineering",
  },
  {
    id: 12,
    image: p12,
    title: "Plant Automation",
    tag: "Control Systems",
  },
  {
    id: 13,
    image: p13,
    title: "EPC Project Execution",
    tag: "Infrastructure",
  },
];

export default function Products() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const activeImage =
    activeImageIndex !== null ? productImages[activeImageIndex] : null;

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) =>
      prev === null ? prev : (prev + 1) % productImages.length,
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prev) =>
      prev === null
        ? prev
        : (prev - 1 + productImages.length) % productImages.length,
    );
  };

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev === null ? prev : (prev + 1) % productImages.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImageIndex((prev) =>
          prev === null
            ? prev
            : (prev - 1 + productImages.length) % productImages.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  const productSolutions = [
    {
      number: "01",
      icon: Leaf,
      category: "Bio-CNG / CBG",
      name: "Bio-CNG (CBG) Plants",
      model: "WRELKIN-CBG",
      capacity: "Project Specific",
      price: "Available on enquiry",
      description:
        "Complete Bio-CNG and Compressed Bio Gas plant solutions designed for converting organic waste and biomass into purified renewable natural gas.",
      specifications: [
        "Feedstock-based plant configuration",
        "Anaerobic digestion process",
        "Biogas purification and upgrading",
        "Compression and dispensing systems",
        "Slurry and organic fertilizer management",
      ],
      features: [
        "Feedstock Handling",
        "Anaerobic Digestion",
        "Biogas Purification",
        "Gas Upgrading",
        "Compression & Bottling",
        "Slurry Management",
      ],
      applications: [
        "Industrial Applications",
        "Clean Transportation Fuel",
        "Waste-to-Energy",
        "City Gas Integration",
      ],
    },

    {
      number: "02",
      icon: Recycle,
      category: "Biogas",
      name: "Biogas Plants",
      model: "WRELKIN-BIO",
      capacity: "Project Specific",
      price: "Available on enquiry",
      description:
        "Engineered biogas plant systems for organic waste treatment, renewable gas generation and efficient resource recovery.",
      specifications: [
        "Organic waste-based configuration",
        "Anaerobic digestion system",
        "Gas collection and handling",
        "Slurry management",
        "Organic fertilizer recovery",
      ],
      features: [
        "Feedstock Preparation",
        "Anaerobic Digesters",
        "Gas Collection",
        "Gas Handling",
        "Slurry Management",
        "Organic Fertilizer Recovery",
      ],
      applications: [
        "Agricultural Waste",
        "Industrial Organic Waste",
        "Municipal Waste",
        "Organic Resource Recovery",
      ],
    },

    {
      number: "03",
      icon: Sun,
      category: "Solar Power",
      name: "Solar Power Plants",
      model: "WRELKIN-SOLAR",
      capacity: "Project Specific",
      price: "Available on enquiry",
      description:
        "Rooftop and ground-mounted solar power plant solutions for industrial, commercial and institutional applications.",
      specifications: [
        "Rooftop and ground-mounted configurations",
        "Project-specific system design",
        "Equipment supply and integration",
        "Installation and testing",
        "Commissioning and performance validation",
      ],
      features: [
        "Solar Plant Design",
        "Engineering",
        "Equipment Supply",
        "Installation",
        "Testing",
        "Commissioning",
      ],
      applications: [
        "Industrial Facilities",
        "Commercial Buildings",
        "Institutional Projects",
        "Rooftop Solar",
      ],
    },

    {
      number: "04",
      icon: Factory,
      category: "Biodiesel",
      name: "Biodiesel Production Plants",
      model: "WRELKIN-BD",
      capacity: "Project Specific",
      price: "Available on enquiry",
      description:
        "Complete biodiesel production plant solutions covering process design, equipment supply, installation and commissioning.",
      specifications: [
        "Project-specific process configuration",
        "Process engineering",
        "Reaction systems",
        "Equipment integration",
        "Installation and commissioning",
      ],
      features: [
        "Plant Design",
        "Process Engineering",
        "Reaction Systems",
        "Equipment Supply",
        "Installation",
        "Commissioning",
      ],
      applications: [
        "Sustainable Fuel Production",
        "Industrial Fuel",
        "Waste Oil Utilization",
        "Renewable Energy",
      ],
    },

    {
      number: "05",
      icon: Flame,
      category: "Bioethanol",
      name: "Bioethanol Plants",
      model: "WRELKIN-BE",
      capacity: "Project Specific",
      price: "Available on enquiry",
      description:
        "Renewable fuel production solutions designed around efficient biomass and organic feedstock utilization.",
      specifications: [
        "Feedstock-based plant configuration",
        "Process design and engineering",
        "Equipment integration",
        "Plant installation",
        "Commissioning support",
      ],
      features: [
        "Process Design",
        "Feedstock Handling",
        "Plant Engineering",
        "Equipment Integration",
        "Installation",
        "Commissioning",
      ],
      applications: [
        "Renewable Fuel",
        "Industrial Applications",
        "Biomass Utilization",
        "Energy Recovery",
      ],
    },

    {
      number: "06",
      icon: Boxes,
      category: "Biomass",
      name: "Biomass Pellet & Briquette Plants",
      model: "WRELKIN-BIO-M",
      capacity: "Project Specific",
      price: "Available on enquiry",
      description:
        "Biomass processing solutions for converting suitable agricultural and industrial biomass residues into useful solid fuel products.",
      specifications: [
        "Biomass residue processing",
        "Material handling systems",
        "Drying system integration",
        "Pellet and briquette production",
        "Process equipment integration",
      ],
      features: [
        "Biomass Processing",
        "Drying Systems",
        "Pellet Production",
        "Briquette Production",
        "Material Handling",
        "Process Equipment",
      ],
      applications: [
        "Industrial Fuel",
        "Agricultural Residue",
        "Biomass Energy",
        "Waste Resource Recovery",
      ],
    },

    {
      number: "07",
      icon: Zap,
      category: "Waste-to-Energy",
      name: "Waste-to-Energy Plants",
      model: "WRELKIN-WTE",
      capacity: "Project Specific",
      price: "Available on enquiry",
      description:
        "Integrated waste-to-energy solutions designed to recover useful energy from suitable waste streams while supporting sustainable waste management.",
      specifications: [
        "Suitable waste stream assessment",
        "Waste handling and processing",
        "Energy recovery configuration",
        "Process system integration",
        "Project-specific engineering",
      ],
      features: [
        "Waste Handling",
        "Waste Processing",
        "Energy Recovery",
        "Plant Engineering",
        "Process Systems",
        "Project Commissioning",
      ],
      applications: [
        "Municipal Waste",
        "Industrial Waste",
        "Organic Waste",
        "Energy Recovery",
      ],
    },

    {
      number: "08",
      icon: Recycle,
      category: "Organic Fertilizer",
      name: "Organic Fertilizer & Slurry Management Systems",
      model: "WRELKIN-OFS",
      capacity: "Project Specific",
      price: "Available on enquiry",
      description:
        "Slurry processing and organic fertilizer management systems designed to recover valuable resources from renewable energy plants.",
      specifications: [
        "Slurry handling configuration",
        "Solid-liquid separation",
        "Organic fertilizer recovery",
        "Drying and storage systems",
        "Resource recovery integration",
      ],
      features: [
        "Slurry Handling",
        "Solid-Liquid Separation",
        "Organic Fertilizer",
        "Drying Systems",
        "Storage Solutions",
        "Resource Recovery",
      ],
      applications: [
        "Biogas Plants",
        "Bio-CNG Plants",
        "Agriculture",
        "Organic Waste Management",
      ],
    },

    {
      number: "09",
      icon: ShieldCheck,
      category: "Bio-Toilet",
      name: "Bio-Toilet Systems",
      model: "WRELKIN-BT",
      capacity: "Project Specific",
      price: "Available on enquiry",
      description:
        "Environmentally responsible bio-toilet solutions designed for effective waste treatment and improved sanitation management.",
      specifications: [
        "Bio-digestion based treatment",
        "Sanitation system configuration",
        "Waste treatment system",
        "Odour management",
        "Maintenance-oriented design",
      ],
      features: [
        "Waste Treatment",
        "Bio-Digestion",
        "Sanitation Systems",
        "Odour Management",
        "Easy Maintenance",
        "Sustainable Operation",
      ],
      applications: [
        "Railway Applications",
        "Institutional Facilities",
        "Public Infrastructure",
        "Remote Locations",
      ],
    },

    {
      number: "10",
      icon: Settings2,
      category: "Industrial Utilities",
      name: "Industrial Utilities & Process Equipment",
      model: "WRELKIN-IU",
      capacity: "Project Specific",
      price: "Available on enquiry",
      description:
        "Customized industrial utility and process equipment solutions supporting renewable energy plants and industrial process requirements.",
      specifications: [
        "Project-specific utility configuration",
        "Process equipment integration",
        "Plant utility systems",
        "Equipment supply support",
        "Engineering and installation support",
      ],
      features: [
        "Process Equipment",
        "Utility Systems",
        "Plant Integration",
        "Equipment Supply",
        "Engineering Support",
        "Installation Support",
      ],
      applications: [
        "Renewable Energy Plants",
        "Industrial Facilities",
        "Process Industries",
        "EPC Projects",
      ],
    },
  ];

  return (
    <main className="overflow-hidden bg-white transition-colors duration-500 dark:bg-[#031009]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white pt-10 transition-colors duration-500 dark:bg-[#031009] sm:pt-16 lg:pt-20">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.04, 0.11, 0.04],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-emerald-300/10 blur-[130px] dark:bg-emerald-500/20"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.035, 0.09, 0.035],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-lime-300/10 blur-[130px] dark:bg-lime-400/10"
          />

          <div
            className="absolute inset-0 opacity-[0.018] dark:opacity-[0.035]"
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

        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-2 text-xs font-semibold text-green-700 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-300 sm:px-4 sm:text-sm">
                <Boxes size={16} />
                <span>Our Products & Plant Solutions</span>
              </div>

              <h1 className="mt-6 max-w-4xl text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.05em] text-gray-950 dark:text-white sm:text-5xl sm:leading-[0.98] lg:text-[4.7rem]">
                Renewable energy{" "}
                <span className="text-green-600 dark:text-green-400">
                  solutions built to perform.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-8 lg:text-lg">
                WRELKIN INDIA PRIVATE LIMITED provides engineered plant
                solutions for Bio-CNG, Biogas, Solar Power, Biodiesel,
                Bioethanol, Biomass, Waste-to-Energy and other sustainable
                energy applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#products"
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition-all hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400 sm:px-7 sm:py-3.5"
                >
                  Explore Solutions
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/enquiry"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:border-green-400 hover:bg-green-50 hover:text-green-700 dark:border-white/15 dark:bg-white/[0.04] dark:text-gray-200 dark:hover:border-green-400/40 dark:hover:bg-green-400/10 sm:px-7 sm:py-3.5"
                >
                  Enquire Now
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.div>

            {/* =====================================================
                RIGHT — REDESIGNED (LIGHT + DARK)
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

                      <Factory size={25} className="relative" />
                    </motion.div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-400">
                      WRELKIN INDIA PRIVATE LIMITED
                    </p>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                      Complete Plant Solutions
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      From renewable gas and solar power to sustainable fuels,
                      biomass processing and waste resource recovery.
                    </p>

                    <div className="mt-7 grid grid-cols-2 gap-3">

                      <div className="rounded-2xl border border-green-200/80 bg-white/90 p-4 shadow-lg shadow-green-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-md shadow-green-600/30">
                          <Leaf size={17} />
                        </div>

                        <p className="mt-3 text-2xl font-bold text-gray-950 dark:text-white">
                          10+
                        </p>

                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                          Years Domestic Experience
                        </p>

                      </div>

                      <div className="rounded-2xl border border-green-200/80 bg-white/90 p-4 shadow-lg shadow-green-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-md shadow-green-600/30">
                          <Factory size={17} />
                        </div>

                        <p className="mt-3 text-2xl font-bold text-gray-950 dark:text-white">
                          10+
                        </p>

                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                          Plant & Energy Solutions
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
                  <Leaf size={20} />
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
                  <Zap size={20} />
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 dark:bg-[#04100a] sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-green-400/5 blur-[110px]" />

          <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-lime-400/5 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Product Portfolio
              </p>

              <div className="mt-5 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Sparkles size={16} className="text-green-500" />
                Renewable Energy & EPC Solutions
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
                Engineered solutions for{" "}
                <span className="text-green-600 dark:text-green-400">
                  real-world energy needs.
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                WRELKIN develops project-specific renewable energy plants,
                process systems and sustainable infrastructure solutions with a
                focus on engineering quality, operational efficiency, safety and
                long-term performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT IMAGES / GALLERY
      ===================================================== */}

      <section className="relative overflow-hidden bg-gray-50 py-16 dark:bg-[#04100a] sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-green-400/5 blur-[110px]" />
          <div className="absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-emerald-400/5 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-green-500" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Product Gallery
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Explore our{" "}
              <span className="text-green-600 dark:text-green-400">
                plant & product visuals.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
              Click on any card to view the image in fullscreen preview.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productImages.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.04, 0.2),
                }}
                whileHover={{ y: -6 }}
                className="group relative w-full cursor-pointer overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white text-left shadow-lg transition-colors duration-300 hover:border-green-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-green-700/60"
              >
                <div className="relative h-64 w-full overflow-hidden sm:h-72">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute inset-0 bg-green-900/0 transition-colors duration-500 group-hover:bg-green-900/10" />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:opacity-100">
                    <Eye size={17} />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-300">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-white/70">
                      Click to enlarge
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS — PREMIUM LAYOUT
      ===================================================== */}

      <section
        id="products"
        className="relative overflow-hidden bg-gray-50 py-20 dark:bg-[#031009] sm:py-24 lg:py-28"
      >
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-green-400/[0.04] blur-[120px]" />

          <div className="absolute bottom-20 right-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-400/[0.04] blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.012] dark:opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage:
                "radial-gradient(circle at center, black 15%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 15%, transparent 75%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* HEADING */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-green-500" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Plant & Product Solutions
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Solutions across{" "}
              <span className="text-green-600 dark:text-green-400">
                renewable energy
              </span>{" "}
              technologies.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
              Explore WRELKIN's range of renewable energy plants, process
              systems, sustainable fuel solutions and supporting infrastructure.
            </p>
          </motion.div>

          {/* PRODUCT COLLECTION */}

          <div className="mt-14 space-y-5">
            {/* FEATURED — 01 */}

            <FeaturedProductCard product={productSolutions[0]} index={0} />

            {/* 02 / 03 */}

            <div className="grid gap-5 lg:grid-cols-2">
              <ProductCard product={productSolutions[1]} index={1} />

              <ProductCard product={productSolutions[2]} index={2} />
            </div>

            {/* 04 / 05 */}

            <div className="grid gap-5 lg:grid-cols-2">
              <ProductCard product={productSolutions[3]} index={3} />

              <ProductCard product={productSolutions[4]} index={4} />
            </div>

            {/* 06 / 07 */}

            <div className="grid gap-5 lg:grid-cols-2">
              <ProductCard product={productSolutions[5]} index={5} />

              <ProductCard product={productSolutions[6]} index={6} />
            </div>

            {/* 08 / 09 */}

            <div className="grid gap-5 lg:grid-cols-2">
              <ProductCard product={productSolutions[7]} index={7} />

              <ProductCard product={productSolutions[8]} index={8} />
            </div>

            {/* 10 — CENTERED */}

            <div className="mx-auto w-full lg:max-w-[calc(50%-0.625rem)]">
              <ProductCard product={productSolutions[9]} index={9} />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT INFORMATION / BROCHURE
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 dark:bg-[#04100a] sm:py-24 lg:py-28">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              Technical Information
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Need technical details for your project?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
              Product capacities, technical specifications, brochures,
              catalogues and datasheets can be provided based on your project
              requirements.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <InformationCard
              icon={FileText}
              title="Company Profile"
              text="Request the WRELKIN company profile covering renewable energy and EPC capabilities."
            />

            <InformationCard
              icon={ClipboardCheck}
              title="Technical Datasheets"
              text="Request product-specific technical information and specifications for your project."
            />

            <InformationCard
              icon={Boxes}
              title="Catalogue & Brochure"
              text="Request the latest product catalogue and relevant plant solution documentation."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT CAPABILITIES
      ===================================================== */}

      <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-[#031009] sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                Product Capabilities
              </p>

              <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                From engineering to{" "}
                <span className="text-green-600 dark:text-green-400">
                  commissioning.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                Our plant and product solutions can be supported through
                engineering, manufacturing coordination, equipment supply,
                installation, commissioning, consultancy and technical support.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Capability
                icon={Settings2}
                title="Customized Engineering"
                text="Project-specific plant and equipment engineering based on technical and operational requirements."
              />

              <Capability
                icon={Factory}
                title="Equipment & Manufacturing"
                text="Equipment and process systems with manufacturing coordination and supply support."
              />

              <Capability
                icon={Wrench}
                title="Installation & Commissioning"
                text="Professional installation, testing, commissioning and performance validation."
              />

              <Capability
                icon={ShieldCheck}
                title="Technical Support"
                text="Maintenance, troubleshooting, training and operational support for reliable plant performance."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY PROJECT SPECIFIC
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-20 dark:bg-[#04100a] sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              Project-Specific Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Designed around your project requirements.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
              Renewable energy plants require different configurations based on
              feedstock, capacity, site conditions, technology, utility
              requirements and project objectives. WRELKIN develops solutions
              according to the specific requirements of each project.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProjectFactor
              icon={Settings2}
              title="Technology"
              text="Technology and process configuration based on project needs."
            />

            <ProjectFactor
              icon={Boxes}
              title="Capacity"
              text="Plant capacity evaluated according to feedstock and project requirements."
            />

            <ProjectFactor
              icon={Factory}
              title="Site"
              text="Site conditions, utilities and infrastructure considered during planning."
            />

            <ProjectFactor
              icon={ShieldCheck}
              title="Performance"
              text="Focus on efficiency, safety, reliability and long-term operation."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-[#031009] sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-950/30 dark:via-[#031009] dark:to-emerald-950/20" />

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-[130px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-green-200 bg-white/70 p-8 shadow-xl shadow-green-900/5 backdrop-blur-xl dark:border-green-800/30 dark:bg-white/[0.025] sm:p-12 lg:p-14"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-600/20 dark:bg-green-500">
              <BadgeCheck size={26} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              Build With WRELKIN
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              Looking for the right renewable energy solution?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
              Discuss your plant requirements, capacity, technology and project
              objectives with the WRELKIN engineering team.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link to="/enquiry">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition-all hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                >
                  Send an Enquiry
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
          LIGHTBOX / IMAGE PREVIEW
      ===================================================== */}

      <AnimatePresence>
        {activeImageIndex !== null && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl sm:p-6"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#04140b]/95 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative flex max-h-[92vh] flex-col">
                {/* IMAGE AREA */}

                <div className="relative flex h-[42vh] items-center justify-center overflow-hidden bg-black/20 px-4 py-4 sm:h-[52vh] sm:px-10 sm:py-6">
                  <img
                    key={activeImage.id}
                    src={activeImage.image}
                    alt={activeImage.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* BOTTOM INFO */}

                <div className="flex flex-col gap-3 border-t border-white/10 bg-white/[0.03] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-400">
                      {activeImage.tag}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                      {activeImage.title}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-white/60">
                    {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                    {String(productImages.length).padStart(2, "0")}
                  </p>
                </div>

                {/* THUMBNAILS — SCROLLBAR HIDDEN */}

                <div className="border-t border-white/10 bg-black/20 px-5 py-4">
                  <div
                    className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {productImages.map((thumbnail, thumbnailIndex) => (
                      <button
                        key={thumbnail.id}
                        type="button"
                        onClick={() => setActiveImageIndex(thumbnailIndex)}
                        className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 ${
                          thumbnailIndex === activeImageIndex
                            ? "border-green-400 opacity-100"
                            : "border-white/10 opacity-50 hover:opacity-80"
                        }`}
                      >
                        <img
                          src={thumbnail.image}
                          alt={thumbnail.title}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close preview"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                <X size={18} />
              </button>

              {/* PREVIOUS BUTTON */}

              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                <ChevronLeft size={20} />
              </button>

              {/* NEXT BUTTON */}

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* =========================================================
   FEATURED PRODUCT CARD
========================================================= */

function FeaturedProductCard({ product, index }) {
  const Icon = product.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
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
        duration: 0.7,
        delay: index * 0.04,
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-green-200 bg-white shadow-sm transition-all duration-500 hover:border-green-300 hover:shadow-2xl hover:shadow-green-900/[0.07] dark:border-green-800/30 dark:bg-white/[0.025]"
    >
      {/* LARGE BACKGROUND NUMBER */}

      <div className="pointer-events-none absolute -right-4 -top-12 select-none text-[12rem] font-black leading-none tracking-[-0.08em] text-green-500/[0.035] dark:text-green-400/[0.04]">
        {product.number}
      </div>

      {/* GLOW */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-green-400/10 blur-[110px] opacity-70" />

      <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT */}

        <div className="p-7 sm:p-9 lg:p-11">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-green-700 dark:border-green-800/30 dark:bg-green-900/20 dark:text-green-300">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Featured Solution
          </div>

          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
            {product.category}
          </p>

          <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.035em] text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
            {product.name}
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            {product.description}
          </p>

          <div className="mt-7 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                Model
              </p>

              <p className="mt-1 text-sm font-bold text-gray-800 dark:text-gray-200">
                {product.model}
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                Capacity
              </p>

              <p className="mt-1 text-sm font-bold text-gray-800 dark:text-gray-200">
                {product.capacity}
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-green-50 p-4 dark:border-green-800/30 dark:bg-green-900/10">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-green-600 dark:text-green-400">
                Pricing
              </p>

              <p className="mt-1 text-sm font-bold text-gray-800 dark:text-gray-200">
                On Enquiry
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/enquiry"
              className="group/featured inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-green-600/20 transition-all hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
            >
              Discuss Your Project
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/featured:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}

        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-t border-gray-100 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-8 dark:border-white/10 dark:from-green-950/20 dark:via-transparent dark:to-emerald-950/20 lg:min-h-full lg:border-l lg:border-t-0">
          <div className="absolute h-64 w-64 rounded-full border border-green-500/10" />

          <div className="absolute h-44 w-44 rounded-full border border-green-500/10" />

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-green-200 bg-white text-green-600 shadow-2xl shadow-green-900/10 dark:border-green-800/40 dark:bg-[#07170d] dark:text-green-400"
          >
            <Icon size={48} strokeWidth={1.4} />
          </motion.div>

          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-green-200 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-green-700 shadow-lg backdrop-blur-md dark:border-green-800/40 dark:bg-[#07170d]/90 dark:text-green-300">
            Renewable Gas Solution
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product, index }) {
  const Icon = product.icon;

  return (
    <motion.article
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
        amount: 0.12,
      }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.04, 0.18),
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:border-green-300 hover:shadow-2xl hover:shadow-green-900/[0.06] dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-green-700/50"
    >
      {/* HOVER GLOW */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-400/10 blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-emerald-400/[0.04] blur-[60px]" />

      <div className="relative p-6 sm:p-7">
        {/* TOP */}

        <div className="flex items-start justify-between gap-5">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-green-600 dark:text-green-400">
              {product.number}
            </span>

            <div className="mt-3 h-px w-8 bg-green-500 transition-all duration-500 group-hover:w-14" />
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-green-100 bg-green-50 text-green-600 transition-all duration-500 group-hover:scale-105 group-hover:border-green-200 group-hover:bg-green-100 dark:border-green-900/30 dark:bg-green-900/20 dark:text-green-400 dark:group-hover:bg-green-900/30">
            <Icon size={24} strokeWidth={1.7} />
          </div>
        </div>

        {/* CATEGORY */}

        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
          {product.category}
        </p>

        {/* NAME */}

        <h3 className="mt-2 max-w-xl text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h3>

        {/* DESCRIPTION */}

        <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400">
          {product.description}
        </p>

        {/* MODEL / CAPACITY */}

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
              Model
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              {product.model}
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
              Capacity
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              {product.capacity}
            </p>
          </div>
        </div>

        {/* SPECIFICATIONS */}

        <div className="mt-6">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Specifications
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            {product.specifications.map((specification) => (
              <div
                key={specification}
                className="flex items-start gap-2 text-xs leading-5 text-gray-600 dark:text-gray-400"
              >
                <CheckCircle2
                  size={14}
                  className="mt-0.5 shrink-0 text-green-500"
                />

                <span>{specification}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES */}

        <div className="mt-6">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Key Features
          </p>

          <div className="flex flex-wrap gap-2">
            {product.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-[10px] font-medium text-gray-600 transition-colors duration-300 group-hover:border-green-100 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* APPLICATIONS */}

        <div className="mt-6">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Applications
          </p>

          <div className="flex flex-wrap gap-2">
            {product.applications.map((application) => (
              <span
                key={application}
                className="rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-[10px] font-medium text-green-700 dark:border-green-800/30 dark:bg-green-900/20 dark:text-green-300"
              >
                {application}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM ACTION */}

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-gray-100 pt-5 dark:border-white/10">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
              Pricing
            </p>

            <p className="mt-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
              Available on enquiry
            </p>
          </div>

          <Link
            to="/enquiry"
            className="group/btn inline-flex shrink-0 items-center gap-2 rounded-full bg-green-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-green-600/10 transition hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
          >
            Request Details
            <ArrowRight
              size={14}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   INFORMATION CARD
========================================================= */

function InformationCard({ icon: Icon, title, text }) {
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
      whileHover={{
        y: -5,
      }}
      className="group rounded-[1.5rem] border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.025]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
        <Icon size={21} />
      </div>

      <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-gray-400">
        {text}
      </p>

      <Link
        to="/enquiry"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-600 transition hover:text-green-700 dark:text-green-400"
      >
        Request Information
        <ArrowRight size={15} />
      </Link>
    </motion.div>
  );
}

/* =========================================================
   CAPABILITY
========================================================= */

function Capability({ icon: Icon, title, text }) {
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
      className="rounded-[1.5rem] border border-gray-200 bg-white p-6 transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.025]"
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

/* =========================================================
   PROJECT FACTOR
========================================================= */

function ProjectFactor({ icon: Icon, title, text }) {
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
        duration: 0.55,
      }}
      className="rounded-[1.5rem] border border-gray-200 bg-gray-50 p-5 dark:border-white/10 dark:bg-white/[0.025]"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
        <Icon size={19} />
      </div>

      <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
        {text}
      </p>
    </motion.div>
  );
}