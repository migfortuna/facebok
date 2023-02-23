import React from "react";

import {
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

type Props = {};

function PostActions({}: Props) {
  return (
    <div className="flex justify-between items-center rounded-b-md bg-white shadow-md text-gray-400 border-t">
      <div className="inputIcon rounded-none rounded-bl-md">
        <HandThumbUpIcon className="h-4" />
        <p>Like</p>
      </div>
      <div className="inputIcon rounded-none">
        <ChatBubbleLeftIcon className="h-4" />
        <p>Comment</p>
      </div>
      <div className="inputIcon rounded-none rounded-br-md">
        <ShareIcon className="h-4" />
        <p>Share</p>
      </div>
    </div>
  );
}

export default PostActions;
