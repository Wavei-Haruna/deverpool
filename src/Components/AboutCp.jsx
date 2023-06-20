import { FaCircle } from "react-icons/fa";

export default function AboutCp() {
  return (
    <main className={`mt-20 relative`}>
      <div className="relative bg-[#0b4bef] text-sm text-white font-menu rounded-2xl w-[85%] p-9 pr-36 pt-24">
        <div className="absolute left-0 top-6">
          <h2 className="ml-16 mb-2 capitalize text-[22px] font-semibold font-hero">
            About deverpool
          </h2>
          <div className=" h-2 w-56 bg-white"></div>
        </div>

        <p className="mb-8">
          Deverpool is a revolutionary software marketplace platform that brings
          together developers and clients in a seamless ecosystem.
        </p>
        <br />
        <p className="leading-7">
          Our mission is to empower developers to showcase their creations and
          connect with clients seeking innovative software solutions.
        </p>
        <p className="leading-7">
          At the same time, we strive to provide clients with a diverse
          selection of high-quality apps and the opportunity to engage in
          customized app development projects.
        </p>
        <div className="mb-10">
          <FaCircle className="h-[40px] w-[40px] float-right" />
        </div>
      </div>

      <img
        src="/Images/devices/i14b.jpg"
        alt=""
        className="absolute right-0 top-[20%] bottom-5 h-[60%] w-[40%] max-w-[200px]"
      />
    </main>
  );
}
