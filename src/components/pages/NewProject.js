import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";
import { useNavigate } from "react-router-dom";
export function NewProject() {
  const history = useNavigate();

  function createPost({ handleSubmit, project, projectData }) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5001/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Crear proyecto</h1>
      <p>cree sus proyectos para despues adicionar los servicios</p>
      <ProjectForm handleSubmit={createPost} btnText="Crear Proyecto" />
    </div>
  );
}

export default NewProject;
