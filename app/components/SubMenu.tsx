"use client";

import { useEffect, useState } from "react";

const SubMenu = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 0); // Delay before the animation starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-start bg-white w-full space-y-2 ${
        visible ? "fade-in" : ""
      }`}
    >
      <div className="w-full text-right text-lg font-medium pl-12 pt-4">
        <p>Please select what do you want to know?</p>
        <div className="flex justify-end items-center">
          <button className="border border-gray-500 px-4 py-2 rounded-full font-medium">About Me</button>
          <button className="border border-gray-500 px-4 py-2 rounded-full font-medium">Education</button>
          <button className="border border-gray-500 px-4 py-2 rounded-full font-medium">Projects</button>
          <button className="border border-gray-500 px-4 py-2 rounded-full font-medium">Skills</button>
          <button className="border border-gray-500 px-4 py-2 rounded-full font-medium">Testimonials</button>

        </div>
      </div>
    </div>
  );
};

export default SubMenu;
