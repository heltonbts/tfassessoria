import {
  IconConsignado,
  IconVeiculo,
  IconFinanciamento,
  IconSeguro,
  IconBolt,
  IconShieldCheck,
  IconHeart,
  IconPercent,
} from './components/icons.jsx'

export const SERVICES = [
  {
    id: 'consignado-inss',
    Icon: IconConsignado,
    tag: 'Aposentados e pensionistas',
    title: 'Empréstimo Consignado INSS',
    desc: 'Crédito com as menores taxas do mercado, descontado direto do benefício. Sem consulta ao SPC/Serasa e com dinheiro na conta em poucas horas.',
    bullets: [
      'Taxas reduzidas e parcelas fixas',
      'Aprovação mesmo com nome negativado',
      'Portabilidade e refinanciamento',
    ],
  },
  {
    id: 'garantia-veiculo',
    Icon: IconVeiculo,
    tag: 'Use seu carro a seu favor',
    title: 'Empréstimo com Garantia de Veículo',
    desc: 'Transforme seu veículo quitado em crédito de alto valor, continuando a usá-lo normalmente. Prazos longos e juros muito menores que o crédito comum.',
    bullets: [
      'Até 90% do valor do veículo',
      'Prazos de até 60 meses',
      'Você continua dirigindo seu carro',
    ],
  },
  {
    id: 'financiamentos',
    Icon: IconFinanciamento,
    tag: 'Realize suas conquistas',
    title: 'Financiamentos',
    desc: 'Financiamento de veículos, imóveis e do seu próximo projeto com as melhores condições. Comparamos os bancos por você e cuidamos de toda a burocracia.',
    bullets: [
      'Veículos novos e seminovos',
      'Imóveis e construção',
      'Análise em diversos bancos',
    ],
  },
  {
    id: 'seguro-veicular',
    Icon: IconSeguro,
    tag: 'Proteção completa',
    title: 'Proteção Auto',
    desc: 'Seu carro protegido contra roubo, furto, colisão e terceiros, com assistência 24h. Cotação personalizada e abrangência em todo o país.',
    bullets: [
      'Cobertura completa e assistência 24h',
      'Carro reserva e guincho',
      'Melhor custo-benefício do mercado',
    ],
  },
]

export const DIFFERENTIALS = [
  {
    Icon: IconBolt,
    title: 'Aprovação rápida',
    desc: 'Simulação na hora e dinheiro na conta em tempo recorde, sem filas e sem papelada infinita.',
  },
  {
    Icon: IconPercent,
    title: 'As melhores taxas',
    desc: 'Negociamos com diversos bancos e seguradoras para encontrar a condição mais barata para o seu perfil.',
  },
  {
    Icon: IconHeart,
    title: 'Atendimento humanizado',
    desc: 'Um consultor real do seu lado, explicando cada passo em uma linguagem que você entende.',
  },
  {
    Icon: IconShieldCheck,
    title: 'Segurança e transparência',
    desc: 'Correspondente bancário sério, sem taxa antecipada e sem surpresas no contrato.',
  },
]

export const STEPS = [
  {
    n: '01',
    title: 'Simulação',
    desc: 'Você fala com a gente pelo WhatsApp e conta o que precisa. Simulação gratuita e sem compromisso.',
  },
  {
    n: '02',
    title: 'Análise',
    desc: 'Comparamos as ofertas dos bancos e seguradoras e escolhemos a melhor condição para o seu perfil.',
  },
  {
    n: '03',
    title: 'Aprovação',
    desc: 'Cuidamos de toda a documentação e burocracia para você. Tudo de forma digital e segura.',
  },
  {
    n: '04',
    title: 'Tudo resolvido',
    desc: 'Dinheiro na conta ou apólice ativa. E continuamos por perto sempre que você precisar.',
  },
]

export const STATS = [
  { value: '+5 mil', label: 'clientes atendidos' },
  { value: 'R$ 80mi', label: 'em crédito liberado' },
  { value: '5,0 ★', label: 'avaliação no Google' },
  { value: '24h', label: 'para aprovação' },
]

export const SOCIAL_POSTS = [
  'https://www.instagram.com/p/DNoTMX2OO48/',
  'https://www.instagram.com/p/DNWRs5fuRwC/',
  'https://www.instagram.com/p/DN6UzePu4zE/',
]

export const FAQ = [
  {
    q: 'Preciso pagar alguma taxa antecipada para conseguir o crédito?',
    a: 'Não. A TF Assessoria nunca cobra qualquer valor antecipado para liberar empréstimos ou financiamentos. Desconfie de quem pede pagamento antes da liberação do crédito.',
  },
  {
    q: 'Consigo empréstimo consignado mesmo com o nome negativado?',
    a: 'Sim. O consignado INSS é descontado diretamente do seu benefício, por isso não há consulta ao SPC/Serasa. Aposentados e pensionistas negativados podem ser aprovados normalmente.',
  },
  {
    q: 'No empréstimo com garantia de veículo eu fico sem o carro?',
    a: 'Não. Você continua usando o seu veículo normalmente durante todo o contrato. O carro fica apenas como garantia, o que permite taxas muito menores e prazos mais longos.',
  },
  {
    q: 'Quanto tempo leva para o dinheiro cair na conta?',
    a: 'Depende do produto e do banco, mas no consignado INSS o crédito costuma ser liberado em poucas horas após a aprovação. Em outras modalidades, normalmente entre 1 e 3 dias úteis.',
  },
  {
    q: 'A TF é um banco?',
    a: 'Somos uma assessoria de crédito e correspondente bancário. Trabalhamos com diversas instituições financeiras e seguradoras para encontrar a melhor condição para você, sem custo de consultoria.',
  },
]
