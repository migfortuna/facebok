import React from "react";

import Contact from "./Contact";
import {
  VideoCameraIcon,
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

const contacts = [
  {
    name: "Michael Jordan",
    src: "https://hips.hearstapps.com/hmg-prod/images/michael-jordan.jpg",
  },
  { name: "Elon Musk", src: "https://links.papareact.com/kxk" },
  { name: "Jeff Bezos", src: "https://links.papareact.com/k2j" },
  { name: "Mark Zuckerberg", src: "https://links.papareact.com/snf" },
  { name: "Bill Gates", src: "https://links.papareact.com/zvy" },
];

type Props = {};

function Widgets({}: Props) {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.name} contact={contact} />
      ))}
    </div>
  );
}

export default Widgets;
