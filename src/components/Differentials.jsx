import { motion } from 'framer-motion'
import { DIFFERENTIALS, STATS } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Differentials() {
  return (
    <section className="section" id="diferenciais">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Por que a TF</span>
          <h2 className="h-sec">
            Mais que crédito: <span className="gold-text">confiança</span>
          </h2>
          <p className="lead">
            Somos correspondente bancário e trabalhamos com as principais
            instituições do país para entregar a melhor condição com total
            transparência.
          </p>
        </Reveal>

        <div className="diff-grid">
          {DIFFERENTIALS.map((d, i) => (
            <motion.div
              key={d.title}
              className="diff card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="ic">
                <d.Icon />
              </div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </motion.div>
          ))}
        </div>

        <Reveal className="stats" delay={0.1}>
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <small>{s.label}</small>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
