import Camp from "@/components/Camp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <FloatingWhatsApp />
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
      {/* <Contact /> */}
    </>
  );
}
