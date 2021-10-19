import React from "react";
import "./Contacts.css";
import * as SiIcons from "react-icons/si";
import FormCreate from "./CRUD/FormCreate";

function Contact() {
  let socialSide = window.innerWidth < 1024 ? "About section" : "left panel";

  return (
    <>
      <h1 className="contactsHeader opacity-20 lg:text-6xl text-4xl pointer-events-none lg:absolute lg:bottom-8 lg:right-3 ">
        CONTACT
      </h1>
      <article className="-mt-10 lg:mt-0 mb-0 my-2 lg:my-6 lg:mr-16 lg:ml-4 md:text-justify">
        <section className="p-2">
          <div className="pb-4 text-base md:text-xl indent-2">
            Wanna talk about tech? Need a project done? Or need a person to plan
            and implement your next big idea?
          </div>
          <div className="pb-4 text-base md:text-xl indent-2">
            You can contact me in various ways, I have listed links to all my
            social accounts in the {socialSide}. Or you can leave me a message
            here and I'll get right back to you.
          </div>
        </section>
        <FormCreate />
        
        <section>
          <div className="pt-4 md:pt-8 text-base md:text-xl indent-2">
            Or say hello on MS teams for a quick call or to get started
            immediately using this{" "}
            <a
              href="https://teams.microsoft.com/l/chat/0/0?users=deepak.kumar6@soprasteria.com "
              target="_blank"
              rel="noreferrer"
            >
              <SiIcons.SiMicrosoftteams className="align-middle inline" />
            </a>{" "}
            link.
          </div>
        </section>
      </article>
      <section className="p-2 lg:mr-16">
        {" "}
        <div className="py-4 md:py-8 text-base md:text-xl text-center">
          My current location:{" "}
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.64717804896!2d86.45029773757352!3d23.79505488680099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bced852ac675%3A0x54e21b36fbe5522f!2sBinod%20Nagar%2C%20Dhanbad%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1634477800987!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </section>
    </>
  );
}

export default Contact;
