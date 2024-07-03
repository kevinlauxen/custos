import { useEffect, useState } from 'react';


import styles from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import Submit  from '../form/Submit'


function ProjectForm({ handleSubmit , btnText , projectData }){

    const [categories , setCategories] = useState([])
    const [project , setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories",{
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        .then((res) => res.json())
        .then((data) => {
            setCategories(data)
        })
        .catch( (err) => console.log(err) )
    
    }, [])



        const submit = (e) => {
                e.preventDefault()
                handleSubmit(project)
        }
        function handleChange(e){
            setProject({ ...project , [e.target.name]: e.target.value })
              
        }

        function handleCategory(e){
            setProject({ ...project , category:{
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
         })
        }


    return(
        <form  onSubmit = { submit } className={styles.form}>

            <Input type="text" 
            text="Nome do projeto: "
            placeholder="Insira o nome do projeto"
            name="name"
            handleOnChange={handleChange}
            value={project.name ? project.name: ''}

            />
            <div>   <Input type="number" 
            text="Valor do projeto: "
            placeholder="Insira o valor do projeto"
            name="budget"
            handleOnChange={handleChange}
            value={project.budget ?  project.budget: ''}

            /></div>
            
           
            <div>   <Input type="date" 
            text="Previsão de entrega: "
            placeholder="Insira a data de entrega do projeto"
            name="entrega"
            handleOnChange={handleChange}
            value={project.entrega ?   project.entrega: ''}

            /></div>


            <div>   <Input type="text" 
            text="Descrição do projeto: "
            placeholder="Insira o resumo do projeto"
            name="descricao"
            handleOnChange={handleChange}   
            value={project.descricao ? project.descricao: ''}

            /></div> 

            <div>
            <Select name="category_id"  
            text="Selecione a categoria " 
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : '' } />
            </div> 
            
            <Submit text={btnText}/>
        
        
        </form>
    )
}

export default ProjectForm;