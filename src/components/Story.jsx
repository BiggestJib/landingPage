import React, { useRef } from "react";
import AnimatedText from "./AnimatedText";
import gsap from "gsap";
import RoundedCorners from "./roundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const { current: element } = frameRef;
    if (!element) return;

    // Reset tilt and scale on mouse leave
    gsap.to(element, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: "power1.out",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { current: element } = frameRef;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const offsetX = clientX - rect.left; // Mouse X position relative to element
    const offsetY = clientY - rect.top; // Mouse Y position relative to element
    const centerX = rect.width / 2; // Horizontal center
    const centerY = rect.height / 2; // Vertical center

    const rotateX = ((offsetY - centerY) / centerY) * -15; // Adjust tilt intensity
    const rotateY = ((offsetX - centerX) / centerX) * 15;

    // Apply tilt and scale effect
    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      scale: 1.05, // Slight zoom-in effect
      transformPerspective: 800, // Adds depth
      ease: "power1.out",
    });
  };

  return (
    <section
      id="story"
      className="relative min-h-dvh w-screen bg-black text-blue-50"
    >
      <div className="flex flex-col size-full items-center px-5 py-10 md:px-10">
        {/* Intro Text */}
        <p className="font-general text-xs uppercase tracking-wide text-gray-400 md:text-sm">
          The multiverse IP world
        </p>

        {/* Title and Image */}
        <div className="relative mt-5 size-full ">
          <AnimatedText
            sectionId="#story"
            containerClass="pointer-events-none mix-blend-difference relative z-10"
            title="The St<b>o</b>ry of <br /> a hidden real<b>m</b>"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  alt="Entrance"
                  className="object-contain"
                  src="/img/entrance.webp"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <RoundedCorners />
        </div>

        {/* Description and Button */}
        <div className="md:-mt-72 -mt-60 md:me-44 flex w-full justify-center md:justify-end">
          <div className="flex w-fit h-full flex-col items-center md:items-start">
            <p className="text-center mb-5 max-w-sm font-circular-web text-sm text-violet-50 md:text-start md:text-base">
              Where realms converge lies Topzy and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button
              containerClass="mt-5 px-6 py-3"
              id="realm-button"
              title="Discover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
