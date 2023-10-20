// import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import heroImg from '../assets/hero.svg';
// import { SiGmail} from 'react-icons/si';
import { social } from '../data';


const Hero = () => {
  return (
    <div className="page text-zinc-950 py-24" >
      <div className="align-elements grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I&apos;m Vlada</h1>
          <p className="mt-4 text-3xl capitalize tracking-wide">
            Front-End Developer/ Graphic Designer
          </p>
          <button className="button-color hover:bg-black text-black hover:text-white duration-300 font-bold py-2 px-4 rounded-full">
            Download Resume
          </button>

          <ul className="flex gap-x-4 mt-4 align-elements align-center">
          {social.map((icon) => (
            <li key={icon.id}>
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
  )
}

export default Hero