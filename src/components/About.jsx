import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const technologies = [
  "JavaScript", "Typescript", "React", "Next.js", "GSAP", "Tailwind", "Node.js", "Express", "Mongodb",
];

const projects = [
  { name: "Tasknest", link: "https://mytask-saathvik-kadiyals-projects.vercel.app/", para: "A task manager app built with React, Redux, React Router, and Tailwind CSS." },
  { name: "Payment", link: "https://payment-eosin-chi.vercel.app/", para: "A secure payment app with sign-in, sign-up, and transaction management using Mongoose transactions." },
  { name: "Samsung", link: "https://gsap-amber.vercel.app/", para: "Developed an interactive product showcase using HTML, CSS, JavaScript, and GSAP." },
  { name: "Petshop", link: "https://petshop-two-green.vercel.app/", para: "Built a dynamic e-commerce platform for selling pets, React, Context API, and Tailwind CSS." },
  { name: "Forum For People's Health", link: "https://edgerog.github.io/forumforpeopleshealth/", para: "A mockup built using HTML, CSS, JS during my internship." },
];

const About = () => {
  const marqueeRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const cursorRef = useRef(null);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      x: "-50%", duration: 10, ease: "linear", repeat: -1,
    });
    gsap.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 });
    gsap.fromTo(imageRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 });
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, { x: e.clientX - 40, y: e.clientY - 40, duration: 0.2, ease: "power2.out" });
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <main className="w-full">
      <section className="w-full min-h-screen flex items-center justify-center text-white p-5 md:p-10">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10  min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh]">
          <div ref={textRef} className="flex flex-col justify-center relative">
            <Link
              to="/"
              className="text-lg font-semibold absolute top-5 left-5 transition-all duration-300 hover:text-[#9b00ff] hover:shadow-2xl hover:shadow-[#9b00ff] hidden md:block"
            >
              Home
            </Link>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Hello 👋🏽</h1>
            <p className="text-lg md:text-2xl font-semibold">
              I'm Saathvik, a web developer passionate about crafting interactive and visually engaging web experiences.
            </p>
          </div>
          <div ref={imageRef} className="flex flex-col justify-center items-center relative">
            <Link
              to="/contact"
              className="text-lg font-semibold fixed top-5 right-5 transition-all duration-300 hover:text-[#9b00ff] hover:shadow-2xl hover:shadow-[#9b00ff]"
            >
              Contact
            </Link>
            <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" alt="Developer Illustration" className="w-60 md:w-80  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#9b00ff]" />
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-transparent py-5">
        <div className="flex space-x-10 whitespace-nowrap w-max" ref={marqueeRef}>
          {[...technologies, ...technologies].map((tech, index) => (
            <span key={index} className="text-xl md:text-3xl text-white font-bold px-4 md:px-6">{tech}</span>
          ))}
        </div>
      </section>

      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#101010] text-white p-5 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" 
               className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#9b00ff]">
              <h2 className="text-xl md:text-2xl font-bold">{project.name}</h2>
              <p className="mt-2 text-sm md:text-base">{project.para}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;