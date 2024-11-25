import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Nexus", "Vault", "About", "Contact"];

const Nav = () => {
  const navContainerRef = useRef(null);
  const AudioElementRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const scrollTimeoutRef = useRef(null); // Ref to hold the timeout ID

  const { y: currentScrollY } = useWindowScroll();

  // Handle Nav Visibility on Scroll
  useEffect(() => {
    // Hide/show nav based on scroll direction
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Set a timeout to show the nav after the user stops scrolling
    scrollTimeoutRef.current = setTimeout(() => {
      setIsNavVisible(true);
    }, 2000); // Adjust delay as needed

    setLastScrollY(currentScrollY);

    // Cleanup on component unmount
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentScrollY, lastScrollY]);

  // GSAP Animation for Nav
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
    });
  }, [isNavVisible]);

  // Handle Audio Play/Pause
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (AudioElementRef.current) {
      AudioElementRef.current
        .play()
        .catch((err) => console.log("Autoplay blocked:", err));
    }
    if (isAudioPlaying) {
      AudioElementRef.current.play();
    } else {
      AudioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      ref={navContainerRef}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            {currentScrollY !== 0 ? (
              <img src="/img/logo.png" alt="logo" className="w-10" />
            ) : (
              <div className="w-12" />
            )}
            <Button
              id="product-button"
              title="Products"
              tightIcon={<TiLocationArrow />}
              containerClass="!bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-1 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
            >
              {/* Hidden Audio Element */}
              <audio
                ref={AudioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />

              {/* Animated Indicator Lines */}
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    className={`indicator-line ${
                      isIndicatorActive ? "active" : ""
                    } bg-green-500 rounded-md w-1`}
                    key={bar}
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                      animationDuration: "1s",
                    }}
                  />
                ))}
              </div>

              {/* Label or Icon */}
              <span className="text-xs font-medium text-white">
                {isIndicatorActive ? "Playing" : "Muted"}
              </span>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
