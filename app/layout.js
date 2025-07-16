import { Geist, Geist_Mono } from "next/font/google";
import { Sansita_Swashed } from 'next/font/google';

import { Fira_Code, Josefin_Sans, Montserrat, Oswald } from 'next/font/google';
import "./globals.css";

export const sansita = Sansita_Swashed({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-sansita',
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira-code',
});

export const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-josefin-sans',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
});

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Alaimagal Hotel" ,
  description: "Alaimagal Hotel - Your Gateway to Comfort and Luxury",
  
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} ${sansita.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
