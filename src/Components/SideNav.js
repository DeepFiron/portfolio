import React, { useState } from "react";
import "./SideNav.css";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Profile from "./Profile";

function SideNav() {
  let winStatus = window.innerWidth < 1024 ? false : true;

  const [sidebar, setSidebar] = useState(winStatus);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sideNav p-2 pt-0  rounded-tl-2xl">
      <div className="block p-0 m-0">
        <div className="navbar">
          <NavLink to="#" className="menu-bars block lg:hidden">
            <FaIcons.FaBars
              onClick={showSidebar}
              className="text-yellow-200 w-10 h-10 mt-4"
            />
          </NavLink>
        </div>
        <div
          className={
            sidebar
              ? "nav-menu active block p-1 m-0 rounded-tr-2xl"
              : "nav-menu block p-1 m-0 rounded-tr-2xl"
          }
        >
          <nav className="-my-0 mx-auto p-0 text-center">
            <ul className="nav-menu-items lg:hidden">
              <li className="navbar-toggle">
                <NavLink to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose
                    className="text-yellow-200 w-10 h-10"
                    onClick={showSidebar}
                  />
                </NavLink>
              </li>
            </ul>
            <ul className="p-0 text-2xl text-yellow-100 mt-6">
              <li className="p-2 items-center">
                <NavLink
                  exact
                  activeClassName="text-yellow-400 underline hover:animate-pulse"
                  className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                  to="/"
                  onClick={showSidebar}
                >
                  About
                </NavLink>
              </li>
              <li className="p-2 items-center">
                <NavLink
                  activeClassName="text-yellow-400 underline hover:animate-pulse"
                  className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                  to="/portfolio"
                  onClick={showSidebar}
                >
                  Portfolio
                </NavLink>
              </li>
              {/* <li className="p-2 items-center">
                <NavLink
                  activeClassName="text-yellow-400 underline hover:animate-pulse"
                  className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                  to="/workflow"
                  onClick={showSidebar}
                >
                  Workflow
                </NavLink>
              </li>
              <li className="p-2 items-center">
                <NavLink
                  activeClassName="text-yellow-400 underline hover:animate-pulse"
                  className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                  to="/principles"
                  onClick={showSidebar}
                >
                  Principles
                </NavLink>
              </li> */}
              <li className="p-2 items-center">
                <NavLink
                  activeClassName="text-yellow-400 underline hover:animate-pulse"
                  className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                  to="/contact"
                  onClick={showSidebar}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
