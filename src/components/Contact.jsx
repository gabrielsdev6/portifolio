import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// Preencha com suas credenciais do EmailJS (veja instruções abaixo)
const EMAILJS_SERVICE_ID  = 'SEU_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'SUA_PUBLIC_KEY'

const contactLinks = [
  {
    label: 'Email',
    value: 'gabrielpereirasimoes829@gmail.com',
    href: 'mailto:gabrielpereirasimoes829@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/gabrielsdev6',
    href: 'https://github.com/gabrielsdev6',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gabrielpereiraj',
    href: 'https://linkedin.com/in/gabrielpereiraj',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 6000)
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contato"
      className="relative py-24 z-10"
      aria-label="Contato"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Contato
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-100 mb-4">
            Vamos trabalhar juntos
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Tem um projeto em mente ou quer bater um papo? Me manda uma mensagem!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact links */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-slate-200 mb-6">
              Onde me encontrar
            </h3>
            <div className="flex flex-col gap-4">
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-space flex items-center gap-4 rounded-xl px-5 py-4 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                >
                  <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                    {c.icon}
                  </span>
                  <div>
                    <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                      {c.label}
                    </div>
                    <div className="text-slate-200 text-sm font-medium">{c.value}</div>
                  </div>
                  <svg
                    className="w-4 h-4 text-slate-600 group-hover:text-purple-400 ml-auto transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Formulário de contato">
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-slate-400 text-sm font-medium mb-2">
                    Seu nome <span className="text-purple-400" aria-hidden="true">*</span>
                    <span className="sr-only">(obrigatório)</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="João Silva"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a2e] border border-slate-700/50 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/30 transition-colors"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-400 text-sm font-medium mb-2">
                    E-mail <span className="text-purple-400" aria-hidden="true">*</span>
                    <span className="sr-only">(obrigatório)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="joao@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a2e] border border-slate-700/50 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/30 transition-colors"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-400 text-sm font-medium mb-2">
                    Mensagem <span className="text-purple-400" aria-hidden="true">*</span>
                    <span className="sr-only">(obrigatório)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Olá, tenho um projeto interessante..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a2e] border border-slate-700/50 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 glow-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050510] flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Enviar mensagem'
                  )}
                </button>

                {status === 'success' && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mensagem enviada com sucesso! Responderei em breve.
                  </div>
                )}
                {status === 'error' && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Falha ao enviar. Tente novamente ou me contate diretamente.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Nebula decoration */}
      <div
        className="absolute right-1/4 top-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
        aria-hidden="true"
      />
    </section>
  )
}
