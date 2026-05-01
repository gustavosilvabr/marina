import Header from "./components/header"
import SectionHelp from "./components/section-help"
import SectionHero from "./components/section-hero"
import SectionTrabalho from "./components/section-trabalho"
import SectionAvaliacao from "./components/section-avaliacao"
import SectionReviews from "./components/section-reviews"
import SectionSlide from "./components/section-slide"
import SectionFooter from "./components/section-footer"

import './style.css'
function App() {
  return (
    <div className="app">
      <Header />
      <SectionHero />
      <SectionHelp />
      <SectionTrabalho />
      <SectionAvaliacao />
      <SectionReviews />
      <SectionSlide />
      <SectionFooter />
    </div>
  )
}

export default App
