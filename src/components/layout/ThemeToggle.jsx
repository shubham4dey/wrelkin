import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
  const savedTheme = localStorage.getItem("wrelkin-theme");

  if (savedTheme === "dark") return true;
  return false;
});

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("wrelkin-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("wrelkin-theme", "light");
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`theme-toggle ${isDark ? "theme-toggle-dark" : ""}`}
    >
      {/* Clouds */}
      {!isDark && (
        <div className="toggle-clouds">
          <motion.div
            animate={{ x: [0, 2, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="cloud cloud-1"
          />

          <motion.div
            animate={{ x: [0, -2, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="cloud cloud-2"
          />
        </div>
      )}

      {/* Stars */}
      <div className="theme-stars">
        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />
      </div>

      {/* Shooting star */}
      {isDark && (
        <motion.div
          className="shooting-star"
          animate={{
            x: [0, 25],
            y: [0, 12],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            repeatDelay: 4,
          }}
        />
      )}

      {/* Orb */}
      <motion.span
        className="theme-orb"
        animate={{
          x: isDark ? 22 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 32,
        }}
      >
        <motion.span
          animate={{
            rotate: isDark ? -25 : 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          {isDark ? (
            <Moon size={13} strokeWidth={2.4} />
          ) : (
            <Sun size={14} strokeWidth={2.3} />
          )}
        </motion.span>

        <motion.span
          className="orb-glow"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.span>

      <span className="energy-glow" />

      {/* Lightweight particles */}
      <div className="toggle-particles">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="particle"
            animate={{
              y: [0, -8, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              left: `${25 + i * 25}%`,
            }}
          />
        ))}
      </div>
    </button>
  );
}