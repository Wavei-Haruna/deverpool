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
          className="absolute left-0 mt-2 p-2 bg-white rounded-lg shadow-lg "
          onMouseLeave={subMenumouseOut}
        >
          <li className="cursor-pointer   w-fit px-2">All Apps</li>
          <li className="cursor-pointer   w-fit px-2">Categories </li>
          <li className="cursor-pointer   w-fit px-2">Top rated</li>
        </ul>
      )}
    </li>
  );
}
