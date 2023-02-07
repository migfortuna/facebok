import React, { useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { uploadString, getDownloadURL, ref } from "firebase/storage";
import {
  VideoCameraIcon,
  CameraIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";
import { v4 as uuidV4 } from "uuid";

import { UserSession } from "@/types/session";
import { Post } from "@/types/feed";
import { postCollection, storage } from "@/firebase";

type Props = {};

function InputBox({}: Props) {
  const { data }: UserSession = useSession();
  const inputEl = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageToPost, setImageToPost] = useState<any>(null);

  const sendPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: Post = {
      id: uuidV4(),
      email: data?.user?.email,
      image: data?.user?.image,
      message: inputEl.current?.value,
      name: data?.user?.name,
      timestamp: serverTimestamp(),
    };

    try {
      const postRef = doc(postCollection, newPost.id);
      await setDoc(postRef, newPost);
      inputEl.current ? (inputEl.current.value = "") : null;

      if (imageToPost) {
        const storageRef = ref(storage, `posts/${newPost.id}`);
        const uploadTask = await uploadString(
          storageRef,
          imageToPost,
          "data_url"
        );
        await getDownloadURL(uploadTask.ref).then((downloadUrl) => {
          setDoc(postRef, { postImage: downloadUrl }, { merge: true });
        });

        removeImage();
      }
    } catch (err) {
      console.error("ADD POST ERR", err);
    }
  };

  const addImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files && e.target.files?.length > 0) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target?.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
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

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150
          transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly items-center border-t pt-2">
        <div className="inputIcon">
          <VideoCameraIcon className="h-6 text-red-500" />
          <p className="hidden md:inline-flex text-xs sm:text-sm xl:text-md">
            Live Video
          </p>
        </div>
        <div onClick={() => fileRef.current?.click()} className="inputIcon">
          <CameraIcon className="h-6 text-blue-400" />
          <p className="hidden md:inline-flex text-xs sm:text-sm xl:text-md">
            Photo/Video
          </p>
          <input ref={fileRef} type="file" onChange={addImageToPost} hidden />
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
