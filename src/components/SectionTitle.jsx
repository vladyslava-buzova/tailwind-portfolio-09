/* eslint-disable react/prop-types */

const SectionTitle = ({ text }) => {
  return <div className="border-b border-gray-200 pb-5" >
      <h2 className="text-3xl font-mediam tracking-wider capitalize text-black">
        {text}
      </h2>
    </div>
  
}

export default SectionTitle