import React, { useState } from "react";
import "./SideNav.css";
import { NavLink } from "react-router-dom";
import profilePic from "../assets/images/profile-pic.JPG";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";

function SideNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sideNav p-2 rounded-tl-2xl">
      <div className="block lg:hidden p-0 m-0">
        <div className="navbar">
          <NavLink to="#" className="menu-bars">
            <FaIcons.FaBars
              onClick={showSidebar}
              className="text-yellow-200 w-10 h-10 mt-4"
            />
          </NavLink>
        </div>
        <div
          className={
            sidebar
              ? "nav-menu active block lg:hidden p-1 m-0 rounded-tr-2xl"
              : "nav-menu block lg:hidden p-1 m-0 rounded-tr-2xl"
          }
        >
          <nav className="-my-0 mx-auto p-0 text-center">
            <ul className="nav-menu-items">
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
                >
                  About
                </NavLink>
              </li>
              <li className="p-2 items-center">
                <NavLink
                  activeClassName="text-yellow-400 underline hover:animate-pulse"
                  className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="p-2 items-center">
                <NavLink
                  activeClassName="text-yellow-400 underline hover:animate-pulse"
                  className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                  to="/workflow"
                >
                  Workflow
                </NavLink>
              </li>
              <li className="p-2 items-center">
                <NavLink
                  activeClassName="text-yellow-400 underline hover:animate-pulse"
                  className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                  to="/principles"
                >
                  Principles
                </NavLink>
              </li>
              <li className="p-2 items-center">
                <NavLink
                  activeClassName="text-yellow-400 underline hover:animate-pulse"
                  className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="hidden lg:block">
        <nav className="-my-0 mx-auto p-0 text-center">
          <ul className="p-0 text-2xl text-yellow-100 mt-6">
            <li className="p-2 items-center">
              <NavLink
                exact
                activeClassName="text-yellow-400 underline hover:animate-pulse"
                className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                to="/"
              >
                About
              </NavLink>
            </li>
            <li className="p-2 items-center">
              <NavLink
                activeClassName="text-yellow-400 underline hover:animate-pulse"
                className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="p-2 items-center">
              <NavLink
                activeClassName="text-yellow-400 underline hover:animate-pulse"
                className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                to="/workflow"
              >
                Workflow
              </NavLink>
            </li>
            <li className="p-2 items-center">
              <NavLink
                activeClassName="text-yellow-400 underline hover:animate-pulse"
                className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                to="/principles"
              >
                Principles
              </NavLink>
            </li>
            <li className="p-2 items-center">
              <NavLink
                activeClassName="text-yellow-400 underline hover:animate-pulse"
                className="p-1 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="items-center flex flex-col mt-6"></div>
        <img
          className="p-2 -my-0 mx-auto rounded-full w-48"
          src={profilePic}
          alt="Profile Pic"
        />
        <div className="text-2xl text-center font-semibold text-white">
          Deepak Kumar
        </div>
        <div className="text-xl text-center text-yellow-200">Web Developer</div>
        <div className="text-base text-center text-yellow-200">JavaScript</div>
        <ul className="pt-8">
          <li className="pt-6">
            <a
              className="text-2xl text-white hover:text-yellow-100 hover:animate-pulse"
              href="https://github.com/DeepFiron"
              target="_blank"
            >
              <FiIcons.FiGithub className="w-8 h-8 inline" /> GitHub
            </a>
          </li>
          <li className="pt-6">
            <a
              className="text-2xl text-white hover:text-yellow-100 hover:animate-pulse"
              href="https://www.linkedin.com/in/deepak-kumar-7411b91a0/"
              target="_blank"
            >
              <RiIcons.RiLinkedinBoxLine className="w-8 h-8 inline" /> LinkedIn
            </a>
          </li>
          <li className="pt-6">
            <a
              className="text-2xl text-white hover:text-yellow-100 hover:animate-pulse "
              href="https://twitter.com/DeepFiron"
              target="_blank"
            >
              <FiIcons.FiTwitter className="w-8 h-8 inline" /> Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
