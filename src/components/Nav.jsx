import { useState } from "react";
import { logoDark, logoLight } from "../assets/images";
import { hamburger } from "../assets/icons";
// importing the links data from the index.js in constants folder
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
const Nav = () => {
    
    const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);

  const toggleThemeHandler = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    return (
    <header className={`padding-x py-8 fixed top-0 left-0 right-0 z-10 w-full ${darkMode ? 'dark' : 'bg-white text-slate-gray'}`}>
      <nav className="flex relative justify-between items-center max-container">
        <a href="/" className="flex items-center gap-3">
          <img src={ darkMode ? logoDark : logoLight } alt="logo" width={90} height={29} />
          <span className="font-bold text-2xl text-coral-red">Roudi Alzkemi</span>
        </a>
        <ul className="flex justify-center items-center gap-16 max-small:hidden">
        <button onClick={toggleThemeHandler}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
          {
            // mapping through the navlinks to display all of them
            navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="font-montserrat leading-normal text-lg "
                >
                  {item.label}
                </Link>
              </li>
            ))
          }
        </ul>

        {/* Display the menu icon on small devices */}
        <div className="hidden max-small:block cursor-pointer">
          <img src={hamburger} onClick={()=> setIsMenuOpen(prev => !prev)} alt="hamburger-menu" width={25} height={25} />
        </div>
          {
            isMenuOpen && 
          <div className="hidden z-20 max-small:block border border-t-0 top-16 absolute w-full bg-white rounded-lg">
            <ul className="flex flex-col gap-4 p-8">
              {
                // mapping through the navlinks to display all of them
                navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-gray-700 font-montserrat leading-normal text-xl font-bold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          }
      </nav>
    </header>
  );
};

export default Nav;
