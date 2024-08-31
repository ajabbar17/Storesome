"use client"
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Costings({ data }) {
  const pathname = usePathname();
  const basePath = `/${pathname.split('/')[1]}`; // Get the base path (e.g., '/packagingbird')

  return (
    <div className="p-6 ml-14">
      <div className="flex justify-between mb-4">
        <div className="relative flex items-center px-2">
          <IconSearch className="absolute ms-2 z-30 text-xs text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="ps-9 pr-4 py-2 absolute text-sm border border-gray-300 rounded-lg outline-none"
          />
        </div>
        <div className="flex px-4 items-center rounded-2xl bg-white py-2 space-x-2">
          <Link href={`${basePath}`} className="px-4 font-medium bg-white">
            Costing
          </Link>
          <Link href={`${basePath}/production`} className="px-4 font-medium">
            Production
          </Link>
          <Link href={`${basePath}/shipments`} className="px-4 font-medium">
            Shipments
          </Link>
          <Link href={`${basePath}/delivered`} className="px-4 font-medium">
            Delivered
          </Link>
        </div>
        <button className="px-4 font-medium text-white bg-black rounded-lg hover:scale-105 hover:bg-slate-800 transition-all">
          Add Costing
        </button>
      </div>
      <div className="bg-white shadow-xl shadow-slate-300 rounded-lg">
        <div className="px-6 py-4 text-xl font-semibold border-b">Costings</div>
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
                  <span className="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-3">{product.price}</td>
                <td className="px-6 py-3">{product.sales}</td>
                <td className="px-6 py-3">{product.createdAt}</td>
                <td className="flex justify-end px-6 py-3 space-x-2">
                  <button className="px-2 w-1/3 py-2 text-xs font-medium text-white bg-gray-500 rounded hover:bg-gray-600">
                    View
                  </button>
                  <button className="px-2 w-1/3 py-2 text-xs font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                    Approve
                  </button>
                  <button className="px-2 w-1/3 py-2 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-600">
                    Archive
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
