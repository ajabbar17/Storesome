"use client";
import React, { useState } from "react";
import { IconTrash, IconEdit, IconUserPlus } from "@tabler/icons-react";
import AddUser from "./Popups/AddUser";
import EditUser from "./Popups/EditUser";

export default function Users() {
  const [isAddUserVisible, setAddUserVisible] = useState(false);
  const [isUpdateUserVisible, setUpdateUserVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const teamMembers = [
    {
      name: "Olivia Corlados",
      email: "olivia@untitledui.com",
      status: "Active",
      role: "Owner",
    },
    {
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      status: "Inactive",
      role: "Admin",
    },
    {
      name: "Lanar Steiner",
      email: "lana@untitledui.com",
      status: "Inactive",
      role: "Admin",
    },
    {
      name: "Demi Wilkinson",
      email: "demi@untitledui.com",
      status: "Active",
      role: "View-only",
    },
    {
      name: "Candice Wu",
      email: "candice@untitledui.com",
      status: "Invited",
      role: "View-only",
    },
  
    // Add other members similarly...
  ];

  const handleEditClick = (member) => {
    setSelectedUser(member);
    setUpdateUserVisible(true);
  };

  return (
    <div className="p-6 ml-14">
      <div className="flex justify-between mb-4">
        <h2 className="text-3xl font-semibold">Team Members</h2>
        <button
          className="flex items-center py-2 px-7 justify-center hover:scale-105 transition-all hover:bg-slate-800 font-medium text-white bg-black rounded-lg"
          onClick={() => setAddUserVisible(true)}
        >
          <IconUserPlus className="me-2" />
          Add User
        </button>
      </div>
      <div className="bg-white shadow-xl shadow-slate-300 rounded-lg">
        <div className="px-6 py-4 text-xl font-semibold border-b">
          Members List
        </div>
        <table className="w-full mt-4">
          <thead>
            <tr className="text-sm text-black border-b">
              <th className="px-6 py-2 text-left">Name</th>
              <th className="px-6 py-2 text-left">Email</th>
              <th className="px-6 py-2 text-left">Role</th>
              <th className="px-6 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{member.name}</td>
                <td className="px-6 py-3">{member.email}</td>
                <td className="px-6 py-3">{member.role}</td>
                <td className="flex justify-end px-6 py-3 space-x-2">
                  <button
                    className="px-2 py-1 items-center flex justify-center text-xs font-medium text-white"
                    onClick={() => handleEditClick(member)}
                  >
                    <IconEdit className="text-black hover:text-slate-500" />
                  </button>
                  <button className="px-2 py-1 text-xs flex justify-center font-medium text-white">
                    <IconTrash className="text-black hover:text-slate-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddUser visibility={isAddUserVisible} setVisibility={setAddUserVisible} />
      <EditUser
        visibility={isUpdateUserVisible}
        setVisibility={setUpdateUserVisible}
        userData={selectedUser}
      />
    </div>
  );
}
