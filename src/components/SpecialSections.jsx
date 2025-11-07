export default function SpecialSections() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="fast" className="rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-50 to-white border border-emerald-100">
          <div className="grid md:grid-cols-2">
            <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1974&auto=format&fit=crop" alt="Fast bowler gear" className="h-64 md:h-full w-full object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-extrabold text-emerald-800">Fast Bowler Gear</h3>
              <p className="mt-2 text-gray-700">Find spikes, ankle support, compression wear, and light-weight pads engineered for pace.</p>
              <div className="mt-4 flex gap-3">
                <a href="#shop" className="rounded-full bg-emerald-600 text-white px-5 py-2 font-semibold hover:bg-emerald-500">Shop Spikes</a>
                <a href="#shop" className="rounded-full bg-emerald-100 text-emerald-800 px-5 py-2 font-semibold hover:bg-emerald-200">Shop Protection</a>
              </div>
            </div>
          </div>
        </div>

        <div id="tape" className="mt-10 rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-extrabold">Tape-Ball Cricket Essentials</h3>
              <p className="mt-2 text-white/90">Power bats, lightweight shoes, and durable tape-balls designed for street and night cricket.</p>
              <div className="mt-4 flex gap-3">
                <a href="#shop" className="rounded-full bg-white text-emerald-800 px-5 py-2 font-semibold">Explore Tape-Ball</a>
                <a href="#shop" className="rounded-full border border-white/40 px-5 py-2 font-semibold hover:bg-white/10">Top Picks</a>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1721307189006-728191960225?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYXBlJTIwYmFsbHxlbnwwfDB8fHwxNzYyNTA5NTk4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Tape ball" className="h-64 md:h-full w-full object-cover" />
          </div>
        </div>

        <div id="kits" className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-gray-100 p-8 bg-gray-50">
            <h3 className="text-2xl font-extrabold text-gray-900">Coming Soon: Custom-Built Bats</h3>
            <p className="mt-2 text-gray-700">Choose your willow, weight, profile, and handle. Hand-crafted for your playing style. Join the waitlist for early access and launch discounts.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="Enter your email" className="w-full rounded-full border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" />
              <button className="rounded-full bg-emerald-600 text-white px-5 py-2 font-semibold hover:bg-emerald-500">Notify me</button>
            </form>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100">
            <img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1887&auto=format&fit=crop" alt="Kits & bags" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-bold">Kits & Bags</h4>
              <p className="text-gray-600 mt-1">Pro kits, backpacks, and wheelie bags for match day.</p>
              <a href="#shop" className="inline-block mt-3 text-emerald-700 font-semibold hover:underline">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
