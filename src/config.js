// ============================================================
//  CONFIGURAÇÃO DO NEGÓCIO — edite aqui os dados de contato.
// ============================================================

// WhatsApp no formato internacional, somente números: 55 + DDD + número.
// Ex.: (11) 99999-9999  ->  "5511999999999"
export const WHATSAPP_NUMBER = '558893203059'

// Mensagem pré-preenchida ao abrir o WhatsApp.
export const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da TF Assessoria e gostaria de fazer uma simulação.'

export const BUSINESS = {
  name: 'TF Assessoria & Finanças',
  shortName: 'TF Assessoria',
  email: 'contato@tfassessoria.com.br', // TODO: trocar pelo e-mail real
  phoneLabel: '(88) 9320-3059',
  city: 'Brasil', // TODO: cidade/região de atuação
  instagram: 'https://www.instagram.com/tfassessoriaefinancas/',
}

// Monta o link do WhatsApp com mensagem opcional para um serviço específico.
export function whatsappLink(context) {
  const text = context
    ? `${WHATSAPP_MESSAGE} Tenho interesse em: ${context}.`
    : WHATSAPP_MESSAGE
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
