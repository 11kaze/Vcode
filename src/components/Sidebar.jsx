import React, { useState } from "react";

// ICONS //
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";

// ICONS //

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Snippets", icon: LuBox },
    { id: 2, path: "/contributers", name: "Contributers", icon: TbUsers },
    { id: 3, path: "/messages", name: "Open chat", icon: LuMessageSquare },
  ];
  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-black border-2 pt-8 px-4 bg-white ">
      {/* logo */}
      <div className="mb-5 bg-white">
        <div className="flex">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuEq6z-jWf1Kzt7qK_fhGtE7VzO5ur8JuLqUyoUydRoUagNPXzVofWeyiBCl2amLeLmE&usqp=CAU" alt="Logo" className="w-16 h-16  md:flex" />
        </div>
        <div><b style={{ fontSize: '2.4vw' }}>Vcode</b></div>
      </div>
      {/* logo */}

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-black hover:text-white ${
              activeLink === index ? "bg-black text-white" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray hidden md:flex ">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Navigation Links */}

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full">
          {" "}
          <span>?</span> <span className="hidden md:flex">Need Help</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
