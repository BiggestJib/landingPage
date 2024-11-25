import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import AnimatedText from "./AnimatedText";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimations = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimations.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen ">
      {/* Section Header */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-3">
        <h2 className="font-general text-sm uppercase tracking-wider md:text-base">
          Welcome to Topzy
        </h2>
        <AnimatedText
          containerClass="mt-5 !text-black text-center"
          title={
            " Disc<b>0</b>ver the world's <br /> l<b>a</b>rgest shared adventure"
          }
        />
        <div className="about-subtext mt-5 text-center text-sm md:text-lg lg:text-xl">
          <p>Your life, now an epic MMORPG, begins here.</p>
          <p>Topzy unites players across countless games and platforms.</p>
        </div>
      </div>

      {/* Animated Mask Clip Section */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image overflow-hidden relative">
          <img
            src="img/about.webp"
            alt="Adventure background"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
