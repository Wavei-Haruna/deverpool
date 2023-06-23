import { FaSearch } from "react-icons/fa";
import { apps } from "../assets/data/apps";
import AppThumbnail from "./Utils/CustElements";
export default function Featured() {
  return (
    <main className="my-12 w-full">
      <div className="flex justify-between items-center w-full px-5">
        <h2 className=" text-xl  md:text-2xl font-hero font-menu">Featured</h2>
        <div className="basic-inputWrapper flex items-center px-2 py-2 rounded ">
          <input
            type="text"
            className="indent-3 outline-none"
            placeholder="Search apps"
          />
          <FaSearch color="#1e2962" />
        </div>
      </div>
      <div className="grid w-full min-w-[270px] items-center md:grid-cols-2 gap-10 md:justify-between">
        {apps.slice(0, 4).map((app, ai) => (
          <AppThumbnail app={app} key={ai}  />
        ))}
      </div>
    </main>
  );
}
