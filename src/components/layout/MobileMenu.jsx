import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ArrowUpRight,
  Home,
  Info,
  Briefcase,
  Folder,
  Image,
  Phone,
  Sparkles,
  Landmark,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu({ open, onClose }) {
  const [productsOpen, setProductsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Us", path: "/about", icon: Info },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Projects", path: "/projects", icon: Folder },
    { name: "Gallery", path: "/gallery", icon: Image },
    { name: "Government", path: "/government", icon: Landmark },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const products = [
    { name: "All Products", path: "/products" },
    { name: "Solar Solutions", path: "/products/solar" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-black/45 lg:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-50 overflow-hidden border-t border-gray-100 bg-white shadow-2xl dark:border-white/10 dark:bg-[#07130D] lg:hidden"
          >
            <div className="h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-lime-400" />

            <div className="px-5 py-5">
              <div className="flex flex-col">
                {links.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.035,
                        duration: 0.25,
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={onClose}
                        className="group flex items-center justify-between rounded-xl border-b border-gray-100 px-3 py-4 font-medium text-gray-800 transition-colors duration-200 hover:bg-green-50 hover:text-green-600 dark:border-white/10 dark:text-gray-100 dark:hover:bg-white/5 dark:hover:text-green-400"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors duration-200 group-hover:bg-green-100 group-hover:text-green-600 dark:bg-white/10 dark:text-gray-300 dark:group-hover:bg-green-900/30 dark:group-hover:text-green-400">
                            <Icon size={18} />
                          </div>

                          <span>{link.name}</span>
                        </div>

                        <ArrowUpRight
                          size={17}
                          className="text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green-600"
                        />
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Products */}
                <button
                  type="button"
                  onClick={() => setProductsOpen((prev) => !prev)}
                  className="group flex w-full items-center justify-between rounded-xl border-b border-gray-100 px-3 py-4 text-left font-medium text-gray-800 transition-colors duration-200 hover:bg-green-50 hover:text-green-600 dark:border-white/10 dark:text-gray-100 dark:hover:bg-white/5 dark:hover:text-green-400"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300">
                      <Sparkles size={18} />
                    </div>

                    <span>Products</span>
                  </div>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      productsOpen
                        ? "rotate-180 text-green-600"
                        : "text-gray-500"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {productsOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="overflow-hidden border-b border-gray-100 pl-4 dark:border-white/10"
                    >
                      <div className="space-y-1 py-2">
                        {products.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={onClose}
                            className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-gray-500 transition-colors duration-200 hover:bg-green-50 hover:text-green-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-green-400"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CTA */}
                <div className="pt-6">
                  <Link
                    to="/enquiry"
                    onClick={onClose}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-green-600/30 transition-transform duration-200 active:scale-[0.98]"
                  >
                    Start Your Project
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-200 group-hover:rotate-45"
                    />
                  </Link>

                  <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
                    Need help?{" "}
                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="font-medium text-green-600 hover:underline dark:text-green-400"
                    >
                      Contact us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}