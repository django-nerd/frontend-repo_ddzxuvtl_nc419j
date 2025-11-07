import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import SpecialSections from "./components/SpecialSections";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderNav />
      <main>
        <Hero />
        <FeaturedProducts />
        <SpecialSections />
        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-extrabold">We’re here to help</h3>
                <p className="mt-2 text-gray-600">Questions about sizes, willow grades, or delivery? Message us on WhatsApp or send an email.</p>
                <div className="mt-4 flex gap-3">
                  <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="rounded-full bg-emerald-600 text-white px-5 py-2 font-semibold hover:bg-emerald-500">WhatsApp Us</a>
                  <a href="mailto:hello@crickpro.pk" className="rounded-full bg-white border border-gray-200 px-5 py-2 font-semibold hover:bg-gray-50">Email</a>
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-gray-100 p-6">
                <form className="grid grid-cols-1 gap-4">
                  <input type="text" placeholder="Full name" className="rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" />
                  <input type="email" placeholder="Email address" className="rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" />
                  <input type="tel" placeholder="Phone (optional)" className="rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" />
                  <textarea rows="4" placeholder="Your message" className="rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" />
                  <button type="button" className="rounded-lg bg-emerald-600 text-white px-5 py-2 font-semibold hover:bg-emerald-500">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} CrickPro PK — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#blog" className="hover:text-emerald-700">Blog</a>
            <a href="#shop" className="hover:text-emerald-700">Shop</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
            <a href="#" className="hover:text-emerald-700">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
