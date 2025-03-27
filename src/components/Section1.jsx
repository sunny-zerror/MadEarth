'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useMemo, useState } from 'react';
import gsap from 'gsap';
import WavyMesh from './WavyMesh';

const cardData = [
  {
    id: 1,
    bgColor: "",
    img: "/images/collection/cln_1.webp",
    width: "w-[15vw]",
    txtHeading: " CEREMONY  COLLECTION",
    txtPara: "“A work of exquisite beauty, the Diamond2® solitaire seduces the heart with its captivating brilliance and fire.”",
    responsive_width: "w-[45vw]",
    textSize: "text-[1.5vw]",
    textSizePara: "text-[.7vw]",
  },
  {
    id: 2,
    bgColor: "",
    img: "/images/collection/cln_5.webp",
    width: "w-[15vw]",
    responsive_width: "w-[45vw]",
    txtHeading: " INTERSTELLAR COLLECTION",
    txtPara: "“Celestial bodies are captured in miniature through an exceptionalrange of pieces evoking striking constellations.”",
    textSize: "text-[1.5vw]",
    textSizePara: "text-[.7vw]",
    justifyContent: "justify-end",
  },
  {
    id: 3,
    bgColor: "",
    img: "/images/collection/cln_2.webp",
    width: "w-[25.7vw]",
    txtHeading: "Riviera collection",
    txtPara: "“Delicate petals and imaginative settings seduce the eye and warm the heart.”",
    textSize: "text-[2.5vw]",
    responsive_width: "w-[95vw]",
    textSizePara: "text-[1vw]",
  },
  {
    id: 4,
    bgColor: "",
    img: "/images/collection/cln_6.webp",
    width: "w-[15vw]",
    txtHeading: " Emerald collection",
    txtPara: "“At Diamond2®, we offer an impressive selection of stone cuts to allow clients the opportunity.”",
    responsive_width: "w-[45vw]",
    textSize: "text-[1.5vw]",
    textSizePara: "text-[.7vw]",
  },
  {
    id: 5,
    bgColor: "",
    img: "/images/collection/cln_4.webp",
    width: "w-[15vw]",
    txtHeading: " Jewellery collection",
    txtPara: "“At Diamond2®, we also offer a selection of high jewellery pieces that are designed to captivate and inspire.”",
    responsive_width: "w-[45vw]",
    textSize: "text-[1.5vw]",
    textSizePara: "text-[.7vw]",
    justifyContent: "justify-end",
  },
];

export default function Section1() {
  const canvasContainerRef = useRef();
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [meshScale, setMeshScale] = useState(0.8);

  useEffect(() => {
    const updateSize = () => {
      if (canvasContainerRef.current) {
        setCanvasSize({
          width: canvasContainerRef.current.clientWidth,
          height: canvasContainerRef.current.clientHeight
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

      gsap.set("#trigger_parent", { scale: 0.85 });



      gsap.to("#trigger_parent",
        {
          scrollTrigger: {
            trigger: "#papa",
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
      gsap.to("#trigger_parent",
        {
          scrollTrigger: {
            trigger: "#after",
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
            trigger: "#trigger_parent",
            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true,
          },
        }
      )
      .fromTo("#trigger_parent", { scale: 0.85 }, { scale: 1, ease: "power2.out" }, "-=0.5")
      .fromTo('.our_cln_heading', { height: 0 }, { height: "15vw", ease: "power2.out" }, "-=0.5")
      .fromTo(".our_cln_heading_2", { y: 100 }, { y: 0, ease: "power2.out", delay: .1 }, "-=0.5")

      gsap.fromTo("#trigger_parent", { scale: 1 }, {
        scrollTrigger: {
          trigger: "#after",
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

    useEffect(() => {
      import("gsap/ScrollTrigger").then((module) => {
        const ScrollTrigger = module.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        if (window.innerWidth <= 768) return;
        gsap.utils.toArray(".card_child").forEach((card) => {
          const cardPopup = card.querySelector(".card_popup");
          const cardParent = card.closest(".card_parent");
          const initialHeight = cardParent.offsetHeight + "px";
          const initialWidth = cardParent.offsetWidth + "px";
  
          card.addEventListener("mouseenter", () => {
            gsap.to(cardPopup, { scale: 1, duration: 0.5, ease: "power1" });
  
            gsap.to(cardParent, {
              height: "+=1.5vw",
              width: "+=2.2vw",
              duration: 0.7,
              ease: "power2"
            });
            gsap.fromTo(
              cardPopup.querySelector(".popup-text"),
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.6, ease: "power1" }
            );
            gsap.fromTo(
              cardPopup.querySelector(".popup-text-2"),
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.6, ease: "power1" }
            );
          });
  
          card.addEventListener("mouseleave", () => {
            gsap.to(cardPopup, { scale: 0, duration: 0.4, ease: "power2.inOut" });
            gsap.to(cardParent, {
              height: initialHeight,
              width: initialWidth,
              duration: 0.7,
            });
          });
        });
      })
    }, []);


  return (
    <div className='overflow-x-hidden'>
      <div className=" fixed z-[-1] top-0 left-0 w-full h-[100vh] ">
        <video className='w-full h-full object-cover' src="https://diamond2.com/videos/hero_video.mp4" loop autoPlay muted playsInline ></video>
      </div>
      <div className="w-full h-[80vh]">
      <div className="w-full   uppercase spectral-extralight h-[80vh]  text-white py-20 md:py-0   flex flex-col  justify-end items-end md:px-[20vw] lg:px-[23vw] ">
          <div className="w-full text-4xl lg:text-8xl  overflow-hidden italic   ">
            <p className="hero_hd_1" >
              Love more
            </p>
          </div>
          <div className="w-full flex  items-center justify-end text-4xl lg:text-8xl overflow-hidden">
            <p className="hero_hd_2" >
              spend less
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[160vh] center ">
        <div id='papa' ref={canvasContainerRef} className="w-full h-full center relative  ">
          <Canvas className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            {canvasSize.width > 0 && canvasSize.height > 0 && <WavyMesh canvasSize={canvasSize} meshScale={meshScale} />}
          </Canvas>
          <div id='trigger_parent' style={{ transform: "scale(0.85)" }}  className="absolute  w-full h-full  top-0 left-0">
            <div className=" max-[600px]:hidden overflow-hidden scroll_child_section_1 w-full h-full flex flex-col items-center justify-between   pt-20 pb-44  ">
              <div className="  our_cln_heading   overflow-hidden  w-full h-[15vw]  flex justify-start items-center flex-col">
                <div className="h-fit w-full flex overflow-hidden items-center justify-center  flex-col">
                  <div className="our_cln_heading_2 bg text-center">
                    <p className="text-7xl spectral-light capitalize text-[#6d1d45]  "> jewellery collection</p>
                    <p className="mt-3 text-xl opacity-70 montserrat">Diamond2<sup className="mr-2">®</sup> reimagines the world of fine jewellery with timeless <br />
                      contemporary designs featuring our revolutionary lab-grown diamond.</p>
                  </div>
                </div>
              </div>
              <div className="overflow-y-hidden  md:pb-20">
                <div className="  w-auto h-[38vw]   grid grid-flow-col aspect-square  gap-3">
                  {cardData.map((card) => (
                    <div
                      key={card.id}
                      className={`h-[38vw] card_parent ${card.bgColor} ${card.width
                        } origin-center flex flex-col ${card.justifyContent || ""}`}
                    >
                      <div className="w-full h-fit">
                        <div className="card_child relative flex items-center justify-center w-full h-fit">
                          <img
                            className="w-full object-cover h-fit"
                            src={card.img}
                            alt=""
                          />
                          <div className="card_popup absolute  w-[90%] h-[90%] scale-0 bg-white z-[1] flex items-center justify-evenly   text-center flex-col">
                            <div className="popup-text uppercase center">
                              <p className={`  leading-tight w-[80%] text-[#6d1d45] text-center  ${card.textSize}`}>
                                {card.txtHeading}
                              </p>
                            </div>
                            <div className="popup-text-2 w-[80%] leading-[1vw]  ">
                              <p className={`  ${card.textSizePara}`}>{card.txtPara}</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-[.7vw] montserrat uppercase  leading-3 mt-2 text-[#6d1d45] font-medium  ">{card.txtHeading}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='after' className="w-full h-[70vh] "></div>
    </div>
  );
}
