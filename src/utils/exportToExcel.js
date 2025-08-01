import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

 const exportToExcel = (data, fileName = "hostel_registrations.xlsx") => {
  // Convert JSON to worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);
  
  // Create a new workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");

  // Write to binary string and trigger download
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(blob, fileName);
};

export default exportToExcel;