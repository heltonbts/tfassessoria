import { whatsappLink } from '../config.js'
import { IconWhatsApp } from './icons.jsx'

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <IconWhatsApp />
    </a>
  )
}
