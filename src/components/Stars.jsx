import { useEffect, useRef } from 'react'

export default function Stars() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      opacity: Math.random(),
      speed: Math.random() * 0.008 + 0.003,
      phase: Math.random() * Math.PI * 2,
    }))

    const meteors = []
    const spawnMeteor = () => {
      meteors.push({
        x: Math.random() * canvas.width + 200,
        y: Math.random() * canvas.height * 0.5,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 6 + 4,
        opacity: 1,
      })
    }
    const meteorInterval = setInterval(spawnMeteor, 3500)

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.01

      stars.forEach((s) => {
        const pulse = Math.sin(t * s.speed * 10 + s.phase) * 0.4 + 0.6
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(226, 232, 240, ${pulse * s.opacity})`
        ctx.fill()
      })

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]
        const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.len, m.y + m.len)
        grad.addColorStop(0, `rgba(168, 85, 247, ${m.opacity})`)
        grad.addColorStop(1, 'rgba(168, 85, 247, 0)')
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(m.x - m.len, m.y + m.len)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()
        m.x -= m.speed
        m.y += m.speed
        m.opacity -= 0.012
        if (m.opacity <= 0) meteors.splice(i, 1)
      }

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      clearInterval(meteorInterval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
