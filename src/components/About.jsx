import SectionTitle from './SectionTitle';
// import about from '../assets/about.svg'

const About = () => {
  return (
    <>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CBD4FB" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,181.3C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
    <section className=" blue-bg text-black py-20 pb-20" id='about'>
      {/* <div className="align-elements grid md:grid-cols-2 items-center gap-16"> */}
      <div className="align-elements items-center">
        {/* <img src={about} alt="" className='w-full h-64'/> */}
        <article>
          <SectionTitle text="About Me"/>
          <p className='mt-8 leading-loose text'>Software Developer with more than a year of experience in Frontend work looking for new challenges and professional opportunities. Have experience working with HTML5, CSS3, Sass (SCSS), JavaScript, Typescript, React, Tailwind, and Bulma frameworks and eager to improve my developer skills and learn new frameworks (Vue/Angular/React Native). My productivity level is high even while working under tight deadlines. My customer support background enhances my problem-solving and communication skills. Extremely responsible, and always strive to exceed the client's or company's requirements and expectations.</p>
        </article>
      </div>
    </section>
    </>
    
  )
}

export default About