import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroShipCarousel() {
  const images = [
    "/assets/ship-1.jpg",
    "/assets/ship-2.jpg",
    "/assets/ship-3.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Images */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          height={500}
          width={800}
          alt="Ship"
          className={`
            absolute inset-0 h-full w-full object-cover
            transition-all duration-1000 ease-in-out
            ${
              activeIndex === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }
          `}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              rounded-full transition-all duration-300
              ${
                activeIndex === index
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>
    </>
  );
}