import Header from "./components/header"
import SectionHelp from "./components/section-help"
import SectionHero from "./components/section-hero"
import SectionTrabalho from "./components/section-trabalho"
import SectionAvaliacao from "./components/section-avaliacao"
import SectionReviews from "./components/section-reviews"
import SectionSlide from "./components/section-slide"
import SectionGaleria from "./components/section-galeria"
import SectionFooter from "./components/section-footer"
import SectionCTA from "./components/section-cta"
import FloatingWpp from "./components/floating-wpp"

import './style.css'
function App() {
  return (
    <div className="app">
      <Header />
      <SectionHero />
      <SectionHelp />
      <SectionTrabalho />
      <SectionGaleria />
      <SectionAvaliacao />
      
      <SectionReviews />
      <SectionCTA />
      <SectionFooter />
      <FloatingWpp />
    </div>
  )
}

export default App
