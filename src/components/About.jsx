import SectionTitle from './SectionTitle';
import about from '../assets/about.svg'

const About = () => {
  return (
    <section className="bg-zinc-100 text-black py-20" id='about'>
      <div className="align-elements grid md:grid-cols-2 items-center gap-16">
        <img src={about} alt="" className='w-full h-64'/>
        <article>
          <SectionTitle text="Code and Coffe"/>
          <p className='mt-8 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit, ea veniam doloremque impedit voluptates omnis consectetur eligendi assumenda nam? Nulla, expedita! Placeat, fugiat eos. Voluptatum accusantium illo quas asperiores.</p>
        </article>
      </div>
    </section>
  )
}

export default About