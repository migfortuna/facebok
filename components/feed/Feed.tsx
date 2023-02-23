import React from "react";
import { DocumentData } from "firebase/firestore";

import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

type Props = {
  posts: DocumentData[];
};

function Feed({ posts }: Props) {
  return (
    <div className="flex-grow sm:pt-3 mr-4 xl:mr-40 pb-20 h-screen overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feed;
