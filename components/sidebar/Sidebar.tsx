import React from "react";
import { useSession } from "next-auth/react";
import {
  UsersIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentListIcon,
  PlayIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

import SidebarRow from "./SidebarRow";
import { UserSession } from "@/types/session";

type Props = {};

function Sidebar({}: Props) {
  const { data }: UserSession = useSession();
  return (
    <div className="p-0 md:p-2 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={data?.user?.image} title={data?.user?.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={BuildingStorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={ClipboardDocumentListIcon} title="Most Recent" />
      <SidebarRow Icon={PlayIcon} title="Watch" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
