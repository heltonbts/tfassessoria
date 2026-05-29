import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Differentials from './components/Differentials.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Faq from './components/Faq.jsx'
import CtaBand from './components/CtaBand.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <HowItWorks />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
