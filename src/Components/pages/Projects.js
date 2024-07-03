import { useLocation } from 'react-router-dom';

import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import Loader from '../layout/Loading'

import styles from './Project.module.css'

import ProjectCard from '../project/ProjectCard';
import { useEffect, useState } from 'react';

function Projects(){


    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState ('')


    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout (() => { 
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers : {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 2000)
    }, [])



     function removeProject (id){
            fetch(`http://localhost:5000/projects/${id}` , 
              {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },

              }).then(res => res.json())
              .then((data) => {
                setProjects(projects.filter((project) => project.id !== id))
                setProjectMessage('Projeto removido com sucesso ')
              })
              .catch((err => console.log(err)))

     }



    return(
        <div className={styles.project_container}>
            
            <div className={styles.title_container}>

                <h1>Projetos: </h1>
                <LinkButton to="/newproject" text="Criar Projeto " />

            </div>
                { message && 
                    <Message msg={message} type="success" />
                    }
    


    { projectMessage && 
                    <Message msg={projectMessage} type="success" />
                    }

                    <Container customClass="start" >
                        {projects.length > 0 && 
                        projects.map((project) => 

                            <ProjectCard 
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            entrega={project.entrega}
                            descricao={project.descricao}
                            category={project.category?.name}
                            key={project.id}
                            handleRemove={removeProject}
                            />
                        )  }
                    {!removeLoading && <Loader />}
                    {removeLoading && projects.length === 0
                    && <Message msg="Nenhum projeto encontrado" type="error" />}
                    </Container>
           </div>
    )
}
export default Projects;