import Template from '../Template1/Template';
import data from './Data.json'
function Projects() {
  return (
    <div className="features section__padding" id="projects">
      <div className="features-heading">
        <h1 className="gradient__text">Projects</h1>
        <p>You can click on the title of the project, to open it.</p>
      </div>

      <div className="features-container">
        <div>
          {
            data.map((projects, index)=>(
                <Template key={index} head={projects.head} link={projects.link} content={projects.content}/>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Projects;
