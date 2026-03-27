"use client";

import Image from "next/image";
import { startTransition, useEffect, useState } from "react";
import type { NewsItem } from "../site-data";

type NewsCarouselProps = {
  images: NewsItem["images"];
  label: string;
  autoAdvanceMs?: number;
};

export function NewsCarousel({ images, label, autoAdvanceMs = 5000 }: NewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = images.length;

  const showPrevious = () => {
    startTransition(() => {
      setActiveIndex((currentIndex) => (currentIndex - 1 + slideCount) % slideCount);
    });
  };

  const showNext = () => {
    startTransition(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slideCount);
    });
  };

  const showSlide = (index: number) => {
    startTransition(() => {
      setActiveIndex(index);
    });
  };

  useEffect(() => {
    if (slideCount < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      startTransition(() => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % slideCount);
      });
    }, autoAdvanceMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoAdvanceMs, slideCount]);

  return (
    <div aria-label={label} className="news-carousel">
      <div className="news-carousel-viewport">
        <div
          className="news-carousel-track"
          style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <div className="news-carousel-slide" key={image.src}>
              <Image
                alt={image.alt}
                className="news-carousel-image"
                fill
                priority={index === 0}
                quality={95}
                sizes="(max-width: 1260px) calc(100vw - 32px), 1220px"
                src={image.src}
              />
            </div>
          ))}
        </div>
      </div>

      {slideCount > 1 ? (
        <>
          <button
            aria-label="Show previous team photo"
            className="news-carousel-button news-carousel-button-prev"
            onClick={showPrevious}
            type="button"
          >
            {"<"}
          </button>
          <button
            aria-label="Show next team photo"
            className="news-carousel-button news-carousel-button-next"
            onClick={showNext}
            type="button"
          >
            {">"}
          </button>

          <div className="news-carousel-dots">
            {images.map((image, index) => (
              <button
                aria-label={`Show team photo ${index + 1}`}
                aria-pressed={index === activeIndex}
                className={`news-carousel-dot${index === activeIndex ? " active" : ""}`}
                key={image.src}
                onClick={() => showSlide(index)}
                type="button"
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
