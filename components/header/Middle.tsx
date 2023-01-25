import React from "react";
import {
  HomeIcon,
  PlayIcon,
  BuildingStorefrontIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import HeaderIcon from "./HeaderIcon";

type Props = {};

function Middle({}: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex items-center space-x-0 md:space-x-4">
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={BuildingStorefrontIcon} />
        <HeaderIcon Icon={UsersIcon} />
      </div>
    </div>
  );
}

export default Middle;
