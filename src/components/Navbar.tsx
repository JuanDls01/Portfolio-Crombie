import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import ThemeTogglerBttn from "./ThemeTogglerBttn";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const changeColorIfIsActive = (isActive: boolean) => {
    return `${isActive ? "text-[#ff3366]" : ""} text-lg font-medium`;
  };

  return (
    <div className='w-full max-w-[1280px] py-3 px-4 flex items-center justify-between'>
      <img src={logo} alt='logo crombie' className='w-40' />
      <ul className='w-3/6 flex items-center justify-between'>
        <li>
          <NavLink
            to='/home'
            className={({ isActive }) => changeColorIfIsActive(isActive)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/create-product'
            className={({ isActive }) => changeColorIfIsActive(isActive)}
          >
            Create Product
          </NavLink>
        </li>
        <li>
          <SearchBar />
        </li>
        <li>
          <ThemeTogglerBttn />
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
