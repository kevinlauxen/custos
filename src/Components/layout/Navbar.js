import { Link } from "react-router-dom";

import Container from "./Container";


import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>

        <Container>

        <ul className={styles.list}>
            
           <li className={styles.item}> <Link to="/"><img src={logo} alt="Main"/></Link></li>
           <li className={styles.item}> <Link exact to="/"> Home</Link></li>
           <li className={styles.item}> <Link exact to="/newproject">Novo Projeto</Link></li>
           <li className={styles.item}> <Link exact to= "/projects">Projetos</Link> </li>
           <li className={styles.item}> <Link exact to= "/company">Sobre</Link> </li>
        </ul>
          </Container>

       </nav>

)}
export default Navbar;