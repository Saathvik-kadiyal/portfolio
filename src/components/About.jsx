import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom"; // Import Link for navigation

const technologies = [
  "JavaScript",
  "Typescript",
  "React",
  "Next.js",
  "GSAP",
  "Tailwind",
  "Node.js",
  "Express",
  "Mongodb",
];

const projects = [
  {
    name: "Tasknest",
    link: "https://mytask-saathvik-kadiyals-projects.vercel.app/",
    para: "A task manager app built with React, Redux, React Router, and Tailwind CSS, utilizing local storage for user data.",
  },
  {
    name: "Payment",
    link: "https://payment-eosin-chi.vercel.app/",
    para: "A secure payment app with sign-in, sign-up, and transaction management using Mongoose transactions. Built with React, Express, MongoDB, Zod, and React Hook Form, demonstrating full-stack integration and secure money transfers.",
  },
  {
    name: "Samsung",
    link: "https://gsap-amber.vercel.app/",
    para: "Developed an interactive product showcase using HTML, CSS, JavaScript, and GSAP. Implemented smooth animations and optimized performance for fast load times. Deployed on Vercel for reliable hosting and continuous deployment.",
  },
  {
    name: "Petshop",
    link: "https://petshop-two-green.vercel.app/",
    para: "Built a dynamic e-commerce platform for selling pets, React, Context API , Tailwind CSS, and integrated with an Express backend API. Ensured secure transactions and smooth user experience with seamless navigation.",
  },
  {
    name: "Forum For People's Health",
    link: "https://edgerog.github.io/forumforpeopleshealth/",
    para: "A mockup built using HTML, CSS, JS during my internship for a project",
  },
];

const About = () => {
  const marqueeRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const cursorRef = useRef(null);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const marquee = marqueeRef.current;
    const totalWidth = marquee.scrollWidth / 4;

    gsap.to(marquee, {
      x: `-${totalWidth}px`,
      duration: 10,
      ease: "linear",
      repeat: -2,
      onUpdate: function () {
        if (parseFloat(gsap.getProperty(marquee, "x")) <= -totalWidth) {
          gsap.set(marquee, { x: 0 });
        }
      },
    });

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 40,
        y: e.clientY - 40,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <main className="w-full">
      {/* About Me Section */}
      <section className="w-full h-screen flex items-center justify-center text-white p-10 ">
        <div className="max-w-6xl h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* Left: Text Content with Home link on top-left corner */}
          <div ref={textRef} className="flex flex-col justify-center relative">
            <Link
              to="/"
              className="text-lg font-semibold absolute top-5 left-5 transition-all duration-300 hover:text-[#9b00ff] hover:shadow-2xl hover:shadow-[#9b00ff] hover:bg-transparent"
            >
              Home
            </Link>{" "}
            {/* Home link */}
            <h1 className="text-6xl font-extrabold mb-6">Hello 👋🏽</h1>
            <p className="text-2xl font-semibold">
              I'm Saathvik, a web developer with a passion for crafting
              interactive and visually engaging web experiences. I specialize in
              front-end development, while also having a solid understanding of
              back-end technologies. Worked with React, Gsap, Express
            </p>
          </div>

          {/* Right: Illustrated Image with Contact link on top-right corner */}
          <div
            ref={imageRef}
            className="flex flex-col justify-center items-center relative"
          >
            <Link
              to="/contact"
              className="text-lg font-semibold absolute top-5 right-5 transition-all duration-300 hover:text-[#9b00ff] hover:shadow-2xl hover:shadow-[#9b00ff] hover:bg-transparent"
            >
              Contact
            </Link>{" "}
            {/* Contact link */}
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?t=st=1741965055~exp=1741968655~hmac=137b86f1f2418ad1d5ad1a0e9f7ba82da07b47d7c7fa3ae2378ae3fe6922c2f3&w=900"
              alt="Developer Illustration"
              className="w-80 transition-all duration-300 hover:shadow-2xl hover:shadow-[#9b00ff] hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section with Smooth Infinite GSAP Marquee */}
      <section className="relative w-full overflow-hidden bg-transparent py-5">
        <div
          className="flex space-x-10 whitespace-nowrap w-max"
          ref={marqueeRef}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <span key={index} className="text-3xl text-white font-bold px-6">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center bg-[#101010] text-white p-10 relative">
        <h1 className="text-4xl font-bold mb-10">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#9b00ff] relative group"
              onMouseEnter={() => setCursorText("View")}
              onMouseLeave={() => setCursorText("")}
            >
              <h2 className="text-2xl font-bold">{project.name}</h2>
              <p className="mt-2">{project.para}</p>
            </a>
          ))}
        </div>
        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full pointer-events-none z-50 hidden md:flex items-center justify-center"
        >
          <span className="text-sm font-bold text-black">{cursorText}</span>
        </div>
      </section>
    </main>
  );
};

export default About;
