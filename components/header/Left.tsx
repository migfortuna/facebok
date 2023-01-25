import React from "react";
import Image from "next/image";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type Props = {};

function Left({}: Props) {
  return (
    <div className="flex cursor-pointer">
      <Image
        src="https://links.papareact.com/5me"
        width={40}
        height={40}
        alt="facebook"
        className="mr-1"
      />
      <div className="flex items-center rounded-full bg-gray-100 p-2">
        <MagnifyingGlassIcon className="h-5 text-gray-500" />
        <input
          className="hidden md:inline-flex flex-shrink items-center outline-none 
          bg-transparent placeholder-gray-500 ml-2"
          type="text"
          placeholder="Search Facebok"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default Left;
