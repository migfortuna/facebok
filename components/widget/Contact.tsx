import React from "react";
import Image from "next/image";

import { Contact as ContactType } from "@/types/widget";

type Props = {
  contact: ContactType;
};

function Contact({ contact }: Props) {
  return (
    <div className="flex items-center mb-2 space-x-3 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className="rounded-full object-cover h-10 w-10"
        src={contact.src}
        alt={contact.name}
        width={100}
        height={100}
      />
      <p>{contact.name}</p>
      <div className="absolute bottom-2 left-6 bg-green-400 h-3 w-3 rounded-full" />
    </div>
  );
}

export default Contact;
