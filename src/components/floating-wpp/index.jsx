import "./style.css"
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWpp() {
    const handleWpp = () => {
        const message = encodeURIComponent("Olá Marina! Gostaria de falar com você, vim do seu site e quero fazer um agendamento.");
        window.open(`https://api.whatsapp.com/send/?phone=5561995894429&text=${message}`, "_blank");
    };

    return (
        <div className="floating-wpp" onClick={handleWpp} title="Falar com Marina">
            <FaWhatsapp size={35} />
            <span className="tooltip-wpp">Agendar Consulta</span>
        </div>
    );
}
