"use client";
import Image from "next/image";

import AboutImage from "../public/assets/dpimages.jpeg";
import hoverImage from "../public/assets/dpimages.jpeg";
import React, { useState, useEffect, useRef } from "react";
import pariscite from "../public/assets/imagepariscite.jpg";

const About = () => {
  const [profile, setProfile] = useState(AboutImage);

  const hoverEnter = () => {
    profile === AboutImage ? setProfile(hoverImage) : setProfile(AboutImage);
  };

  return (
    <div id="about" className="w-full p-2 items-center py-16 pb-40">
      <div className="max-w-[80%] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Hi, I&apos;m Umair 🤝</h2>
          <p className="py-2 text-[#808080] font-mono">\\ Hello world 👋</p>

          <p className="py-2 text-gray-600">
            If I had to sum myself up in one word, it would be "innovator🔧". 
            I am always driven by curiosity and the desire to solve complex problems. 
            I approach every challenge with focus and perseverance, constantly improving 
            my skills to enhance my ability to craft effective solutions. My passion for 
            web development and backend engineering fuels my commitment to delivering high-quality work, 
            while ensuring I stay up to date with the latest technologies and best practices.
          </p>

          <p className="py-2 text-gray-600">
          With over four years of experience, including a leadership role as a Software Engineer (Team Lead) 
          at Developers Studio, I have developed a strong command over PHP (Laravel), Python (Flask), Node.js, 
          and other cutting-edge technologies. My work spans across various industries, from developing AI-driven 
          fintech solutions to building EMR portals for healthcare. These projects have strengthened my expertise in 
          crafting scalable, secure applications that solve real-world problems.

          </p>

          <p className="py-2 text-gray-600">
            I am a self-starter who thrives in fast-paced, dynamic environments. 
            My problem-solving mindset, combined with a love for continuous learning, 
            drives me to explore new technologies and methodologies, adapting swiftly 
            to evolving trends in the tech landscape. Whether working individually or 
            collaborating with a team, I am always ready to push boundaries and deliver innovative solutions..
          </p>

          <p className="py-2 text-gray-600">
            If you're looking for someone who can turn ideas into functional, impactful 
            software, feel free to check out my work or connect with me for collaboration 
            or discussion. Together, we can create the next big thing! 🚀
          </p>
          
          <p className="py-2 text-gray-600">
            Feel free to explore my work and connect with me for potential collaborations, opportunities,
            or discussions about data science. Let's turn data into knowledge and knowledge into action.
            <br />
            <strong>🔗 Let&apos;s Connect</strong>
          </p>
        </div>
        <div
          onMouseEnter={hoverEnter}
          onMouseLeave={hoverEnter}
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <Image
            src={profile}
            className="rounded-xl transition-transform duration-500"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
