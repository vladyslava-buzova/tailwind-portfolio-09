import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className=" blue-bg text-black py-20 pb-20" id='about'>
      <div className="align-elements items-center">
        <article>
          <SectionTitle text="About Me"/>
          <p className='mt-8 leading-loose text'>Software Developer with more than a year of experience in Frontend work looking for new challenges and professional opportunities. Have experience working with HTML5, CSS3, Sass (SCSS), JavaScript, Typescript, React, Tailwind, and Bulma frameworks and eager to improve my developer skills and learn new frameworks (Vue/Angular/React Native). My productivity level is high even while working under tight deadlines. My customer support background enhances my problem-solving and communication skills. Extremely responsible, and always strive to exceed the client's or company's requirements and expectations.</p>
        </article>
      </div>
    </section>
  )
}

export default About