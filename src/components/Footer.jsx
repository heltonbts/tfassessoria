import { BUSINESS, whatsappLink } from '../config.js'
import logo from '../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="TF Assessoria & Finanças" />
            <p>
              Assessoria de crédito e seguros. Conectamos você às melhores
              instituições do país para realizar seus planos com segurança e
              transparência.
            </p>
          </div>

          <div className="footer-col">
            <h4>Serviços</h4>
            <a href="#consignado-inss">Consignado INSS</a>
            <a href="#garantia-veiculo">Garantia de veículo</a>
            <a href="#financiamentos">Financiamentos</a>
            <a href="#seguro-veicular">Seguro veicular</a>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <p>{BUSINESS.phoneLabel}</p>
          </div>
        </div>

        <p className="footer-disclaimer">
          {BUSINESS.name} atua como correspondente bancário, nos termos da
          Resolução CMN nº 4.935/2021, intermediando produtos de instituições
          financeiras e seguradoras parceiras. Não cobramos qualquer valor
          antecipado para liberação de crédito. As condições, taxas e prazos
          estão sujeitos à análise e aprovação das instituições parceiras. O
          crédito consignado é destinado a aposentados e pensionistas do INSS,
          respeitando a margem consignável disponível.
        </p>

        <div className="footer-bottom">
          <span>© {year} {BUSINESS.name}. Todos os direitos reservados.</span>
          <span>{BUSINESS.city}</span>
        </div>
      </div>
    </footer>
  )
}
