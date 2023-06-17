import { TaillessArrow } from "./utils/icons";

export default function TopHero() {
  return (
    <div className="grid md:grid-cols-2 flex-col-reverse gap-4 mt-9 px-2">
      <div className="flex flex-col gap-4 items-center justify-center text-center min-w-[300px] max-w">
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          Discover, purchase, and customize your perfect software solution.
        </h1>
        <span>
          Simplifying software procurement and customization for developers and
          clients.
        </span>
        <button className="w-[fit-content] p-2 flex items-center bg-[#4bb543] text-white text-[18px] rounded font-bold">
          <span className="whitespace-nowrap">Get started</span>
          <TaillessArrow />
        </button>
      </div>
      <div
        style={{ backgroundImage: "url(/images/devices/i14d.jpg)" }}
        className="bg-center bg-no-repeat bg-contain min-h-[300px] min-w-[200px] flex-grow"
      ></div>
    </div>
  );
}
