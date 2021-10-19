import React from "react";
import * as RiIcons from "react-icons/ri";

function Principles() {
  return (
    <>
      <h1 className="principlesHeader opacity-20 lg:text-6xl text-4xl pointer-events-none lg:absolute lg:bottom-8 lg:right-3 ">
        PRINCIPLES
      </h1>
      <article className="-mt-10 lg:mt-0 mb-0 lg:my-2 lg:my-6 lg:mr-16 lg:ml-4 md:text-justify">
        <section className="p-2">
          <h2 className="text-2xl md:text-4xl font-bold pb-2 text-yellow-200">
            Intro
          </h2>
          <div className="pb-4 text-base md:text-xl indent-2">
            I'm a software developer based in Jharkhand, India. Have 5+ years of
            experiences in software industry. Currently working with Sopra
            Steria as web developer.
          </div>
          <div className="pb-4 text-base md:text-xl indent-2">
            I{" "}
            <RiIcons.RiHeartFill className="text-red-600 align-middle inline" />{" "}
            to code, experiment, contribute &amp; learn new technologies. I am
            passionate about building complex tools, beautiful UIs, automation
            apps that improves productivity, empower people &amp; businesses,
            &amp; help them transform their ideas to a viable &amp; marketable
            product.
          </div>
        </section>
      </article>
    </>
  );
}

export default Principles;
