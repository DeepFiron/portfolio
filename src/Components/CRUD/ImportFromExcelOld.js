import React, { useState } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

const ImportFromExcel = () => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);

  const uploadExcel = (event) => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        setRows(resp.rows);
        setCols(resp.cols);
      }
    });

    //   axios.post(`https://616d67e76dacbb001794c9fa.mockapi.io/contact`, {
    //     method: 'GET',
    //     responseType: 'blob', // important
    // }).then((response) => {
    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', `${Date.now()}.xlsx`);
    //     document.body.appendChild(link);
    //     link.click();
    // });
    console.log("Upload the file");
  };
  return (
    <>
      <input
        type="file"
        name="file"
        onChange={uploadExcel}
        className="upload-button border md:border-2 text-base md:text-lg p-0"
      />
      <div>
        {rows && (
          <OutTable
            data={rows}
            columns={cols}
            tableClassName="ExcelTable2007"
            tableHeaderRowClass="heading"
          />
        )}
      </div>
    </>
  );
};

export default ImportFromExcel;
