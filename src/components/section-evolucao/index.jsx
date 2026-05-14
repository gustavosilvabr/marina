import React, { useState } from 'react';
import './style.css';
import galeria1 from '../../assets/galeria1.png';
import galeria2 from '../../assets/galeria2.png';
import galeria3 from '../../assets/galeria3.png';

const casos = [
  {
    id: 1,
    image: galeria1,
    title: 'Caso 1',
    descricao: 'Evolução e cicatrização de ferida com protocolo de curativos avançados e laserterapia.',
  },
  {
    id: 2,
    image: galeria2,
    title: 'Caso 2',
    descricao: 'Tratamento e recuperação tecidual com acompanhamento especializado de enfermagem.',
  },
  {
    id: 3,
    image: galeria3,
    title: 'Caso 3',
    descricao: 'Resultado de cicatrização completa com o protocolo de curativos e laserterapia.',
  },
];

const SectionEvolucao = () => {
  const [activeIndex, setActiveIndex] = useState(null); // null = grid view, number = lightbox

  const openLightbox = (idx) => setActiveIndex(idx);
  const closeLightbox = () => setActiveIndex(null);
  const prevCase = () => setActiveIndex((p) => (p - 1 + casos.length) % casos.length);
  const nextCase = () => setActiveIndex((p) => (p + 1) % casos.length);

  return (
    <section className="section-evolucao" id="evolucao-feridas">
      <div className="evolucao-container">
        {/* Header */}
        <div className="evolucao-header">
          <span className="evolucao-badge">📸 Galeria de Resultados</span>
          <h2 className="evolucao-title">Galeria de Evolução das Feridas</h2>
          <p className="evolucao-subtitle">
            Casos reais tratados com curativos avançados e laserterapia. Clique em uma imagem para ampliar.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="evolucao-grid">
          {casos.map((caso, idx) => (
            <div
              key={caso.id}
              className="evolucao-card"
              onClick={() => openLightbox(idx)}
            >
              <div className="evolucao-card-img-wrap">
                <img src={caso.image} alt={caso.title} className="evolucao-card-img" />
                <div className="evolucao-card-overlay">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
              <div className="evolucao-card-info">
                <span className="evolucao-card-tag">{caso.title}</span>
                <p className="evolucao-card-desc">{caso.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <button className="lightbox-nav prev" onClick={prevCase}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="lightbox-img-wrap" key={activeIndex}>
              <img
                src={casos[activeIndex].image}
                alt={casos[activeIndex].title}
                className="lightbox-img"
              />
            </div>

            <button className="lightbox-nav next" onClick={nextCase}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="lightbox-footer">
              <span className="lightbox-title">{casos[activeIndex].title}</span>
              <span className="lightbox-counter">{activeIndex + 1} / {casos.length}</span>
            </div>

            {/* Thumbnails inside lightbox */}
            <div className="lightbox-thumbs">
              {casos.map((c, idx) => (
                <button
                  key={c.id}
                  className={`lightbox-thumb ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <img src={c.image} alt={c.title} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionEvolucao;
