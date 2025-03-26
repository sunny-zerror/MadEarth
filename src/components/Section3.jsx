'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useMemo, useState } from 'react';
import gsap from 'gsap';
import WavyMesh from './WavyMesh';
import { RiFacebookBoxFill, RiInstagramFill } from '@remixicon/react';
import Footer from './Footer';


export default function Section3() {
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

      gsap.set("#trigger_parent3", { scale: 0.85 });



      gsap.to("#trigger_parent3",
        {
          scrollTrigger: {
            trigger: "#papa3",
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
      gsap.to("#trigger_parent3",
        {
          scrollTrigger: {
            trigger: "#after3",
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
            trigger: "#trigger_parent3",
            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        }
      )
        .fromTo("#trigger_parent3", { scale: 0.85 }, { scale: 1, ease: "power2.out" }, "-=0.5")

      gsap.fromTo("#trigger_parent3", { scale: 1 }, {
        scrollTrigger: {
          trigger: "#after3",
          start: "top bottom",
          end: "top top",
          invalidateOnRefresh: true,
          scrub: true,
          // markers: true,
        },
        scale: .85
      })
    });
  }, []);


  return (
    <div className='overflow-x-hidden'>

      <div className="w-full h-[240vh] center ">
        <div id='papa3' ref={canvasContainerRef2} className="w-full h-full center relative  ">
          <Canvas className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            {canvasSize.width > 0 && canvasSize.height > 0 && <WavyMesh canvasSize={canvasSize} meshScale={meshScale} />}
          </Canvas>
          <div id='trigger_parent3' style={{ transform: "scale(0.85)" }} className="absolute center flex-col  w-full h-full   top-0 left-0">
          <div className="  w-full h-full flex flex-col lg:flex-row  p-5   lg:p-20 lg:py-32 ">

            <div className=" w-full    lg:w-[50%] h-full flex flex-col-reverse lg:flex-col items-center justify-evenly  lg:px-10 ">
              <div className="  m-10 lg:m-0  w-full montserrat  text-sm   xl:text-xl ">
                <p>
                  Diamond2<sup className="mr-2">®</sup>
                  operates at the intersection of fine jewellery and modern
                  science. Headquartered in Singapore, with sales and distribution
                  offices in the US, India and UAE, the company is the sole worldwide
                  manufacturer and distributor of Diamond2<sup className="mr-2">®</sup>
                  brand. <br /> <br />The Diamond2<sup className="mr-2">®</sup>
                  fine jewellery collection is designed and developed by
                  our in-house creative team based in Milan, Italy, the world’s design
                  capital.
                </p>
                <div className="flex mt-10 gap-2">
                  <a href="https://www.instagram.com/diamond2official/?igsh=MXEyaG5hajJudjhkbQ%3D%3D#" target="_blank" rel="noreferrer">
                    <RiInstagramFill className="hover:opacity-70 cursor-pointer hover:scale-110 transition-all ease-linear duration-100" />
                  </a>
                  <a href="https://www.facebook.com/share/19yq86hQSB/?mibextid=wwXIfr" target="_blank" rel="noreferrer" >
                    <RiFacebookBoxFill className="hover:opacity-70 cursor-pointer hover:scale-110 transition-all ease-linear duration-100" />
                  </a>
                </div>
              </div>
              <div className=" w-full max-[600px]:hidden ">
                <img
                  className="w-[50%] mt-10"
                  src="/images/blogs/blog_cvr_1.webp"
                  alt=""
                />
                <div className="flex mt-2 flex-col">

                  <p className="montserrat text-[#6d1d45] font-medium   text-[1.3vw] ">What is Diamond2 ? </p>
                  <a href="/">
                    <p className="montserrat text-xs underline cursor-pointer opacity-60 hover:opacity-100 w-fit ">Read More</p>
                  </a>
                </div>
              </div>
            </div>
            <div className=" w-full lg:w-[50%] h-full  flex  gap-5 md:gap-10 items-center  md:justify-center text-center">
              <div className="">
                <img
                  className=" w-full  md:w-[70%]"
                  src="/images/blogs/blog_cvr_2.webp"
                  alt=""
                /><div className="flex mt-2 items-start flex-col">

                  <p className="montserrat text-[#6d1d45] font-medium text-start max-[600px]:text-xs text-[1.3vw] ">About Stones and Cuts </p>
                  <a href="/">
                    <p className="montserrat text-xs underline cursor-pointer opacity-60 hover:opacity-100 w-fit ">Read More</p>
                  </a>
                </div>
              </div>
              <div className=" h-full   min-[600px]:hidden  ">
                <img
                  className="w-[100%] "
                  src="/images/blogs/blog_cvr_1.webp"
                  alt=""
                />
                <div className="flex mt-2 flex-col">
                  <p className="montserrat text-[#6d1d45] font-medium max-[600px]:text-xs text-start ">What is Diamond2 ? </p>

                  <a href="/">
                    <p className="montserrat text-xs underline cursor-pointer opacity-60 hover:opacity-100 w-fit ">Read More</p>
                  </a>
                </div>
              </div>
            </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}
