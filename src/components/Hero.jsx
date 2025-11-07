import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-700 to-emerald-900">
      <img
        src="https://images.unsplash.com/photo-1559743536-5b5b9dace082?q=80&w=1974&auto=format&fit=crop"
        alt="Cricket stadium"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
        >
          Pakistan’s #1 Cricket Gear Store
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/90"
        >
          Premium bats, pro gloves, fast-bowling shoes, and tape-ball essentials — trusted by young talent and club pros.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#bats" className="rounded-full bg-white text-emerald-700 px-5 py-2.5 font-semibold shadow hover:shadow-lg transition">Shop Bats</a>
          <a href="#kits" className="rounded-full bg-emerald-500/20 backdrop-blur px-5 py-2.5 font-semibold border border-white/30 hover:bg-emerald-500/30 transition">Shop Kits</a>
          <a href="#tape" className="rounded-full bg-emerald-600 px-5 py-2.5 font-semibold hover:bg-emerald-500 transition">Shop Tape-Ball Gear</a>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs text-white/80">
          {[
            "Bats",
            "Balls",
            "Gloves",
            "Pads",
            "Shoes",
            "Accessories",
          ].map((item) => (
            <div key={item} className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-center hover:bg-white/10 transition">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </section>
  );
}
