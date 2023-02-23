import React from "react";
import Image from "next/image";
import moment from "moment";
import { useSession } from "next-auth/react";
import { DocumentData, doc, deleteDoc } from "firebase/firestore";

import PostActions from "./PostActions";
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
    <div className="my-3 max-w-xs md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-md shadow-md space-y-1">
      <div className="flex justify-between pt-4 px-3">
        {/* profile, name, and time */}
        <div className="flex items-center space-x-2">
          <Image
            src={data?.user?.image || ""}
            alt={data?.user?.name || ""}
            width={40}
            height={40}
            className="rounded-full"
          />

          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold">{data?.user?.name}</p>
            {post.timestamp && (
              // <div className="flex justify-end">
              <p className="text-xs font-thin">
                {moment(post.timestamp.seconds, "X").format(
                  "MMMM DD, YYYY h:mm A"
                )}
              </p>
              // </div>
            )}
          </div>
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

      <div className="p-3">
        <p className="text-sm md:text-md">{post.message}</p>
      </div>

      {post.postImage && (
        <div>
          <Image
            src={post.postImage}
            alt={post.message}
            width={750}
            height={750}
            className="shadow-md"
          />
        </div>
      )}

      <PostActions />
    </div>
  );
}

export default PostCard;
