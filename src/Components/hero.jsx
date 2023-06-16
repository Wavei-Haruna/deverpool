import { useEffect, useState } from "react";
import { data } from "../data/files";
import ScrollIndicator from "./utils/icons";

const content = {
  headline:
    "A concise and attention-grabbing headline is placed prominently on top of the hero image or video. The headline should convey the main message or value proposition of the website, enticing visitors to explore further.",
  subheadline:
    "A brief supporting text that provides additional information or context to the headline can be included below the headline. This subheadline or tagline further emphasizes the website's key message.",
  testimonials: [
    "Depending on the website's goals, additional content such as testimonials, key features, or product showcases may be included in the hero section to provide more information and engage the audience.",
  ],
};

const hero = {
  images: data.devices,
  video: data.videos[5],
  content,
};
export default function Hero() {
  const [imageToDisplay, setImageToDisplay] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      let size = hero.images.length;
      setImageToDisplay(() => {
        let randInd = Math.floor(Math.random() * size);
        return randInd;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <main className="relative bg-slate-100 py-7 flex flex-col items-center justify-center rounded-b-2xl">
        <div className="bg-[#ccc] p-5 rounded-md">
          <img
            src={hero.images[imageToDisplay]}
            alt="hero-image"
            width={200}
            height={200}
            className="h-48 w-auto transition-all"
          />
        </div>

        <div>
          <AnimDiv />
        </div>

        <div>
          <ScrollIndicator />
        </div>
      </main>
    </>
  );
}

export function AnimDiv() {
  const backcolors = [
    ["bg-[#009688]", "bg-[#4caf50]", "bg-[#8bc34a]", "bg-[#cddc39]", "bg-[#ffeb3b]"],
    ["bg-[#ffeb3b]", "bg-[#009688]", "bg-[#4caf50]", "bg-[#8bc34a]", "bg-[#cddc39]"],
    ["bg-[#cddc39]", "bg-[#009688]", "bg-[#4caf50]", "bg-[#ffeb3b]", "bg-[#8bc34a]"],
    ["bg-[#8bc34a]", "bg-[#cddc39]", "bg-[#009688]", "bg-[#ffeb3b]", "bg-[#4caf50]"],
    ["bg-[#4caf50]", "bg-[#8bc34a]", "bg-[#cddc39]", "bg-[#009688]", "bg-[#ffeb3b]"],
  ];
  const [backcolor, setBackcolor] = useState(backcolors[2]);

  useEffect(() => {
    const interval = setInterval(() => {
      let size = backcolors.length;
      setBackcolor(() => backcolors[Math.floor(Math.random() * size)]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 mt-5">
      <div
        className={`text-[white] ${backcolor[0]} rounded-full w-10 h-10 md:w-24 md:h-24 text-[26px] md:text-[44px]  transition-all text-center flex items-center justify-center `}
      >
        De
      </div>
      <div
        className={`text-[white] ${backcolor[1]} rounded-full w-8 h-8 md:w-24 md:h-20 text-[22px] md:text-[34px]  transition-all text-center flex items-center justify-center `}
      >
        ve
      </div>
      <div
        className={`text-[green] ${backcolor[2]} rounded-full w-6 h-6 md:w-24 md:h-16 text-[18px] md:text-[28px]  transition-all text-center flex items-center justify-center `}
      >
        rp
      </div>
      <div
        className={`text-[black] ${backcolor[3]} rounded-full w-4 h-4 md:w-24 md:h-12 text-[16px] md:text-[24px]  transition-all text-center flex items-center justify-center `}
      >
        oo
      </div>
      <div
        className={`text-[black] ${backcolor[4]} rounded-full w-2 h-2 md:w-24 md:h-8  text-[10px] md:text-[18px] transition-all text-center flex items-center justify-center `}
      >
        l
      </div>
    </div>
  );
}

{
  /*
1 Hero Image/Video: A large, visually appealing image or video that spans the width of the screen is often used as the background of the hero section. The image or video should be relevant to the website's purpose and visually captivating.

2 Headline: A concise and attention-grabbing headline is placed prominently on top of the hero image or video. The headline should convey the main message or value proposition of the website, enticing visitors to explore further.

3 Subheadline/Tagline: A brief supporting text that provides additional information or context to the headline can be included below the headline. This subheadline or tagline further emphasizes the website's key message.

4 Call-to-Action (CTA) Buttons: Strategically placed CTA buttons or links are often included within the hero section to encourage visitors to take desired actions. These CTAs could be "Sign up," "Learn More," "Get Started," or any other relevant action based on the purpose of the website.

5 Navigation: Depending on the website's design, a navigation menu or links may be present within the hero section, allowing visitors to quickly access important sections or pages of the website.

6 Scroll Down Indicator: If the hero section occupies the full viewport height, a scroll down indicator, such as an arrow icon, can be added to indicate that there is more content below the fold.

7 Background Overlay: Sometimes, a semi-transparent overlay is applied to the hero image or video to enhance readability of the headline and subheadline text.

8 Additional Content: Depending on the website's goals, additional content such as testimonials, key features, or product showcases may be included in the hero section to provide more information and engage the audience. */
}
