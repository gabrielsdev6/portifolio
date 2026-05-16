const projects = [
  {
    title: 'Sistema de Agendamento',
    description:
      'Aplicação fullstack com autenticação JWT, dois perfis de acesso (cliente e admin), CRUD de serviços e agendamentos com atualização em tempo real. Deploy em produção.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    github: 'https://github.com/gabrielsdev6/agendamento',
    live: 'https://agendamento-amber.vercel.app',
    color: 'from-purple-500/20 to-blue-500/20',
    border: 'border-purple-500/30',
  },
  {
    title: 'Doces da Ana',
    description:
      'Cardápio digital interativo para empresa de doces. Produtos organizados por categoria, carrinho de compras e integração com WhatsApp para envio de pedidos.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/gabrielsdev6/doces-da-ana',
    live: null,
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/30',
  },
  {
    title: 'Sorrir Odontologia',
    description:
      'Site institucional para clínica odontológica com apresentação de serviços, equipe de especialistas e informações de contato. Layout responsivo.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    github: 'https://github.com/gabrielsdev6/sorrir-odontologia',
    live: null,
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
  },
  {
    title: 'Portfólio Pessoal',
    description:
      'Site de portfólio com design espacial, animações customizadas, seção de projetos e formulário de contato. Layout totalmente responsivo.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'EmailJS'],
    github: 'https://github.com/gabrielsdev6/portfolio',
    live: 'https://gabrielsdev6.vercel.app',
    color: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-500/30',
  },
  {
    title: 'HemoAlerta',
    description:
      'App mobile para alertas de doação de sangue com cadastro de doadores, publicação de pedidos urgentes em tempo real e localização de hemocentros.',
    tags: ['React Native', 'Expo', 'Firebase', 'JavaScript'],
    github: 'https://github.com/gabrielsdev6/HemoAlerta',
    live: null,
    color: 'from-red-500/20 to-orange-500/20',
    border: 'border-red-500/30',
  },
]

function TagBadge({ tag }) {
  return (
    <span className="px-2.5 py-1 rounded-full bg-[#0a0a2e] border border-slate-700/50 text-slate-400 text-xs font-medium">
      {tag}
    </span>
  )
}

export default function Projects() {
  return (
    <section
      id="projetos"
      className="relative py-24 z-10"
      aria-label="Projetos"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Portfólio
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-100 mb-4">
            Projetos em destaque
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Projetos que desenvolvi do zero — cada um com seu próprio desafio e solução.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`relative rounded-2xl p-6 border ${p.border} bg-gradient-to-br ${p.color} backdrop-blur-sm overflow-hidden group hover:scale-[1.02] transition-transform duration-200 cursor-default`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <h3 className="font-heading font-bold text-xl text-slate-100 mb-2">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6" aria-label="Tecnologias usadas">
                  {p.tags.map((t) => (
                    <TagBadge key={t} tag={t} />
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-purple-400 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                    aria-label={`Código fonte de ${p.title} no GitHub`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Código
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
                      aria-label={`Demo ao vivo de ${p.title}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        className="absolute left-0 bottom-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
        aria-hidden="true"
      />
    </section>
  )
}
