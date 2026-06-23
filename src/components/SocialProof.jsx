import { useEffect } from 'react'
import { SOCIAL_POSTS } from '../data.js'
import { BUSINESS } from '../config.js'
import { IconArrow } from './icons.jsx'
import Reveal from './Reveal.jsx'

const EMBED_SRC = 'https://www.instagram.com/embed.js'

function processEmbeds() {
  if (window.instgrm?.Embeds) {
    window.instgrm.Embeds.process()
  }
}

export default function SocialProof() {
  useEffect(() => {
    const existing = document.querySelector(`script[src="${EMBED_SRC}"]`)
    if (existing) {
      processEmbeds()
      return
    }
    const script = document.createElement('script')
    script.src = EMBED_SRC
    script.async = true
    script.onload = processEmbeds
    document.body.appendChild(script)
  }, [])

  return (
    <section className="section" id="prova-social">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Prova social</span>
          <h2 className="h-sec">
            Quem confia na TF <span className="gold-text">recomenda</span>
          </h2>
          <p className="lead">
            Histórias reais de clientes que realizaram seus objetivos com a
            gente. Acompanhe tudo no nosso Instagram.
          </p>
        </Reveal>

        <div className="ig-grid">
          {SOCIAL_POSTS.map((url) => (
            <blockquote
              key={url}
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                Ver publicação no Instagram
              </a>
            </blockquote>
          ))}
        </div>

        <div className="ig-cta">
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Seguir no Instagram <IconArrow />
          </a>
        </div>
      </div>
    </section>
  )
}
