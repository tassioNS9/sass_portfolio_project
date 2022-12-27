import "../styles/components/projectscontainer.sass";

const ProjectsContainer = () => {

  /*<a href="#"  className="btn">
  Ver Projetos
  </a>*/
  /* const videosProjects = [
     { id: "video1", name: "Projeto Site Android", icon: <DiHtml5 /> },
   ];*/
  return (
    <section>
      <h2>Projetos</h2>
      <p>
        Meus Projetos própios e projetos criados a partir de cursos podem ser encontrados nos meus repósitorios do GITHUB,
        entretanto alguns podem ser visualizados diretamente pelos seus respectivos links abaixo:
      </p>

      <ul className="list-projects">
        <li>
          <a href="https://tassions9.github.io/site-android/" target="_blank">Projeto Site Android </a>
        </li>
        <li><a href="https://tassions9.github.io/projeto-cordel/" target="_blank">Projeto Cordel Encantado</a></li>

        <li><a href="https://tnfilmes-lib.netlify.app/" target="_blank">Projeto Livraria de Filmes</a></li>

        <li><a href="https://tassions9.github.io/projeto_google_glass/" target="_blank"> Projeto Sobre o Google Glass</a></li>
      </ul>

    </section>
  );
};

export default ProjectsContainer;
