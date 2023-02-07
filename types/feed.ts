import { FieldValue } from "firebase/firestore";

export interface Story {
  name: string;
  src: string;
  profile: string;
}

export interface Post {
  id: string;
  email?: string | null;
  image?: string | null;
  message?: string | null;
  name?: string | null;
  postImage?: any;
  timestamp: FieldValue;
}
