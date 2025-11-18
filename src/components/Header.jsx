import { Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-blue-600 text-white grid place-items-center font-bold">S</div>
          <div>
            <p className="text-slate-900 font-semibold leading-tight">SealWorks</p>
            <p className="text-xs text-slate-500 -mt-0.5">Pressure Washing & Sealing</p>
          </div>
        </div>
        <a href="#quote" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
          <Phone size={18} />
          Get a fast quote
        </a>
      </div>
    </header>
  )
}
