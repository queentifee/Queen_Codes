import React from "react";
import { Link } from "react-router-dom";


import one from './assets/pictures/one.jpg'
import two from './assets/pictures/two.jpg'
import three from './assets/pictures/three.jpg'
import four from './assets/pictures/four.jpg'




const images = [
  { src: one, className: "w-[150px] sm:w-[100px] md:w-[150px] top-5 left-10 rotate-[-10deg] "},
  { src: two ,  className: "w-[150px] sm:w-[150px] md:w-[i50px] top-5 right-10 rotate-[10deg]"},
  { src: three, className: "w-[150px] sm:w-[150px] md:w-[100px] bottom-5 left-5 rotate-[5deg]" },
  { src: four, className: " w-[150px] sm:w-[100px] md:w-[200px] bottom-5 right-5 rotate-[-5deg]" },
  
];




function AboutMe() {
    return (
<div className="relative bg-[#1A1A1A] h-[500px]  max-w-[1100px] mx-auto flex justify-center items-center mb-[32px] mt-[32px] rounded-3xl overflow-hidden">
{/* Floating Images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`floating-${index}`}
            className={`absolute  rounded-xl shadow-lg object-cover ${image.className}`}
          />
        ))}
  
        {/* Content Section */}
        <div className="relative z-10 text-white text-center px-6">
          {/* <h2 className="text-3xl md:text-5xl font-bold"> */}
          <h1>dddddddddddddddddddddddddddddddddddddddddddd</h1>
          <h1>dddddddddddddddddddddddddddddddddddddddddddd</h1>
          <h1>dddddddddddddddddddddddddddddddddddddddddddd</h1>
          <h1>dddddddddddddddddddddddddddddddddddddddddddd</h1>
          <h1>dddddddddddddddddddddddddddddddddddddddddddd</h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white">

            Transform Your Ideas <br />
            <span className="text-gray-400">into Impactful</span> Designs
          </h2>
          <Link
            to="/"
            className="mt-5 inline-block rounded-full bg-lime-400 px-6 py-3 text-black font-semibold hover:bg-orange-600 transition"
          >
            Connect With Us
          </Link>
          <h1>dddddddddddddddddddddddddddddddddddddddddddd</h1>
        </div>
      </div>
    );
  }
  
  export default AboutMe;