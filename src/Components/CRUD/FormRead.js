import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./FormRead.css";

import ExportToExcel from "./ExportToExcel";
import ImportFromExcel from "./ImportFromExcel";
import UpdateFromExcel from "./UpdateFromExcel";
// import ImportFromExcelOld from "./ImportFromExcelOld";

const FormRead = () => {

  const fakeUrl = "https://616d67e76dacbb001794c9fa.mockapi.io/contact";
  const fileName = "data";
  const [APIData, setAPIData] = useState([]);
  const [updationDone, setUpdationDone] = useState(false);

  useEffect(() => {
    axios.get(fakeUrl).then((response) => {
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
    axios.delete(`${fakeUrl}/${id}`).then(() => {
      getData();
    });
  };

  const getData = () => {
    axios.get(fakeUrl).then((getData) => {
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
        <ExportToExcel apiData={APIData} fileName={fileName} />
        {/* <ImportFromExcel/> */}
        <UpdateFromExcel apiData={APIData}  />
        {/* <ImportFromExcelOld/> */}
        <table className=" my-2 md:my-4 text-sm md:text-base md:indent-2 border-collapse table-auto mx-auto">
          <thead>
            <tr>
              <th className="border px-1 border-gray-400">Name</th>
              <th className="border px-1 border-gray-400">Email</th>
              <th className="border px-1 border-gray-400">Description</th>
              <th className="border px-1 border-gray-400">Update</th>
              <th className="border px-1 border-gray-400">Delete</th>
            </tr>
          </thead>
          <tbody>
            {APIData.map((data) => {
              return (
                <tr key = {data.id}>
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FormRead;
