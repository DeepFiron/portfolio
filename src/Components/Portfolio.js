import React from "react";

function Portfolio() {
  return (
    <div>
      <h1 className = "opacity-20 md:text-6xl pointer-events-none absolute md:bottom-8 right-3 ">PORTFOLIO</h1>
      <article className="my-6 mr-16 ml-4 text-justify">
      <section className = "p-2">
          <h2 className="text-4xl font-bold pb-2 text-yellow-200">Projects</h2>
          <div className="pb-4 text-xl indent-2">
            I have completed 2 projects (and counting) for companies and clients
            from around the globe. Most of these projects were done under NDA
            and IP agreements but there are few projects that I can showcase
            here.
          </div>
          <h3 className="text-2xl font-semibold p-1.5 text-yellow-200 ">Some Project</h3>
          <div className="pb-4 text-xl indent-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            aliquid, animi deleniti esse magni laborum minima ex eius ipsa,
            similique totam? Distinctio, quis.
          </div>
          <div className="project-image flex">
            <img src="../../assets/icons/oa-app-001.png" class="w-2/3" />
            <ul class="list-for-features flex flex-col flex-grow justify-center space-y-4">
              <li>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="list-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M14 18v2l2 1v1H8l-.004-.996L10 20v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H14zM4 5v9h16V5H4z"></path>
                  </g>
                </svg>{" "}
                <span>Desktop Application for MacOs</span>
              </li>
              <li>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  class="list-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M2.648 11.678c-1.038-1.81-1.249-3.504-.511-4.781.988-1.712 3.468-2.31 6.604-1.739a.322.322 0 1 1-.115.633c-2.9-.528-5.111.005-5.932 1.428-.605 1.047-.423 2.509.512 4.14a.322.322 0 1 1-.558.32zm14.92-6.069c1.835.024 3.156.596 3.751 1.626.82 1.419.18 3.595-1.718 5.837a.322.322 0 1 0 .49.416c2.054-2.426 2.771-4.866 1.785-6.575-.726-1.257-2.26-1.92-4.299-1.947a.322.322 0 1 0-.008.643zm-1.854 15.239a.322.322 0 0 0-.442.11c-.934 1.553-2.08 2.399-3.26 2.399-1.642 0-3.208-1.647-4.2-4.418a.322.322 0 1 0-.606.217C8.279 22.154 10.036 24 12.01 24c1.44 0 2.773-.982 3.813-2.71a.322.322 0 0 0-.11-.442zm7.356-2.594a1.54 1.54 0 0 1-2.436 1.25c-2.455 1.445-7.146.71-11.56-1.84-1.88-1.085-3.527-2.392-4.795-3.785a.322.322 0 1 1 .476-.433c1.222 1.343 2.817 2.609 4.64 3.661 4.167 2.406 8.553 3.12 10.797 1.906a1.54 1.54 0 1 1 2.878-.759zm-19.062 0a1.54 1.54 0 1 1-2.285-1.345c-.233-2.877 2.79-6.734 7.36-9.372 1.898-1.096 3.874-1.874 5.731-2.271a.322.322 0 0 1 .135.628c-1.79.384-3.703 1.137-5.545 2.2-4.304 2.485-7.148 6.067-7.048 8.627.038-.003.075-.006.113-.006.85 0 1.54.69 1.54 1.54zM10.472 1.54a1.54 1.54 0 0 1 3.078 0c0 .023-.002.045-.003.067 2.549 1.317 4.32 5.81 4.32 11.003 0 2.135-.298 4.184-.854 5.96a.322.322 0 1 1-.614-.192c.536-1.712.825-3.697.825-5.768 0-4.89-1.626-9.095-3.847-10.363a1.538 1.538 0 0 1-2.905-.707zm1.304 9.981a1.114 1.114 0 1 0 .47 2.178 1.114 1.114 0 0 0-.47-2.178z"></path>
                </svg>{" "}
                <span>Electron.js</span>
              </li>
              <li>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  class="list-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                </svg>{" "}
                <span>Tailwind CSS</span>
              </li>
              <li>
                <a href="#put-repo-link" target="_blank">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    class="list-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>{" "}
                  <span>GitHub Repo</span>
                </a>
              </li>
              <li class="self-center">
                <br />
                <a href="#comming-soon" class="contact-button ">
                  Wanna Know More?
                </a>
              </li>
            </ul>
          </div>
          
        </section>
      </article>
    </div>
  );
}

export default Portfolio;
