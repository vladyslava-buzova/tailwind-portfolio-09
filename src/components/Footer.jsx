// const Footer = () => {
//   return (
//     <footer className=" bg-zinc-950 text-zinc-50 py-24" id='footer'>
//       Footer
//     </footer>
//   )
// }

// export default Footer


import { AiFillHeart } from 'react-icons/ai';
import { SlArrowUp } from 'react-icons/sl';
import { social } from '../data';

const Footer = () => {
  return (
    <footer className="footer-bg text-zinc-50 py-24" id='footer'>
      <container className="align-elements">
        <a href="#logo">
          <SlArrowUp/>
        </a>

        <ul className="flex gap-x-4 mt-4 align-elements align-center">
          {social.map((icon) => (
            <li key={icon.id}>
              <a href={icon.url}>
                {icon.img}
              </a>
            </li>
          ))}
        </ul>
    
        {/* <span className="footer__devider"></span> */}
        <p className='flex'>
          &copy;2023 - Developed with 
            <AiFillHeart className="h-8 w-8 text-red-300 duration-300 hover:text-red-500"/> 
          by Vladyslava Buzova
        </p>
      </container>
    </footer>
  )
}

export default Footer