import SectionTitle from './SectionTitle';
import about from '../assets/about.svg'

const About = () => {
  return (
    <section className="bg-zinc-100 text-black py-20" id='about'>
      <div className="align-elements grid md:grid-cols-2 items-center gap-16">
        <img src={about} alt="" className='w-full h-64'/>
        <article>
          <SectionTitle text="About Me"/>
          <p className='mt-8 leading-loose text'>Software Developer with more than a year of experience in Frontend work looking for new challenges and professional opportunities. Have experience working with HTML5, CSS3, Sass (SCSS), JavaScript, Typescript, React, Tailwind, and Bulma frameworks and eager to improve my developer skills and learn new frameworks (Vue/Angular/React Native). Have a basic knowledge of SQL (ORDER BY, LIMIT, DISTINCT, NULL, LIKE, BETWEEN, IN, WHERE, JOIN), and OOP. My productivity level is high even while working under tight deadlines. My customer support background enhances my problem-solving and communication skills. Extremely responsible, and always strive to exceed the client's or company's requirements and expectations.</p>
        </article>
      </div>
    </section>
  )
}

export default About