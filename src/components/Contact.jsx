import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="w-full h-screen bg-gradient-radial text-white p-10 flex flex-col items-center  justify-evenly">
      {/* Header with Navigation Links */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center space-x-20 p-16">
        <Link
          to="/"
          className="text-xl font-semibold duration-100 hover:scale-105 hover:shadow-2xl hover:shadow-[#9b00ff] shadow-lg transition-all"
        >
          Home
        </Link>
        <Link to="/contact" className="text-xl font-semibold duration-100 hover:scale-105 hover:shadow-2xl hover:shadow-[#9b00ff] shadow-lg transition-all"><h1 className="text-xl font-semibold text-center flex-grow">Contact</h1></Link>
        {/* Centered h1 */}
        <Link
          to="/about"
          className="text-xl font-semibold duration-100 hover:scale-105 hover:shadow-2xl hover:shadow-[#9b00ff] shadow-lg transition-all"
        >
          About
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full flex flex-col items-center justify-center text-center  mt-20">
        <div >
          {/* Quote */}
          <p className="text-4xl m-16 font-bold">
            "I'm available for work
            <br />Feel free to get in touch!"
          </p>
        </div>

       
          {/* Email and Phone */}
          <div className="m-4 flex flex-row justify-center  ">
            {/* Email */}
            <div className="group flex flex-col justify-start text-left  p-4 mx-4 ">
              <p className="text-lg text-[#808080]">Get in touch</p>
              <a
                href="mailto:saathvikkadiyal@gmail.com"
                className="text-2xl font-sans hover:text-[#808080] transition-all"
              >
                saathvikkadiyal@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="group flex flex-col justify-start text-left  p-4 mx-4">
              <p className="text-lg text-[#808080]">Say hello</p>
              <a
                href="tel:+911234567890"
                className="text-2xl font-sans hover:text-[#808080] transition-all"
              >
                +91 7330846291
              </a>
            </div>
          </div>

      </div>

      {/* Footer - Links */}
      <div className="w-full flex justify-center items-center space-x-10 p-10  ">
  <a
    href="https://github.com/Saathvik-kadiyal"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xl font-semibold hover:text-[#9b00ff] transition-all"
  >
    GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/saathvik-kadiyal-90976525b/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xl font-semibold hover:text-[#9b00ff] transition-all"
  >
    LinkedIn
  </a>
  <a
    href="https://drive.google.com/file/d/your-drive-file-id/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xl font-semibold hover:text-[#9b00ff] transition-all"
  >
    Resume
  </a>
</div>

    </section>
  );
};

export default Contact;
