import FeastOfFlavours from "@/components/homepage/FeastOfFlavours";
import AnimatedHero from "@/components/homepage/herosection";
import LogoStrip from "@/components/homepage/LogoStrip";
import SouthIndianDelights from "@/components/homepage/SouthIndianDelights";
import TiffenHeroHotspot from "@/components/homepage/TiffenHeroHotspot";
import WelcomeSection from "@/components/homepage/WelcomeSection";
import ContactUs from "@/components/homepage/ContactUs";


export default function Home() {
  return (
   <>
   <AnimatedHero />
   <LogoStrip />
   <WelcomeSection />
   <FeastOfFlavours />
   <SouthIndianDelights />
   <TiffenHeroHotspot />
   <ContactUs />
   </>
  );
}
