import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import RoundedCorners from "./roundedCorners";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState(""); // Updated function name casing
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width; // Relative X position (0 to 1)
    const relativeY = (e.clientY - top) / height; // Relative Y position (0 to 1)

    // Calculate tilt values
    const tiltX = (relativeY - 0.5) * -15; // Adjust the tiltX value for effect strength
    const tiltY = (relativeX - 0.5) * 15; // Adjust the tiltY value for effect strength

    // Create the transform style
    const newTransform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    // Reset transform on mouse leave
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    );
  };

  return (
    <div
      ref={itemRef}
      style={{
        transform: transformStyle,
        transition: "transform 0.2s ease-out", // Smooth transition when resetting
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Video Background */}
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white bg-gradient-to-b from-transparent to-black/70">
        <div>
          {/* Title */}
          <h1 className="bento-title special-font text-2xl md:text-3xl font-bold">
            {title}
          </h1>

          {/* Optional Description */}
          {description && (
            <p className="mt-3 text-sm md:text-base text-gray-300">
              {description}
            </p>
          )}
        </div>

        {/* Optional Call-to-Action */}
        <div>
          <button className="mt-4 px-4 py-2 text-sm font-medium text-black bg-yellow-300 rounded-full transition-all duration-300 hover:bg-yellow-400">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container px-3 mx-auto md:px-10">
        {/* Intro Section */}
        <div className="px-5 py-32 text-center">
          <p className="font-circular-web text-lg text-blue-50">
            Step Into the Metagame Layer
          </p>
          <p className="max-w-md mx-auto mt-4 font-circular-web text-lg text-blue-50 opacity-75">
            Dive into a boundless universe, seamlessly blending a dynamic
            spectrum of products into a unified, immersive overlay that
            redefines how you experience the world around you.
          </p>
        </div>

        {/* Main Feature Card */}
        <BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-lg shadow-lg md:h-[65vh]">
          <BentoCard
            description="A groundbreaking cross-platform metagame app that transforms your activities in Web2 and Web3 games into thrilling, reward-driven adventures."
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
          />
        </BentoTilt>
        <RoundedCorners />

        {/* Grid Features */}
        <div className="grid h-[135vh] grid-cols-1 gap-7 md:grid-cols-2 md:grid-rows-3">
          <BentoTilt className="col-span-1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              description="A groundbreaking anime and gaming-inspired NFT collection, primed for limitless expansion and innovation."
              src="videos/feature-2.mp4"
              title={
                <>
                  Zig<b>g</b>y
                </>
              }
            />
          </BentoTilt>
          <RoundedCorners />

          <BentoTilt className="row-span-1 md:col-span-1">
            <BentoCard
              description="A groundbreaking anime and gaming-inspired NFT collection, primed for limitless expansion and innovation."
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
            />
            <RoundedCorners />
          </BentoTilt>

          <BentoTilt className="md:col-span-1">
            <BentoCard
              description="A cross-world AI agent that revolutionizes your gameplay—making every moment more immersive, exciting, and productive."
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>re
                </>
              }
            />
            <RoundedCorners />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex flex-col justify-between p-5 bg-gradient-to-br from-violet-400 to-pink-500 h-full rounded-lg shadow-lg">
              <h1 className="bento-title special-font text-3xl text-white">
                m<b>o</b>re co<b>m</b>ing s<b>oo</b>n!
              </h1>
              <TiLocationArrow className="m-5 scale-[3] self-end text-white opacity-75" />
            </div>
            <RoundedCorners />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              loading="lazy"
              className="w-full h-full rounded-lg object-cover shadow-lg"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
