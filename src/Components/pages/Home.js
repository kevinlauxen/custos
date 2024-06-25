import styles from './Home.module.css'
import Savings from '../../img/savings.svg'
import Linkbutton from '../layout/LinkButton';

function Home(){
    return(
        <section className={styles.homeContainer}>
                <h1>Bem vindo a pagina dos <span>Custos</span></h1>
                <p>Comece a criar seus projetos agora!!!</p>
                <Linkbutton to="/newproject" text="Criar Projeto " />
                <img src={Savings} alt="Costs" />

        </section>
    )
}
export default Home;