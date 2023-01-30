import React, { useCallback } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import {
  Bars3Icon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
} from "@heroicons/react/24/solid";

import { UserSession } from "@/types/session";

type Props = {};

function Right({}: Props) {
  const { data }: UserSession = useSession();
  const logout = useCallback(() => {
    signOut();
  }, []);
  return (
    <div className="flex items-center cursor-pointer sm:space-x-2">
      <Bars3Icon className="icon" />
      <ChatBubbleOvalLeftEllipsisIcon className="icon" />
      <BellIcon className="icon" />
      <div className="flex items-center" onClick={logout}>
        <Image
          src={`${data?.user?.image}`}
          width={40}
          height={40}
          alt={`${data?.user?.name}`}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden md:inline-flex whitespace-nowrap font-semibold ml-2">
          {data?.user?.name}
        </p>
      </div>
    </div>
  );
}

export default Right;
