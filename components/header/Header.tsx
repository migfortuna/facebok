import React from "react";

import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

interface Props {}

function Header({}: Props) {
  return (
    <div className="sticky top-0 z-50 bg-white flex justify-between items-center p-1 lg:px-5 shadow-md">
      <Left />
      <Middle />
      <Right />
    </div>
  );
}

export default Header;
