import { motion } from 'framer-motion'
import { whatsappLink } from '../config.js'
import { IconWhatsApp, IconCheck, IconShieldCheck, IconHeart } from './icons.jsx'
import consultor from '../assets/consultor.jpg'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <header className="hero" id="topo">
      <div className="container">
        <div className="hero-grid">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div className="hero-badge" variants={item}>
              <span className="dot" /> Assessoria de crédito e seguros
            </motion.div>

            <motion.h1 variants={item}>
              O <span className="ital gold-text">crédito certo</span> para
              realizar o que você precisa.
            </motion.h1>

            <motion.p className="lead" variants={item}>
              Empréstimo consignado INSS, garantia de veículo, financiamentos e
              seguro veicular — com as melhores taxas do mercado e um consultor
              de verdade do seu lado, do início ao fim.
            </motion.p>

            <motion.div className="hero-actions" variants={item}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <IconWhatsApp /> Simular agora no WhatsApp
              </a>
              <a href="#servicos" className="btn btn-ghost">
                Ver serviços
              </a>
            </motion.div>

            <motion.div className="hero-trust" variants={item}>
              <div className="ht">
                <span><IconCheck /></span> Sem taxa antecipada
              </div>
              <div className="ht">
                <span><IconCheck /></span> Simulação gratuita
              </div>
              <div className="ht">
                <span><IconShieldCheck /></span> Correspondente bancário
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-photo">
              <span className="ring" />
              <span className="ring r2" />
              <div className="photo-frame">
                <img
                  src={consultor}
                  alt="Consultor da TF Assessoria & Finanças atendendo no escritório"
                />
              </div>

              <motion.div
                className="photo-badge bl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <span className="pic-ic"><IconHeart /></span>
                <div>
                  <b>Atendimento humanizado</b>
                  <small>Um consultor dedicado a você</small>
                </div>
              </motion.div>

              <motion.div
                className="photo-badge tr"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
              >
                <span className="stars">★★★★★</span>
                <b className="gold-text">5,0</b>
                <small>avaliação no Google</small>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
