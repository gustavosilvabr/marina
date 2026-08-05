import { lazy, Suspense } from "react"
import Header from "./components/header"
import SectionHelp from "./components/section-help"
import SectionLaser from "./components/section-laser"
import SectionHero from "./components/section-hero"
import SectionTrabalho from "./components/section-trabalho"
import SectionReviews from "./components/section-reviews"
import SectionGaleria from "./components/section-galeria"
import SectionEvolucao from "./components/section-evolucao"
import SectionFooter from "./components/section-footer"
import SectionCTA from "./components/section-cta"
import FloatingWpp from "./components/floating-wpp"

import './style.css'

// Carrega sob demanda: única seção que puxa o Swiper e os vídeos de depoimento,
// mantendo esse peso fora do bundle inicial.
const SectionAvaliacao = lazy(() => import("./components/section-avaliacao"))

function App() {
  return (
    <div className="app">
      <Header />
      <SectionHero />
      <SectionHelp />
      <SectionLaser />
      <SectionTrabalho />
      <SectionGaleria />
      <SectionEvolucao />
      <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
        <SectionAvaliacao />
      </Suspense>
      <SectionReviews />
      <SectionCTA />
      <SectionFooter />
      <FloatingWpp />
    </div>
  )
}

export default App
