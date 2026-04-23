"use client";

import { useEffect, useRef } from "react";

// Port locations: [lat, lng, name]
const ports: [number, number, string][] = [
  [53.55, 9.99, "Hamburg"],
  [51.92, 4.48, "Rotterdam"],
  [51.26, 4.42, "Antwerp"],
  [37.94, 23.64, "Piraeus"],
  [51.96, 1.35, "Felixstowe"],
  [1.29, 103.85, "Singapore"],
  [31.23, 121.47, "Shanghai"],
  [35.18, 129.08, "Busan"],
  [35.68, 139.69, "Tokyo"],
  [19.08, 72.88, "Mumbai"],
  [25.2, 55.27, "Dubai"],
  [21.54, 39.17, "Jeddah"],
  [-29.88, 31.05, "Durban"],
  [6.45, 3.41, "Lagos"],
  [11.59, 43.15, "Djibouti"],
  [40.71, -74.01, "New York"],
  [29.76, -95.37, "Houston"],
  [-23.95, -46.33, "Santos"],
  [10.39, -75.51, "Cartagena"],
  [49.28, -123.12, "Vancouver"],
];

// Shipping route connections (index pairs)
const routes: [number, number][] = [
  [0, 5], // Hamburg -> Singapore
  [1, 10], // Rotterdam -> Dubai
  [2, 7], // Antwerp -> Shanghai
  [3, 11], // Piraeus -> Jeddah
  [5, 6], // Singapore -> Shanghai
  [5, 9], // Singapore -> Mumbai
  [6, 7], // Shanghai -> Busan
  [8, 6], // Tokyo -> Shanghai
  [9, 10], // Mumbai -> Dubai
  [10, 14], // Dubai -> Djibouti
  [13, 12], // Lagos -> Durban
  [15, 16], // New York -> Houston
  [16, 18], // Houston -> Cartagena
  [17, 12], // Santos -> Durban
  [15, 19], // New York -> Vancouver
  [0, 1], // Hamburg -> Rotterdam
  [1, 4], // Rotterdam -> Felixstowe
  [15, 0], // New York -> Hamburg
  [19, 8], // Vancouver -> Tokyo
];

function latLngToXYZ(lat: number, lng: number, r: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return [
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ];
}

function rotateY(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x * cos + z * sin, y, -x * sin + z * cos];
}

function rotateX(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x, y * cos - z * sin, y * sin + z * cos];
}

const TILT = 35 * (Math.PI / 180);

function project(x: number, y: number, z: number, cx: number, cy: number, scale: number): [number, number] {
  const perspective = 800;
  const factor = perspective / (perspective + z);
  return [cx + x * scale * factor, cy - y * scale * factor];
}

export default function RotatingGlobe() {
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
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.38;
      const scale = R;

      ctx.clearRect(0, 0, w, h);
      angleRef.current += 0.003;
      const angle = angleRef.current;

      // Draw globe outline
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(96, 165, 250, 0.15)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Fill globe
      const grad = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, R * 0.1, cx, cy, R);
      grad.addColorStop(0, "rgba(30, 58, 95, 0.6)");
      grad.addColorStop(1, "rgba(10, 22, 40, 0.8)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Draw latitude lines
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let started = false;
        for (let lng = 0; lng <= 360; lng += 3) {
          const [x, y, z] = latLngToXYZ(lat, lng, 1);
          const [ry0, ry1, ry2] = rotateY(x, y, z, angle);
          const [rx, ry, rz] = rotateX(ry0, ry1, ry2, TILT);
          if (rz < -0.1) { started = false; continue; }
          const [px, py] = project(rx, ry, rz, cx, cy, scale);
          if (!started) { ctx.moveTo(px, py); started = true; }
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = "rgba(96, 165, 250, 0.08)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Draw longitude lines
      for (let lng = 0; lng < 360; lng += 30) {
        ctx.beginPath();
        let started = false;
        for (let lat = -90; lat <= 90; lat += 3) {
          const [x, y, z] = latLngToXYZ(lat, lng, 1);
          const [ry0, ry1, ry2] = rotateY(x, y, z, angle);
          const [rx, ry, rz] = rotateX(ry0, ry1, ry2, TILT);
          if (rz < -0.1) { started = false; continue; }
          const [px, py] = project(rx, ry, rz, cx, cy, scale);
          if (!started) { ctx.moveTo(px, py); started = true; }
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = "rgba(96, 165, 250, 0.08)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Compute rotated port positions
      const portPositions = ports.map(([lat, lng]) => {
        const [x, y, z] = latLngToXYZ(lat, lng, 1);
        const [ry0, ry1, ry2] = rotateY(x, y, z, angle);
        const [rx, ry, rz] = rotateX(ry0, ry1, ry2, TILT);
        const [px, py] = project(rx, ry, rz, cx, cy, scale);
        return { px, py, rz, visible: rz > -0.15 };
      });

      // Draw route arcs (only if both ports visible)
      routes.forEach(([a, b]) => {
        const pa = portPositions[a];
        const pb = portPositions[b];
        if (!pa.visible || !pb.visible) return;

        const alphaA = Math.min(1, (pa.rz + 0.15) * 2);
        const alphaB = Math.min(1, (pb.rz + 0.15) * 2);
        const alpha = Math.min(alphaA, alphaB) * 0.4;

        // Curved arc
        const midX = (pa.px + pb.px) / 2;
        const midY = (pa.py + pb.py) / 2;
        const dist = Math.hypot(pa.px - pb.px, pa.py - pb.py);
        const bulge = dist * 0.2;
        const nx = -(pb.py - pa.py) / dist;
        const ny = (pb.px - pa.px) / dist;

        ctx.beginPath();
        ctx.moveTo(pa.px, pa.py);
        ctx.quadraticCurveTo(midX + nx * bulge, midY + ny * bulge, pb.px, pb.py);
        ctx.strokeStyle = `rgba(147, 197, 253, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw ports
      portPositions.forEach((p, i) => {
        if (!p.visible) return;
        const alpha = Math.min(1, (p.rz + 0.15) * 2.5);

        // Glow
        const glow = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, 8);
        glow.addColorStop(0, `rgba(96, 165, 250, ${alpha * 0.6})`);
        glow.addColorStop(1, `rgba(96, 165, 250, 0)`);
        ctx.beginPath();
        ctx.arc(p.px, p.py, 8, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Dot
        ctx.beginPath();
        ctx.arc(p.px, p.py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(191, 219, 254, ${alpha})`;
        ctx.fill();

        // Label (only for front-facing ports)
        if (p.rz > 0.3 && alpha > 0.7) {
          ctx.font = "10px Inter, system-ui, sans-serif";
          ctx.fillStyle = `rgba(191, 219, 254, ${alpha * 0.7})`;
          ctx.textAlign = "left";
          ctx.fillText(ports[i][2], p.px + 7, p.py + 3);
        }
      });

      // Specular highlight
      const spec = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.35, 0, cx - R * 0.35, cy - R * 0.35, R * 0.6);
      spec.addColorStop(0, "rgba(255, 255, 255, 0.04)");
      spec.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = spec;
      ctx.fill();

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
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
