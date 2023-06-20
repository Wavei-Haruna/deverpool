import { Link } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FcCollaboration } from "react-icons/fc";
import { CgBrowser } from "react-icons/cg";
import { TiSpanner } from "react-icons/ti";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsFillCreditCardFill } from "react-icons/bs";

export default function HowItWorks() {
  return (
    <main className="my-28 w-full">
      <h1 className="main-title">How it Works</h1>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-10 bg-black text-white">
        <Link to={"/browse-and-discover"} className="bg-primaryBlue flex p-3  ">
          <div className="flex flex-col gap-3 items-center p-2 justify-between">
            <span>
              <CgBrowser className="text-5xl" />
            </span>
            <span>Browse & Discover</span>
          </div>
        </Link>
        <Link to={"/customization"} className="bg-primaryGreen flex p-3  ">
          <div className="flex flex-col gap-3 items-center p-2 justify-between">
            <span>
              <BsFillCreditCardFill className="text-5xl" />
            </span>
            <span>Purchase or Request Customization</span>
          </div>
        </Link>
        <Link to={"/collaboration"} className="bg-primaryGreen flex p-3  ">
          <div className="flex flex-col gap-3 items-center p-2 justify-between">
            <span>
              <FcCollaboration className="text-5xl" />
            </span>
            <span>Connect & Collaborate</span>
          </div>
        </Link>
        <Link to={"/transaction"} className="bg-primaryGreen flex p-3  ">
          <div className="flex flex-col gap-3 items-center p-2 justify-between">
            <span>
              <RiSecurePaymentLine className="text-5xl" />
            </span>
            <span>Secure Transaction</span>
          </div>
        </Link>
        <Link to={"/app-support"} className="bg-primaryGreen flex p-3  ">
          <div className="flex flex-col gap-3 items-center p-2 justify-between">
            <span>
              <TiSpanner className="text-5xl" />
            </span>
            <span>App Management & Support</span>
          </div>
        </Link>
        <Link
          to={"/tutorials-and-mentorship"}
          className="bg-primaryGreen flex p-3  "
        >
          <div className="flex flex-col gap-3 items-center p-2 justify-between">
            <span>
              <FaChalkboardTeacher className="text-5xl" />
            </span>
            <span>Tutorials & Mentorship</span>
          </div>
        </Link>
      </section>
      <section className="bg-labBlack text-white p-3 pt-12  font-menu my-4 min-h-[260px] relative text-xl">
        <div className="absolute right-0 left-[10vw] h-4 bg-primaryBlue top-0"></div>
        <p>
          Start your journey by browsing through our extensive collection of
          software applications. Explore various categories, filter results, and
          discover apps that meet your specific needs. Each app listing provides
          detailed descriptions, screenshots, ratings, and reviews to help you
          make informed decisions
        </p>
      </section>
    </main>
  );
}
