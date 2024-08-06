"use client";

import { useEffect, useState } from "react";
import ConversationHeader from "./ConversationHeader";

const IntroductionCard = () => {
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
        visible ? "slide-up" : ""
      }`}
    >
      <ConversationHeader headerTitle="Greetings"/>
      <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl sm:ml-12">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="/ProfileImage.jpg" alt="Modern building architecture"/>
    </div>
    <div className="p-8">
      <p className="block mt-1 text-lg leading-tight font-medium text-black">Hi! My name is Satya Rai</p>
      <p className="mt-2 text-slate-500">A passionate software developer from Darjeeling, India. With a strong background in full-stack web development and desktop applications, I thrive on creating impactful solutions that drive efficiency and enhance user experiences. Lets connect and innovate together!</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default IntroductionCard;
