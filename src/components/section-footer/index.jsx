import "./style.css"
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaRegHeart } from "react-icons/fa";

import logo from "../../assets/logo.png"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function SectionFooter() {
    const footerRef = useRef(null);

    const handleScroll = (targetId) => {
        gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: targetId, offsetY: 80 },
            ease: "power3.inOut"
        });
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".footer-column", 
                { y: 30, opacity: 0 },
                { 
                    y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%"
                    }
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer className="section-footer" ref={footerRef}>
            <div className="footer-container">
         
                {/* Coluna 2: Navegação */}
                <div className="footer-column links">
                    <h4>Navegação</h4>
                    <ul>
                        <li><a href="#inicio" onClick={(e) => { e.preventDefault(); handleScroll("#inicio"); }}>Inicio</a></li>
                        <li><a href="#sobreMim" onClick={(e) => { e.preventDefault(); handleScroll("#sobreMim"); }}>Sobre Mim</a></li>
                        <li><a href="#servicos" onClick={(e) => { e.preventDefault(); handleScroll("#servicos"); }}>Serviços</a></li>
                        <li><a href="#avaliacoes" onClick={(e) => { e.preventDefault(); handleScroll("#avaliacoes"); }}>Avaliações</a></li>
                    </ul>
                </div>

                {/* Coluna 3: Contato & Localização */}
                <div className="footer-column contact">
                    <h4>Contato</h4>
                    <ul>
                        <li>
                            <a href="https://api.whatsapp.com/send/?phone=5561995894429&text=Vim+do+seu+site+e+quero+fazer+um+agendamento+com+voce." target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp /> (61) 99589-4429
                            </a>
                        </li>
                        <li>
                            <a href="mailto:mkt.homelaser@gmail.com">
                                <FaEnvelope /> mkt.homelaser@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/place/Enfermagem+Home+Care,+Laserterapia+para+feridas+e+consultoria+de+amamenta%C3%A7%C3%A3o+Bras%C3%ADlia+I+Home+Laser/@-15.7198041,-48.2799171" target="_blank" rel="noopener noreferrer">
                                <FaMapMarkerAlt /> Brasília - DF / Águas Lindas de Goiás
                            </a>
                        </li>
                    </ul>
                    
                    {/* Mapa Embutido */}
                    <div className="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.591760954979!2d-48.2799171!3d-15.719804100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad0d880f29cbf123%3A0x4806867a729b6fd6!2sEnfermagem%20Home%20Care%2C%20Laserterapia%20para%20feridas%20e%20consultoria%20de%20amamenta%C3%A7%C3%A3o%20Bras%C3%ADlia%20I%20Home%20Laser!5e0!3m2!1spt-BR!2sbr!4v1777668583699!5m2!1spt-BR!2sbr" 
                            width="100%" 
                            height="150" 
                            style={{ border: 0, borderRadius: '15px' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Coluna 4: Social */}
                <div className="footer-column social">
                    <h4>Redes Sociais</h4>
                    <p>Acompanhe nosso dia a dia e dicas de saúde no Instagram.</p>
                    <a href="https://www.instagram.com/mm_homelaser/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram /> @mm_homelaser
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Marina Home Laser. Todos os direitos reservados.</p>
                <p className="dev-credit">Desenvolvido com carinho para a saúde feminina.</p>
            </div>
        </footer>
    );
}