import React from "react";
import profilePic from "../assets/images/profile-pic.JPG";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";

export default function Profile() {
  return (
    <div className="flex lg:flex-col justify-around">
      <div className = "self-auto">
        <img
          className="p-2 -my-0 mx-auto rounded-full w-32 lg:w-48"
          src={profilePic}
          alt="Profile Pic"
        />
        <div className="text-xl md:text-2xl text-center font-semibold text-white">
          Deepak Kumar
        </div>
        <div className="text-lg md:text-xl text-center text-yellow-200">Web Developer</div>
        <div className="text-sm md:text-base text-center text-yellow-200">JavaScript</div>
      </div>
      <ul className="pt-0 lg:pt-8 text-center">
        <li className="pt-6">
          <a
            className="text-xl md:text-2xl text-white hover:text-yellow-100 hover:animate-pulse"
            href="https://github.com/DeepFiron"
            target="_blank"
            rel="noreferrer"
          >
            <FiIcons.FiGithub className="md:w-8 md:h-8 inline" /> GitHub
          </a>
        </li>
        <li className="pt-6">
          <a
            className="text-xl md:text-2xl text-white hover:text-yellow-100 hover:animate-pulse"
            href="https://www.linkedin.com/in/deepak-kumar-7411b91a0/"
            target="_blank"
            rel="noreferrer"
          >
            <RiIcons.RiLinkedinBoxLine className="md:w-8 md:h-8 inline" /> LinkedIn
          </a>
        </li>
        <li className="pt-6">
          <a
            className="text-xl md:text-2xl text-white hover:text-yellow-100 hover:animate-pulse "
            href="https://twitter.com/DeepFiron"
            target="_blank"
            rel="noreferrer"
          >
            <FiIcons.FiTwitter className="md:w-8 md:h-8 inline" /> Twitter
          </a>
        </li>
      </ul>
    </div>
  );
}
