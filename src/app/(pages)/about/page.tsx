import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import VesselsSection from "@/components/about/VesselsSection";
import ValuesSection from "@/components/about/ValuesSection";
import GlobalPresence from "@/components/about/GlobalPresence";

export const metadata: Metadata = {
  title: "About Us | Reality Shipping & Logistics",
  description:
    "Reality Shipping & Logistics is an independent ship and port agency serving bulk carriers, container vessels, tankers and project cargo across India, the Middle East and Southeast Asia — 24/7.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <VesselsSection />
      <ValuesSection />
      <GlobalPresence />
    </>
  );
}
