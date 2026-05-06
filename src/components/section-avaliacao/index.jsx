import "./style.css"
import { useLayoutEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importando Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

// Importando estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Importando os assets conforme informado
import av1 from "../../assets/av1.mp4"
import av2 from "../../assets/av2.mp4"
import av3 from "../../assets/av3.webp"
import av4 from "../../assets/av4.mp4"
import av5 from "../../assets/av5.mp4"


gsap.registerPlugin(ScrollTrigger);

export default function SectionAvaliacao() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 1025px)",
            isMobile: "(max-width: 1024px)"
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

            // Entrada dos Cards (ajustado para Swiper)
            gsap.fromTo(".swiper-slide", 
                { 
                    y: 50, 
                    opacity: 0, 
                    scale: isDesktop ? 0.8 : 0.95 
                },
                { 
                    y: 0, 
                    opacity: 1, 
                    scale: 1,
                    duration: 1.2, 
                    stagger: 0.15, 
                    ease: isDesktop ? "back.out(1.5)" : "power2.out",
                    scrollTrigger: {
                        trigger: ".avaliacao-container",
                        start: "top 85%"
                    }
                }
            );

            // Somente para Desktop: Pulsação do Play
            if (isDesktop) {
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

            <div className="avaliacao-container">
                <Swiper
                    modules={[Pagination, Autoplay, EffectCoverflow]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        // Quando a largura for >= 1025px (Desktop)
                        1025: {
                            slidesPerView: 3,
                            centeredSlides: true,
                            loop: true,
                            spaceBetween: 40,
                        },
                        // Quando a largura for >= 768px
                        768: {
                            slidesPerView: 2,
                            centeredSlides: false,
                            loop: true,
                        },
                        // Mobile (padrão)
                        0: {
                            slidesPerView: 1.2,
                            centeredSlides: true,
                            loop: true,
                            effect: "coverflow",
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                                slideShadows: false,
                            }
                        }
                    }}
                    className="avaliacao-swiper"
                >
                    {/* Vídeo 1 */}
                    <SwiperSlide>
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
                    </SwiperSlide>

                    {/* Print WhatsApp */}
                    <SwiperSlide>
                        <div className="avaliacao-card print-type">
                            <img src={av3} alt="Depoimento WhatsApp" className="whatsapp-print" />
                            <div className="card-info">
                                <span>Conversa no WhatsApp</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Vídeo 2 */}
                    <SwiperSlide>
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
                    </SwiperSlide>
                         <SwiperSlide>
                        <div className="avaliacao-card video-type" onClick={handleVideoClick}>
                            <div className="play-overlay-av">
                                <div className="play-circle-av">
                                    <FaPlay />
                                </div>
                            </div>
                            <video src={av4} className="video-player-av" playsInline preload="metadata" loop />
                            <div className="card-info">
                                <span>Depoimento Real</span>
                            </div>
                        </div>
                    </SwiperSlide>
                         <SwiperSlide>
                        <div className="avaliacao-card video-type" onClick={handleVideoClick}>
                            <div className="play-overlay-av">
                                <div className="play-circle-av">
                                    <FaPlay />
                                </div>
                            </div>
                            <video src={av5} className="video-player-av" playsInline preload="metadata" loop />
                            <div className="card-info">
                                <span>Depoimento Real</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
