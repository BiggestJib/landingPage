import React from "react";

const Button = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass = "",
  href,
}) => {
  return (
    <a href={href}>
      <button
        id={id}
        className={`group relative z-10 cursor-not-allowed inline-flex items-center justify-center  overflow-hidden rounded-full  px-8 py-3  shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-500 ${
          containerClass.includes("bg")
            ? containerClass
            : "bg-gradient-to-r from-purple-400 text-white via-pink-500 to-red-500"
        }`}
      >
        {/* Left Icon */}
        {leftIcon && (
          <span className="mr-2 inline-flex items-center justify-center text-lg transition-colors duration-300 group-hover:text-black">
            {leftIcon}
          </span>
        )}

        {/* Button Text */}
        <span className="relative font-medium text-sm uppercase tracking-widest transition-colors duration-300 group-hover:text-black">
          {title}
        </span>

        {/* Right Icon */}
        {rightIcon && (
          <span className="ml-2 inline-flex items-center justify-center text-lg transition-colors duration-300 group-hover:text-black">
            {rightIcon}
          </span>
        )}

        {/* Animated Background */}
        {!containerClass.includes("bg") && (
          <span className="absolute inset-0 z-0 h-full w-full scale-0 bg-gradient-to-br from-red-500 via-yellow-500 to-purple-600 opacity-0 transition-transform duration-300 group-hover:scale-125 group-hover:opacity-100"></span>
        )}
      </button>
    </a>
  );
};

export default Button;
