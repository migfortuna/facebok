import React, { useCallback } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import {
  Bars3Icon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import { UserSession } from "@/types/session";

type Props = {};

function Right({}: Props) {
  const { data }: UserSession = useSession();
  const logout = useCallback(() => {
    signOut();
  }, []);
  return (
    <div className="flex items-center sm:space-x-2">
      {/* <p className="whitespace-nowrap font-semibold">Miguel Fortuna</p> */}
      <Bars3Icon className="icon" />
      <ChatBubbleOvalLeftEllipsisIcon className="icon" />
      <BellIcon className="icon" />
      <Image
        src={`${data?.user?.image}`}
        width={40}
        height={40}
        alt={`${data?.user?.name}`}
        className="rounded-full cursor-pointer"
        onClick={logout}
      />
    </div>
  );
}

export default Right;
