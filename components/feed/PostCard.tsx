import React from "react";
import Image from "next/image";
import moment from "moment";
import { useSession } from "next-auth/react";
import { DocumentData, doc, deleteDoc } from "firebase/firestore";

import { Post } from "@/types/feed";
import { UserSession } from "@/types/session";
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { postCollection } from "@/firebase";

interface Props {
  post: Post | DocumentData;
}

function PostCard({ post }: Props) {
  const { data } = useSession() satisfies UserSession;

  const deletePost = async (id: string) => {
    try {
      const postRef = doc(postCollection, id);
      await deleteDoc(postRef);
    } catch (err) {
      console.error("DELETE ERR", err);
    }
  };

  return (
    <div className="p-3 my-3 max-w-xs md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-md shadow-md space-y-1">
      <div className="flex justify-between mb-2">
        {/* profile, name, and time */}
        <div className="flex items-center space-x-2">
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
          <EllipsisHorizontalIcon
            width={25}
            height={25}
            color="gray"
            className="hover:cursor-pointer"
          />
          <XMarkIcon
            width={25}
            height={25}
            color="gray"
            className="hover:cursor-pointer"
            onClick={() => deletePost(post.id)}
          />
        </div>
      </div>

      <div>
        <p className="text-sm md:text-md">{post.message}</p>
      </div>

      {post.postImage && (
        <div>
          <Image
            src={post.postImage}
            alt={post.message}
            width={500}
            height={500}
          />
        </div>
      )}

      {post.timestamp && (
        <div className="flex justify-end">
          <p className="text-xs font-thin">
            {moment(post.timestamp.seconds, "X").format("MMMM DD, YYYY h:mm A")}
          </p>
        </div>
      )}
    </div>
  );
}

export default PostCard;
