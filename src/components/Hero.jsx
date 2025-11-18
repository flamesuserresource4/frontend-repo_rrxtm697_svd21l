export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#e0f2fe_0%,#f8fafc_50%,#e0f2fe_100%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-4 shadow-sm">
            Melbourne • Rural surrounds
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Pressure Washing & Concrete Sealing Specialists
          </h1>
          <p className="mt-5 text-lg text-slate-700 leading-relaxed">
            Looking for spotless driveways, patios, and paths? We deliver professional exterior cleaning and surface protection for homes and commercial properties across Melbourne and nearby rural areas.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#quote" className="inline-flex justify-center items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-semibold shadow">
              Get a fast quote
            </a>
            <a href="#services" className="inline-flex justify-center items-center px-6 py-3 bg-white hover:bg-slate-50 rounded-md font-semibold border border-slate-200 text-slate-700">
              See services
            </a>
          </div>
          <div className="mt-6 text-slate-600 text-sm">
            ✅ High-pressure cleaning • ✅ Clear & coloured sealing • ✅ Paver washing & re-sanding
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl border border-slate-200 bg-white shadow overflow-hidden">
            <img src="https://images.unsplash.com/photo-1594611372993-761f31b97dae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcmVzc3VyZSUyMHdhc2hpbmclMjBkcml2ZXdheXxlbnwwfDB8fHwxNzYzNDMxMzgyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Pressure washing driveway" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-100 rounded-3xl blur-2xl opacity-60" />
        </div>
      </div>
    </section>
  )
}
