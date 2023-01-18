
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

export function NewProject(){
    return (
        <div className={styles.newproject_container}>
            <h1>Crear proyecto</h1>
            <p>cree sus proyectos para despues adicionar los servicios</p>
            <ProjectForm btnText="Crear Proyecto"/>
        </div>
    )
}


export default NewProject