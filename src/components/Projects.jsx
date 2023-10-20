// import SectionTitle from "./SectionTitle"
import { projects } from '../data'
import ProjectCard from './ProjectCard'
import SectionTitle from "./SectionTitle"

const Projects = () => {
  return (
    <section className="text-black py-20 align-elements" id='projects'>
      <SectionTitle text='web creations' />
      <div className="py-16 grid lg:grid-cols-2 lx:grid-cols-3 gap-8">
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