import React, { useState } from "react";
import "./FormCreate.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router';

const FormCreate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  let history = useHistory();

  const postData = (event) => {
    event.preventDefault();
    axios.post("https://616d67e76dacbb001794c9fa.mockapi.io/contact", {
      name,
      email,
      description,
    }).then (() => {history.push('/read')})
  };

  return (
    <>
      <form className="flex flex-col">
        <div className="flex flex-row p-2">
          <input
            type="text"
            className="contact-form border md:border-2 text-base md:text-lg w-full mr-4 p-1 md:p-2 pl-2 md:pl-4"
            placeholder="Your Name?"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="contact-form border md:border-2 text-base md:text-lg w-full p-1 md:p-2 pl-2 md:pl-4"
            placeholder="Your Email Address?"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label className="p-2">
          <textarea
            rows="5"
            className="contact-form border md:border-2 text-base md:text-lg w-full mr-4 p-1 md:p-2 pl-2 md:pl-4"
            placeholder="Anything you like to add about the project?"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button
          onClick={postData}
          type="submit"
          className="contact-button border md:border-2 text-base md:text-lg hover:bg-yellow-200 p-2 w-44"
        >
          Send Message
        </button>
        <NavLink
          activeClassName="text-yellow-400 underline hover:animate-pulse"
          className="inline p-2 text-2xl text-yellow-100 mt-6 whitespace-nowrap hover:text-yellow-400 hover:underline hover:animate-pulse"
          to="/read"
        >
          Read the form submissions
        </NavLink>
      </form>
    </>
  );
};

export default FormCreate;
