import { FaFacebookF, FaWhatsapp , FaInstagram } from "react-icons/fa";

function Contato(){
    return(
        <div>
            <h1>Contato</h1>

                <ul className="Icones ">
                    <li><FaFacebookF size={30}/> </li>
                    <li><FaWhatsapp size={30}/> </li>
                    <li><FaInstagram size={30}/> </li>
                </ul>
        </div>
    )
}
export default Contato;