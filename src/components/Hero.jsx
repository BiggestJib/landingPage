import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [loadedVideo, setLoadedVideo] = useState(0);
  const totalVideo = 4;
  const nextVideoRef = useRef(null);
  const upcomingVideoIndex = (currentIndex % totalVideo) + 1;
  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };
  const handleVideoLoad = () => {
    setLoadedVideo((prev) => prev + 1);
  };
  useEffect(() => {
    if (loadedVideo === totalVideo - 1) {
      setisLoading(false);
    }
  }, [loadedVideo]);

  // Video Transition Animation
  // Video Transition Animation
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          duration: 1,
          ease: "power1.inOut",
          width: "100%",
          height: "100%",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  // Video Frame Animation with ScrollTrigger
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh  w-screen overflow-x-hidden">
      {/* Preloader */}
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 "
      >
        {/* Mini Video */}
        <div className="absolute left-10 top-4 z-30 flex items-center justify-center">
          <div
            className="group relative h-16 w-16 cursor-pointer overflow-hidden rounded-full border-4 border-white shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300"
            onClick={handleMiniVideoClick}
          >
            <video
              ref={nextVideoRef}
              src={getVideoSrc(upcomingVideoIndex)}
              loop
              muted
              autoPlay
              className="absolute h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-25 transition-opacity duration-300"></div>
          </div>
        </div>
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              onClick={handleMiniVideoClick}
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                autoPlay
                onLoadedData={handleVideoLoad}
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
              />
            </div>
          </div>
          <video
            loop
            muted
            onLoadedData={handleVideoLoad}
            className="absolute-center invisible z-20 size-64 object-cover object-center"
            id="next-video"
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
          />

          <video
            className="absolute left-0 top-0 size-full z-10  object-cover object-center"
            id="upcoming-video"
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoad}
            src={getVideoSrc(
              currentIndex === totalVideo - 1 ? 1 : currentIndex
            )}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75  tracking-wide animate-pulse">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100 text-4xl md:text-6xl">
              redifi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-2xl font-robert-regular text-blue-100 text-lg">
              Dive into the ultimate gaming adventure. <br />
              Experience innovation like never before.
            </p>
            <Button
              id="watxh-trailer "
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
