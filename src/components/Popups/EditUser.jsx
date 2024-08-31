import { IconEdit, IconUserPlus } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

export default function EditUser({ visibility, setVisibility, userData }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    role: "User",
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        username: userData.username || "",
        password: "", // Don't prefill the password field
        role: userData.role || "User",
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Updated user data:", formData);
    setVisibility(false);
  };

  if (!visibility) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="back px-7 rounded-l-xl text-white flex flex-col gap-3 pt-11 items-center h-[76.5%]    w-96 relative">
            <IconEdit className="text-white  w-1/4 h-1/4"/>
            <h1 className="text-3xl font-bold">Edit User</h1>
            <p className="text-lg text-center">You can add and edit user information such as name username and their roles.</p>

      </div>
      <div className="bg-white rounded-r-xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className=" block w-full px-3 py-2  border-b border-gray-600  shadow-sm focus:outline-none"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2  border-b border-gray-600  shadow-sm focus:outline-none"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2  border-b border-gray-600  shadow-sm focus:outline-none"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2  border-b border-gray-600  shadow-sm focus:outline-none"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2  border-b border-gray-600  shadow-sm focus:outline-none"
              required
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Owner">Owner</option>
              <option value="View-only">View-only</option>
            </select>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="button"
              className="mr-4 py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
              onClick={() => setVisibility(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-800"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
