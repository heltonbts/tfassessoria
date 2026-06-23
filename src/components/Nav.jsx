import { useEffect, useState } from 'react'
import { whatsappLink, BUSINESS } from '../config.js'
import { IconWhatsApp } from './icons.jsx'
import logo from '../assets/logo.png'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#topo" className="nav-brand" aria-label={BUSINESS.name}>
          <img src={logo} alt="TF Assessoria & Finanças" />
        </a>

        <div className="nav-links">
          <a href="#servicos">Serviços</a>
          <a href="#diferenciais">Por que a TF</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#faq">Dúvidas</a>
        </div>

        <div className="nav-cta">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <IconWhatsApp /> Fazer simulação
          </a>
        </div>
      </div>
    </nav>
  )
}
