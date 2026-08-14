import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Leaf,
  Factory,
} from "lucide-react";
import { Link } from "react-router-dom";

import wrelkinLogo from "../../assets/Wrelkin_Logo.jpeg.png";

export default function Footer() {
  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "EPC", path: "/EPC" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const solutionLinks = [
    {
      name: "Bio-CNG & Biogas",
      path: "/products/biogas",
    },
    {
      name: "Solar Solutions",
      path: "/products/solar",
    },
    {
      name: "Biodiesel Plants",
      path: "/products/biodiesel",
    },
    {
      name: "Waste-to-Energy",
      path: "/products/waste-to-energy",
    },
    {
      name: "EPC Solutions",
      path: "/services/epc",
    },
  ];

  return (
    <footer
      data-component="Footer"
      className="
        relative
        overflow-hidden
        bg-gray-50
        text-gray-900
        transition-colors
        duration-500
        dark:bg-[#04100a]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-green-200/35
            blur-[130px]
            dark:bg-green-500/10
          "
        />

        {/* Right Glow */}
        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-emerald-200/30
            blur-[140px]
            dark:bg-emerald-500/10
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            dark:opacity-[0.035]
          "
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black 30%, transparent 80%)",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            TOP CTA
        ====================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-14
            mb-12
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-8
            shadow-sm
            transition-colors
            duration-500

            dark:border-white/10
            dark:bg-white/[0.035]
            dark:shadow-none

            sm:p-10
          "
        >
          {/* =====================================================
              SUBTLE GRADIENT BORDER
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-3xl
              border
              border-transparent
              bg-gradient-to-r
              from-emerald-500/20
              via-lime-400/20
              to-green-500/20
              [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
              [mask-composite:exclude]
              p-px
              dark:from-emerald-500/30
              dark:via-lime-400/25
              dark:to-green-500/30
            "
          />

          {/* =====================================================
              CTA CONTENT
          ====================================================== */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-8

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Text */}
            <div className="max-w-2xl">
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  mb-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-green-200
                  bg-green-50
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-green-700

                  dark:border-green-400/20
                  dark:bg-green-400/10
                  dark:text-green-300
                "
              >
                <Leaf size={13} />

                <span>Renewable Energy Solutions</span>
              </motion.div>

              <h2
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-gray-900

                  dark:text-white

                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Ready to build a cleaner{" "}
                <span className="text-green-600 dark:text-green-400">
                  tomorrow?
                </span>
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-gray-600

                  dark:text-green-100/60

                  sm:text-base
                "
              >
                Talk to our team about your Bio-CNG, Biogas, Solar, Biodiesel or
                Waste-to-Energy project.
              </p>
            </div>

            {/* CTA Button */}
            <Link to="/enquiry">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 22,
                }}
                className="
                  group
                  relative
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  bg-green-600
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-xl
                  shadow-green-600/20
                  transition-all
                  duration-300

                  hover:bg-green-700
                  hover:shadow-green-600/30

                  dark:bg-green-500
                  dark:hover:bg-green-600
                  dark:shadow-green-950/40
                "
              >
                {/* Shine */}
                <motion.span
                  initial={{
                    x: "-120%",
                  }}
                  animate={{
                    x: "120%",
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 4,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    w-1/2
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                  "
                />

                <span className="relative z-10">Start Your Project</span>

                <ArrowUpRight
                  size={17}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}

        <div
          className="
            grid
            gap-12
            py-14

            md:grid-cols-2

            lg:grid-cols-[1.5fr_0.8fr_0.9fr_1.3fr]
          "
        >
          {/* =====================================================
              BRAND
          ====================================================== */}

          <div>
            <Link to="/" className="group inline-flex items-center">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                src={wrelkinLogo}
                alt="WRELKIN India Private Limited"
                loading="lazy"
                className="
                h-14
                sm:h-16
                lg:h-20
                w-auto
                object-contain
                transition-all
                duration-300

                group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]
                dark:group-hover:drop-shadow-[0_0_15px_rgba(74,222,128,0.45)]
              "
              />
            </Link>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-7
                text-gray-600

                dark:text-green-100/50
              "
            >
              WRELKIN INDIA PRIVATE LIMITED is an Engineering, Procurement &
              Construction (EPC) company specializing in Domestic & Commercial
              Biogas Plants, Compressed Bio Gas (CBG) Plants, Bio-CNG Plants,
              Biodiesel Plants, Solar Plants, Railway Fabrication, Structural
              Engineering, Maintenance Works and Road & Civil Infrastructure
              projects across India.
            </p>

            {/* Brand Line */}
            <div
              className="
                mt-6
                flex
                items-center
                gap-2
                text-xs
                font-medium
                uppercase
                tracking-[0.15em]
                text-green-600

                dark:text-green-400
              "
            >
              <span className="h-px w-7 bg-green-500/50" />

              <span>Makes Way For Future</span>
            </div>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">
              <SocialIcon icon={Facebook} href="#" label="Facebook" />

              <SocialIcon icon={Instagram} href="#" label="Instagram" />

              <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
            </div>
          </div>

          {/* =====================================================
              COMPANY
          ====================================================== */}

          <div>
            <FooterTitle>Company</FooterTitle>

            <div className="space-y-3">
              {companyLinks.map((link) => (
                <FooterLink key={link.name} to={link.path}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* =====================================================
              SOLUTIONS
          ====================================================== */}

          <div>
            <FooterTitle>Solutions</FooterTitle>

            <div className="space-y-3">
              {solutionLinks.map((link) => (
                <FooterLink key={link.name} to={link.path}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* =====================================================
              CONTACT
          ====================================================== */}

          <div>
            <FooterTitle>Get In Touch</FooterTitle>

            <div className="space-y-5">
              <ContactItem
                icon={MapPin}
                title="Factory Address"
                text="Makardah Road, Kantalia, Domjur, West Bengal - 711409"
              />

              <ContactItem icon={Phone} title="Phone" text="+91 XXXXX XXXXX" />

              <ContactItem
                icon={Mail}
                title="Email"
                text="wrelkinindustries@gmail.com"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            COMPANY HIGHLIGHTS
        ====================================================== */}

        <div
          className="
            border-t
            border-gray-200
            py-8

            dark:border-white/10
          "
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <MiniHighlight
              icon={Factory}
              title="10+ Years"
              text="Combined Experience"
              delay={0}
            />

            <MiniHighlight
              icon={Leaf}
              title="Clean Energy"
              text="Sustainable Solutions"
              delay={0.1}
            />

            <MiniHighlight
              icon={ArrowUpRight}
              title="Turnkey EPC"
              text="End-to-End Solutions"
              delay={0.2}
            />
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            relative
            flex
            flex-col
            gap-4
            border-t
            border-gray-200
            py-6
            text-xs
            text-gray-500

            dark:border-white/10
            dark:text-green-100/40

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Separator */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-green-500/40
              to-transparent
            "
          />

          <p>
            © {new Date().getFullYear()} WRELKIN INDIA PRIVATE LIMITED. All
            rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="
                relative
                transition-colors
                duration-300
                hover:text-green-600

                dark:hover:text-green-400
              "
            >
              Privacy Policy
              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-px
                  w-0
                  bg-green-600
                  transition-all
                  duration-300
                  group-hover:w-full

                  dark:bg-green-400
                "
              />
            </Link>

            <Link
              to="/terms-and-conditions"
              className="
                relative
                transition-colors
                duration-300
                hover:text-green-600

                dark:hover:text-green-400
              "
            >
              Terms & Conditions
              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-px
                  w-0
                  bg-green-600
                  transition-all
                  duration-300

                  dark:bg-green-400
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER TITLE
========================================================= */

function FooterTitle({ children }) {
  return (
    <h3
      className="
        mb-5
        text-sm
        font-bold
        uppercase
        tracking-[0.15em]
        text-gray-900

        dark:text-white
      "
    >
      {children}
    </h3>
  );
}

/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="
        group
        flex
        items-center
        gap-2
        text-sm
        text-gray-600
        transition-all
        duration-300

        hover:translate-x-1
        hover:text-green-600

        dark:text-green-100/50
        dark:hover:text-green-400
      "
    >
      <span
        className="
          h-1.5
          w-1.5
          rounded-full
          bg-green-500/40
          transition-all
          duration-300

          group-hover:scale-125
          group-hover:bg-green-500
        "
      />

      {children}
    </Link>
  );
}

/* =========================================================
   SOCIAL ICON
========================================================= */

function SocialIcon({ icon: Icon, href, label }) {
  const isPlaceholder = href === "#";

  if (isPlaceholder) {
    return (
      <motion.span
        whileHover={{
          y: -4,
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        title={label}
        aria-label={label}
        className="
          relative
          flex
          h-10
          w-10
          cursor-pointer
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-gray-300
          bg-white
          text-gray-700
          transition-all
          duration-300

          hover:border-green-500
          hover:text-green-600
          hover:shadow-md
          hover:shadow-green-900/10

          dark:border-white/10
          dark:bg-white/5
          dark:text-green-100/60
          dark:hover:border-green-400/40
          dark:hover:text-green-400
        "
      >
        <span
          className="
            absolute
            inset-0
            bg-green-50
            opacity-0
            transition-opacity
            duration-300

            hover:opacity-100

            dark:bg-green-500/10
          "
        />

        <Icon size={17} className="relative z-10" />
      </motion.span>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-gray-300
        bg-white
        text-gray-700
        transition-all
        duration-300

        hover:border-green-500
        hover:text-green-600
        hover:shadow-md
        hover:shadow-green-900/10

        dark:border-white/10
        dark:bg-white/5
        dark:text-green-100/60
        dark:hover:border-green-400/40
        dark:hover:text-green-400
      "
    >
      <span
        className="
          absolute
          inset-0
          bg-green-50
          opacity-0
          transition-opacity
          duration-300

          group-hover:opacity-100

          dark:bg-green-500/10
        "
      />

      <Icon size={17} className="relative z-10" />
    </motion.a>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{
        x: 4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="group flex gap-3"
    >
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-green-100
          text-green-700
          transition-all
          duration-300

          group-hover:bg-green-200

          dark:bg-green-900/30
          dark:text-green-400
          dark:group-hover:bg-green-900/50
        "
      >
        <Icon size={16} />
      </motion.div>

      <div className="min-w-0">
        <p
          className="
            text-xs
            font-medium
            text-gray-500
            transition-colors
            duration-300

            group-hover:text-green-700

            dark:text-green-100/40
            dark:group-hover:text-green-300
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            max-w-xs
            text-sm
            leading-5
            text-gray-700

            dark:text-green-100/60
          "
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MINI HIGHLIGHT
========================================================= */

function MiniHighlight({ icon: Icon, title, text, delay }) {
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        px-4
        py-4
        shadow-sm
        transition-all
        duration-300

        hover:border-green-500/30
        hover:shadow-lg
        hover:shadow-green-900/5

        dark:border-white/5
        dark:bg-white/[0.02]
        dark:hover:border-green-500/20
        dark:hover:bg-white/[0.04]
        dark:hover:shadow-none
      "
    >
      {/* Hover Glow */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileHover={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-20
          w-20
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-green-500/10
          blur-2xl
          dark:bg-green-400/5
        "
      />

      <div className="relative z-10 flex items-center gap-3">
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 5,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-green-100
            text-green-700
            transition-colors
            duration-300

            group-hover:bg-green-200

            dark:bg-green-500/10
            dark:text-green-400
            dark:group-hover:bg-green-500/20
          "
        >
          <Icon size={16} />
        </motion.div>

        <div className="min-w-0">
          <p
            className="
              text-sm
              font-bold
              text-gray-900
              transition-colors
              duration-300

              group-hover:text-green-700

              dark:text-white
              dark:group-hover:text-green-300
            "
          >
            {title}
          </p>

          <p
            className="
              mt-0.5
              text-xs
              text-gray-500

              dark:text-green-100/40
            "
          >
            {text}
          </p>
        </div>
      </div>

      {/* Bottom Accent */}
      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          origin-left
          bg-gradient-to-r
          from-emerald-400
          via-green-500
          to-lime-400
        "
      />
    </motion.div>
  );
}
