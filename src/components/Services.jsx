import { Waterfall, Paintbrush2, ShieldCheck, Home, Droplets, Brush } from 'lucide-react'

const services = [
  {
    icon: Waterfall,
    title: 'High-pressure driveway cleaning',
    desc: 'Remove stains, mould, oil, and grime from concrete and exposed aggregate for a like-new finish.'
  },
  {
    icon: ShieldCheck,
    title: 'Professional concrete sealing (clear & coloured)',
    desc: 'Long-lasting protection from weather and wear. Enhance colour and prevent staining.'
  },
  {
    icon: Paintbrush2,
    title: 'Concrete painting & surface restoration',
    desc: 'Revive tired concrete with durable coatings designed for driveways, paths, and patios.'
  },
  {
    icon: Droplets,
    title: 'Paver washing and re-sanding',
    desc: 'Deep clean pavers and re-sand joints to stabilise and refresh your outdoor spaces.'
  },
  {
    icon: Home,
    title: 'Full exterior home washes',
    desc: 'Gentle but effective soft-washing for walls, eaves, and facades.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">What we specialise in</h2>
        <p className="text-slate-600 text-center mt-2">Competitive pricing, fast turnaround, spotless results</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition bg-white">
              <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-700 grid place-items-center mb-4">
                <s.icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
