import React from "react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { UserIcon } from "@heroicons/react/24/solid";

type Props = {};

function Login({}: Props) {
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center space-y-10">
        <motion.h1
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-bold tracking-[1px]"
        >
          Welcome!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <UserIcon className="inline-flex p-2 h-20 w-20 bg-blue-500 text-white rounded-full" />
        </motion.div>
        <motion.button
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="border border-gray-400 text-gray-400 py-1 px-8 rounded-full uppercase tracking-[3px]"
          onClick={() => signIn("facebook", { redirect: false })}
        >
          sign In
        </motion.button>
      </div>
    </div>
  );
}

export default Login;
