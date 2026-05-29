import { whatsappLink, BUSINESS } from '../config.js'
import { IconWhatsApp, IconArrow } from './icons.jsx'
import Reveal from './Reveal.jsx'

export default function CtaBand() {
  return (
    <section className="section" id="contato">
      <div className="container">
        <Reveal className="cta-band">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Vamos começar
          </span>
          <h2>
            Pronto para conquistar o seu <span className="gold-text">crédito</span>?
          </h2>
          <p>
            Faça uma simulação gratuita agora mesmo. Um consultor da{' '}
            {BUSINESS.shortName} vai analisar o seu perfil e encontrar a melhor
            condição para você.
          </p>
          <div className="cta-actions">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <IconWhatsApp /> Falar no WhatsApp
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="btn btn-ghost">
              Enviar e-mail <IconArrow />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
