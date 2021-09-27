import React from "react";
import "./SideNav.css";
import { NavLink } from "react-router-dom";
import profilePic from "../assets/images/profile-pic.JPG";

function SideNav() {
  return (
    <div className="sideNav lg:w-2/3 p-2 rounded-tl-2xl">
      <div className="block lg:hidden p-0 m-0">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="inline-block w-10 h-10 top-0 sticky text-yellow-200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
          </g>
        </svg>
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
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 inline"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill-rule="nonzero"
                    d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
                  ></path>
                </g>
              </svg>{" "}
              GitHub
            </a>
          </li>
          <li className="pt-6">
            <a
              className="text-2xl text-white hover:text-yellow-100 hover:animate-pulse"
              href="https://www.linkedin.com/in/deepak-kumar-7411b91a0/"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 inline"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 1h2v7.5h-2V10zm5.5.43c.584-.565 1.266-.93 2-.93 2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 0 0-3.5 0v4.25h-2V10h2v.43z"></path>
                </g>
              </svg>{" "}
              LinkedIn
            </a>
          </li>
          {/* <li className = "pt-6">
            <a
              href="https://join.skype.com/invite/iQJuEhTO3AfG"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className = "w-12 h-12 inline"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill-rule="nonzero"
                    d="M13.004 18.423a2 2 0 0 1 1.237.207 3.25 3.25 0 0 0 4.389-4.389 2 2 0 0 1-.207-1.237 6.5 6.5 0 0 0-7.427-7.427 2 2 0 0 1-1.237-.207A3.25 3.25 0 0 0 5.37 9.76a2 2 0 0 1 .207 1.237 6.5 6.5 0 0 0 7.427 7.427zM12 20.5a8.5 8.5 0 0 1-8.4-9.81 5.25 5.25 0 0 1 7.09-7.09 8.5 8.5 0 0 1 9.71 9.71 5.25 5.25 0 0 1-7.09 7.09c-.427.066-.865.1-1.31.1zm.053-3.5C9.25 17 8 15.62 8 14.586c0-.532.39-.902.928-.902 1.2 0 .887 1.725 3.125 1.725 1.143 0 1.776-.624 1.776-1.261 0-.384-.188-.808-.943-.996l-2.49-.623c-2.006-.504-2.37-1.592-2.37-2.612C8.026 7.797 10.018 7 11.89 7c1.72 0 3.756.956 3.756 2.228 0 .545-.48.863-1.012.863-1.023 0-.835-1.418-2.9-1.418-1.023 0-1.596.462-1.596 1.126 0 .663.803.876 1.502 1.035l1.836.409C15.49 11.695 16 12.876 16 13.989 16 15.713 14.675 17 12.015 17h.038z"
                  ></path>
                </g>
              </svg>{" "}
              Skype
            </a>
          </li>
          <li className = "pt-6">
            <a className = "text-2xl text-white hover:text-yellow-100 hover:animate-pulse" href="https://www.freelancer.com/u/meeshal1994" target="_blank">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className = "w-12 h-12 inline"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"></path>
                </g>
              </svg>{" "}
              Freelancer.com
            </a>
          </li>
          <li className = "pt-6">
            <a
              href="https://www.upwork.com/freelancers/~0103fe67e06a87412c"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 50 50"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M1 9a1 1 0 00-1 1v14.5C0 30.832 5.168 36 11.5 36c5.723 0 10.285-4.293 11.15-9.78.617.855 1.203 1.727 1.899 2.509-1.244 5.269-2.795 11.857-3.545 15.042A1 1 0 0021.977 45h6.164a1 1 0 00.974-.771l2.36-10.016C33.325 35.183 35.467 36 38 36c6.607 0 12-5.393 12-12s-5.393-12-12-12c-4.648 0-8.67 2.736-10.65 6.787-2.1-3.634-3.67-7.466-4.243-9.115A1 1 0 0022.162 9H16a1 1 0 00-1 1v14.5c0 1.938-1.562 3.5-3.5 3.5A3.493 3.493 0 018 24.5V10a1 1 0 00-1-1H1zm1 2h4v13.5c0 3.024 2.476 5.5 5.5 5.5s5.5-2.476 5.5-5.5V11h4.482c.791 2.215 2.463 6.538 5.084 10.547a1 1 0 001.801-.277C29.571 16.955 33.491 14 38 14c5.523 0 10 4.477 10 10s-4.477 10-10 10c-2.584 0-4.86-.94-6.693-2.066a1 1 0 00-1.496.623L27.35 43h-4.11c.828-3.515 2.2-9.344 3.362-14.262a1 1 0 00-.243-.912c-1.292-1.388-2.469-2.992-3.513-4.652a1 1 0 00-1.846.533v.793c0 5.248-4.252 9.5-9.5 9.5A9.499 9.499 0 012 24.5V11zm36 7a6.005 6.005 0 00-5.81 4.5c-.072.278-.392 1.637-.893 3.758a1 1 0 00.344 1.008C33.155 28.493 35.372 30 38 30c3.3 0 6-2.7 6-6s-2.7-6-6-6zm0 2c2.215 0 4 1.785 4 4s-1.785 4-4 4c-1.631 0-3.274-.964-4.596-1.959l.723-3.045A3.984 3.984 0 0138 20z"></path>
              </svg>{" "}
              UpWork
            </a>
          </li>
          <li className = "pt-6">
            <a
              href="https://app.codesignal.com/coding-report/myrep"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className = "w-12 h-12 inline"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"></path>
                </g>
              </svg>{" "}
              CodeSignal
            </a>
          </li> */}
          <li className="pt-6">
            <a
              className="text-2xl text-white hover:text-yellow-100 hover:animate-pulse"
              href="https://twitter.com/DeepFiron"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 inline"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill-rule="nonzero"
                    d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"
                  ></path>
                </g>
              </svg>{" "}
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
