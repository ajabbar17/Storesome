import React from "react";
import { IconSearch } from "@tabler/icons-react";

export default function Archive({ data }) {
  return (
    <div className="p-6 flex flex-col gap-5 py-9 ml-14">
      <div className="flex justify-between mb-4">
        <div className="relative flex items-center px-2">
          <IconSearch className="absolute ms-2 z-30 text-xs text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="ps-9 pr-4 py-2 absolute text-sm border border-gray-300 rounded-lg outline-none"
          />
        </div>
      </div>
      <div className="bg-white shadow-xl shadow-slate-300 rounded-lg">
        <div className="px-6 py-4 text-xl font-semibold border-b">Archived Costings</div>
        <table className="w-full mt-4">
          <thead>
            <tr className="text-sm text-gray-500 border-b">
              <th className="px-6 py-2 text-left">ID</th>
              <th className="px-6 py-2 text-left">Status</th>
              <th className="px-6 py-2 text-left">Price</th>
              <th className="px-6 py-2 text-left">Total Sales</th>
              <th className="px-6 py-2 text-left">Created at</th>
              <th className="px-6 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{product.id}</td>
                <td className="px-6 py-3">
                  <span className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full">
                    Archived
                  </span>
                </td>
                <td className="px-6 py-3">{product.price}</td>
                <td className="px-6 py-3">{product.sales}</td>
                <td className="px-6 py-3">{product.createdAt}</td>
                <td className="flex justify-end px-6 py-3">
                  <button className="px-2 w-full py-2 text-xs font-medium text-white bg-green-500 rounded hover:bg-green-600">
                    Unarchive
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
