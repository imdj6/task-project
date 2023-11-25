import React from "react";
import Background from "../Assets/Background.png";
import { FaWhatsappSquare } from "react-icons/fa";
function Hero() {
  return (
    <div className="relative">
      <img
        src={Background}
        className="w-full object-cover h-96 md:px-10 md:h-[55vh] md:p-10"
        alt="background"
      />
      <div className="absolute top-36 left-[22vw] text-2xl font-bold text-center md:top-36 md:left-[40%] md:text-3xl text-white">Unleashing Wonderlab</div>
      <div className="absolute top-48 left-[18vw] text-2xl font-bold text-center md:top-48 md:left-[39%] md:text-3xl text-white">One Science-Fueled Party</div>
      <button className="absolute top-64 left-[40vw] p-4 md:left-[45%] bg-[#FFDE59] text-white">Book Now</button>
      <FaWhatsappSquare color="#25D366" size={45} className="absolute md:bottom-20 md:right-20 bottom-5 right-5"/>
    </div>
  );
}

export default Hero;
