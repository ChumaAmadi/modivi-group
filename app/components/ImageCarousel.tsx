"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/assets/TCF.PNG', alt: 'Treasure Coast Fencing' },
  { src: '/assets/JB-Mechanical.PNG', alt: 'JB Mechanical' },
  { src: '/assets/Mondy.PNG', alt: 'Mondy Cleaners' },
  { src: '/assets/Adonai.PNG', alt: 'Adonai Alliance' },
  { src: '/assets/Space Age.png', alt: 'Space Age' },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group overflow-hidden bg-zinc-950 touch-pan-y">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === currentIndex 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-110 pointer-events-none'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover cursor-pointer"
            priority={index === 0}
            onClick={nextSlide}
          />
          {/* Overlay for better text legibility if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-4' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Title Tag */}
      <div className="absolute top-4 left-4 z-20">
        <div className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
            Case Study: {images[currentIndex].alt}
          </p>
        </div>
      </div>
    </div>
  );
}

