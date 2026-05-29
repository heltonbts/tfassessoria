import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FAQ } from '../data.js'
import { whatsappLink } from '../config.js'
import { IconPlus, IconWhatsApp } from './icons.jsx'
import Reveal from './Reveal.jsx'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq-wrap">
          <Reveal>
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2 className="h-sec">
              Perguntas <span className="gold-text">comuns</span>
            </h2>
            <p className="lead">
              Não encontrou o que procurava? Fale com a gente no WhatsApp — a
              resposta é rápida e sem compromisso.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ marginTop: 24 }}
            >
              <IconWhatsApp /> Tirar uma dúvida
            </a>
          </Reveal>

          <Reveal className="faq-list" delay={0.1}>
            {FAQ.map((f, i) => {
              const isOpen = open === i
              return (
                <div
                  key={f.q}
                  className={`faq-item card ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <div className="faq-q">
                    {f.q}
                    <span className="pm"><IconPlus /></span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="faq-a-inner">{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
