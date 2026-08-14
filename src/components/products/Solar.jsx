import { Sun, PenTool, Wrench, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Solar() {
  const services = [
    {
      title: "Design",
      desc: "Customized solar plant design for maximum efficiency and long-term performance.",
      icon: PenTool,
    },
    {
      title: "Engineering",
      desc: "Complete engineering solutions with quality equipment and optimized system planning.",
      icon: Wrench,
    },
    {
      title: "Installation",
      desc: "Professional installation, testing and commissioning of rooftop & ground-mounted solar plants.",
      icon: Sun,
    },
    {
      title: "Turnkey EPC",
      desc: "Complete EPC solutions from planning, procurement and execution to project handover.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/50 to-white pt-12 pb-20 dark:from-[#04140c] dark:via-[#082116] dark:to-[#04140c]">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <Sun size={18} />
            Solar Solutions
          </div>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Smart &
            <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              {" "}
              Sustainable{" "}
            </span>
            Solar Power
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            WRELKIN INDIA PRIVATE LIMITED provides complete Solar EPC solutions
            including design, engineering, procurement, installation and
            commissioning of rooftop and ground-mounted solar power plants for
            industrial, commercial and institutional applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-emerald-100 bg-white/80 p-7 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-[#0b1d14]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg transition group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-600 to-green-700 p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold">Ready to Go Solar?</h3>

          <p className="mx-auto mt-4 max-w-2xl text-emerald-100">
            Reduce electricity costs with reliable, efficient and sustainable
            Solar EPC solutions from WRELKIN INDIA PRIVATE LIMITED.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-emerald-700 transition hover:scale-105"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
