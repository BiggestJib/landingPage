import React from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <section
      id="footer"
      className="c-space bg-black text-blue-50 pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"
    >
      <div className="text-white-800 flex gap-2">
        <p>Terms & condition</p>
        <p>|</p>
        <p>Privacy policy</p>
      </div>
      <div className="flex space-x-6">
        <a
          href="https://github.com/BiggestJib"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300 ease-in-out"
          aria-label="Facebook"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://x.com/techbeforelove?s=21"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-gray-200 transition-colors duration-300 ease-in-out"
          aria-label="X (Twitter)"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-pink-500 transition-colors duration-300 ease-in-out"
          aria-label="Instagram"
        >
          <AiFillInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ajibola-olaosebikan-407ab6270"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-[#0e76a8] transition-colors duration-300 ease-in-out"
          aria-label="Instagram"
        >
          <AiFillLinkedin size={24} />
        </a>
      </div>
      <p className="text-white-500 ">
        {" "}
        <p className="text-xs sm:text-sm text-white-800">
          &copy; {new Date().getFullYear()} Peter. All rights reserved.
        </p>
      </p>
    </section>
  );
};

export default Footer;
