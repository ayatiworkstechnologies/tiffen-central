import FeastOfFlavours from "@/components/homepage/FeastOfFlavours";
import LogoStrip from "@/components/homepage/LogoStrip";
import SouthIndianDelights from "@/components/homepage/SouthIndianDelights";
import TiffenHeroHotspot from "@/components/homepage/TiffenHeroHotspot";
import WelcomeSection from "@/components/homepage/WelcomeSection";
import ContactUs from "@/components/homepage/ContactUs";
import CateringSection from "@/components/homepage/CateringSectionNew";
import HeroSection from "@/components/homepage/testhero";
import { DATA } from "@/content/data";
import { seo, siteUrl } from "./seo-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: seo.name,
      description: seo.description,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#restaurant` },
    },
    {
      "@type": "Restaurant",
      "@id": `${siteUrl}/#restaurant`,
      name: seo.name,
      slogan: "Authentic South Indian tiffins and cafe comforts",
      description: seo.description,
      url: siteUrl,
      mainEntityOfPage: { "@id": `${siteUrl}/#website` },
      image: [`${siteUrl}/img-3.jpeg`, `${siteUrl}/img-1.png`],
      logo: `${siteUrl}${DATA.site.images.logo}`,
      telephone: DATA.site.contact.phone,
      email: DATA.site.contact.email,
      servesCuisine: ["South Indian", "Tamil Nadu", "Indian"],
      priceRange: "₹₹",
      menu: `${siteUrl}/#feast`,
      acceptsReservations: true,
      areaServed: {
        "@type": "City",
        name: "Chennai",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: DATA.site.contact.addressLines.join(", "),
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600096",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.985986647910096,
        longitude: 80.22238872824276,
      },
      hasMap:
        "https://www.google.com/maps/search/?api=1&query=Tiffen+Central,+Govindasamy+Nagar,+Perungudi,+Chennai,+Tamil+Nadu+600096",
      sameAs: [DATA.site.socials.instagram],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "08:00",
          closes: "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday", "Saturday"],
          opens: "08:00",
          closes: "23:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "09:00",
          closes: "21:00",
        },
      ],
      potentialAction: {
        "@type": "ReserveAction",
        target: `${siteUrl}/#contact`,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
      <div id="catering">
        <CateringSection />
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
