import Head from "next/head";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Hero from "@/components/Hero";
import Loader  from '@/components/Loader';
import Nav from "@/components/Nav";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("hasLoaded");
      if (hasLoaded) {
        setLoading(false);
      } else {
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("hasLoaded", "true");
        }, 3000); 
      }
    }

    const handleRouteChange = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("routeChangeError", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("routeChangeError", handleRouteChange);
    };
  }, [router]);

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>MadEarth</title>
        {/* <meta name="description" content="Diamond2 is revolutionizing fine jewellery with lab-grown diamonds that rival mined diamonds in brilliance and sustainability." />
        <meta name="keywords" content="lab-grown diamonds, fine jewellery, sustainable diamonds, ethical jewellery, luxury rings, premium diamonds" />
        <meta name="author" content="Diamond2 Team" />
        <meta property="og:title" content="Diamond2 - A New Era of Lab-Grown Diamonds" />
        <meta property="og:description" content="Explore Diamond2's exquisite collection of lab-grown diamonds, designed to redefine luxury and sustainability in fine jewellery." />
        <meta property="og:image" content="https://diamond2.com/images/logo_text_2.png" />
        <meta property="og:url" content="https://diamond2.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diamond2 - A New Era of Lab-Grown Diamonds" />
        <meta name="twitter:description" content="Diamond2 brings you lab-grown diamonds that match the brilliance of mined diamonds while respecting nature and ethical sourcing." />
        <meta name="twitter:image" content="https://diamond2.com/images/logo_text_2.png" /> */}
      </Head>
      {loading && <Loader />}
      {/* <Hero/> */}
      <Nav/>
      <Section1/>
      <Section2/>
      <Section3/>
     
    </div>
  );
};

export default Home;