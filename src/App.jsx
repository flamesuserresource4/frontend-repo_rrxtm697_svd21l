import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import QuoteForm from './components/QuoteForm'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <QuoteForm />
      <CTA />
      <footer className="py-8 border-t border-slate-200 text-center text-slate-600 text-sm">
        © {new Date().getFullYear()} SealWorks • Melbourne & Surrounds
      </footer>
    </div>
  )
}

export default App
