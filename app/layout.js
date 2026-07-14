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

const googleTagManagerScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-54JHXSLW');`;

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
  verification: {
    google:
      process.env.GOOGLE_SITE_VERIFICATION ||
      "dkJREFRfYxIj2C0Y7GqqdaWwtFFaPm7SR-Z7TFKwUcY",
  },
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
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: googleTagManagerScript }}
        />
      </head>
      <body className="min-h-full flex flex-col font-secondary text-foreground bg-background">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-54JHXSLW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
