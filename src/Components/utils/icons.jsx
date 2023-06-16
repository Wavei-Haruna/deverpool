import { useEffect, useState } from "react";

export default function ScrollIndicator({ link, fill }) {
  const [adjust, setAdjust] = useState(0);

  useEffect(() => {
    let icon = document.querySelector("#arrow-indicator");
    let btn = document.querySelector("#arrow-indicator-btn");
    const timeout = setTimeout(() => {
      btn.style.rotate = "-20deg";
      btn.style.bottom = "1rem";
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <button
      id="arrow-indicator-btn"
      className="group rounded-full opacity-70 hover:opacity-100 bg-[#d9d9b78f] p-2 hover:bg-gray-50 hover:p-4 hover:rotate-[20deg] shadow-black transition-all absolute bottom-[calc(90%-7rem)] right-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={fill || "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="group-hover:text-red-500 w-6 h-6"
        id="arrow-indicator"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
        />
      </svg>
    </button>
  );
}
