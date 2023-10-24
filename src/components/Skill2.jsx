import { skills } from "../data";
import SectionTitle from './SectionTitle';
import SkillsCard2 from './SkillsCard2';

const Skill2 = () => {
  return (
    <section className="py-20 align-elements black" id="skills">
      <SectionTitle text='Skills'/>
      <div className="py-1 grid gap-8 4md:grid-cols-4 lg:grid-cols-5">
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