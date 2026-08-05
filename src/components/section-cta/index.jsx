import "./style.css"
import { useLayoutEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/logo.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionCTA() {
    const sectionRef = useRef(null);

    const handleWpp = () => {
        window.open("https://api.whatsapp.com/send/?phone=5561995894429&text=Olá Marina! Vim do seu site e gostaria de agendar uma consulta.", "_blank");
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Revelação da seção
            gsap.fromTo(".cta-content", 
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1.2, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".section-cta",
                        start: "top 80%"
                    }
                }
            );

            // Animação Pulsante do Botão (muito devagar)
            gsap.to(".cta-button", {
                scale: 1.03,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Brilho passando no botão
            gsap.to(".cta-button::after", {
                left: "120%",
                duration: 1.5,
                repeat: -1,
                repeatDelay: 2,
                ease: "power2.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="section-cta" ref={sectionRef}>
            <div className="cta-container">
                <div className="cta-content">
                    <img src={Logo} alt="Logo Marina Elane" className="cta-logo" />
                    
                    <div className="cta-info">
                        <span className="cta-subtitle">Atendimento Humanizado</span>
                        <h2 className="cta-title">Marina Elane</h2>
                        <p className="cta-description">
                            Pronta para transformar sua experiência com saúde e bem-estar? 
                            Agende sua consulta agora mesmo pelo WhatsApp.
                        </p>
                    </div>

                    <div className="cta-actions">
                        <button className="cta-button" onClick={handleWpp}>
                            <FaWhatsapp size={24} />
                            <span>Agendar Consulta agora</span>
                        </button>
                        <a href="tel:5561995894429" className="cta-number">
                            (61) 99589-4429
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
