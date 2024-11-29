import "./index.css"
import Canvas from "./Canvas"
import data from "./data"
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);
  
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
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

  return <>
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
        <h1 className="text-8xl tracking-tighter">about the brand</h1>
        <p className="text-4xl leading-1.8 w-[80%] mt-10 font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, itaque id iste voluptatem enim debitis aliquid ducimus deleniti nihil. Nam nostrum aspernatur at beatae error rerum rem sit? Tempora in quia pariatur illum ex.</p>
      </div>
    </div>
  </>
}

export default App
