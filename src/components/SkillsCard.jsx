/* eslint-disable react/prop-types */

const SkillsCard = ({ title, icon, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold text-black">{title}</h4>
      <p className="mt-2 text-black">{text}</p>
    </article>
  )
}

export default SkillsCard