import "./style.css"
import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowsAltH } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);

export default function SectionSlide() {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef(null);

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        if (!clientX) return;
        const x = (clientX - rect.left) / rect.width * 100;
        setSliderPos(Math.max(0, Math.min(100, x)));
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".slide-header", 
                { y: 30, opacity: 0 },
                { 
                    y: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".slide-header",
                        start: "top 85%"
                    }
                }
            );

            gsap.fromTo(".comparison-container", 
                { scale: 0.95, opacity: 0 },
                { 
                    scale: 1, opacity: 1, duration: 1.2, ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".comparison-container",
                        start: "top 80%"
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="section-slide" ref={containerRef}>
            <div className="slide-header">
                <h2>Resultados Reais</h2>
                <p>Arraste a barra para ver a transformação completa proporcionada pelo nosso tratamento a laser.</p>
            </div>

            <div 
                className="comparison-container"
                onMouseMove={handleMove}
                onTouchMove={handleMove}
            >
                {/* Imagem do ANTES */}
                <div className="image-before">
               
                    <div className="label before">ANTES</div>
                </div>

                {/* Imagem do DEPOIS (com clip) */}
                <div 
                    className="image-after" 
                    style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                >
                    
                    <div className="label after">DEPOIS</div>
                </div>

                {/* Barra do Slider */}
                <div 
                    className="slider-bar" 
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="slider-handle">
                        <FaArrowsAltH />
                    </div>
                </div>
            </div>
        </section>
    );
}