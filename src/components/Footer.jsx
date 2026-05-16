export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading font-bold text-lg text-gradient">&lt;Dev/&gt;</span>
        <p className="text-slate-600 text-sm text-center">
          © {new Date().getFullYear()} — Feito com React + Vite. Explorar o cosmos, um commit de cada vez.
        </p>
        <a
          href="#hero"
          className="text-slate-600 hover:text-purple-400 transition-colors duration-200 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
          aria-label="Voltar ao topo"
        >
          ↑ Topo
        </a>
      </div>
    </footer>
  )
}
