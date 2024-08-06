"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import ConversationHeader from "./ConversationHeader";

const SlidingText = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 0); // Delay before the animation starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-start bg-white  w-full space-y-2 shadow border rounded-2xl py-6 px-12 ${
        visible ? "slide-up" : ""
      }`}
    >
      <ConversationHeader headerTitle="Greetings"/>
      <p className="text-xl lg:text-3xl font-bold px-12">
        Hi there! It is my pleasure to see you here.
      </p>
      <p className="text-xl lg:text-3xl font-bold px-12">
      My name is Satya Rai. I am a full stack web developer.
      </p>
      <p className="text-2xl text-right">
        What do you want to know about me?
      </p>
    </div>
  );
};

export default SlidingText;
