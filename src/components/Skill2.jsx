import { skills } from "../data";
import SectionTitle from './SectionTitle';
import SkillsCard2 from './SkillsCard2';

const Skill2 = () => {
  return (
    <section className="py-20 align-elements black" id="skills">
      <SectionTitle text='Skills' className='mb-8'/>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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