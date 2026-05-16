import { useState, useEffect } from 'react'

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050510]/80 backdrop-blur-md border-b border-purple-900/30 shadow-lg'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="font-heading font-bold text-xl text-gradient focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
        >
          &lt;Dev/&gt;
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded px-1"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/50 text-purple-300 text-sm font-medium hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 animate-pulse-glow"
        >
          Contratar
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-300 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050510]/95 backdrop-blur-md border-t border-purple-900/30 px-6 py-4">
          <ul className="flex flex-col gap-4" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-300 hover:text-purple-400 transition-colors py-1 text-base font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
