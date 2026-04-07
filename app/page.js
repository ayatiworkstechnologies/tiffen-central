import FeastOfFlavours from "@/components/homepage/FeastOfFlavours";
import GlassMenuSection from "@/components/homepage/GlassMenuSection";
import AnimatedHero from "@/components/homepage/herosection";
import LogoStrip from "@/components/homepage/LogoStrip";
import SouthIndianDelights from "@/components/homepage/SouthIndianDelights";
import TiffenHeroHotspot from "@/components/homepage/TiffenHeroHotspot";
import WelcomeSection from "@/components/homepage/WelcomeSection";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <AnimatedHero />
   <LogoStrip />
   <WelcomeSection />
   <FeastOfFlavours />
   <SouthIndianDelights />
   <TiffenHeroHotspot />
   {/* <GlassMenuSection /> */}
   </>
  );
}
