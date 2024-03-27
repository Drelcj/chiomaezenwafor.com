"use client";
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const slides = [
  {
    title: "Explore My Professional Odyssey",
    subtitle: "Journey Through My Authored Pages, Curated Lessons, and Thought Pieces",
    cta: "Begin Your Exploration",
    link: "/my-services",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1709545401/IMG_6361_qacxiu.jpg"
  },
  {
    title: "Book signing event",
    subtitle: "Thank you for a successful event",
    cta: "See highlights here",
    link: "/media",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1709591169/Book_signing_flier_gwttuh.jpg"
  },
  {
    title: "Learn from my years of experience",
    subtitle: "Join my classes today",
    cta: "Join Now",
    link: "/my-online-courses",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1709545714/IMG_63612i_nks2ww.jpg"
  },
  {
    title: "Check out what's trending",
    subtitle: "Read my latest blog posts",
    cta: "Read Now",
    link: "https://www.nigeriainfo.fm/port-harcourt/",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1709545976/IMG_63613_sbi3na.jpg"
  },
  {
    title: "Grab 'Becoming a News Titan' and other books",
    subtitle: "Browse my online store",
    cta: "Shop Now",
    link: "/my-books",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1709628356/Book_signing_fliersrd_io6nou.jpg"
  },
  {
    title: "Book signing event",
    subtitle: " Thank you for a successful event",
    cta: "See highlights here",
    link: "/media",
    image: "https://res.cloudinary.com/dt3czltxx/image/upload/v1709546492/IMG_63614_i2sxfs.jpg"
  }
];

const HeroSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-[80vh] bg-cover bg-center">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute w-full h-[80vh] bg-cover bg-center transition-all duration-1000 ease-in-out ${slideIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="h-full flex flex-col justify-center items-center text-white">
            <motion.h1 className="text-4xl mb-4" whileHover={{ scale: 1.1 }}>{slide.title}</motion.h1>
            <motion.p className="text-xl mb-8" whileHover={{ scale: 1.1 }}>{slide.subtitle}</motion.p>
            <Link href={slide.link}>
              <motion.a className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-400 hover:text-black transition-colors duration-200" whileHover={{ scale: 1.1 }}>{slide.cta}</motion.a>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSlider;
