import styles from '../project/ProjectForm.module.css'
import { useState } from 'react';

import Input from '../form/Input';
import Submit from '../form/Submit';


function ServiceForm({ handleSubmit, btnText , projectData }){

        const [service, setService ] = useState({})

    function handleChange(e){
       
        setService({...service, [e.target.name]: e.target.value })

    }


    function submit (e){

        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)

    }

    return(
        <form onSubmit={submit} className={styles.form}>
            
        <Input  type="text" 
        text="Nome do serviço"
        name="name"
        placeholder="insira o nome do serviço "
        handleOnChange={handleChange}/>

        <Input  type="number" 
        text="Custo"
        name="cost"
        placeholder="insira o custo do serviço"
        handleOnChange={handleChange}/>
        
        <Input  type="text" 
        text="descrição"
        name="description"
        placeholder="descreva o serviço "
        handleOnChange={handleChange}/>
        

        <Submit text={btnText} />
        
        </form>
        
    )
}

export default ServiceForm;