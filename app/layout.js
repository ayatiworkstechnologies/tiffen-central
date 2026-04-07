import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const kavo = localFont({
  src: "../public/fonts/KavoSerif.otf",
  variable: "--font-kavo",
});

const sora = localFont({
  src: "../public/fonts/Sora.ttf",
  variable: "--font-sora",
});

export const metadata = {
  title: "Tiffen Central",
  description: "Tiffen Central Restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${kavo.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-secondary text-primary bg-background">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
