import "./index.css"
import Canvas from "./Canvas"
import data from "./data"
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import React from 'react';

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);
  
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000", 
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingRef.current;
    headingElement.addEventListener("click", handleClick);

    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return( <>
    <span ref={growingSpan} className="growing rounded-full fixed left-[-20px] right-[-20px] w-5 h-5"></span>
    <div className="w-full relative min-h-screen font-['PPNeueMontreal']">
      {showCanvas && data[0].map((canvasDets, index) => (
        <Canvas key={index} details={canvasDets}/>
      ))}
      
      <div className="w-full relative z-[1] h-screen text-white">
        <nav className="w-full p-3 flex justify-between items-center z-[999]">
          <div className="logo text-xl">Thirtysixstudio</div>
          <div className="links flex gap-10">
            {["Home", "About", "Work", "Contact"].map((link, index) => (
              <a key={index} className="text-md hover:text-gray-300" href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </div>
        </nav>
        <div className="textcontainer w-full px-[26%]">
          <div className="text py-[5%] w-[50%]">
            <h3 className="text-4xl tracking-tight leading-[1.2]">At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.</h3>
            <p className="text-small tracking-tight w-[110%] mt-10">We&apos;re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.</p>
            <p className="text-md mt-10">Scroll</p>
          </div>
        </div>
        <div className="w-full font-['Helvetica'] absolute bottom-0 pl-10">
          <h1 ref={headingRef} className="text-[18rem]">Thirtysixstudio</h1>
        </div>
      </div>
    </div>
    <hr style={{ border: "none", borderTop: "1px solid black", margin: "10px 0" }} />
    <div className="relative w-full h-screen mt-32 px-10">
      {showCanvas && data[1].map((canvasDets, index) => (
        <Canvas key={index} details={canvasDets}/>
      ))}
      <div className="relative z-[1]">
        <div className="text-2xl ml-80  text-white font-bold">01 WHAT WE DO</div>
        <div className="flex justify-between items-center w-full text-white"> 
          <div></div>
          <div className="text-4xl tracking-tight leading-[1.2] pr-[17%] w-[50%] padding:30">We aim to elevate digital production in the advertising space, bringing your ideas to life.
            <p className="text-[40%] tracking-wider pt-10">As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver current digital work.</p>
            <br />
            <p className="text-[40%] tracking-wider">Our commitment to innovation and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.</p>
          </div>
        </div>
 {/* Services Section */}
 <div className="relative w-full min-h-screen px-10 py-20 text-white z-[-1]">
      <div className="text-2xl ml-80 font-bold mb-20">02 OUR SERVICES</div>
      <div className="grid grid-cols-3 gap-10 px-20">
        <div className="service-card">
          <h3 className="text-2xl mb-4">Digital Design</h3>
          <p className="text-gray-400">UI/UX Design, Web Design, Brand Identity, Motion Graphics</p>
        </div>
        <div className="service-card">
          <h3 className="text-2xl mb-4">Development</h3>
          <p className="text-gray-400">Web Development, Interactive Experiences, Custom Solutions</p>
        </div>
        <div className="service-card">
          <h3 className="text-2xl mb-4">Creative Technology</h3>
          <p className="text-gray-400">3D Animation, AR/VR Experiences, Interactive Installations</p>
        </div>
      </div>
    </div>
      </div>
      {/* Footer Section */}
    <footer className="w-full text-white py-20 px-10 z-[-1]">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-10">
          <div>
            <h4 className="text-xl mb-6">Thirtysixstudio</h4>
            <p className="text-gray-400">Creating digital experiences that matter.</p>
          </div>
          <div>
            <h4 className="text-xl mb-6">Contact</h4>
            <p className="text-gray-400">hello@thirtysixstudio.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-xl mb-6">Location</h4>
            <p className="text-gray-400">123 Creative Street</p>
            <p className="text-gray-400">New York, NY 10001</p>
          </div>
          <div>
            <h4 className="text-xl mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Thirtysixstudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>

   

    
  </>
  );
}

export default App
