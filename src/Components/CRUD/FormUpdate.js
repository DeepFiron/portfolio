import React, { useEffect, useState } from "react";
import "./FormUpdate.css";
import axios from "axios";
import { useHistory } from "react-router";

const FormUpdate = () => {
  let history = useHistory();
  const [id, setID] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setEmail(localStorage.getItem("Email"));
    setDescription(localStorage.getItem("Description"));
  }, []);

  const updateAPIData = (e) => {
    e.preventDefault();
    // console.log("e", e);
    // console.log(name, email, description);
    axios
      .put(`https://616d67e76dacbb001794c9fa.mockapi.io/contact/${id}`, {
        name,
        email,
        description,
      })
      .then(() => {
        history.push("/read");
      })
      // .catch((err) => {
      //   console.log(err);
      // });
  };

  return (
    <div className="lg:mr-16 lg:ml-4">
      <h1 className="aboutHeader opacity-20 lg:text-6xl text-4xl pointer-events-none lg:absolute lg:bottom-8 lg:right-3 ">
        Update
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold pb-2 text-yellow-200 text-center mt-4 lg:mt-8">
        React CRUD Operations - Update
      </h2>
      <form className="flex flex-col">
        <div className="flex flex-row p-2">
          <input
            type="text"
            className="contact-form border md:border-2 text-base md:text-lg w-full mr-4 p-1 md:p-2 pl-2 md:pl-4"
            placeholder="Your Name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="contact-form border md:border-2 text-base md:text-lg w-full p-1 md:p-2 pl-2 md:pl-4"
            placeholder="Your Email Address?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label className="p-2">
          <textarea
            rows="5"
            className="contact-form border md:border-2 text-base md:text-lg w-full mr-4 p-1 md:p-2 pl-2 md:pl-4"
            placeholder="Anything you like to add about the project?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button
          onClick={updateAPIData}
          type="submit"
          className="contact-button border md:border-2 text-base md:text-lg hover:bg-yellow-200 p-2 w-44"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default FormUpdate;
