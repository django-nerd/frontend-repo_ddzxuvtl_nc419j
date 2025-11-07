import { ShieldCheck, ThumbsUp, Star, Zap, ChevronRight } from "lucide-react";

const categories = [
  { name: "Cricket Bats", href: "#bats", img: "https://images.unsplash.com/photo-1575218823252-1f8a44514e22?q=80&w=1887&auto=format&fit=crop" },
  { name: "Hard & Tape Balls", href: "#tape", img: "https://images.unsplash.com/photo-1521417531772-c61c0fdc22d9?q=80&w=1887&auto=format&fit=crop" },
  { name: "Gloves & Pads", href: "#shop", img: "https://images.unsplash.com/photo-1560273672-34a066976019?q=80&w=1887&auto=format&fit=crop" },
  { name: "Helmets & Grips", href: "#shop", img: "https://images.unsplash.com/photo-1609587319894-9ee36c0c48b7?q=80&w=1974&auto=format&fit=crop" },
  { name: "Shoes", href: "#fast", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1887&auto=format&fit=crop" },
  { name: "Kits & Bags", href: "#kits", img: "https://images.unsplash.com/photo-1549045337-967927d923c6?q=80&w=1887&auto=format&fit=crop" },
];

export default function TrustAndCategories() {
  return (
    <section id="shop" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <a key={c.name} href={c.href} className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
              <img src={c.img} alt={c.name} className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">{c.name}</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-gray-100 p-4 flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-emerald-600" />
            <div>
              <div className="font-semibold">Secure Payments</div>
              <p className="text-sm text-gray-600">JazzCash, Easypaisa, and Bank Transfer supported.</p>
            </div>
          </div>
          <div className="rounded-xl border border-gray-100 p-4 flex items-center gap-3">
            <ThumbsUp className="h-6 w-6 text-emerald-600" />
            <div>
              <div className="font-semibold">Premium Quality</div>
              <p className="text-sm text-gray-600">English Willow, Kashmir Willow, and pro-grade accessories.</p>
            </div>
          </div>
          <div className="rounded-xl border border-gray-100 p-4 flex items-center gap-3">
            <Zap className="h-6 w-6 text-emerald-600" />
            <div>
              <div className="font-semibold">Fast Delivery</div>
              <p className="text-sm text-gray-600">Nationwide shipping across Pakistan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
