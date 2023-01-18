import style from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
export function ProjectForm({btnText}){
    return (
        <form className={style.form}>
            <Input
               type="text"
               text="Nombre del Proyecto"
               name="name"
               placeholder="Escriba el nombre del proyecto"
               />
            <Input 
               type="number" 
               text="Presupuesto del proyecto"
               name="budget"
               placeholder="Escribe el presupuesto"
               />
            <div>
            <Select name="category_id" text="Seleccione una categoria"/>
            </div>
            <SubmitButton text={btnText}/>

        </form>
    )
}

export default ProjectForm