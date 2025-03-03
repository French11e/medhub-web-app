import React, { useState } from "react";
import bloodTestIcon from "../assets/blood-bag.png";
import cardiacEx from "../assets/cardiac.png";
import vaccs from "../assets/vaccine.png";
import consultation from "../assets/stethoscope.png";
import primaryCon from "../assets/doctor.png";
import appointment from "../assets/calendar.png";

const categories = [
  { name: "Blood Tests", icon: bloodTestIcon },
  { name: "Cardiac Exams", icon: cardiacEx },
  { name: "Vaccination Services", icon: vaccs },
  { name: "Medical Examinations", icon: consultation },
  { name: "Primary Consultations", icon: primaryCon },
  { name: "Appointment Booking", icon: appointment },
];

const CategoriesSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div id="categories" className="text-center mt-28">
      <h2 className="text-3xl font-semibold mb-6">Medical Tests Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelected(index)}
            className={`p-12 border-2 rounded-lg shadow-md cursor-pointer transition-transform duration-200 ${
              selected === index
                ? "bg-blue-500 text-white scale-105"
                : "bg-white hover:bg-gray-100 text-gray-800"
            } focus:outline-none focus:ring-2 focus:ring-blue-300`}
          >
            <div className="text-5xl mb-4">
              {typeof category.icon === "string" &&
              category.icon.startsWith("/") ? (
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-20 h-20 object-contain mx-auto"
                />
              ) : typeof category.icon === "string" &&
                !category.icon.startsWith("/") ? (
                <span>{category.icon}</span>
              ) : (
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-20 h-20 object-contain mx-auto"
                />
              )}
            </div>
            <h3 className="text-xl font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
