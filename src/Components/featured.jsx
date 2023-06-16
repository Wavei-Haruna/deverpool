import { apps } from "../data/apps";
import AppThumbnail from "./utils/cust-elements";
import { SearchIcon } from "./utils/icons";
export default function Featured() {
  return (
    <main className="my-12">
      <div className="flex justify-between items-center w-full px-5">
        <h2 className="text-[22px] font-bold">Featured</h2>
        <div className="flex px-2 py-2 rounded bg-white border-2 focus-within:outline outline-slate-600 outline-2">
          <input
            type="text"
            className=" indent-3 outline-none"
            placeholder="Search apps"
          />
          <SearchIcon />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 justify-between">
        {apps.slice(0, 10).map((app, ai) => (
          <AppThumbnail app={app} key={ai} />
        ))}
      </div>
    </main>
  );
}
