import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./FormRead.css";

const FormRead = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://616d67e76dacbb001794c9fa.mockapi.io/contact`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, name, email, description } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Description", description);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://616d67e76dacbb001794c9fa.mockapi.io/contact/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get(`https://616d67e76dacbb001794c9fa.mockapi.io/contact`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <>
      <h1 className="aboutHeader opacity-20 lg:text-6xl text-4xl pointer-events-none lg:absolute lg:bottom-8 lg:right-3 ">
        FORMREAD
      </h1>
      <div className="lg:mr-16 lg:ml-4">
        <h2 className="text-2xl md:text-4xl font-bold pb-2 text-yellow-200 text-center mt-4 lg:mt-8">
          React CRUD Operations - Read
        </h2>
        <table className=" my-2 md:my-4 text-sm md:text-base md:indent-2 border-collapse table-auto mx-auto">
          <tr>
            <th className="border px-1 border-gray-400">Name</th>
            <th className="border px-1 border-gray-400">Email</th>
            <th className="border px-1 border-gray-400">Description</th>
            <th className="border px-1 border-gray-400">Update</th>
            <th className="border px-1 border-gray-400">Delete</th>
          </tr>
          {APIData.map((data) => {
            return (
              <tr>
                <td className="border px-1 border-gray-400">{data.name}</td>
                <td className="border px-1 border-gray-400">{data.email}</td>
                <td className="border px-1 border-gray-400">
                  {data.description}
                </td>
                <td className="border px-1 border-gray-400">
                  <NavLink to="/update">
                    <button
                      onClick={() => setData(data)}
                      className="update-button border md:border-2 text-base md:text-lg p-0"
                    >
                      Update
                    </button>
                  </NavLink>
                </td>
                <td className="border px-1 border-gray-400">
                  <button
                    onClick={() => onDelete(data.id)}
                    className="delete-button border md:border-2 text-base md:text-lg p-0"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default FormRead;
