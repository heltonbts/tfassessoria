import { motion } from 'framer-motion'
import { SERVICES } from '../data.js'
import { whatsappLink } from '../config.js'
import { IconCheck, IconArrow } from './icons.jsx'
import Reveal from './Reveal.jsx'

export default function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Nossas soluções</span>
          <h2 className="h-sec">
            Soluções financeiras exclusivas <span className="gold-text">para você</span>
          </h2>
          <p className="lead">
            Quatro caminhos para você conquistar mais, com segurança e as
            melhores condições. Escolha o seu e fale com um consultor.
          </p>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.id}
              id={s.id}
              className="service card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service-icon">
                <s.Icon />
              </div>
              <span className="tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.bullets.map((b) => (
                  <li key={b}>
                    <span><IconCheck /></span> {b}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(s.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="service-link"
              >
                Solicitar simulação <IconArrow />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
