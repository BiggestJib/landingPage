import React from "react";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass, alt }) => {
  return (
    <div className={clipClass}>
      <img src={src} alt={alt || "Decorative image"} loading="lazy" />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="my-20 w-screen px-5 md:px-10" id="contact">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        {/* Left Decorative Images */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/contact-1.webp"
            alt="Contact decoration 1"
          />
          <ImageClipBox
            clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40"
            src="img/contact-2.webp"
            alt="Contact decoration 2"
          />
        </div>

        {/* Right Decorative Images */}
        <div className="absolute -top-40  left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            clipClass="absolute md:scale-125"
            src="img/swordman-partial.webp"
            alt="Swordman partial"
          />
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="img/swordman.webp"
            alt="Swordman"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center px-5">
          <p className="font-general text-xs uppercase text-gray-400">
            Join Topzy
          </p>
          <p className="special-font  z-20 mt-10 w-full text-4xl leading-tight font-zentry md:text-[6rem]">
            Let's b<b>u</b>ild the
            <br /> new era of <br />g<b>a</b>ming t<b>o</b>gether
          </p>
          <Button
            href="mailto:olaosebikanAjibola16@gmail.com"
            title={" Send us an Email"}
            containerClass="mt-10 !cursor-pointer bg-violet-50 text-black px-6 py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
