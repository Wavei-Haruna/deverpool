import { FaAngleRight } from "react-icons/fa";
import heroImage from "../assets/Images/cto.png";
import SlideLeft from "../Animations/SlideLeft";

export default function TopHero() {
  return (
    <div className="grid md:grid-cols-2 flex-col-reverse gap-4 mt-24 px-2">
      <div className="flex flex-col gap-4 items-center justify-center text-center min-w-[300px] max-w font-hero">
        <SlideLeft x={-600} duration={0.5} once={true}>
          <h1 className="text-center text-2xl md:text-3xl font-bold">
            Discover, purchase, and customize your perfect software solution.
          </h1>
        </SlideLeft>
        <span>
          Simplifying software procurement and customization for developers and
          clients.
        </span>
        <button className="primary-btn p-2 flex items-center bg-[#4bb543] text-white text-[18px] rounded font-bold hover:scale-105">
          <span className="whitespace-nowrap">Get started</span>
          <FaAngleRight color="white" />
        </button>
      </div>
      <div className="bg-center bg-no-repeat bg-contain min-h-[300px] w-auto min-w-[300px] flex-grow">
        <img src={heroImage} alt="hero-image" />
      </div>
    </div>
  );
}
