import { FaRegHeart } from "react-icons/fa";
import { useState, useLayoutEffect, useRef } from "react";
import './style.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import Curativo from "../../assets/curativo.png"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionHelp() {
    const sectionRef = useRef(null);
    const [data, setData] = useState([
        {
            id: 1,
            img: "https://alynedoula.com/wp-content/uploads/2023/04/DSC_5404-1-1-1024x721.webp",
            title: "LASERTERAPIA",
            description: "Alivio da dor, redução da inflamação e aceleração da cicatrização.",

        },
        {
            id: 2,
            img: 'https://www.cuidarecia.com.br/imagens/categorias/troca-curativos-idosos-01.webp',
            title: "CURATIVOS",
            description: "Cuidados especializados com feridas, ulceras, queimaduras e lesões de pele. ",

        },
        {
            id: 3,
            img: "https://s2.glbimg.com/zWdLHIqLcnaYNPpFvqTQ1mVSreE=/e.glbimg.com/og/ed/f/original/2018/04/02/amamentacao.jpg",
            title: "APOIO AMAMENTAÇÃO",
            description: "ORIENTAÇÃO PARA AMAMENTAÇÃO TRANQUILA E SEM DOR.",

        },
        {
            id: 4,
            img: "https://www.santos.sp.gov.br/static/files_www/styles/newspagemodal/public/field/image/img_2321.jpg",
            title: "MENTORIA PARA MAES",
            description: "ACOMPANHAMENTO PERSONALIZADO PARA MAES E GESTANTES. ",

        },
        {
            id: 5,
            img: "https://www.escoladapaz.com.br/wp-content/uploads/2020/09/home-care-entenda-como-funciona-e-ingresse-nesse-mercado.jpg",
            title: "CUIDADO DOMICILIARES",
            description: "ATENDIMENTO NO CONFORTO DA SUA CASA PARA O QUE PRECISAR. ",

        },
        {
            id: 6,
            img: "https://santajoana.com.br/wp-content/uploads/2025/09/GettyImages-1351160342-scaled.jpg",
            title: "ORIENTAÇÃO PÓS PARTO",
            description: "SUPORTE E ORIENTAÇÃO NO PUERPÉRIO PARA RECUPERAÇÃO TRANQUILA. ",

        },
    ])

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animação do Título
            gsap.fromTo('.help-content', 
                { y: 30, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.help-content',
                        start: 'top 85%',
                    }
                }
            );

            // Animação dos Cards
            gsap.fromTo('.help-card', 
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.8, 
                    stagger: 0.15, 
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.help-cards',
                        start: 'top 85%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="section-help" ref={sectionRef}>
            <div className="help-content">
                <h1 className="help-title">COMO POSSO TE AJUDAR?</h1>
                <span>------<FaRegHeart /> ------</span>
            </div>
            <div className='help-cards'>
                {data.map((item) => (
                    <div key={item.id} className='help-card'>
                        <div className="help-card-infos">
                            <div className="help-card-img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="help-card-infos-title">
                                <h3 className="help-card-title">{item.title}</h3>
                                <p className="help-card-description">{item.description}</p>
                            </div>
                        </div>
                        <button 
                            className="help-card-button"
                            onClick={() => {
                                const msg = `Vim do seu site e gostaria de sua ajuda com ${item.title}`;
                                window.open(`https://api.whatsapp.com/send/?phone=5561995894429&text=${encodeURIComponent(msg)}`, "_blank");
                            }}
                        >
                            Saiba Mais <IoIosArrowRoundForward className="help-card-arrow" /> 
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}