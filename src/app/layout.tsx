import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chioma's Blog",
  description:
    "Great journalist, teacher and mentor, Chioma Ezenwafor shares her thoughts and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Navbar />
        <main className="flex-grow pt-20"> {/* Adjusted the padding (pt-16) as needed to suit the fixed position of the navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
