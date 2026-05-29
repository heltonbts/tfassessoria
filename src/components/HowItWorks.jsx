import { motion } from 'framer-motion'
import { STEPS } from '../data.js'
import { whatsappLink } from '../config.js'
import { IconWhatsApp } from './icons.jsx'
import Reveal from './Reveal.jsx'

export default function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Como funciona</span>
          <h2 className="h-sec">
            Simples do <span className="gold-text">começo ao fim</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Em quatro passos você sai da dúvida para o dinheiro na conta — sem
            sair de casa.
          </p>
        </Reveal>

        <div className="steps">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className="step"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="ln" />
              <span className="num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <Reveal className="section-head center" delay={0.15}>
          <div style={{ marginTop: 50, textAlign: 'center' }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <IconWhatsApp /> Começar minha simulação
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
