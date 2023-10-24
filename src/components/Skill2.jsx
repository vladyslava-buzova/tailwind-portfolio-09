import { skills } from "../data";
import SectionTitle from './SectionTitle';
import SkillsCard2 from './SkillsCard2';

const Skill2 = () => {
  return (
    <section className="py-20 align-elements black" id="skills">
      <SectionTitle text='Skills' className='mb-8'/>
      <div className="mt-8 grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => {
          return (
            <SkillsCard2 key={skill.id} {...skill} />
          )
        })}
      </div>
    </section>
  )
}

export default Skill2