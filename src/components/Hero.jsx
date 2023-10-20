import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import heroImg from '../assets/hero.svg';
import { SiGmail} from 'react-icons/si';


const Hero = () => {
  return (
    <div className="page bg-emerald-100 text-zinc-950 py-24" >
      <div className="align-elements grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I&apos;m Vlada</h1>
          <p className="mt-4 text-3xl bg-emerald-100 capitalize tracking-wide">
            Front-End Developer/ Graphic Designer
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 bg-emerald-100 duration-300 hover:text-emerald-600"/>
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 bg-emerald-100 duration-300 hover:text-emerald-600"/>
            </a>
            <a href="#">
              <FaFacebookSquare className="h-8 w-8 bg-emerald-100 duration-300 hover:text-emerald-600"/>
            </a>
            <a href="#">
              <SiGmail className="h-8 w-8 bg-emerald-100 duration-300 hover:text-emerald-600"/>
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  )
}

export default Hero