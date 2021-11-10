import React, { useState } from "react";
import * as XLSX from "xlsx";

function ImportFromExcel() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState("hidden");

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
      //   console.log(d);
      setItems(d);
      setVisible("visible");
    });
  };

  return (
    <>
      <input
        type="file"
        name="file"
        className="upload-button border md:border-2 text-base md:text-lg p-0"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      <table class="table table-dark table-striped">
        <thead>
          <tr style={{visibility: visible}}>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key = {d.id}>
              <th scope="row">{d.name}</th>
              <td>{d.email}</td>
              <td>{d.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ImportFromExcel;
