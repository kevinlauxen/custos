import styles from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import Submit  from '../form/Submit'


function ProjectForm({btnText}){
    return(
        <form className={styles.form}>

            <Input type="text" 
            text="Nome do projeto: "
            placeholder="Insira o nome do projeto"
            name="name"
            />
            <div>   <Input type="number" 
            text="Valor do projeto: "
            placeholder="Insira o valor do projeto"
            name="budget"
            /></div>
            
           
            <div>   <Input type="date" 
            text="Previsão de entrega: "
            placeholder="Insira a data de entrega do projeto"
            name="entrega"
            /></div>


            <div>   <Input type="text" 
            text="Descrição do projeto: "
            placeholder="Insira o resumo do projeto"
            name="descricao"
            /></div> 

            <div>
            <Select name="category_id"  text="Selecioner a categoria "/>
            </div>
            
            <Submit text={btnText}/>
        
        
        </form>
    )
}

export default ProjectForm;