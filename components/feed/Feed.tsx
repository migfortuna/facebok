import React from "react";

import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

type Props = {};

function Feed({}: Props) {
  return (
    <div className="flex-grow sm:pt-3 mr-4 xl:mr-40">
      <div className="mx-auto max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
