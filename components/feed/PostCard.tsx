import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { DocumentData } from "firebase/firestore";

import { Post } from "@/types/feed";
import { UserSession } from "@/types/session";
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  post: Post | DocumentData;
}

function PostCard({ post }: Props) {
  const { data } = useSession() satisfies UserSession;
  console.log(post);

  return (
    <div className="p-3 my-3 max-w-xs md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-md shadow-md space-y-1">
      <div className="flex justify-between">
        {/* profile, name, and time */}
        <div className="flex items-center space-x-1">
          <Image
            src={data?.user?.image || ""}
            alt={data?.user?.name || ""}
            width={30}
            height={30}
            className="rounded-full"
          />

          <p className="text-sm font-bold">{data?.user?.name}</p>
        </div>

        {/* options and clear icon */}
        <div className="flex items-center space-x-2">
          <EllipsisHorizontalIcon width={25} height={25} color="gray" />
          <XMarkIcon width={25} height={25} color="gray" />
        </div>
      </div>

      <div>
        <p className="text-md">{post.message}</p>
      </div>
    </div>
  );
}

export default PostCard;
