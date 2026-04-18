import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GlobalReach from "@/components/GlobalReach";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import HomeBanner from "@/components/HomeBanner";
import HomeAboutPreview from "@/components/HomeAboutPreview";
import HomePortPreview from "@/components/HomePortPreview";
import HomeNewsPreview from "@/components/HomeNewsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAboutPreview />
      <Services />
      <HomePortPreview />
      <GlobalReach />
      <WhyUs />
      <HomeBanner />
      <HomeNewsPreview />
      <Contact />
    </>
  );
}
