"use client";
import React, { useState } from "react";
import { IconTrash, IconEdit, IconUserPlus, IconX } from "@tabler/icons-react";

const AddUser = ({ visibility, setVisibility }) => {
  if (!visibility) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setVisibility(false);
  };

  return (
    <div className="fixed inset-0 flex flex-row-reverse items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-r-xl w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={() => setVisibility(false)}
        >
          <IconX size={24} />
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-b-2  border-gray-500 outline-none sm:text-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-b-2  border-gray-500 outline-none sm:text-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full border-b-2 border-gray-500 outline-none sm:text-sm p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              className="mt-1 block w-full border rounded-lg shadow-sm  border-slate-700 outline-none sm:text-sm p-2"
              required
            >
              <option value="Owner">Owner</option>
              <option value="Admin">Admin</option>
              <option value="View-only">View-only</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 back hover:bg-slate-800 text-white font-semibold rounded-md  focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="back flex rounded-l-xl justify-center items-center h-[66.4%]    w-96 relative">
            <IconUserPlus className="text-white  w-1/2 h-full"/>
      </div>
    </div>
  );
};

export default AddUser;