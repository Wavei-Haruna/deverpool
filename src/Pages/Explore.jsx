import React, { useState } from "react";

export default function Explore() {
  const [isHovered, setIsHovered] = useState(false);

  const mouseIn = () => {
    setIsHovered(true);
  };
  const mouseOut = () => {
    setIsHovered(false);
  };
  const subMenumouseOut = () => {
    setIsHovered(false);
  };
  const subMenumouseIn = () => {
    setIsHovered(true);
  };

  return (
    <li onMouseEnter={mouseIn} className="relative cursor-pointer">
      Explore
      {isHovered && (
        <ul
          className="absolute left-0 mt-2 p-2 bg-white transition-all shadow-md rounded-md duration-300 ease-in-out "
          onMouseLeave={subMenumouseOut}
        >
          <li className="cursor-pointer   w-fit px-2 text-sm p-3">All Apps</li>
          <li className="cursor-pointer   w-fit px-2 text-sm py-3">
            Categories{" "}
          </li>
          <li className="cursor-pointer   w-fit px-2 text-sm py-3">
            Top rated
          </li>
        </ul>
      )}
    </li>
  );
}
