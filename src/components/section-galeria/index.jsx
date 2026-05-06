import React, { useState } from 'react';
import './style.css';
import MarinaImg from '../../assets/marina2.png';
import foto1 from '../../assets/foto1.jpeg';
import foto2 from '../../assets/foto2.jpeg';
import foto3 from '../../assets/foto3.jpeg';
import foto4 from '../../assets/foto4.jpeg';
const cases = [
  {
    id: 1,
    title: "Um tiro acertou a coluna vertebral e atingiu a medula, causando paralisia de membros inferiores.",
    description: "Iniciou tratamento com laserterapia para reabilitação, obtendo melhoras significativas na função neurológica.",
    before: foto1,
    after: foto2
  },
  {
    id: 2,
    title: "Lesão trocantérica com osteomielite.",
    description: "Tratamento de lesão trocantérica com osteomielite, com auxílio de laserterapia.",
    before: foto3,
    after: foto4
  },

];

const SectionGaleria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="section-galeria" id="casos-clinicos">
      <div className="container">
        <div className="marina-profile">
          <div className="marina-photo">
            <img src={MarinaImg} alt="Marina Elane" />
          </div>
          <div className="marina-bio">
            <span className="marina-tag">ENFERMEIRA</span>
            <h2 className="marina-name">MARINA ELANE</h2>
            <div className="marina-text">
              <p>Brasiliense, esposa, cristã, mãe e avó da Helena.</p>
              <p>Enfermeira formada pela Unimauá, com atuação dedicada ao cuidado, acolhimento e bem-estar de mães e pacientes.</p>
              <p>Consultora de Amamentação e habilitada em Laserterapia, ajudando no alívio de dores, cicatrização e promoção da saúde com atendimento humanizado.</p>
            </div>
          </div>
        </div>

        <div className="header-galeria">
          <h3 className="title-galeria">Casos Clínicos: Antes e Depois</h3>
        </div>

        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevCase}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="case-content">
            <div className={`gallery-comparison ${!isRevealed ? 'is-blurred' : ''}`}>
              <div className="image-wrapper">
                <span className="label-image">ANTES</span>
                <img src={cases[currentIndex].before} alt={`Antes ${cases[currentIndex].title}`} />
              </div>
              <div className="image-wrapper">
                <span className="label-image">DEPOIS</span>
                <img src={cases[currentIndex].after} alt={`Depois ${cases[currentIndex].title}`} />
              </div>

              {!isRevealed && (
                <div className="sensitive-overlay">
                  <div className="overlay-content">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <h3>Conteúdo Sensível</h3>
                    <p>As imagens a seguir podem conter cenas de fraturas expostas e procedimentos cirúrgicos.</p>
                    <button className="reveal-btn" onClick={() => setIsRevealed(true)}>
                      Visualizar Imagens
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="case-info">
              <span className="case-count">Caso {currentIndex + 1} de {cases.length}</span>
              <h4 className="case-title">{cases[currentIndex].title}</h4>
              <p className="case-desc">{cases[currentIndex].description}</p>
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextCase}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {isRevealed && (
          <button className="hide-btn" onClick={() => setIsRevealed(false)}>
            Ocultar imagens sensíveis
          </button>
        )}
      </div>
    </section>
  );
};

export default SectionGaleria;
