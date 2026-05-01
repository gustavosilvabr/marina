import { useLayoutEffect, useRef } from "react";
import "./style.css"
import Logo from "../../assets/logo.png"
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
    const headerRef = useRef(null);

    const handleScroll = (targetSelector) => {
        gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: targetSelector, offsetY: 80 },
            ease: "power3.inOut"
        });
    };

    const handleWpp = () => {
        window.open("https://api.whatsapp.com/send/?phone=5561995894429&text=Vim+do+seu+site+e+quero+fazer+um+agendamento+com+voce.", "_blank");
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo('.btn-logo', 
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
            )
            .fromTo('nav ul li', 
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
                '-=0.6'
            )
            .fromTo('.btn-wpp', 
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.8'
            );
        }, headerRef);

        return () => ctx.revert();
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <button className="btn-logo">
                <img src={Logo} alt="logo-marina" width={180} />
            </button>

            <nav>
                <ul>
                    <li onClick={() => handleScroll(".section-hero")}>Início</li>
                    <li onClick={() => handleScroll(".section-help")}>Serviços</li>
                    <li onClick={() => handleScroll(".section-trabalho")}>Trabalho</li>
                    <li onClick={() => handleScroll(".avaliacao")}>Avaliações</li>
                    <li onClick={() => handleScroll(".section-slide")}>Resultados</li>
                    <li onClick={() => handleScroll(".section-footer")}>Contato</li>
                </ul>
            </nav>

            <button className="btn-wpp" onClick={handleWpp}>
                <FaWhatsapp size={22} />
                Agendar Consulta
            </button>
        </header>
    );
}
