import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HighlightsSection() {
  // Images for the carousel
  const images = [
    "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/Muneeb-Ul-Hassan.jpg",
    "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/Machine-Learning-Specialization_page-0001-2048x1583.jpg",
    "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/Deep-Learning-Specialization_Muneeb-Ul-Hassan-2048x1583.jpg",
    "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/Reinforcement-Learning-Specialization-2048x1583.jpg",
    "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/Arduino-Workshop-IEEE-UET.png",
    "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/Encoder-Decoder-2048x1447.jpg",
    "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/Custom-Prompts-for-ChatGPT-DALL%C2%B7E-and-Midjourney-Leonardo-AI-Cert_page-0001-2048x1447.jpg",
    "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/Communication-Skills-2048x1447.jpg",
    "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/ASME-Arcade-2048x1448.jpg",
    "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/Aspire_Certificate-2048x1583.jpg",
    "https://dev-muneebulhassan.pantheonsite.io/wp-content/uploads/2025/01/Arduino-ASME.jpg",
  ];

  // Duplicate images for seamless looping
  const marqueeImages = [...images, ...images];

  const imageWidth = 350 + 16; // image width + gap
  const totalWidth = marqueeImages.length * imageWidth;

  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1); // px per frame
  const [direction, setDirection] = useState(1); // -1: left, 1: right
  const speedTimeout = useRef<NodeJS.Timeout | null>(null);

  // Animation loop
  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      if (!isPaused) {
        setOffset((prev) => {
          let next = prev + speed * direction;
          // Loop seamlessly
          if (next <= -totalWidth / 2) return 0;
          if (next >= 0) return -totalWidth / 2;
          return next;
        });
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, speed, direction, totalWidth]);

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="highlights" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-gray-700">
            Showcasing my certifications and achievements.
          </p>
        </div>

        {/* Marquee Carousel with Arrows */}
        <div className="w-full max-w-6xl mx-auto overflow-hidden relative">
          <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
            <Button variant="ghost" size="icon" onClick={() => {
              setDirection(-1); // Move left
              setSpeed(12);
              if (speedTimeout.current) clearTimeout(speedTimeout.current);
              speedTimeout.current = setTimeout(() => setSpeed(1), 1000);
            }}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
            <Button variant="ghost" size="icon" onClick={() => {
              setDirection(1); // Move right
              setSpeed(12);
              if (speedTimeout.current) clearTimeout(speedTimeout.current);
              speedTimeout.current = setTimeout(() => {
                setSpeed(1);
                setDirection(-1); // Resume normal left scroll
              }, 1000);
            }}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          <div
            className="flex gap-4"
            style={{
              width: `${marqueeImages.length * 350 + marqueeImages.length * 16}px`,
              transform: `translateX(${offset}px)`,
              transition: isPaused ? 'none' : 'transform 0.1s linear',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {marqueeImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-100 border border-gray-200 overflow-hidden"
                style={{
                  flex: '0 0 auto',
                  width: '350px',
                  height: '260px',
                }}
              >
                <img
                  src={image}
                  alt={`Highlight ${index + 1}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
