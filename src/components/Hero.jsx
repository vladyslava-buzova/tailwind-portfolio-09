import heroImg from '../assets/hero.svg';
import { social } from '../data';
import resume from '../assets/Vlada_Buzova-Front-End_Developer-resume.pdf'


const Hero = () => {
  return (
    <>
    <div className="page text-zinc-950 pt-20 vh" >
      <div className="align-elements grid md:grid-cols-2 items-center gap-8">
        <article>
          {/* <h1 className="text-7xl font-bold tracking-wider">I&apos;m Vlada</h1> */}
          {/* <p className="mt-4 text-3xl capitalize tracking-wide">
            Front-End Developer/ Graphic Designer
          </p> */}
          <p className="text-5xl font-bold tracking-wide">
            Front-End Developer
          </p>
          <a href={ resume } download="Resume" className=" inline-block mt-10 button hover:bg-black black hover:text-white duration-300 font-midium py-2 px-4 rounded-full button">
            Download Resume
          </a>

          <ul className="flex gap-x-4 mt-5 align-center">
          {social.map((icon) => (
            <li key={icon.id} className={icon.classname}>
              <a href={icon.url}>
                {icon.img}
              </a>
            </li>
          ))}
        </ul>
        
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EEFB7D" fill-opacity="1" d="M0,128L34.3,154.7C68.6,181,137,235,206,234.7C274.3,235,343,181,411,149.3C480,117,549,107,617,128C685.7,149,754,203,823,202.7C891.4,203,960,149,1029,138.7C1097.1,128,1166,160,1234,176C1302.9,192,1371,192,1406,192L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </>
  )
}

export default Hero