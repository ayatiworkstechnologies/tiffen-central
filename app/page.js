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
      <div id="home">
        <HeroSection />
      </div>
      <LogoStrip />
      <div id="about">
        <FeastOfFlavours />
      </div>
      <div id="feast">
        <WelcomeSection />
      </div>
      <div id="delights">
        <SouthIndianDelights />
      </div>
      <div id="signature">
        <TiffenHeroHotspot />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </>
  );
}
