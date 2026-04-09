import FeastOfFlavours from "@/components/homepage/FeastOfFlavours";
import AnimatedHero from "@/components/homepage/herosection";
import LogoStrip from "@/components/homepage/LogoStrip";
import SouthIndianDelights from "@/components/homepage/SouthIndianDelights";
import TiffenHeroHotspot from "@/components/homepage/TiffenHeroHotspot";
import WelcomeSection from "@/components/homepage/WelcomeSection";
import ContactUs from "@/components/homepage/ContactUs";
import SouthIndianHero from "@/components/homepage/testhero";
import SouthIndianHero1 from "@/components/homepage/testhero1";
import HeroSection from "@/components/homepage/testhero";


export default function Home() {
  return (
   <>
   {/* <AnimatedHero /> */}
   <HeroSection />
   {/* <SouthIndianHero /> */}
   {/* <SouthIndianHero1 /> */}
   <LogoStrip />
   <WelcomeSection />
   <FeastOfFlavours />
   <SouthIndianDelights />
   <TiffenHeroHotspot />
   <ContactUs />
   </>
  );
}
