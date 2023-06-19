import React from "react";
import TopHero from "../Components/TopHero";
import Featured from "../Components/FeaturedApps";
import NewApps from "../Components/NewApps";
import AnimCp from "../Components/Anim";
import AboutCp from "../Components/AboutCp";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-3 md:px-[8vw]">
      <TopHero />
      <Featured />
      <NewApps />
      <AboutCp />
      <br />
      <AnimCp />
    </div>
  );
}
