/* eslint-disable react/prop-types */
// import SectionTitle from "./SectionTitle"
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = ({ img, url, github, title, text, technologies }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300' target='_blank'>
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-lg h-70'
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 text-zinc-950 leading-loose text'>{text}</p>
        <p className='mt-4 text-zinc-950 leading-loose'>{technologies}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww  className='h-8 w-8 text-zinc-500 hover:text-black duration-300'/>
          </a>
          <a href={github}>
            <FaGithubSquare  className='h-8 w-8 text-zinc-500 hover:text-black duration-300'/>
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard