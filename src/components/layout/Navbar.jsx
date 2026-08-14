import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  // Search,
  Sparkles,
  // Zap,
  Sun as SunIcon,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

import wrelkinLogo from "../../assets/Wrelkin_Logo.jpeg.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  // const [searchOpen, setSearchOpen] = useState(false);

  const location = useLocation();
  const { scrollYProgress, scrollY } = useScroll();

  /*
   * IMPORTANT:
   * No window scroll event.
   * Framer Motion directly observes scroll position.
   */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 30;

    setScrolled((prev) => {
      if (prev === next) return prev;
      return next;
    });
  });

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    // setSearchOpen(false);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "EPC", path: "/epc" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Government", path: "/government" },
    { name: "Contact", path: "/contact" },
  ];

  const products = [
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
      description: "Clean solar energy systems",
      icon: SunIcon,
      gradient: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <>
      {/* ================= SCROLL PROGRESS ================= */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0% 50%",
        }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-emerald-500 via-green-400 to-lime-400"
      />

      {/* ================= NAVBAR ================= */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`sticky top-0 z-50 w-full border-b transition-[background-color,box-shadow,height] duration-300 ${
          scrolled
            ? "border-gray-100 bg-white/95 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#07130D]/95 dark:shadow-black/30"
            : "border-gray-100 bg-white/80 backdrop-blur-lg dark:border-white/10 dark:bg-[#07130D]/80"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div
            className={`flex items-center justify-between transition-[height] duration-300 ${
              scrolled ? "h-20" : "h-24"
            }`}
          >
            {/* ================= LOGO ================= */}
            <Link
              to="/"
              className="group flex shrink-0 items-center"
              onClick={() => setMobileOpen(false)}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center"
              >
                <div className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                <img
                  src={wrelkinLogo}
                  alt="WRELKIN"
                  className="relative h-14 w-auto object-contain sm:h-16 lg:h-20"
                />
              </motion.div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden items-center gap-1 lg:flex">
              {links.map((link, index) => {
                const isActive = location.pathname === link.path;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.04,
                      duration: 0.35,
                    }}
                    className="relative"
                  >
                    <Link
                      to={link.path}
                      className={`group relative block rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-green-600 dark:text-green-400"
                          : "text-gray-700 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
                      }`}
                    >
                      {link.name}

                      <span
                        className={`absolute bottom-0 left-2 right-2 h-[2px] origin-center rounded-full bg-gradient-to-r from-emerald-500 to-green-400 transition-transform duration-200 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        } group-hover:scale-x-100`}
                      />

                      <span
                        className={`pointer-events-none absolute inset-0 -z-10 rounded-lg bg-green-50 transition-opacity duration-200 dark:bg-green-900/20 ${
                          isActive ? "opacity-100" : "opacity-0"
                        } group-hover:opacity-100`}
                      />
                    </Link>
                  </motion.div>
                );
              })}

              {/* ================= PRODUCTS ================= */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname.includes("/products")
                      ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-600 dark:text-gray-200 dark:hover:bg-green-900/20 dark:hover:text-green-400"
                  }`}
                >
                  Products

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.18,
                        ease: "easeOut",
                      }}
                      className="absolute right-0 top-full pt-3"
                    >
                      <div className="w-[420px] rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-[#0D2116] dark:shadow-black/40">
                        <div className="mb-2 border-b border-gray-100 px-3 py-2 dark:border-white/10">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                            Our Solutions
                          </p>
                        </div>

                        <div className="space-y-1">
                          {products.map((product, index) => {
                            const Icon = product.icon;

                            return (
                              <motion.div
                                key={product.name}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: index * 0.04,
                                  duration: 0.2,
                                }}
                              >
                                <Link
                                  to={product.path}
                                  className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-green-50 dark:hover:bg-white/5"
                                >
                                  <div
                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient} text-white shadow-lg transition-transform duration-200 group-hover:scale-105`}
                                  >
                                    <Icon size={18} />
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold text-gray-800 transition-colors dark:text-white">
                                      {product.name}
                                    </p>

                                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                                      {product.description}
                                    </p>
                                  </div>

                                  <ArrowUpRight
                                    size={16}
                                    className="text-gray-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green-600 dark:text-gray-500 dark:group-hover:text-green-400"
                                  />
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>

                        <div className="mt-2 border-t border-gray-100 pt-2 dark:border-white/10">
                          <Link
                            to="/products"
                            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition-transform duration-200 hover:-translate-y-0.5"
                          >
                            View All Products
                            <ArrowUpRight size={15} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search */}
              {/* <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors duration-200 hover:bg-green-100 dark:bg-[#1a2f26] dark:text-gray-200 dark:hover:bg-green-900/40"
                aria-label="Search"
              >
                <Search size={18} />
              </motion.button> */}

              {/* Desktop theme */}
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Link
                  to="/enquiry"
                  className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative z-10">Start a Project</span>

                  <ArrowUpRight
                    size={17}
                    className="relative z-10 transition-transform duration-200 group-hover:rotate-45"
                  />
                </Link>
              </div>

              {/* Mobile theme */}
              <div className="flex items-center lg:hidden">
                <ThemeToggle />
              </div>

              {/* Mobile menu */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800 shadow-md transition-colors duration-200 hover:bg-green-100 dark:bg-[#1a2f26] dark:text-gray-100 dark:hover:bg-green-900/40 lg:hidden"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 45, opacity: 0 }}
                    >
                      <X size={22} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -45, opacity: 0 }}
                    >
                      <Menu size={22} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* ================= SEARCH ================= */}
        {/* <AnimatePresence initial={false}>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-gray-100 bg-white dark:border-white/10 dark:bg-[#07130D]"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-5 lg:px-8">
                <div className="relative">
                  <Search
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Search for products, services, projects..."
                    className="w-full rounded-full border border-gray-200 bg-gray-100 py-3 pl-12 pr-4 text-gray-900 outline-none transition-shadow focus:ring-2 focus:ring-green-500 dark:border-white/10 dark:bg-white/10 dark:text-white"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}

        {/* ================= MOBILE MENU ================= */}
        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      </motion.header>
    </>
  );
}