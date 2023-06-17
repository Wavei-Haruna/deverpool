import { FaAngleRight } from "react-icons/fa";
import heroImage from "../assets/Images/cto.png";

export default function TopHero() {
  return (
    <div className="grid md:grid-cols-2 flex-col-reverse gap-4 mt-24 px-2">
      <div className="flex flex-col gap-4 items-center justify-center text-center min-w-[300px] max-w">
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          Discover, purchase, and customize your perfect software solution.
        </h1>
        <span>
          Simplifying software procurement and customization for developers and
          clients.
        </span>
<<<<<<< HEAD:src/Components/he.jsx
        <button className="w-[fit-content] p-2 flex items-center bg-[#04ff07] hover:scale-105 text-white text-[18px] rounded font-bold">
          <span className="whitespace-nowrap font-menu font-medium ">
            Get started
          </span>
          <TaillessArrow />
=======
        <button className="primary-btn p-2 flex items-center bg-[#4bb543] text-white text-[18px] rounded font-bold">
          <span className="whitespace-nowrap">Get started</span>
          <FaAngleRight color="white" />
>>>>>>> f55a0f6c67e3b5b7561d1aebe3213b36799d5533:src/Components/TopHero.jsx
        </button>
      </div>
      <div className="bg-center bg-no-repeat bg-contain min-h-[300px] w-auto min-w-[300px] flex-grow">
        <img src={heroImage} alt="hero-image" />
      </div>
    </div>
  );
}
