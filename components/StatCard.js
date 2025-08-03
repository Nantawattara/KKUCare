import React from "react";

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
      <div className="text-amber-600 text-3xl">{icon}</div>
      <div>
        <h3 className="fs-1 text-gray-700 font-semibold">{title}</h3>
        <p className="text-gray-900 text-xl">{value}</p>
      </div>
    </div>
  );
}

export default StatCard;