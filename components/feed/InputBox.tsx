import React, { useRef } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import {
  VideoCameraIcon,
  CameraIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";
import { v4 as uuidV4 } from "uuid";

import { UserSession } from "@/types/session";
import { Post } from "@/types/feed";
import { postCollection } from "@/firebase";

type Props = {};

function InputBox({}: Props) {
  const { data }: UserSession = useSession();
  const inputEl = useRef<HTMLInputElement>(null);

  const sendPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: Post = {
      id: uuidV4(),
      email: data?.user?.email,
      image: "New Image",
      message: inputEl.current?.value,
      name: data?.user?.name,
      timestamp: serverTimestamp(),
    };

    try {
      const postRef = doc(postCollection, newPost.id);
      await setDoc(postRef, newPost);
      inputEl.current ? (inputEl.current.value = "") : null;
    } catch (err) {
      console.error("ADD POST ERR", err);
    }
  };

  return (
    <div className="p-3 md:mt-6 max-w-xs md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-md shadow-md space-y-4">
      <div className="flex justify-center items-center space-x-2">
        <Image
          src={`${data?.user?.image}`}
          width={40}
          height={40}
          alt={`${data?.user?.name}`}
          className="rounded-full"
        />
        <form action="" className="w-full" onSubmit={sendPost}>
          <input
            ref={inputEl}
            autoComplete="off"
            type="text"
            name="userPost"
            id=""
            placeholder={`What's on your mind?`}
            className="w-full bg-gray-100 rounded-full text-gray-500 placeholder:text-gray-500 px-4 py-2 text-sm md:text-md focus:outline-none"
          />
          <button className="hidden" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-evenly items-center border-t pt-2">
        <div className="inputIcon">
          <VideoCameraIcon className="h-6 text-red-500" />
          <p className="hidden md:inline-flex text-xs sm:text-sm xl:text-md">
            Live Video
          </p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-6 text-blue-400" />
          <p className="hidden md:inline-flex text-xs sm:text-sm xl:text-md">
            Photo/Video
          </p>
        </div>
        <div className="inputIcon">
          <FaceSmileIcon className="h-6 text-yellow-300" />
          <p className="hidden md:inline-flex text-xs sm:text-sm xl:text-md">
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
