import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import './style.css'
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsHouseCheck } from "react-icons/bs";
import { LuHandHeart } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

gsap.registerPlugin(ScrollToPlugin);

export default function SectionHero() {
    const heroRef = useRef(null);

    const handleScrollToWork = () => {
        gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: ".section-help", offsetY: 80 },
            ease: "power3.inOut"
        });
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from('.hero-content-header h1', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power4.out'
            })
            .from('.transforma', {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: 'back.out(1.7)'
            }, '-=0.6')
            .from('.hero-content-header h3', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4')
            .from('.hero-description-item', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            }, '-=0.4')
            .from('.hero-footer', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.2');
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="section-hero" ref={heroRef}>
            <div className="hero-content">
                <div className='hero-content-header'>
                    <h1>CUIDADO QUE</h1>
                    <h1>ACOLHE, TRATA E <br /><span className='transforma'>Transforma</span></h1>
                    <h3 className='h3-top'>Enfermagem especializada com laserterapia, <br /> curativos e apoio a amamentação <br /> no conforto do seu lar.</h3>
                </div>
                <div className="hero-description">
                    <div className='hero-description-item'>
                        <div className='icon-hero-item'>
                            <FaPersonBreastfeeding className='icon-hero' />
                        </div>

                        <p>Cuidado Humanizado</p>
                    </div>
                    <div className='hero-description-item'>
                        <div className='icon-hero-item'>
                            <IoShieldCheckmarkOutline className='icon-hero' />
                        </div>

                        <p>Segurança e Tecnica</p>
                    </div>
                    <div className='hero-description-item'>
                        <div className='icon-hero-item'>
                            <BsHouseCheck className='icon-hero' />
                        </div>
                        <p>Atendimento Domiciliar</p>
                    </div>
                    <div className='hero-description-item'>
                        <div className='icon-hero-item'>
                            <LuHandHeart className='icon-hero' />
                        </div>
                        <p>Acolhimento e Carinho</p>
                    </div>
                </div>
                <div className="hero-footer">
                    <a 
                        href="https://api.whatsapp.com/send/?phone=5561995894429&text=Vim+do+seu+site+e+quero+fazer+um+agendamento+com+voce." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        <button className='btn-agendar'>
                            <FaWhatsapp size={20} color="gold" />
                            Agendar Consulta
                        </button>
                    </a>
                    <span 
                        className='span-conhecer' 
                        onClick={handleScrollToWork}
                        style={{ cursor: 'pointer' }}
                    >
                        Conheça meus Serviços <BsArrowRightShort size={20} color=" #4e0a24" />
                    </span>
                </div>
            </div>

        </section>
    );
}