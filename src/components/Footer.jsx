import { RiArrowDropUpLine, RiFacebookLine, RiInstagramLine } from '@remixicon/react'
import React, { useEffect } from 'react'
import gsap from 'gsap'




const Footer = () => {


  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".ftr_img",
        { y: "-50%" },
        {
          y: 0,
          scrollTrigger: {
            trigger: ".ftr",
            // markers:true,
            start: "top 72%", // Start a bit earlier
            end: "bottom bottom", // End later for a smoother transition
            scrub: true, // Slower reaction to scrolling
          },
        }
      );

    });
  }, []);


  return (
    <div>
      <div className="w-full ftr overflow-hidden  md:px-32 pb-10   md:h-[80vh] flex justify-between flex-col  bg-white  ">
        <div className="w-auto  overflow-hidden  h-[85%] grid px-2 md:px-0  grid-cols-2 lg:grid-cols-5  ">
          <div className="h-full  my-14  lg:m-0 px-2 flex flex-col justify-start">
            <div className=" h-[70vw]  md:h-[25vw]   w-full">
              <img className="h-full w-full object-cover" src="/images/footer/img5_compressed.webp" alt="" />
            </div>
            <p className="    montserrat  text-[#6d1d45] font-medium  text-[.7vw] uppercase  ">Wisma Atria Store</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col  justify-end  ftr_img ">
            <div className=" h-[70vw]  md:h-[25vw]    w-full">
              <img className="h-full w-full object-cover" src="/images/footer/img3_compressed.webp" alt="" />
            </div>
            <p className="    montserrat  text-[#6d1d45] font-medium  text-[.7vw] uppercase  ">Diamond Cut Rings</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col justify-start">
            <div className=" h-[70vw]  md:h-[25vw]   w-full">
              <img className="h-full w-full object-cover" src="/images/footer/img4_compressed.webp" alt="" />
            </div>
            <p className="    montserrat  text-[#6d1d45] font-medium  text-[.7vw] uppercase  ">High Jwellery Collection</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col justify-end  ftr_img ">
            <div className=" h-[70vw]  md:h-[25vw]   w-full">
              <img className="h-full w-full object-cover" src="/images/footer/img2_compressed.webp" alt="" />
            </div>
            <p className="    montserrat  text-[#6d1d45] font-medium  text-[.7vw] uppercase  ">Fine Jewellary Collection</p>
          </div>
          <div className="h-full  my-14 lg:m-0 px-2 flex flex-col justify-start">
            <div className=" h-[70vw]  md:h-[25vw]   w-full">
              <img className="h-full w-full object-cover" src="/images/footer/img1_compressed.webp" alt="" />
            </div>
            <p className="    montserrat  text-[#6d1d45] font-medium  text-[.7vw] uppercase  ">Diamond2 Boxes</p>
          </div>
        </div>
        <div className="w-full  montserrat  flex flex-col lg:flex-row items-end justify-between ">
          <img className=" md:w-[15%]" src="/images/logo_text_2.png" alt="" />
          <div className="center w-fit gap-5">
            <RiInstagramLine />
            <RiFacebookLine />
          </div>

        </div>
      </div></div>
  )
}

export default Footer