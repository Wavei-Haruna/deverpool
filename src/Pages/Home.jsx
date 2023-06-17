import React from "react";
import TopHero from "../Components/TopHero";
import Featured from "../Components/FeaturedApps";
import NewApps from "../Components/NewApps";
import AnimCp from "../Components/Anim";

export default function Home() {
  return (
    <div className="px-3 md:px-[8vw]">
      <TopHero />
      <Featured />
      <NewApps />
      <br />
      <AnimCp />
    </div>
  );
}
