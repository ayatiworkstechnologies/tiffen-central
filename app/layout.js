import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { seo, siteUrl } from "./seo-config";

const kavo = localFont({
  src: "../public/fonts/KavoSerif.otf",
  variable: "--font-kavo",
});

const sora = localFont({
  src: "../public/fonts/Sora.ttf",
  variable: "--font-sora",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${seo.name}`,
  },
  description: seo.description,
  applicationName: seo.name,
  keywords: [
    "best South Indian restaurant in Chennai",
    "authentic South Indian food Chennai",
    "South Indian restaurant in Perungudi",
    "South Indian breakfast Chennai",
    "vegetarian restaurant Perungudi",
    "tiffin restaurant Perungudi",
    "dosa idli restaurant Chennai",
    "Tamil Nadu tiffin restaurant",
    "filter coffee Perungudi",
    "South Indian catering Chennai",
  ],
  authors: [{ name: seo.name, url: siteUrl }],
  creator: seo.name,
  publisher: seo.name,
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: "/",
    siteName: seo.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  category: "restaurant",
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Perungudi, Chennai",
    "geo.position": "12.985986647910096;80.22238872824276",
    ICBM: "12.985986647910096, 80.22238872824276",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${kavo.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-secondary text-foreground bg-background">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
