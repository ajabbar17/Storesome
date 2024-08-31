"use client";
import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";

export default function InvoicePDF() {
  const downloadPDF = () => {
    const input = document.getElementById("invoice");

    html2canvas(input, {
      scale: 2,
      ignoreElements: (element) => {
        return element.id === "download-button"; // Ignore the download button
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div className="p-6 ml-14">
      <div id="invoice" className="bg-white shadow-md p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={300} height={300} className="w-12 h-12" />
            <h2 className="text-2xl font-bold ml-4">Invoice</h2>
          </div>
          <div className="text-right">
            <p>Your Company Name</p>
            <p>Your Business Address</p>
            <p>City, Country</p>
            <p>Postal</p>
          </div>
        </div>
        <div className="flex border-y py-1 border-slate-300 justify-between mb-6">
          <div>
            <h4 className="font-bold">BILL TO:</h4>
            <p>Company Name</p>
            <p>Address</p>
            <p>City</p>
            <p>Country</p>
            <p>Postal</p>
          </div>
          <div className="text-right">
            <p><strong>INVOICE #:</strong> 0000001</p>
            <p><strong>DATE:</strong> 12/31/20</p>
            <p><strong>INVOICE DUE DATE:</strong> 12/31/20</p>
            <button 
        id="download-button"
        onClick={downloadPDF}
        className="mt-4 px-4 py-2 font-medium text-white items-center self-center bg-black rounded-lg hover:scale-105 hover:bg-slate-800 transition-all"
      >
        Download PDF
      </button>
          </div>
        </div>
        <table className="w-full mb-6">
          <thead>
            <tr className="bg-black text-white text-left">
              <th className="p-2">ITEMS</th>
              <th className="p-2">DESCRIPTION</th>
              <th className="p-2">QUANTITY</th>
              <th className="p-2">PRICE</th>
              <th className="p-2">TAX</th>
              <th className="p-2">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">Item {index + 1}</td>
                <td className="p-2">Description</td>
                <td className="p-2">1</td>
                <td className="p-2">$0</td>
                <td className="p-2">0%</td>
                <td className="p-2">$0000.00</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mb-6">
          <div>
            <h4 className="font-bold">NOTES:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut nisi tempus massa blandit luctus.</p>
          </div>
          <div className="text-right">
            <h3 className="text-2xl font-bold">$0000.00</h3>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}
