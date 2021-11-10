import React, {useState} from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const dataWithoutId = ((apiData) => {
    let newArray = [];

    apiData.map((item) => {
      // here i am  extracting only userId and title
      let obj = { name: item.name, email: item.email, description:item.description };
      // after extracting what I need, I am adding it to newArray
      newArray.push(obj);
    });
    
      // now  I am adding newArray to localstate in order to passing it via props for exporting
    //   setAPIData(newArray);
      return newArray;
  });

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button
      onClick={(e) => exportToCSV(apiData, fileName)}
      // onClick={(e) => exportToCSV(dataWithoutId(apiData), fileName)}
      className="download-button border md:border-2 text-base md:text-lg p-0"
    >
      Export
    </button>
  );
};

export default ExportToExcel;
