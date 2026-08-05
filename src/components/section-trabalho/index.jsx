import { LuInstagram } from "react-icons/lu";
import { useLayoutEffect, useRef } from "react";
import './style.css'
import { FaRegHeart, FaPlay } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import fotoDra from '../../assets/marina.webp'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'
import capa1 from '../../assets/capa1.webp'
import capa2 from '../../assets/capa2.webp'
import capa3 from '../../assets/capa3.webp'
gsap.registerPlugin(ScrollTrigger);

export default function SectionTrabalho() {
    const sectionRef = useRef(null);
    const videosWork = [
        { id: 1, url: video1, title: 'Conheça nosso trabalho',capa:capa1 },
        { id: 2, url:video3, title: 'Como funciona laserTerapia',capa:capa2 },
        { id: 3, url:video2, title: 'Dicas de amamentação',capa:capa3},
    ]
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animação do Título Galeria (Estilo SectionHelp)
            gsap.fromTo('.container h2, .container .span, .container p', 
                { y: 30, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.container',
                        start: 'top 85%',
                    }
                }
            );

            // Entrada da Galeria (apenas o conteúdo dos vídeos)
            gsap.fromTo('.container-galeria', 
                { x: -50, opacity: 0 },
                { 
                    x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.container-galeria',
                        start: "top 85%",
                    }
                }
            );

            // Entrada dos Vídeos
            gsap.fromTo('.video', 
                { y: 30, opacity: 0 },
                { 
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.galeria-videos',
                        start: "top 85%",
                    }
                }
            );

            // Entrada do Bloco Sobre
            gsap.fromTo('.about-content', 
                { x: 50, opacity: 0 },
                { 
                    x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.about-content',
                        start: "top 85%",
                    }
                }
            );

            // Entrada da Lista
            gsap.fromTo('.about-text ul li', 
                { x: 20, opacity: 0 },
                { 
                    x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.about-text ul',
                        start: "top 85%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="section-trabalho" id="meuTrabalho" ref={sectionRef}>
            <div className="container">
                <h2>CONHEÇA MEU TRABALHO</h2>
                <span className="span">------<FaRegHeart /> ------</span>
                <p >Veja de perto como e o atendimento e o cuidado que levo ate voce</p>
                <div className="container-galeria">
                    <div className="galeria-videos">
                        {videosWork.map((video) => (
                            <div 
                                key={video.id} 
                                className="video" 
                                onClick={(e) => {
                                    const allVideos = document.querySelectorAll('.video-player');
                                    const allContainers = document.querySelectorAll('.video');
                                    const currentVideo = e.currentTarget.querySelector('video');
                                    
                                    // Se o vídeo clicado já está tocando, apenas pausa ele e volta a capa
                                    if (!currentVideo.paused) {
                                        currentVideo.pause();
                                        currentVideo.load(); // Volta a exibir a capa
                                        e.currentTarget.classList.remove('playing');
                                        return;
                                    }

                                    // Pausa todos os outros e reinicia eles com a capa
                                    allVideos.forEach(v => {
                                        v.pause();
                                        v.load(); // Reseta para a capa e início
                                    });
                                    allContainers.forEach(c => c.classList.remove('playing'));

                                    // Dá o play no vídeo atual
                                    currentVideo.play();
                                    e.currentTarget.classList.add('playing');
                                }}
                            >
                                <div className="play-button-overlay">
                                    <div className="play-icon-circle">
                                        <FaPlay />
                                    </div>
                                </div>
                                <video 
                                    src={video.url} 
                                    className="video-player"
                                    preload="metadata"
                                    playsInline
                                    poster={video.capa}
                                    loop
                                >
                                    Seu navegador não suporta vídeos.
                                </video>
                                <h3 className='titulo-video'>{video.title}</h3>
                            </div>
                        ))}
                    </div>

                    <a 
                        href="https://www.instagram.com/mm_homelaser/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='btn-youtube'
                    >
                        VER MAIS NO INSTAGRAM <LuInstagram />
                    </a>
                </div>
            </div>
            <div className='about-content' id="sobreMim">
                <div className='about-text'>
                    <h2>CUIDADO QUE FAZ A DIFERENÇA</h2>
                    <p>Meu objetivo é oferecer um atendimento de excelência, <br />
                        unindo conhecimento técnico, tecnologia e acolhimento <br /> para promover saúde, bem-estar e qualidade de vida.</p>
                    <ul>
                        <li> <BsCheck2Circle className="check-icon" /> Atenção individualizada e humanizada </li>
                        <li> <BsCheck2Circle className="check-icon" /> Técnicas atualizadas e seguras</li>
                        <li> <BsCheck2Circle className="check-icon" /> Equipamentos de alta tecnologia</li>
                        <li> <BsCheck2Circle className="check-icon" /> Atendimento com amor e empatia</li>
                    </ul>
                </div>
                <div className='foto-dra-container'>
                    <img src={fotoDra} className="foto-dra-img" alt="Dra. Marina" />
                </div>
            </div>
        </section>
    );
}