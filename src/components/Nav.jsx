import {headerLogo}  from "../assets/images"
import { hamburger } from "../assets/icons"
// importing the links data from the index.js in constants folder
import { navLinks } from "../constants"
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex border-2 justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={29}/>
            </a>
            <ul className="flex justify-center items-center gap-16 max-[815px]:hidden">
                
                { // mapping through the navlinks to display all of them
                    navLinks.map((item) => (
                        <li key={item.label}><a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a></li>
                    ))
                }
            </ul>
            {/* Display the menu icon on small devices */}
            <div className="hidden max-[815px]:block">
                <img src={hamburger} alt="hamburger-menu" width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav