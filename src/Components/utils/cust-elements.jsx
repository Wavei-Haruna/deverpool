import { FaPhone, FaStar } from "react-icons/fa";

export default function AppThumbnail({ app }) {
  return (
    <div className="">
      <p className="text-right my-6 pr-6">{app.days}</p>
      <div className="grid grid-cols-2 gap-5 p-3 justify-between border border-[#4cbc4ca3] shadow-md rounded-md hover:bg-slate-50 hover:shadow-lg cursor-pointer">
        <div className="grid gap-2">
          <div className="flex items-start justify-normal gap-6">
            <img
              src={'/Images/people/' + app.image}
              alt=""
              className="w-[70px] h-[70px] rounded-[30px]"
            />
            <span className="flex items-center">
              {app.stars}
              <FaStar color="#ffec3c" />
            </span>
          </div>

          <p>{app.owner}</p>

          <p className="flex gap-3 text-blue-600">
            {app.phone}
            <FaPhone color="black" />
          </p>

          <p>{app.technologies}</p>
        </div>

        {/* right */}
        <div className="grid gap-2 justify-center ">
          <h1 className="font-bold text-[20px]">{app.app}</h1>
          <p className="text-blue-600">{app.price}</p>
          <p className="text-gray-400">{app.negotiable && "Negotiable"}</p>
          <button className="hover:text-blue-800">See more...</button>
        </div>
      </div>
    </div>
  );
}
