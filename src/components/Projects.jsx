// import SectionTitle from "./SectionTitle"
import { projects } from '../data'
import ProjectCard from './ProjectCard'
import SectionTitle from "./SectionTitle"

const Projects = () => {
  return (
    <section className="black py-20 align-elements" id='projects'>
      <SectionTitle text='Projects' className='text-bold'/>
      <div className="w-94 py-16 grid md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-8">
        {projects.map((project) => {
          return (
            <ProjectCard key={project.id} {...project}/>
          )
        })}
      </div>
      
    </section>
  )
}

export default Projects