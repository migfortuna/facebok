import React from "react";
import Image from "next/image";

import { Story } from "@/types/feed";

interface Props {
  story: Story;
}

function StoryCard({ story: { name, src, profile } }: Props) {
  return (
    <div className="relative h-10 w-10 sm:h-28 sm:w-20 md:h-48 md:w-32 lg:h-60 lg:w-36 cursor-pointer overflow-x mx-1 shadow-md rounded-full sm:rounded-md">
      <Image
        src={profile}
        alt={name}
        width={100}
        height={100}
        className="absolute opacity-0 lg:opacity-100 rounded-full object-cover z-20 top-3 left-3 h-10 w-10"
      />
      <p className="hidden lg:block absolute z-20 bottom-5 left-3 text-white text-sm font-bold">
        {name}
      </p>
      <Image
        src={src}
        alt={name}
        width={100}
        height={100}
        className="w-full h-full object-cover filter brightness-75 rounded-full sm:rounded-md"
      />
    </div>
  );
}

export default StoryCard;
