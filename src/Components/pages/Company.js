import { FaLinkedin } from 'react-icons/fa';
import styles from './Company.module.css'

function Company(){
    return(
        <div className={styles.portifolio}>   

            <h1>Seja bem vindo ao meu projeto  </h1>    
            <h2>Meu nome é:  Kevin Lauxen Nogueira tenho 25 anos</h2>
            <h3>Email: kevin90lauxen@hotmail.com</h3>

            <a href='https://www.linkedin.com/in/kevin-lauxen-nogueira-568931164/'> <FaLinkedin /> Linkedin</a>

        </div>
    )
}
export default Company;
