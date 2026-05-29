// Ícones de linha desenhados à mão (stroke = currentColor, herdam a cor do contexto).

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// Empréstimo Consignado INSS — carteira com cédula/benefício
export function IconConsignado(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8.5C3 7.4 3.9 6.5 5 6.5h12.5c.83 0 1.5.67 1.5 1.5" />
      <path d="M3 8.5v8c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-1.2" />
      <path d="M21 11.3h-3.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H21c.55 0 1-.45 1-1v-1.6c0-.55-.45-1-1-1Z" />
      <circle cx="17.6" cy="13.1" r="0.6" fill="currentColor" stroke="none" />
      <path d="M6 6.5 14 3.2c.7-.29 1.5.05 1.78.75L16.4 5.6" />
    </svg>
  )
}

// Empréstimo com Garantia de Veículo — carro + chave
export function IconVeiculo(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 14.5h13.5" />
      <path d="M4.5 14.5 6 9.6C6.3 8.6 7.2 8 8.2 8h4.6c.9 0 1.7.5 2.1 1.3l1.6 3" />
      <path d="M3 14.5v3.2c0 .5.4.9.9.9H5c.5 0 .9-.4.9-.9v-1.1" />
      <path d="M13.5 18.6h1.1c.5 0 .9-.4.9-.9V14.5" />
      <circle cx="6.6" cy="14.5" r="1.3" />
      <circle cx="13.2" cy="14.5" r="1.3" />
      <circle cx="18.8" cy="10.4" r="2.2" />
      <path d="M20.4 12 22.6 14.2M21.4 13l-.9.9M20.4 14l-.9.9" />
    </svg>
  )
}

// Financiamentos — crescimento / parcelas
export function IconFinanciamento(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20h16" />
      <rect x="5" y="13" width="3.2" height="6" rx="0.8" />
      <rect x="10.4" y="9" width="3.2" height="10" rx="0.8" />
      <rect x="15.8" y="5" width="3.2" height="14" rx="0.8" />
      <path d="M5 8.5 9.5 6l3 2L19 3.2" />
      <path d="M19 3.2h-2.6M19 3.2v2.6" />
    </svg>
  )
}

// Seguro Veicular — escudo com carro
export function IconSeguro(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 5.3v5.1c0 4.3 2.9 7.6 7 9.6 4.1-2 7-5.3 7-9.6V5.3L12 3Z" />
      <path d="M8.4 13.2h7.2" />
      <path d="M9.2 13.2 9.9 11c.16-.5.6-.8 1.1-.8h2c.5 0 .94.3 1.1.8l.7 2.2" />
      <circle cx="9.6" cy="13.2" r="0.75" />
      <circle cx="14.4" cy="13.2" r="0.75" />
    </svg>
  )
}

export function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.38-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  )
}

export function IconArrow(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <path d="M4 12.5 9 17.5 20 6.5" />
    </svg>
  )
}

export function IconPlus(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

// Diferenciais
export function IconBolt(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  )
}

export function IconShieldCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 5.3v5.4c0 4.2 2.9 7.5 7 9.3 4.1-1.8 7-5.1 7-9.3V5.3L12 3Z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  )
}

export function IconHeart(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.5C7 17 3.5 13.8 3.5 9.8 3.5 7.2 5.5 5.2 8 5.2c1.6 0 3 .9 3.7 2.2h.6C13 6.1 14.4 5.2 16 5.2c2.5 0 4.5 2 4.5 4.6 0 4-3.5 7.2-8.5 10.7Z" />
    </svg>
  )
}

export function IconPercent(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19 19 5" />
      <circle cx="7.5" cy="7.5" r="2.4" />
      <circle cx="16.5" cy="16.5" r="2.4" />
    </svg>
  )
}
