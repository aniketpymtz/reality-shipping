"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function AboutVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Mouse tracking lives in refs so cursor motion never triggers a re-render.
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }, []);

  // Keep React state in sync with the actual media element, so the CTA and
  // cursor label always reflect true playback (covers ended / external pauses).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onPause);
    };
  }, []);

  // Buttery-smooth cursor: lerp current → target every frame at ~60fps.
  useEffect(() => {
    const tick = () => {
      const c = current.current;
      const t = target.current;
      c.x += (t.x - c.x) * 0.18;
      c.y += (t.y - c.y) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${c.x}px, ${c.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      // Snap to entry point so the circle doesn't fly in from a stale spot.
      const pos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      target.current = pos;
      current.current = { ...pos };
    }
    setIsHovering(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="mt-16 lg:mt-20 flex flex-col items-center gap-6"
    >
      <div className="flex items-center gap-3 self-start">
        <div className="divider-gold" />
        <span className="text-gold-500 text-sm font-semibold uppercase tracking-[0.2em]">
          Discover Who We Are
        </span>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovering(false)}
        onClick={togglePlay}
        className="group relative aspect-video h-[80vh] w-[80vw] overflow-hidden rounded-3xl bg-slate-950 shadow-2xl shadow-slate-900/20 cursor-none"
      >
        <video
          ref={videoRef}
          playsInline
          preload="metadata"
          poster="/assets/about-img.jpg"
          className="absolute inset-0 h-[80vh] w-[80vw] object-cover"
        >
          <source src="/assets/reality_shipping_lowres.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle scrim — softens while paused, fades once playing. */}
        <div
          className={`pointer-events-none absolute inset-0 bg-linear-to-t from-blue-950/60 via-blue-900/15 to-transparent transition-opacity duration-500 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Centered play icon — indicator while paused; never blocks the
            custom cursor or the container's click-to-toggle. */}
        <div
          className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center transition-all duration-500 ${
            isPlaying ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-2xl shadow-black/30">
            <Play className="h-8 w-8 fill-brand-blue text-brand-blue translate-x-0.5" />
          </span>
        </div>

        {/* Floating custom cursor — follows the mouse with easing. */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              ref={cursorRef}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="pointer-events-none absolute left-0 top-0 z-20 flex h-24 w-24 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm shadow-xl shadow-black/20 will-change-transform"
            >
              <span className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-900 leading-tight">
                {isPlaying ? "Pause Video" : "Watch Video"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Play / Pause CTA */}
      {/* <button
        type="button"
        onClick={togglePlay}
        aria-pressed={isPlaying}
        className="group inline-flex w-fit items-center gap-3 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:gap-4 hover:bg-blue-900 hover:shadow-xl hover:shadow-brand-blue/30 active:scale-95"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:scale-110">
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5 fill-current" />
          ) : (
            <Play className="h-3.5 w-3.5 fill-current translate-x-px" />
          )}
        </span>
        {isPlaying ? "Pause Video" : "Play Video"}
      </button> */}
    </motion.div>
  );
}
