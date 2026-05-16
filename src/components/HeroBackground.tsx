"use client";

import { useState, useEffect } from "react";


const images = [
  "/background/bg.png",
  "/background/bg1.jpg",
  "/background/bg2.png",
  "/background/bg3.png",
];

export default function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Background ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
    </div>
  );
}
