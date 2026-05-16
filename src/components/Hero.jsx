export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center nebula-bg z-10"
      aria-label="Apresentação"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" aria-hidden="true" />
          Disponível para estágio em Franca-SP
        </div>

        <h1 className="font-heading font-bold text-5xl md:text-7xl text-slate-100 mb-4 animate-slide-up leading-tight">
          Olá, eu sou<br />
          <span className="text-gradient">Gabriel Pereira</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 mb-6 animate-slide-up font-medium">
          Desenvolvedor{' '}
          <span className="text-purple-400 font-semibold">Full Stack</span>
        </p>

        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
          Estudante de Ciência da Computação em Franca-SP. Construo aplicações
          web completas — do banco de dados à interface — com foco em código
          limpo e boas práticas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <a
            href="#projetos"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-base hover:from-purple-500 hover:to-blue-500 transition-all duration-200 glow-purple hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050510]"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold text-base hover:border-purple-500/60 hover:text-purple-300 hover:bg-purple-500/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050510]"
          >
            Entrar em Contato
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-12 animate-fade-in">
          <a
            href="https://github.com/gabrielsdev6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-purple-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/gabrielpereiraj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-purple-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" aria-hidden="true">
          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
