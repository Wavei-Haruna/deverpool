import { FaPhone, FaStar } from "react-icons/fa";

export default function AppThumbnail({ app }) {
  return (
    <div className=" ">
      <p className="text-right my-6 pr-6 font-menu">{app.days}</p>
      <div className="grid  grid-cols-2 gap-5 p-3 justify-between border border-[#4cbc4ca3] shadow-md rounded-md hover:bg-slate-50 hover:shadow-lg cursor-pointer">
        <div className="grid gap-2">
          <div className="flex items-start  justify-normal gap-6">
            <img
              src={'/Images/people/' + app.image}
              alt=""
              className="w-[70px] h-[70px] rounded-full"
            />
            <span className="flex items-center font-menu">
              {app.stars}
              <FaStar color="#ffec3c" />
            </span>
          </div>

          <p className="font-semibold font-menu">{app.owner}</p>

          <p className="flex gap-3 text-blue-600 items-center jsutify-center">
            {app.phone}
            <FaPhone color="black" />
          </p>

          <p className="font-menu">{app.technologies}</p>
        </div>

        {/* right */}
        <div className="grid gap-2 justify-center ">
          <h1 className="font-semibold text-xl md:text-2xl font-menu">{app.app}</h1>
          <p className="text-blue-600 font-semibold font-menu">{app.price}</p>
          <p className="text-gray-400 font-menu">{app.negotiable && "Negotiable"}</p>
          <button className="hover:text-blue-800 transition duration-200 ease-in-out font-menu">See more...</button>
        </div>
      </div>
    </div>
  );
}
