const skills = [
  { name: 'React', icon: '⚛', color: 'text-cyan-400' },
  { name: 'Node.js', icon: '⬡', color: 'text-green-400' },
  { name: 'Express', icon: '{}', color: 'text-slate-300' },
  { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-300' },
  { name: 'MySQL', icon: '🗄', color: 'text-orange-300' },
  { name: 'Prisma', icon: '◈', color: 'text-indigo-400' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'text-sky-400' },
  { name: 'Git', icon: '⎇', color: 'text-orange-400' },
]

const stats = [
  { value: '5º', label: 'Período de CC' },
  { value: '2', label: 'Projetos no portfólio' },
  { value: 'Franca', label: 'SP — Buscando estágio' },
]

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 z-10"
      aria-label="Sobre mim"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Sobre mim
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-100">
            Quem sou eu
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
              Sou Gabriel Pereira, estudante de Ciência da Computação em Franca-SP,
              apaixonado por desenvolvimento web. Construo aplicações fullstack
              completas — do banco de dados à interface — com foco em boas práticas
              e código organizado.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Estou em busca do meu primeiro estágio na área de desenvolvimento,
              onde possa continuar aprendendo e contribuir com projetos reais.
              Acredito que a melhor forma de aprender é construindo.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card-space rounded-xl p-4 text-center">
                  <div className="font-heading font-bold text-2xl text-gradient mb-1">
                    {s.value}
                  </div>
                  <div className="text-slate-500 text-xs leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg text-slate-200 mb-6">
              Tecnologias que uso
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="card-space rounded-xl px-4 py-3 flex items-center gap-3 hover:border-purple-500/40 transition-all duration-200 group"
                >
                  <span
                    className={`text-xl ${skill.color} group-hover:scale-110 transition-transform duration-200`}
                    aria-hidden="true"
                  >
                    {skill.icon}
                  </span>
                  <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        aria-hidden="true"
      />
    </section>
  )
}
