import Image from "next/image";
import React from "react";

const StoryList = () => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <Image
        src="/people.png"
        alt="story"
        width={80}
        height={80}
        className="size-20 rounded-full ring-2"
      />
      <span className="font-medium">PhDBui</span>
    </div>
  );
};

export default StoryList;
