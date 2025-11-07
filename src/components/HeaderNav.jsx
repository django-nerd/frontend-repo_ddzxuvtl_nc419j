import { ShoppingCart, MessageCircle, Facebook, Instagram, Shield, Truck, Award } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=200&auto=format&fit=crop"
              alt="Cricket Logo"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-xl font-extrabold tracking-tight text-emerald-700">CrickPro PK</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#shop" className="hover:text-emerald-700 transition-colors">Shop</a>
            <a href="#bats" className="hover:text-emerald-700 transition-colors">Bats</a>
            <a href="#tape" className="hover:text-emerald-700 transition-colors">Tape-Ball</a>
            <a href="#fast" className="hover:text-emerald-700 transition-colors">Fast Bowler Gear</a>
            <a href="#blog" className="hover:text-emerald-700 transition-colors">Blog</a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600 px-3 py-1.5 text-emerald-700 hover:bg-emerald-50 transition"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button className="relative inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-emerald-600 text-white rounded-full h-4 w-4 grid place-content-center">2</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-gray-500">
              <a href="#" aria-label="Facebook" className="hover:text-emerald-700"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-emerald-700"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-gray-100 text-xs py-2">
          <div className="flex items-center gap-2 justify-center text-gray-700">
            <Truck className="h-4 w-4 text-emerald-600" />
            Nationwide delivery
          </div>
          <div className="flex items-center gap-2 justify-center text-gray-700">
            <Shield className="h-4 w-4 text-emerald-600" />
            Secure payments (JazzCash / Easypaisa / Bank)
          </div>
          <div className="hidden sm:flex items-center gap-2 justify-center text-gray-700">
            <Award className="h-4 w-4 text-emerald-600" />
            Trusted by 10,000+ players
          </div>
        </div>
      </div>
    </header>
  );
}
