import React from "react";
import * as XLSX from "xlsx";
import axios from "axios";

function UpdateFromExcel(props) {

  const ids = props.apiData.map((data) => data.id);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      d.map((d) => {
        updateapiData(d);
      });
    });
  };

  const updateapiData = (d) => {
    const data = {
      name: d.name,
      email: d.email,
      description: d.description,
    };
    if (!d.id) {
      axios.post(`https://616d67e76dacbb001794c9fa.mockapi.io/contact`, data);
    } else if(ids.includes(d.id)) {
      axios.put(
        `https://616d67e76dacbb001794c9fa.mockapi.io/contact/${d.id}`,
        data
      );
    }
  };

  return (
    <>
      <input
        type="file"
        name="file"
        accept=".xlsx, .xls, .csv"
        className="upload-button border md:border-2 text-base md:text-lg p-0"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
    </>
  );
}

export default UpdateFromExcel;
