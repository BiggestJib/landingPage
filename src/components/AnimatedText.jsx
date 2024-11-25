import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AnimatedText = ({ title, containerClass = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100% bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.fromTo(
        ".animated-word",
        {
          opacity: 0,
          transform: "translate3d(0, 100%, 0) rotateY(-90deg)",
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg)",
          ease: "power2.inOut",
          stagger: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div className="flex-center flex-wrap gap-4 px-10 md:gap-6" key={index}>
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word "
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
