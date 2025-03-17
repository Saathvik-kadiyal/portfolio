import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-radial text-white p-6 md:p-10 flex flex-col items-center justify-evenly">
      <div className="absolute top-0 left-0 w-full flex flex-wrap justify-center md:justify-between items-center space-x-4 md:space-x-20 p-6 md:p-16">
        <Link
          to="/"
          className="text-lg md:text-xl font-semibold duration-100 hover:scale-105 hover:shadow-2xl hover:shadow-[#9b00ff] shadow-lg transition-all"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="text-lg md:text-xl font-semibold duration-100 hover:scale-105 hover:shadow-2xl hover:shadow-[#9b00ff] shadow-lg transition-all"
        >
          <h1 className="text-lg md:text-xl font-semibold text-center">Contact</h1>
        </Link>
        <Link
          to="/about"
          className="text-lg md:text-xl font-semibold duration-100 hover:scale-105 hover:shadow-2xl hover:shadow-[#9b00ff] shadow-lg transition-all"
        >
          About
        </Link>
      </div>

      <div className="max-w-6xl w-full flex flex-col items-center justify-center text-center mt-32 md:mt-20">
        <p className="text-2xl md:text-4xl m-6 md:m-16 font-bold">
          "I'm available for work
          <br />
          Feel free to get in touch!"
        </p>

        <div className="m-4 flex flex-col md:flex-row justify-center w-full text-center md:text-left">
          <div className="group flex flex-col justify-start p-4 mx-2">
            <p className="text-base md:text-lg text-[#808080]">Get in touch</p>
            <a
              href="mailto:saathvikkadiyal@gmail.com"
              className="text-lg md:text-2xl font-sans hover:text-[#808080] transition-all"
            >
              saathvikkadiyal@gmail.com
            </a>
          </div>

          <div className="group flex flex-col justify-start p-4 mx-2">
            <p className="text-base md:text-lg text-[#808080]">Say hello</p>
            <a
              href="tel:+917330846291"
              className="text-lg md:text-2xl font-sans hover:text-[#808080] transition-all"
            >
              +91 7330846291
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-full flex flex-wrap justify-center items-center space-x-6 md:space-x-10 p-6 md:p-10">
        <a
          href="https://github.com/Saathvik-kadiyal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-xl font-semibold hover:text-[#9b00ff] transition-all"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/saathvik-kadiyal-90976525b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-xl font-semibold hover:text-[#9b00ff] transition-all"
        >
          LinkedIn
        </a>
        <a
          href="https://drive.google.com/file/d/14AShUm_glPhtTaLQG6d1TWQcy8cJWxwt/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-xl font-semibold hover:text-[#9b00ff] transition-all"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;