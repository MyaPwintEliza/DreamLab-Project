import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdLocalLibrary } from "react-icons/md";

import { TbMoneybag } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

function Navbar() {
  return (
    <div className="bg-white px-40 h-20 drop-shadow-xl w-full mt-5">
      <nav className="flex ">
        <img src="src/images/Icon.png" alt="Logo" />
        <ul className=" mx-20 flex gap-10 mt-2 ">
          <li className="flex gap-5">
            <AiFillHome color="#0092FF" size={25} />
            <p className="text-xl text-dreamLabColor1 no-underline">
              <a href="#">Home</a>
            </p>
          </li>
          <li className="flex gap-5">
            <MdLocalLibrary color="#54595F" size={25} />
            <p className="text-xl text-textColor1">
              <a className="no-underline" href="#">
                Library
              </a>
            </p>
          </li>

          <li className="flex gap-5">
            <TbMoneybag color="#54595F" size={25} fill="#54595F" />
            <p className="text-xl text-textColor1">
              <a href="#">Pricing</a>
            </p>
          </li>
        </ul>

        <div className="no-underline">
          <div className="absolute mx-5 mt-3.5">
            <AiOutlineSearch size={20} color="#0092FF" />
          </div>
          <input
            type="text"
            className="bg-dreamLabColor5 text-sm h-10 w-80 px-12 rounded-full focus:outline-none hover:cursor-pointer"
            placeholder="search here"
            name=""></input>
        </div>

        <div>
          <button class="bg-dreamLabColor2 h-9 w-32 hover:bg-blue-700 font-bold text-sm py-2 px-4 rounded mx-10">
            <div className="absolute">
              <BsPerson size={20} />
            </div>
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
