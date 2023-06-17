import React from "react";
import Hero from "../Components/hero";
import TopHero from "../Components/he";
import Featured from "../Components/featured";
import NewApps from "../Components/new-arrivals";

export default function Home() {
  return (
    <div className="px-3 md:px-[8vw]">
      <TopHero />
      <Featured />
      <NewApps />
      <br />
      <Hero />
    </div>
  );
}
