"use client";

import { useEffect, useRef } from "react";

// ---------------------------------------------------------------------------
// Network data — Reality Shipping's port coverage, grouped by trade region.
// Keep in sync with the region cards in GlobalReach.tsx ("50+ active ports").
// Hubs get labels and pulse rings; the rest render as dots.
// ---------------------------------------------------------------------------

type Port = { name: string; lat: number; lng: number; hub?: boolean };

const PORTS: Port[] = [
  // Europe
  { name: "Hamburg", lat: 53.55, lng: 9.99, hub: true },
  { name: "Rotterdam", lat: 51.92, lng: 4.48, hub: true },
  { name: "Antwerp", lat: 51.26, lng: 4.42 },
  { name: "Piraeus", lat: 37.94, lng: 23.64, hub: true },
  { name: "Felixstowe", lat: 51.96, lng: 1.35 },
  { name: "Valencia", lat: 39.47, lng: -0.38 },
  { name: "Genoa", lat: 44.41, lng: 8.93 },
  { name: "Le Havre", lat: 49.49, lng: 0.11 },
  { name: "Gdansk", lat: 54.35, lng: 18.65 },
  { name: "Algeciras", lat: 36.13, lng: -5.45 },
  { name: "Istanbul", lat: 41.01, lng: 28.97 },
  // Asia Pacific
  { name: "Singapore", lat: 1.29, lng: 103.85, hub: true },
  { name: "Shanghai", lat: 31.23, lng: 121.47, hub: true },
  { name: "Busan", lat: 35.18, lng: 129.08 },
  { name: "Tokyo", lat: 35.68, lng: 139.69, hub: true },
  { name: "Mumbai", lat: 19.08, lng: 72.88, hub: true },
  { name: "Hong Kong", lat: 22.3, lng: 114.17 },
  { name: "Qingdao", lat: 36.07, lng: 120.38 },
  { name: "Port Klang", lat: 3.0, lng: 101.4 },
  { name: "Jakarta", lat: -6.1, lng: 106.8 },
  { name: "Manila", lat: 14.6, lng: 120.98 },
  { name: "Colombo", lat: 6.93, lng: 79.85 },
  { name: "Chennai", lat: 13.08, lng: 80.27 },
  { name: "Sydney", lat: -33.87, lng: 151.21, hub: true },
  { name: "Melbourne", lat: -37.81, lng: 144.96 },
  // Middle East & Africa
  { name: "Dubai", lat: 25.2, lng: 55.27, hub: true },
  { name: "Jeddah", lat: 21.54, lng: 39.17 },
  { name: "Durban", lat: -29.88, lng: 31.05, hub: true },
  { name: "Lagos", lat: 6.45, lng: 3.41, hub: true },
  { name: "Djibouti", lat: 11.59, lng: 43.15 },
  { name: "Salalah", lat: 17.02, lng: 54.09 },
  { name: "Dammam", lat: 26.43, lng: 50.1 },
  { name: "Alexandria", lat: 31.2, lng: 29.92 },
  { name: "Casablanca", lat: 33.57, lng: -7.59 },
  { name: "Mombasa", lat: -4.04, lng: 39.66 },
  { name: "Abidjan", lat: 5.3, lng: -4.03 },
  { name: "Cape Town", lat: -33.92, lng: 18.42 },
  // Americas
  { name: "New York", lat: 40.71, lng: -74.01, hub: true },
  { name: "Houston", lat: 29.76, lng: -95.37, hub: true },
  { name: "Santos", lat: -23.95, lng: -46.33, hub: true },
  { name: "Cartagena", lat: 10.39, lng: -75.51 },
  { name: "Vancouver", lat: 49.28, lng: -123.12, hub: true },
  { name: "Los Angeles", lat: 33.74, lng: -118.26 },
  { name: "Savannah", lat: 32.08, lng: -81.1 },
  { name: "Miami", lat: 25.77, lng: -80.19 },
  { name: "Montreal", lat: 45.5, lng: -73.55 },
  { name: "Colón", lat: 9.36, lng: -79.9 },
  { name: "Callao", lat: -12.05, lng: -77.15 },
  { name: "Buenos Aires", lat: -34.6, lng: -58.37 },
  { name: "Valparaíso", lat: -33.04, lng: -71.63 },
];

// Trade lanes as name pairs (resolved to indices at module init).
const ROUTE_PAIRS: [string, string][] = [
  // Intra-Asia & Oceania
  ["Shanghai", "Busan"],
  ["Busan", "Tokyo"],
  ["Qingdao", "Busan"],
  ["Shanghai", "Hong Kong"],
  ["Hong Kong", "Manila"],
  ["Hong Kong", "Singapore"],
  ["Singapore", "Jakarta"],
  ["Singapore", "Port Klang"],
  ["Port Klang", "Chennai"],
  ["Chennai", "Colombo"],
  ["Singapore", "Colombo"],
  ["Singapore", "Sydney"],
  ["Sydney", "Melbourne"],
  // Asia — Middle East — Europe (Suez lane)
  ["Colombo", "Dubai"],
  ["Mumbai", "Dubai"],
  ["Dubai", "Dammam"],
  ["Dubai", "Salalah"],
  ["Salalah", "Djibouti"],
  ["Djibouti", "Jeddah"],
  ["Jeddah", "Alexandria"],
  ["Alexandria", "Piraeus"],
  ["Piraeus", "Istanbul"],
  ["Piraeus", "Genoa"],
  ["Genoa", "Valencia"],
  ["Valencia", "Algeciras"],
  ["Algeciras", "Rotterdam"],
  ["Rotterdam", "Hamburg"],
  ["Rotterdam", "Antwerp"],
  ["Rotterdam", "Felixstowe"],
  ["Rotterdam", "Le Havre"],
  ["Hamburg", "Gdansk"],
  // Africa
  ["Cape Town", "Durban"],
  ["Durban", "Mombasa"],
  ["Mombasa", "Djibouti"],
  ["Lagos", "Abidjan"],
  ["Abidjan", "Casablanca"],
  ["Casablanca", "Algeciras"],
  // Transatlantic & Americas
  ["Rotterdam", "New York"],
  ["Algeciras", "Miami"],
  ["Santos", "Cape Town"],
  ["New York", "Miami"],
  ["New York", "Savannah"],
  ["Montreal", "New York"],
  ["Miami", "Colón"],
  ["Colón", "Cartagena"],
  ["Cartagena", "Houston"],
  ["Colón", "Callao"],
  ["Callao", "Valparaíso"],
  ["Santos", "Buenos Aires"],
  ["Vancouver", "Los Angeles"],
  // Transpacific
  ["Shanghai", "Los Angeles"],
  ["Tokyo", "Vancouver"],
  ["Busan", "Vancouver"],
];

// ---------------------------------------------------------------------------
// Coarse continent outlines ([lng, lat] vertices). Only used to scatter the
// decorative land-dot texture — not a precise map.
// ---------------------------------------------------------------------------

const CONTINENTS: [number, number][][] = [
  // North America
  [
    [-166, 68], [-160, 71], [-145, 70], [-130, 70], [-120, 72], [-110, 73],
    [-95, 73], [-85, 70], [-75, 72], [-68, 68], [-62, 60], [-55, 52],
    [-60, 47], [-66, 44], [-70, 42], [-74, 39], [-76, 34], [-80, 31],
    [-81, 26], [-84, 29], [-89, 29], [-94, 29], [-97, 26], [-97, 21],
    [-94, 18], [-88, 16], [-83, 10], [-78, 8], [-80, 8], [-85, 12],
    [-91, 14], [-96, 16], [-105, 20], [-110, 24], [-114, 30], [-120, 34],
    [-124, 40], [-124, 47], [-130, 54], [-136, 58], [-148, 61], [-158, 58],
    [-165, 60], [-168, 65],
  ],
  // Greenland
  [
    [-52, 60], [-43, 60], [-32, 68], [-22, 70], [-18, 76], [-30, 82],
    [-58, 81], [-66, 77], [-60, 74], [-54, 67],
  ],
  // South America
  [
    [-77, 7], [-70, 11], [-62, 10], [-55, 5], [-50, 0], [-44, -3],
    [-35, -6], [-37, -12], [-40, -20], [-47, -25], [-53, -33], [-57, -38],
    [-62, -41], [-65, -47], [-69, -52], [-74, -53], [-73, -46], [-71, -38],
    [-71, -30], [-70, -20], [-76, -14], [-81, -6], [-80, 0], [-77, 4],
  ],
  // Africa
  [
    [-6, 35], [3, 37], [10, 37], [19, 32], [29, 31], [33, 31], [35, 28],
    [37, 21], [40, 15], [43, 11], [48, 11], [51, 12], [46, 3], [41, -2],
    [39, -8], [36, -15], [35, -22], [33, -28], [27, -34], [20, -35],
    [17, -30], [14, -24], [12, -18], [13, -11], [9, -3], [9, 4], [4, 6],
    [-4, 5], [-8, 4], [-13, 9], [-17, 14], [-16, 20], [-13, 27], [-9, 31],
  ],
  // Eurasia (Iberia → Baltic → Arctic → Bering → East Asia → India → Arabia → Med)
  [
    [-9, 37], [-9, 43], [-4, 48], [0, 49], [4, 51], [9, 54], [14, 54],
    [21, 55], [28, 59], [25, 62], [22, 66], [26, 70], [35, 68], [45, 68],
    [55, 69], [68, 69], [75, 73], [85, 74], [95, 76], [105, 77], [115, 74],
    [125, 73], [135, 72], [145, 72], [155, 70], [165, 69], [175, 67],
    [179, 65], [178, 62], [170, 60], [161, 60], [156, 53], [142, 47],
    [135, 43], [130, 42], [127, 40], [122, 38], [120, 34], [122, 30],
    [119, 25], [113, 22], [109, 19], [107, 16], [105, 10], [104, 6],
    [101, 3], [99, 7], [97, 13], [94, 18], [91, 22], [88, 22], [85, 19],
    [81, 15], [80, 10], [77, 8], [74, 13], [72, 19], [70, 23], [66, 25],
    [61, 25], [58, 24], [59, 21], [56, 18], [53, 17], [50, 15], [45, 13],
    [42, 15], [39, 20], [36, 26], [34, 29], [32, 31], [36, 34], [36, 37],
    [31, 37], [27, 37], [26, 40], [23, 38], [20, 40], [16, 40], [18, 42],
    [14, 45], [12, 44], [9, 44], [6, 43], [3, 42], [0, 40], [-1, 37],
    [-5, 36],
  ],
  // Scandinavia
  [
    [5, 58], [8, 58], [11, 59], [13, 56], [16, 56], [19, 58], [18, 61],
    [21, 63], [24, 66], [20, 70], [14, 68], [10, 64], [5, 62],
  ],
  // British Isles
  [
    [-5, 50], [-2, 51], [1, 51], [0, 53], [-2, 56], [-4, 58], [-6, 56],
    [-4, 53],
  ],
  // Japan
  [
    [130, 31], [131, 34], [136, 34], [140, 35], [141, 38], [141, 41],
    [143, 43], [145, 44], [142, 45], [140, 42], [139, 38], [136, 36],
    [132, 34], [129, 32],
  ],
  // Borneo
  [[109, 0], [113, 3], [117, 6], [119, 2], [117, -3], [112, -3]],
  // Sumatra
  [[95, 5], [99, 3], [103, -1], [106, -5], [103, -5], [99, 0], [95, 3]],
  // Philippines
  [[120, 18], [122, 17], [124, 13], [125, 8], [122, 7], [121, 12], [119, 16]],
  // New Guinea
  [[131, -1], [136, -2], [141, -3], [146, -6], [150, -10], [147, -10], [141, -8], [135, -4], [131, -2]],
  // Australia
  [
    [114, -22], [113, -26], [115, -33], [119, -35], [124, -33], [129, -32],
    [133, -32], [138, -35], [141, -38], [147, -39], [150, -37], [153, -32],
    [153, -26], [149, -21], [146, -18], [143, -13], [142, -10], [137, -12],
    [135, -15], [130, -12], [125, -14], [120, -19],
  ],
  // New Zealand
  [[173, -35], [176, -38], [178, -38], [174, -41], [172, -44], [167, -46], [170, -44], [172, -40]],
  // Madagascar
  [[44, -16], [48, -13], [50, -16], [47, -25], [44, -22]],
];

// ---------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------

type Vec3 = [number, number, number];

function latLngToXYZ(lat: number, lng: number, r: number): Vec3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return [
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ];
}

function rotateY(x: number, y: number, z: number, angle: number): Vec3 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x * cos + z * sin, y, -x * sin + z * cos];
}

function rotateX(x: number, y: number, z: number, angle: number): Vec3 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x, y * cos - z * sin, y * sin + z * cos];
}

const TILT = 22 * (Math.PI / 180);
const SPIN_SPEED = 0.0022; // rad per frame

function pointInPolygon(lng: number, lat: number, poly: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

// Dotted-landmass texture: sample a lat/lng grid against the continent
// outlines, widening the lng step toward the poles to keep spacing even.
function buildLandDots(): Vec3[] {
  const dots: Vec3[] = [];
  for (let lat = -55; lat <= 72; lat += 3) {
    const step = 3 / Math.max(0.35, Math.cos((lat * Math.PI) / 180));
    for (let lng = -180; lng < 180; lng += step) {
      if (CONTINENTS.some((poly) => pointInPolygon(lng, lat, poly))) {
        dots.push(latLngToXYZ(lat, lng, 1));
      }
    }
  }
  return dots;
}

type RouteGeom = { va: Vec3; vb: Vec3; omega: number; lift: number };

function buildRoutes(): RouteGeom[] {
  const index = new Map(PORTS.map((p, i) => [p.name, i]));
  const geoms: RouteGeom[] = [];
  ROUTE_PAIRS.forEach(([a, b]) => {
    const ia = index.get(a);
    const ib = index.get(b);
    if (ia === undefined || ib === undefined) {
      console.warn(`RotatingGlobe: unknown port in route ${a} -> ${b}`);
      return;
    }
    const va = latLngToXYZ(PORTS[ia].lat, PORTS[ia].lng, 1);
    const vb = latLngToXYZ(PORTS[ib].lat, PORTS[ib].lng, 1);
    const dot = va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2];
    const omega = Math.acos(Math.min(1, Math.max(-1, dot)));
    // Longer lanes arc higher off the surface
    geoms.push({ va, vb, omega, lift: Math.min(0.16, omega * 0.11) });
  });
  return geoms;
}

// Great-circle interpolation (slerp) with an altitude lift at mid-arc.
function arcPoint(route: RouteGeom, t: number): Vec3 {
  const { va, vb, omega, lift } = route;
  const so = Math.sin(omega);
  let x: number, y: number, z: number;
  if (so < 1e-4) {
    x = va[0]; y = va[1]; z = va[2];
  } else {
    const a = Math.sin((1 - t) * omega) / so;
    const b = Math.sin(t * omega) / so;
    x = a * va[0] + b * vb[0];
    y = a * va[1] + b * vb[1];
    z = a * va[2] + b * vb[2];
  }
  const r = 1 + lift * Math.sin(Math.PI * t);
  const len = Math.hypot(x, y, z) || 1;
  return [(x / len) * r, (y / len) * r, (z / len) * r];
}

const LAND_DOTS = buildLandDots();
const ROUTES = buildRoutes();
const PORT_XYZ: Vec3[] = PORTS.map((p) => latLngToXYZ(p.lat, p.lng, 1));

// Brand palette (matches globals.css)
const BLUE = "6, 117, 188"; // --brand-blue
const GOLD = "201, 168, 76"; // --gold-400
const INK = "18, 60, 105"; // label text

export default function RotatingGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const angleRef = useRef(0.6);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.44;

      ctx.clearRect(0, 0, w, h);
      if (!reducedMotion) angleRef.current += SPIN_SPEED;
      const angle = angleRef.current;

      // Rotate + orthographic-ish projection with subtle depth scaling.
      // Returns [screenX, screenY, depth (front > 0), sizeFactor].
      const tf = (x: number, y: number, z: number): [number, number, number, number] => {
        const [x1, y1, z1] = rotateY(x, y, z, angle);
        const [x2, y2, z2] = rotateX(x1, y1, z1, TILT);
        const f = 6 / (6 - z2);
        return [cx + x2 * R * f, cy - y2 * R * f, z2, f];
      };

      // Halo — soft ambient glow that fills the panel around the sphere
      const halo = ctx.createRadialGradient(cx, cy, R * 0.95, cx, cy, R * 1.35);
      halo.addColorStop(0, `rgba(${BLUE}, 0.12)`);
      halo.addColorStop(1, `rgba(${BLUE}, 0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2);
      ctx.fillStyle = halo;
      ctx.fill();

      // Sphere body — light sheen so it reads as a solid globe on the pale card
      const body = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
      body.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      body.addColorStop(0.65, "rgba(219, 234, 254, 0.55)");
      body.addColorStop(1, `rgba(${BLUE}, 0.16)`);
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = body;
      ctx.fill();
      ctx.strokeStyle = `rgba(${BLUE}, 0.4)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Faint graticule
      ctx.strokeStyle = `rgba(${BLUE}, 0.1)`;
      ctx.lineWidth = 0.7;
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let started = false;
        for (let lng = 0; lng <= 360; lng += 4) {
          const [x, y, z] = latLngToXYZ(lat, lng, 1);
          const [px, py, rz] = tf(x, y, z);
          if (rz < 0) { started = false; continue; }
          if (!started) { ctx.moveTo(px, py); started = true; }
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
      for (let lng = 0; lng < 360; lng += 30) {
        ctx.beginPath();
        let started = false;
        for (let lat = -90; lat <= 90; lat += 4) {
          const [x, y, z] = latLngToXYZ(lat, lng, 1);
          const [px, py, rz] = tf(x, y, z);
          if (rz < 0) { started = false; continue; }
          if (!started) { ctx.moveTo(px, py); started = true; }
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Dotted landmass
      LAND_DOTS.forEach(([x, y, z]) => {
        const [px, py, rz, f] = tf(x, y, z);
        if (rz < 0.02) return;
        const alpha = Math.min(1, rz * 3) * 0.42;
        ctx.beginPath();
        ctx.arc(px, py, 1.15 * f, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${BLUE}, ${alpha})`;
        ctx.fill();
      });

      // Trade-lane arcs (great circles, clipped at the limb)
      ctx.lineWidth = 1;
      const SEG = 28;
      ROUTES.forEach((route) => {
        ctx.beginPath();
        let started = false;
        for (let s = 0; s <= SEG; s++) {
          const [x, y, z] = arcPoint(route, s / SEG);
          const [px, py, rz] = tf(x, y, z);
          if (rz < 0.02) { started = false; continue; }
          if (!started) { ctx.moveTo(px, py); started = true; }
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = `rgba(${BLUE}, 0.28)`;
        ctx.stroke();
      });

      // Shipment pulses riding the long-haul lanes
      if (!reducedMotion) {
        ROUTES.forEach((route, i) => {
          if (route.omega < 0.3) return;
          const tp = ((time * 0.00005) / route.omega + i * 0.618) % 1;
          for (let trail = 0; trail < 3; trail++) {
            const t = tp - trail * 0.025;
            if (t < 0 || t > 1) continue;
            const [x, y, z] = arcPoint(route, t);
            const [px, py, rz, f] = tf(x, y, z);
            if (rz < 0.02) continue;
            const alpha = (1 - trail * 0.35) * Math.min(1, rz * 4);
            ctx.beginPath();
            ctx.arc(px, py, (2.2 - trail * 0.5) * f, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${GOLD}, ${alpha})`;
            ctx.fill();
          }
        });
      }

      // Ports
      PORT_XYZ.forEach(([x, y, z], i) => {
        const [px, py, rz, f] = tf(x, y, z);
        if (rz < 0.02) return;
        const port = PORTS[i];
        const alpha = Math.min(1, rz * 4);
        const r = (port.hub ? 3 : 2.1) * f;

        // Expanding pulse ring on hub ports
        if (port.hub && !reducedMotion && rz > 0.15) {
          const phase = ((time * 0.0008 + i * 0.37) % 1);
          ctx.beginPath();
          ctx.arc(px, py, r + phase * 9, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${BLUE}, ${(1 - phase) * 0.35 * alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(px, py, r + 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = port.hub ? `rgba(${GOLD}, ${alpha})` : `rgba(${BLUE}, ${alpha})`;
        ctx.fill();

        // Labels on front-facing hubs only, with a white halo for legibility
        if (port.hub && rz > 0.25) {
          const labelAlpha = Math.min(1, (rz - 0.25) * 3) * alpha;
          ctx.font = "600 10px Inter, system-ui, sans-serif";
          const atRightEdge = px + 90 > w;
          ctx.textAlign = atRightEdge ? "right" : "left";
          const lx = atRightEdge ? px - 8 : px + 8;
          ctx.lineWidth = 3;
          ctx.strokeStyle = `rgba(255, 255, 255, ${labelAlpha * 0.85})`;
          ctx.strokeText(port.name, lx, py + 3);
          ctx.fillStyle = `rgba(${INK}, ${labelAlpha})`;
          ctx.fillText(port.name, lx, py + 3);
        }
      });

      if (!reducedMotion) {
        animRef.current = requestAnimationFrame(draw);
      }
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
