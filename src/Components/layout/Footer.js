import { FaFacebook, FaInstagram , FaLinkedin } from "react-icons/fa";

import styles from './Footer.module.css'

function Footer(){




    return(
        <footer className={styles.footer} >
            <ul className={styles.socialList}>
                    <li >
                        <FaFacebook />
                    </li>
                    <li>
                    <a href='https://www.linkedin.com/in/kevin-lauxen-nogueira-568931164/'> <FaLinkedin /></a>
                    </li><li>
                        <FaInstagram />
                    </li>
            </ul>
            
            <p className={styles.copyright}><span>Custos </span> &copy; 2024 - feito em 2024</p>
            <p className={styles.copyright}> Kevin Lauxen Nogueira </p>


        </footer>


)}
export default Footer;