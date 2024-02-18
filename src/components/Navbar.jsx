import { Link } from "react-scroll";
// import BiRestaurant from 'react-icons/bi'
import {BiChevronDown, BiRestaurant } from 'react-icons/bi'
import Button from "../Layouts/Button";
import { useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineMenuUnfold} from 'react-icons/ai'


const Navbar = () => {

    const [menu, setMenu]=useState(false);
    const handleChange=() =>{
        setMenu(!menu);
    };

    const closeMenu =()=>{
        setMenu(false);
    };

  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
             <BiRestaurant size={32}/>
            </span>
            <h1 className="text-xl font-semibold">WebChops</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>
             <div className="relative group">
                <div className="flex items-center gap-1">
                <Link
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Dishes
            </Link>
            <BiChevronDown className="cusor-pointer" size={25}/>
                </div>
                <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                    <Link
              to="soup"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Soup
            </Link>
            </li>
            <li>
                    <Link
              to="curry"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Curry
            </Link>
            </li>
            <li>
                    <Link
              to="pasta"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Pasta
            </Link>
            </li>
            <li>
            <Link
              to="grains"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Grains
            </Link>
            </li>
            <li>
                    <Link
              to="dough"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Doughs
            </Link>
                    </li>
                </ul>
             </div>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link 
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>
          {/* <button>Login</button> */}
          <Button title='Login'/>

          </nav>
          {/* menu */}
          <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange}/>
            ) :(
                <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
            )
        }
          </div>
        </div>
        {/* on large screen, menu should hide since menu is closed , menu function */}
        <div className={`${menu ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
 
        <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>
             <div className="relative group">
                <div className="flex items-center gap-1">
                <Link
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Dishes
            </Link>
                </div>
                <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                    <Link
              to="soup"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Soup
            </Link>
            </li>
            <li>
                    <Link
              to="curry"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Curry
            </Link>
            </li>
            <li>
                    <Link
              to="pasta"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Pasta
            </Link>
            </li>
            <li>
            <Link
              to="grains"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Grains
            </Link>
            </li>
            <li>
                    <Link
              to="dough"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Doughs
            </Link>
                    </li>
                </ul>
             </div>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link 
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>
            <Button title='Login'/>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
