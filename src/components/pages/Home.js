import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../../layaout/LinkButton'

export function Home(){
    return <section className={styles.home_container}>
        <h1>Bienvenido!  <span>costs</span></h1>
        <p>comience a administrar sus proyectos ahora mismo!</p>
        <LinkButton to="/NewProject" text="Crear proyecto"/>
        <img src={savings} alt="Cost"/>
    </section>
}


export default Home