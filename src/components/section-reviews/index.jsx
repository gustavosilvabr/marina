import { useLayoutEffect, useRef } from "react";
import "./style.css"
import gsap from "gsap";
import { FaStar, FaGoogle } from "react-icons/fa";

export default function SectionReviews() {
    const scrollRef = useRef(null);

    const reviews = [
        {
            name: "Paolla Amorim Barreria",
            date: "2 meses atrás",
            text: "Atendimento humanizado, atencioso, instrutivo e delicado. Profissional de excelência. Me salvou! meus seios estavam intocáveis de dor, cheio de fissuras e com a consultória de amamentação para pega correta da mama + aplicação do laser sentir uma melhora significativa, e já conseguir amamentar sem sofrer. Super indico.",
        },
        {
            name: "Ster Silva",
            date: "5 meses atrás",
            text: "Venhooo aqui agradecer pela sua consultoria Marina, sai da maternidade com meus seios doloridos, sangrando, machucados e pendurados... Sofri bastante nos primeiros dias por uma pega errada, gritava de dor, chorava e queria desistir, mas você me salvou!",
        },
        {
            name: "Juliana Dabague",
            date: "11 meses atrás",
            text: "Super indico trabalho, Marina uma pessoa educasissima, mãos de Deus 🙏🏼 Indico trabalho, elas utilizam laser onde a resposta é muito rápida e satisfatória.",
        },
        {
            name: "Adriana Rodrigues",
            date: "um ano atrás",
            text: "Super recomendo, fui bem atendida por essas profissionais. E tive ótimos resultados no meu tratamento com a laserterapia.",
        },
        {
            name: "Gleice",
            date: "11 meses atrás",
            text: "Pessoa maravilhosa melhor profissional que eu ja conheci super recomendo. Que Deus abençoe seu projetos e sonhos. Te desejo muito sucesso!",
        },
        {
            name: "Carla Carvalho",
            date: "11 meses atrás",
            text: "As enfermeiras são maravilhosas, tem muito conhecimento e fazem tudo com muito amor, as melhores da região.",
        }
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            
            // Carrossel Infinito Suave
            gsap.to(".reviews-track", {
                x: `-50%`,
                duration: 40,
                ease: "none",
                repeat: -1,
            });
        }, scrollRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="section-reviews" ref={scrollRef}>
            <div className="reviews-header">
                <div className="google-badge">
                    <FaGoogle /> <span>Avaliações no Google</span>
                </div>
                <h2>O que dizem nossos clientes</h2>
            </div>

            <div className="reviews-container">
                <div className="reviews-track">
                    {/* Duplicamos os itens para o loop infinito */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div className="review-card" key={index}>
                            <div className="review-stars">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-footer">
                                <span className="review-name">{review.name}</span>
                                <span className="review-date">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
