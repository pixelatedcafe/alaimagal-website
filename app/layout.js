import { Geist, Geist_Mono } from "next/font/google";
import { Sansita_Swashed } from 'next/font/google';
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";



export const sansita = Sansita_Swashed({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-sansita',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alaimagal Hotel" ,
  description: "Alaimagal Hotel - Your Gateway to Comfort and Luxury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sansita.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
