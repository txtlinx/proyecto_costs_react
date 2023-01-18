import {useState, useEffect} from 'react'


import style from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
export function ProjectForm({handleSubmit,btnText, projectData}){


const [categories, setCategories] = useState([])
const [project, setProject] = useState(projectData || {})
useEffect(() =>{
    fetch('http://localhost:5001/categories',{
        method: 'Get',
        headers: {
            'Content-Type' : 'application/json'
        },
    })
    .then((resp)=> resp.json())
  
    .then((data)=>{
        console.log(data)
        setCategories(data)
    })
    .catch((err)=>console.log(err));

   },[])

   const submit = (e) =>{
    e.preventDefault();
    handleSubmit(project);
   }

    
    return (
        <form  onSubmit={submit} onCclassName={style.form}>
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
            <Select 
                name="category_id" 
                text="Seleccione una categoria"
                options={categories}
            />
            </div>
            <SubmitButton text={btnText}/>

        </form>
    )
}

export default ProjectForm