import React from "react";

import StoryCard from "./StoryCard";
import { Story } from "@/types/feed";

interface Props {}

const stories: Story[] = [
  {
    name: "Michael Jordan",
    src: "https://cdn.britannica.com/09/188709-050-03BF34CB/Michael-Jordan.jpg",
    profile: "https://hips.hearstapps.com/hmg-prod/images/michael-jordan.jpg",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories({}: Props) {
  return (
    <div className="flex mt-4 justify-center mx-auto mb-2">
      {stories.map((story, index) => (
        <StoryCard key={index} story={story} />
      ))}
    </div>
  );
}

export default Stories;
