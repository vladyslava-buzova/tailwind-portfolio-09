import { links } from '../data';

const Navbar = () => {
  return (
    <nav className="">
      <div className="align-elements justify-between py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold logo-color">
          V<span className='text-zinc-950' id='logo'>lada</span>.
        </h2>

        <div className="flex gap-x-3 ">{links.map((item) => {
          const { id, href, text } = item
          return (
            <a key={id} href={href} className='text-zinc-700 font-bold capitalize text-md tracking-wide duration-300 menu-hover'>
              {text}
            </a>
          )
        })}</div>
      </div>
    </nav>
  )
}

export default Navbar