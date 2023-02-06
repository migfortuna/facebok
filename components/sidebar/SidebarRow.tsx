import React from "react";
import Image from "next/image";

interface Props {
  src?: string | null;
  Icon?: any;
  title?: string | null;
}

function SidebarRow({ src, Icon, title }: Props) {
  return (
    <div className="flex items-center cursor-pointer rounded-xl hover:bg-gray-100 p-4 space-x-2">
      {src && (
        <Image
          src={`${src}`}
          width={30}
          height={30}
          alt={title || ""}
          className="rounded-full"
        />
      )}
      {Icon && <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium text-sm">{title}</p>
    </div>
  );
}

export default SidebarRow;
