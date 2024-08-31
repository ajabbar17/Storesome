import React from "react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Views",
      value: "$3.456K",
      icon: "👁️",
      change: "+0.43%",
      changeType: "increase",
    },
    {
      title: "Total Profit",
      value: "$45.2K",
      icon: "🛒",
      change: "+4.35%",
      changeType: "increase",
    },
    {
      title: "Total Product",
      value: "2.450",
      icon: "🛍️",
      change: "+2.59%",
      changeType: "increase",
    },
    {
      title: "Total Users",
      value: "3.456",
      icon: "👥",
      change: "-0.95%",
      changeType: "decrease",
    },
  ];

  return (
    <div className="ml-16 ps-20 py-6  min-h-screen">
      <h1 className="text-3xl font-bold text-[#170C6B] mb-6">Welcome To Dashboard</h1>
      <div className="text-lg text-gray-500 mb-10">Ecommerce / Dashboard</div>
    <div className="flex flex-wrap  h-screen justify-start  gap-3   ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between  p-4 h-1/3 bg-white rounded-2xl   shadow-md w-full sm:w-1/5"
        >
          <div className="flex items-center justify-center w-12 h-12 mb-3 text-2xl bg-blue-200 rounded-full">
            {stat.icon}
          </div>
          <div className="text-3xl font-semibold text-[#170C6B]">{stat.value}</div>
          <div className="text-[#170C6B]">{stat.title}</div>
          <div
            className={`mt-2 text-sm ${
              stat.changeType === "increase"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {stat.change}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
