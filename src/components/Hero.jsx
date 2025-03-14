import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.jpg"; // Importing the background image

const Hero = () => {
  const gsapRef = useRef();
  const h1Ref1 = useRef();
  const h1Ref2 = useRef();
  const h1Ref3 = useRef();
  const h1Ref4 = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      gsapRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "expo.in" }
    )
      .fromTo(
        h1Ref1.current,
        { opacity: 0, scale: 0, y: 50 },
        { opacity: 1, scale: 1, y: 0 }
      )
      .fromTo(
        [h1Ref2.current, h1Ref3.current, h1Ref4.current],
        { opacity: 0, scale: 0, y: 20 },
        { opacity: 1, scale: 1, y: 0, stagger: 0.2 }
      );
  }, []);

  return (
    <main className="w-full h-screen flex items-center justify-center relative">
      {/* Background Container */}
      <div
        ref={gsapRef}
        className="absolute w-[90%] h-[70%] bg-black bg-opacity-80 rounded-[30px] flex flex-col items-start justify-start p-10 text-white text-left"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full flex flex-col items-start md:ml-16">
          {/* Title */}
          <h1
            ref={h1Ref1}
            className="text-3xl md:text-5xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-400 bg-clip-text text-transparent mb-20"
          >
            HELLO! I'M SAATHVIK
          </h1>

          {/* Navigation Links - Centered Relative to Heading */}
          <div className="flex flex-col items-start gap-6 ml-4 md:ml-10 mt-20">
            <h1 ref={h1Ref2} className="text-2xl font-bold transition-transform hover:scale-105">
              <Link to="about" className="no-underline text-4xl hover:text-red-500">
                About Me
              </Link>
            </h1>
            <h1 ref={h1Ref4} className="text-2xl font-bold transition-transform hover:scale-105">
              <Link to="contact" className="no-underline text-4xl hover:text-red-500">
                Contact
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
