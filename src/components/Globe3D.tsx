"use client";

import { useEffect, useRef } from "react";

export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const size = canvas.getBoundingClientRect();
      canvas.width = size.width * dpr;
      canvas.height = size.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const TILT = -35 * (Math.PI / 180); // Earth axial tilt

    function latLngToXYZ(lat: number, lng: number): [number, number, number] {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return [
        -Math.sin(phi) * Math.cos(theta),
        Math.cos(phi),
        Math.sin(phi) * Math.sin(theta),
      ];
    }

    function rotateY(x: number, y: number, z: number, a: number): [number, number, number] {
      return [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)];
    }

    function rotateX(x: number, y: number, z: number, a: number): [number, number, number] {
      return [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
    }

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.42;

      ctx.clearRect(0, 0, w, h);
      angleRef.current += 0.004;
      const angle = angleRef.current;

      // ── Sphere outline ──
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "#005A9C";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // ── Grid lines ──
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      const project = (x: number, y: number, z: number): [number, number, number] => {
        const f = 900 / (900 + z * R);
        return [cx + x * R * f, cy - y * R * f, z];
      };

      // Latitude bands
      for (let lat = -75; lat <= 75; lat += 15) {
        ctx.beginPath();
        let started = false;
        for (let lng = 0; lng <= 361; lng += 2) {
          const [x, y, z] = latLngToXYZ(lat, lng);
          const [rx, ry, rz] = rotateX(...rotateY(x, y, z, angle), TILT);
          if (rz < 0) { started = false; continue; }
          const [px, py] = project(rx, ry, rz);
          if (!started) { ctx.moveTo(px, py); started = true; }
          else ctx.lineTo(px, py);
        }
        const opacity = lat === 0 ? 0.7 : 0.35;
        ctx.strokeStyle = `#005A9C${Math.floor(opacity * 255).toString(16).padStart(2, "0")}`;
        ctx.lineWidth = lat === 0 ? 1.2 : 0.7;
        ctx.stroke();
      }

      // Longitude meridians
      for (let lng = 0; lng < 360; lng += 20) {
        ctx.beginPath();
        let started = false;
        for (let lat = -90; lat <= 90; lat += 2) {
          const [x, y, z] = latLngToXYZ(lat, lng);
          const [rx, ry, rz] = rotateX(...rotateY(x, y, z, angle), TILT);
          if (rz < 0) { started = false; continue; }
          const [px, py] = project(rx, ry, rz);
          if (!started) { ctx.moveTo(px, py); started = true; }
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = "#005A9C";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-32 h-32"
      style={{ display: "block" }}
    />
  );
}
