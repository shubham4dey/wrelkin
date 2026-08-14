import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#07130d] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="min-h-9 flex items-center justify-center sm:justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs sm:text-sm"
          >
            <Sparkles size={14} className="text-green-400 shrink-0" />

            <span className="text-gray-300">
              Powering a greener and more sustainable tomorrow.
            </span>
          </motion.div>

          <motion.a
            href="/enquiry"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden sm:flex items-center gap-1 text-xs font-semibold text-green-400 hover:text-green-300 transition"
          >
            Start a conversation
            <ArrowUpRight size={14} />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
