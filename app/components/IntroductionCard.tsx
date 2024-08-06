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

    >

    </div>
  );
};

export default IntroductionCard;
