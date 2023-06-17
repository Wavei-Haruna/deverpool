import { useEffect, useState } from "react";

export default function ScrollIndicator({ link, fill }) {
  const [adjust, setAdjust] = useState(0);

  useEffect(() => {
    let icon = document.querySelector("#arrow-indicator");
    let btn = document.querySelector("#arrow-indicator-btn");
    const timeout = setTimeout(() => {
      btn.style.rotate = "360deg";
      btn.style.bottom = "1rem";
      icon.style.width = "3rem";
      icon.style.height = "3rem";
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <button
      id="arrow-indicator-btn"
      style={{ transition: "all 1000ms ease" }}
      className="group rounded-full opacity-70 hover:opacity-100 bg-[#d9d9b78f] p-2 hover:bg-gray-50 hover:p-4 shadow-black transition-all absolute bottom-[calc(90%-7rem)] right-3"
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

export function TaillessArrow({ fill = "currentColor", fontSize, left }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3.5}
      stroke="currentColor"
      className={`${left ? "rotate-180" : "rotate-0"} w-5 h-5  `}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export function Star({ fill = "none", textcolor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={"w-5 h-5 " + (textcolor || "text-[#fae105]")}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}
export function PhoneIcon({ fill = "none",textcolor ,rotate}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${textcolor || "text-black"} ${
        rotate || "rotate-[10deg]"
      }  w-5 h-5 `}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

export function SearchIcon({ fill = "none",textcolor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${textcolor || "text-black"} w-5 h-5`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}
