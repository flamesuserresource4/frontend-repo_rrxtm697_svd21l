import { useState } from 'react'

const serviceOptions = [
  'High-pressure driveway cleaning',
  'Concrete sealing - clear',
  'Concrete sealing - coloured',
  'Concrete painting & restoration',
  'Paver washing & re-sanding',
  'Full exterior home wash',
  'Other',
]

export default function QuoteForm() {
  const [status, setStatus] = useState({ state: 'idle' })
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    service_type: '',
    message: '',
    property_type: '',
    preferred_date: '',
  })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading' })
    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          // Convert blank fields to undefined to satisfy validation
          phone: form.phone || undefined,
          email: form.email || undefined,
          suburb: form.suburb || undefined,
          message: form.message || undefined,
          property_type: form.property_type || undefined,
          preferred_date: form.preferred_date || undefined,
          source: 'google-landing',
        }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ state: 'success' })
      setForm({
        name: '', phone: '', email: '', suburb: '', service_type: '', message: '', property_type: '', preferred_date: ''
      })
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="quote" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Get a fast, no-obligation quote</h2>
          <p className="text-slate-600 mt-2">Tell us a bit about your job and we'll get back to you quickly.</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Honest pricing with no surprises</li>
            <li>• Flexible scheduling, including weekends</li>
            <li>• Fully insured and highly rated</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 shadow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name*</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Suburb</label>
              <input name="suburb" value={form.suburb} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Service*</label>
              <select name="service_type" value={form.service_type} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                <option value="" disabled>Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Tell us about the area, stains, size, etc." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Property type</label>
              <select name="property_type" value={form.property_type} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                <option value="">Select</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Rural</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Preferred date</label>
              <input name="preferred_date" value={form.preferred_date} onChange={handleChange} placeholder="e.g. Next Saturday" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
            </div>
          </div>

          <button type="submit" className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md">
            {status.state === 'loading' ? 'Sending…' : 'Request your quote'}
          </button>

          {status.state === 'success' && (
            <p className="mt-3 text-green-700 text-sm">Thanks! Weve received your request and will be in touch shortly.</p>
          )}
          {status.state === 'error' && (
            <p className="mt-3 text-red-600 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
