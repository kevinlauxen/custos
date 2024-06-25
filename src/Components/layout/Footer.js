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
                        <FaLinkedin />
                    </li><li>
                        <FaInstagram />
                    </li>
            </ul>
            
            <p className={styles.copyright}><span>Custos </span> &copy; 2024 - feito em 2024</p>
            <p className={styles.copyright}> Kevin Lauxen Nogueira </p>


        </footer>


)}
export default Footer;