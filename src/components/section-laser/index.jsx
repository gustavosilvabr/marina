import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import laserImg from "../../assets/laser.png";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

export default function SectionLaser() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".laser-image",
                { x: -60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".laser-image",
                        start: "top 85%",
                    },
                }
            );

            gsap.fromTo(
                ".laser-text-content",
                { x: 60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".laser-text-content",
                        start: "top 85%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="section-laser" id="laserterapia" ref={sectionRef}>
            <div className="laser-container">
                <div className="laser-image-wrapper">
                    <div className="laser-image">
                        <img src={laserImg} alt="Laserterapia" />
                        <div className="laser-image-badge">
                            <span>✦</span> Laserterapia
                        </div>
                    </div>
                </div>

                <div className="laser-text-content">
                    <span className="laser-eyebrow">Saúde &amp; Bem-Estar</span>
                    <h2 className="laser-title">
                        A Laserterapia é aliada no <em>alívio da dor</em>
                    </h2>
                    <div className="laser-divider" />
                    <p className="laser-description">
                        Ajudando a reduzir processos inflamatórios, reduzindo dores agudas e crônicas.
                    </p>
                    <div className="laser-highlight-box">
                        <p>
                            CUIDAR DA DOR é também promover{" "}
                            <strong>qualidade de vida.</strong>
                        </p>
                    </div>
                    <button
                        className="laser-cta-button"
                        onClick={() =>
                            window.open(
                                `https://api.whatsapp.com/send/?phone=5561995894429&text=${encodeURIComponent(
                                    "Olá! Vim do site e gostaria de saber mais sobre a Laserterapia."
                                )}`,
                                "_blank"
                            )
                        }
                    >
                        Quero saber mais
                    </button>
                </div>
            </div>
        </section>
    );
}
