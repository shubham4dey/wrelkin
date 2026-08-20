import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  Folder,
  Home,
  Image as ImageIcon,
  Info,
  Landmark,
  Phone,
  Sparkles,
  Sun as SunIcon,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const menuLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "EPC", path: "/epc", icon: Briefcase },
  { name: "Projects", path: "/projects", icon: Folder },
  { name: "Gallery", path: "/gallery", icon: ImageIcon },
  { name: "Government", path: "/government", icon: Landmark },
  { name: "Contact", path: "/contact", icon: Phone },
];

const productLinks = [
  {
    name: "All Products",
    path: "/products",
    description: "Explore our complete solutions",
    icon: Sparkles,
    gradient: "from-emerald-400 to-green-600",
  },
  {
    name: "Solar Solutions",
    path: "/products/solar",
    description: "Green solar energy systems",
    icon: SunIcon,
    gradient: "from-amber-400 to-orange-500",
  },
];

export default function MobileMenu({ open, onClose }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  /* Route change pe accordion band */
  useEffect(() => {
    setProductsOpen(false);
  }, [location.pathname]);

  /* Menu open hone par page scroll lock */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ================= BACKDROP (header ke neeche se shuru) ================= */}
          <motion.div
            key="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-x-0 top-full h-screen bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* ================= PANEL (header ke bilkul neeche — NO GAP) ================= */}
          <motion.div
            key="menu-panel"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-gray-100 bg-white shadow-2xl shadow-black/10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dark:border-white/10 dark:bg-[#07130D] dark:shadow-black/40 lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
              {/* ============ TOP GRADIENT BAR ============ */}
              <div className="mb-5 h-1 rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-lime-400" />

              {/* ============ LINKS GRID (MOBILE 1 COL / TABLET 2 COL) ============ */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                {menuLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.05 + index * 0.04,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={onClose}
                        className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 transition-colors duration-200 ${
                          isActive
                            ? "border-green-200 bg-green-50 dark:border-green-500/30 dark:bg-green-500/10"
                            : "border-gray-100 bg-gray-50 hover:border-green-200 hover:bg-green-50 dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-green-500/30 dark:hover:bg-green-500/10"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
                              isActive
                                ? "bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-md shadow-green-600/30"
                                : "bg-white text-gray-500 shadow-sm dark:bg-white/5 dark:text-gray-300"
                            }`}
                          >
                            <Icon size={18} />
                          </span>

                          <span
                            className={`text-sm font-semibold ${
                              isActive
                                ? "text-green-700 dark:text-green-300"
                                : "text-gray-700 dark:text-gray-200"
                            }`}
                          >
                            {link.name}
                          </span>

                          {isActive && (
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          )}
                        </span>

                        <ArrowUpRight
                          size={16}
                          className={
                            isActive
                              ? "text-green-600 dark:text-green-400"
                              : "text-gray-400 dark:text-gray-500"
                          }
                        />
                      </Link>
                    </motion.div>
                  );
                })}

                {/* ============ PRODUCTS ACCORDION (FULL WIDTH ON TABLET) ============ */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + menuLinks.length * 0.04,
                    duration: 0.3,
                  }}
                  className="sm:col-span-2"
                >
                  <div
                    className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                      location.pathname.includes("/products")
                        ? "border-green-200 bg-green-50 dark:border-green-500/30 dark:bg-green-500/10"
                        : "border-gray-100 bg-gray-50 dark:border-white/5 dark:bg-white/[0.03]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setProductsOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                            location.pathname.includes("/products")
                              ? "bg-gradient-to-br from-green-500 to-emerald-700 text-white shadow-md shadow-green-600/30"
                              : "bg-white text-gray-500 shadow-sm dark:bg-white/5 dark:text-gray-300"
                          }`}
                        >
                          <Sparkles size={18} />
                        </span>

                        <span
                          className={`text-sm font-semibold ${
                            location.pathname.includes("/products")
                              ? "text-green-700 dark:text-green-300"
                              : "text-gray-700 dark:text-gray-200"
                          }`}
                        >
                          Products
                        </span>
                      </span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          productsOpen ? "rotate-180" : ""
                        } text-gray-500 dark:text-gray-400`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {productsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-2 px-3 pb-3">
                            {productLinks.map((product) => {
                              const Icon = product.icon;
                              const isActive =
                                location.pathname === product.path;

                              return (
                                <Link
                                  key={product.name}
                                  to={product.path}
                                  onClick={onClose}
                                  className={`flex items-center gap-3 rounded-xl border px-3 py-3 transition-colors duration-200 ${
                                    isActive
                                      ? "border-green-200 bg-white text-green-700 dark:border-green-500/30 dark:bg-white/5 dark:text-green-300"
                                      : "border-transparent bg-white/70 hover:bg-white dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                                  }`}
                                >
                                  <span
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${product.gradient} text-white shadow-md`}
                                  >
                                    <Icon size={16} />
                                  </span>

                                  <span className="min-w-0 flex-1">
                                    <span className="block text-sm font-semibold text-gray-800 dark:text-white">
                                      {product.name}
                                    </span>

                                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                                      {product.description}
                                    </span>
                                  </span>

                                  <ArrowUpRight
                                    size={15}
                                    className="text-gray-400 dark:text-gray-500"
                                  />
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>

              {/* ============ CTA ============ */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-6"
              >
                <Link
                  to="/enquiry"
                  onClick={onClose}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-green-600/25 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Start Your Project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:rotate-45"
                  />
                </Link>

                <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
                  Need help?{" "}
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="font-semibold text-green-600 hover:text-green-700 dark:text-green-400"
                  >
                    Contact us
                  </Link>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}