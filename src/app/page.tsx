import Hero from "@/components/Hero";
import GlobalReach from "@/components/GlobalReach";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import HomePortPreview from "@/components/HomePortPreview";
import About from "@/components/About";
import NewService from "@/components/NewService";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <NewService/>
      {/* <HomeAboutPreview /> */}
      {/* <Services /> */}
      <HomePortPreview />
      <GlobalReach />
      <WhyUs />
      {/* <HomeBanner /> */}
      {/* <HomeNewsPreview /> */}
      <Contact />
    </>
  );
}
