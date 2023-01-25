import React from "react";
import { motion } from "framer-motion";

interface Props {
  Icon: any;
  active?: boolean;
}

function HeaderIcon({ Icon, active }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.75 }}
      className="cursor-pointer p-2 md:px-5 lg:px-10 group hover:bg-gray-100 rounded-xl"
    >
      <Icon
        className={`h-6 sm:h-7 mx-auto text-center text-gray-500 group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </motion.div>
  );
}

export default HeaderIcon;
