import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Pro English Willow Bat - Grade 1",
    price: 54999,
    rating: 4.8,
    badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1615541003777-6f3b1e918372?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Tape-Ball Power Bat",
    price: 4999,
    rating: 4.6,
    badge: "Hot",
    img: "https://images.unsplash.com/photo-1562802378-066fe5ac2f6d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Fast Bowler Spikes",
    price: 12999,
    rating: 4.7,
    badge: "Pro",
    img: "https://images.unsplash.com/photo-1517646287270-03a5d1dcf5b9?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Batting Gloves - Elite",
    price: 5999,
    rating: 4.5,
    badge: "New",
    img: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1974&auto=format&fit=crop",
  },
];

function formatPKR(n) {
  return `PKR ${n.toLocaleString()}`;
}

export default function FeaturedProducts() {
  return (
    <section id="bats" className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Best-selling cricket bats & gear</h2>
            <p className="text-gray-600 mt-1">Seasonal discounts live now. Limited stock for Grade 1 English Willow.</p>
          </div>
          <a href="#shop" className="text-emerald-700 font-semibold hover:underline">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 rounded-full bg-emerald-600 text-white text-xs px-2 py-1">{p.badge}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 line-clamp-2">{p.name}</h3>
                <div className="mt-2 flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? "fill-amber-400" : ""}`} />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">{p.rating}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{formatPKR(p.price)}</span>
                  <button className="rounded-full bg-emerald-600 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-500">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
