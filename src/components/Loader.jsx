import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      gsap.to(loaderRef.current, {
        y: "-110%",
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isLoaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 99 ? prev + 1 : prev));
    }, 30); 
    const handleLoad = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => setIsAnimating(false), 700); 
      }, 2000);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {isAnimating && (
        <div
        ref={loaderRef}
          className="w-full h-[100vh] fixed top-0 z-[999] bg-white flex flex-col items-center justify-center gap-10"
        >
          <div className="w-full center">
            <img className=" w-[40%] md:w-[12%]" src="/images/logo_text_2.png" alt="Logo" />
          </div>
          <div className=" w-[35%] md:w-[20vw] h-[30vh] md:h-[50vh] relative overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-full h-full overflow-hidden absolute"
                initial={{ top: 500 }}
                animate={{ top: 0 }}
                transition={{ duration: 0.5, delay: i * 0.5 }}
              >
                <motion.img
                  initial={{ top: -500, scale: 1.2 }}
                  animate={{ top: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.5 }}
                  className="w-[100%] object-cover h-[100%] absolute"
                  src={`/images/collection/cln_${i + 1}.webp`}
                  alt=""
                />
              </motion.div>
            ))}
          </div>
          <div className="w-full text-center font-semibold text-xl">
            {progress}%
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;
