import "./style.css"
import { useLayoutEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importando os assets conforme informado
import av1 from "../../assets/av1.mp4"
import av2 from "../../assets/av2.mp4"
import av3 from "../../assets/av3.webp"

gsap.registerPlugin(ScrollTrigger);

export default function SectionAvaliacao() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 769px)",
            isMobile: "(max-width: 768px)"
        }, (context) => {
            const { isDesktop } = context.conditions;

            // Revelação do Título
            gsap.fromTo(".avaliacao-header", 
                { 
                    y: 30, 
                    opacity: 0, 
                    filter: isDesktop ? "blur(10px)" : "none", 
                    scale: isDesktop ? 0.9 : 1 
                },
                { 
                    y: 0, 
                    opacity: 1, 
                    filter: "none", 
                    scale: 1, 
                    duration: isDesktop ? 1.5 : 1, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".avaliacao-header",
                        start: "top 90%"
                    }
                }
            );

            // Entrada dos Cards
            gsap.fromTo(".avaliacao-card", 
                { 
                    y: 50, 
                    opacity: 0, 
                    rotateY: isDesktop ? -15 : 0, 
                    scale: isDesktop ? 0.8 : 0.95 
                },
                { 
                    y: 0, 
                    opacity: 1, 
                    rotateY: 0, 
                    scale: 1,
                    duration: 1.2, 
                    stagger: 0.15, 
                    ease: isDesktop ? "back.out(1.5)" : "power2.out",
                    scrollTrigger: {
                        trigger: ".avaliacao-grid",
                        start: "top 85%"
                    }
                }
            );

            // Somente para Desktop: Parallax e Pulsação
            if (isDesktop) {
                gsap.to(".print-type", {
                    y: -30,
                    scrollTrigger: {
                        trigger: ".avaliacao-grid",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });

                gsap.to(".play-circle-av", {
                    scale: 1.1,
                    duration: 0.8,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
        }, sectionRef);

        return () => mm.revert();
    }, []);

    const handleVideoClick = (e) => {
        const allVideos = document.querySelectorAll('.video-player-av');
        const allContainers = document.querySelectorAll('.avaliacao-card.video-type');
        const currentVideo = e.currentTarget.querySelector('video');
        
        if (!currentVideo.paused) {
            currentVideo.pause();
            currentVideo.load();
            e.currentTarget.classList.remove('playing');
            return;
        }

        allVideos.forEach(v => {
            v.pause();
            v.load();
        });
        allContainers.forEach(c => c.classList.remove('playing'));

        currentVideo.play();
        e.currentTarget.classList.add('playing');
    };

    return (
        <section className="avaliacao" id="avaliacoes" ref={sectionRef}>
            <div className="avaliacao-header">
                <h2>O que dizem os nossos pacientes</h2>
                <p>Histórias reais de quem transformou o cuidado com a saúde através do nosso laser.</p>
            </div>

            <div className="avaliacao-grid">
                {/* Vídeo 1 */}
                <div className="avaliacao-card video-type" onClick={handleVideoClick}>
                    <div className="play-overlay-av">
                        <div className="play-circle-av">
                            <FaPlay />
                        </div>
                    </div>
                    <video 
                        src={av1 + "#t=0.5"} 
                        className="video-player-av" 
                        playsInline 
                        preload="metadata" 
                        loop 
                    />
                    <div className="card-info">
                        <span>Depoimento Real</span>
                    </div>
                </div>

                {/* Print WhatsApp */}
                <div className="avaliacao-card print-type">
                    <img src={av3} alt="Depoimento WhatsApp" className="whatsapp-print" />
                    <div className="card-info">
                        <span>Conversa no WhatsApp</span>
                    </div>
                </div>

                {/* Vídeo 2 */}
                <div className="avaliacao-card video-type" onClick={handleVideoClick}>
                    <div className="play-overlay-av">
                        <div className="play-circle-av">
                            <FaPlay />
                        </div>
                    </div>
                    <video src={av2} className="video-player-av" playsInline preload="metadata" loop />
                    <div className="card-info">
                        <span>Depoimento Real</span>
                    </div>
                </div>
            </div>
        </section>
    );
}