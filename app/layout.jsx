import { DM_Sans, Fraunces } from "next/font/google";
import Navbar from "./components/Navbar";
import Assistant from "./components/Assistant";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata = {
  metadataBase: new URL("https://jacktchasinga.com"),
  title: {
    default: "Jack Tchasinga | Full-Stack Developer",
    template: "%s | Jack Tchasinga",
  },
  description:
    "Tchasinga Balolebwami Jack — Full-stack developer portfolio. React, Next.js, Node.js, and more.",
  applicationName: "Jack Tchasinga",
  authors: [{ name: "Jack Tchasinga" }],
  keywords: [
    "Jack Tchasinga",
    "Full-stack developer",
    "React",
    "Next.js",
    "Node.js",
    "portfolio",
  ],
  openGraph: {
    title: "Jack Tchasinga | Full-Stack Developer",
    description:
      "Full-stack developer with 5 years of experience, based in Nairobi, Kenya.",
    url: "https://jacktchasinga.com",
    siteName: "Jack Tchasinga",
    type: "website",
    locale: "en",
  },
};

const themeScript = `(function(){try{if(localStorage.getItem("portfolio-theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Navbar />
        {children}
        <Assistant />
      </body>
    </html>
  );
}
