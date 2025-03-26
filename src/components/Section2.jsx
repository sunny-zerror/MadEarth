'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useMemo, useState } from 'react';
import gsap from 'gsap';
import WavyMesh from './WavyMesh';


export default function Section2() {
  const canvasContainerRef2 = useRef();
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [meshScale, setMeshScale] = useState(0.8);

  useEffect(() => {
    const updateSize = () => {
      if (canvasContainerRef2.current) {
        setCanvasSize({
          width: canvasContainerRef2.current.clientWidth,
          height: canvasContainerRef2.current.clientHeight
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      gsap.set("#trigger_parent2", { scale: 0.85 });



      gsap.to("#trigger_parent2",
        {
          scrollTrigger: {
            trigger: "#papa2",
            start: "top 72%",
            end: "bottom bottom",
            invalidateOnRefresh: true,
            scrub: true,
            // markers: true,
            onUpdate: (self) => {
              setMeshScale(0.8 + 0.5 * self.progress);
            },
          },
        }
      );
      gsap.to("#trigger_parent2",
        {
          scrollTrigger: {
            trigger: "#after2",
            start: "top bottom",
            end: "top top",
            invalidateOnRefresh: true,
            scrub: true,
            // markers: true,
            onUpdate: (self) => {
              setMeshScale(1 - 0.2 * self.progress);
            },
          },
        }
      );

      var tl = gsap.timeline(
        {
          scrollTrigger: {
            trigger: "#trigger_parent2",
            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        }
      )
        .fromTo("#trigger_parent2", { scale: 0.85 }, { scale: 1, ease: "power2.out" }, "-=0.5")

      gsap.fromTo("#trigger_parent2", { scale: 1 }, {
        scrollTrigger: {
          trigger: "#after2",
          start: "top bottom",
          end: "top top",
          invalidateOnRefresh: true,
          scrub: true,
          // markers: true,
        },
        scale: .85
      })
      gsap.fromTo("#wrapper", { top:"-10%"  }, {
        scrollTrigger: {
          trigger: "#wrap_parent",
          start: "top 20%", 
          invalidateOnRefresh: true,
          // markers: true,
        },
        top:"100%"
      })


    });
  }, []);


  return (
    <div className='overflow-x-hidden'>

      <div className="w-full h-[160vh] center ">
        <div id='papa2' ref={canvasContainerRef2} className="w-full h-full center relative  ">
          <Canvas className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            {canvasSize.width > 0 && canvasSize.height > 0 && <WavyMesh canvasSize={canvasSize} meshScale={meshScale} />}
          </Canvas>
          <div id='trigger_parent2' style={{ transform: "scale(0.85)" }} className="absolute center  w-full h-full   top-0 left-0">
            <div className=" w-full lg:w-[50%] h-full center">
              <div className=" w-full h-[50%] center  md:w-[80%] md:h-[80%] ">
                <div id='wrap_parent' className=" overflow-hidden relative w-full center h-fit ">
                  <img className='w-[70%]' src="https://diamond2.com/images/blogs/blog_cvr_2.webp" alt="" />
                  <div id='wrapper' className="absolute bg-white scale-110  w-full h-full"></div>
                </div>
              </div>
            </div>
            <div className=" w-full h-[50%]   lg:w-[50%] spectral-light md:h-full  flex flex-col gap-10 items-center justify-center text-center">
              <p className="capitalize text-2xl md:text-4xl  ">
                {" "}
                <span className="text-[#6d1d45] italic text-4xl md:text-6xl   ">
                  {" "}
                  A world beyond
                </span> <br />   mined diamonds
              </p>
              <p className=" w-full montserrat  text-sm  lg:w-[70%] leading-5  xl:text-xl  mb-20 md:mb-0">
                Our revolutionary lab-grown Diamond2<sup></sup> is an innovative
                breakthrough that seeks to disrupt the tradition-bound world of fine
                jewellery dominated by the mined diamonds. <br /><br />
                Our unique, lab-grown diamonds are designed to seduce today’s
                sophisticated, forward-looking clientele, thanks to its rarefied beauty
                and remarkable brilliance that equals that of mined diamonds but at
                significantly lesser cost.
                <br /><br />

                Discover the beauty of Diamond2<sup className="mr-2">®</sup> . <br />Discover a world beyond mined diamonds.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='after2' className="w-full h-[70vh] "></div>
    </div>
  );
}
