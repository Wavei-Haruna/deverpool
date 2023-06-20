import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../../src/assets/Images/logo.png";
export default function Footer() {
  return (
    <main className="bg-[#262626] text-white px-[2vw] font-menu pt-7">
      <section
        className="flex flex-wrap gap-10 justify-center"
        // style={{ gridTemplateColumns: "40% 30% 30%" }}
      >
        <div className="min-w-[250px] max-w-[33%] px-5">
          <img src={Logo} alt="logo" className="h-16 w-auto" />
          <div>
            <p className=" text-2xl my-5">
              Discover, Purchase, and Customize Your Perfect Software Solution.
            </p>
            <p className="pl-12">
              Simplifying software procurement and customization for developers
              and clients.
            </p>
          </div>
        </div>

        <div>
          <div className="min-w-[250px] max-w-[33%] h-16 w-auto flex items-center justify-center ">
            Contact
          </div>
          <ul className="block space-y-6 py-8 h-96 border-[1.5px] px-4 border-t-0 border-b-0 sm:border-r-0 md:border-r border-primaryGreen">
            <li className="grid gap-3">
              <h2 className="flex items-center text-2xl gap-3">
                <AiOutlineMail />
                Our Email
              </h2>
              <p className="ml-12">
                <a href="mailto:deverpool@gmail.com" className="underline">
                  deverpool@gmail.com
                </a>
              </p>
            </li>
            <li className="grid gap-3">
              <h2 className="flex items-center text-2xl gap-3">
                <FaPhone className="rotate-180" />
                Call us on
              </h2>
              <p className="ml-12">+233208848299</p>
            </li>
          </ul>
        </div>

        <div>
          <div className="min-w-[250px] max-w-[33%] h-16 w-auto flex items-center justify-center sm:mt-7 ">
            Social media
          </div>
          <ul className="px-5 grid gap-4 py-8 sm:pt-0 h-96">
            <li className="flex gap-4 items-center">
              <FaFacebook className="text-3xl" />
              Facebook
            </li>
            <li className="flex gap-4 items-center">
              <FaLinkedin className="text-3xl" />
              LinkedIn
            </li>
            <li className="flex gap-4 items-center">
              <FaTwitter className="text-3xl" />
              Twitter
            </li>
            <li className="flex gap-4 items-center">
              <FaInstagram className="text-3xl" />
              Instagram
            </li>
            <li className="flex gap-4 items-center">
              <FaWhatsapp className="text-3xl" />
              Whatsapp
            </li>
          </ul>
        </div>
      </section>

      <section>FooterNav</section>
    </main>
  );
}
