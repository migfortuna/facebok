import React, { useEffect, useState } from "react";
import { DocumentData, onSnapshot } from "firebase/firestore";

import PostCard from "./PostCard";
import { Post } from "@/types/feed";
import { postCollection } from "@/firebase";

type Props = {};

function Posts({}: Props) {
  const [posts, setPosts] = useState<DocumentData[] | Post[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(postCollection, (querySnapshot) => {
      let items: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPosts(items);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}

export default Posts;
