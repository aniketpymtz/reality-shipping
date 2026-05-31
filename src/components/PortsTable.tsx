"use client";

import { useState } from "react";

const ports = [
  // South Asia
  { flag: "🇮🇳", port: "Mumbai", country: "India", region: "South Asia" },
  { flag: "🇮🇳", port: "Chennai", country: "India", region: "South Asia" },
  { flag: "🇮🇳", port: "Mundra", country: "India", region: "South Asia" },
  { flag: "🇮🇳", port: "Kolkata", country: "India", region: "South Asia" },
  { flag: "🇮🇳", port: "Cochin", country: "India", region: "South Asia" },
  { flag: "🇱🇰", port: "Colombo", country: "Sri Lanka", region: "South Asia" },
  { flag: "🇵🇰", port: "Karachi", country: "Pakistan", region: "South Asia" },
  // Southeast Asia
  { flag: "🇸🇬", port: "Singapore", country: "Singapore", region: "Southeast Asia" },
  { flag: "🇲🇾", port: "Port Klang", country: "Malaysia", region: "Southeast Asia" },
  { flag: "🇹🇭", port: "Laem Chabang", country: "Thailand", region: "Southeast Asia" },
  { flag: "🇮🇩", port: "Tanjung Priok", country: "Indonesia", region: "Southeast Asia" },
  // East Asia
  { flag: "🇨🇳", port: "Shanghai", country: "China", region: "East Asia" },
  { flag: "🇨🇳", port: "Ningbo", country: "China", region: "East Asia" },
  { flag: "🇨🇳", port: "Shenzhen", country: "China", region: "East Asia" },
  { flag: "🇰🇷", port: "Busan", country: "South Korea", region: "East Asia" },
  { flag: "🇯🇵", port: "Tokyo", country: "Japan", region: "East Asia" },
  // Middle East
  { flag: "🇦🇪", port: "Jebel Ali", country: "UAE", region: "Middle East" },
  { flag: "🇦🇪", port: "Abu Dhabi", country: "UAE", region: "Middle East" },
  { flag: "🇴🇲", port: "Muscat", country: "Oman", region: "Middle East" },
  { flag: "🇸🇦", port: "Dammam", country: "Saudi Arabia", region: "Middle East" },
  { flag: "🇸🇦", port: "Jeddah", country: "Saudi Arabia", region: "Middle East" },
  { flag: "🇶🇦", port: "Hamad", country: "Qatar", region: "Middle East" },
  { flag: "🇧🇭", port: "Khalifa Bin Salman", country: "Bahrain", region: "Middle East" },
  // East Africa
  { flag: "🇰🇪", port: "Mombasa", country: "Kenya", region: "East Africa" },
  { flag: "🇹🇿", port: "Dar es Salaam", country: "Tanzania", region: "East Africa" },
  { flag: "🇲🇿", port: "Maputo", country: "Mozambique", region: "East Africa" },
  { flag: "🇪🇹", port: "Djibouti", country: "Djibouti", region: "East Africa" },
  // Southern Africa
  { flag: "🇿🇦", port: "Durban", country: "South Africa", region: "Southern Africa" },
  { flag: "🇿🇦", port: "Cape Town", country: "South Africa", region: "Southern Africa" },
  { flag: "🇲🇺", port: "Port Louis", country: "Mauritius", region: "Southern Africa" },
  // Europe
  { flag: "🇳🇱", port: "Rotterdam", country: "Netherlands", region: "Europe" },
  { flag: "🇩🇪", port: "Hamburg", country: "Germany", region: "Europe" },
  { flag: "🇧🇪", port: "Antwerp", country: "Belgium", region: "Europe" },
  { flag: "🇬🇧", port: "Felixstowe", country: "United Kingdom", region: "Europe" },
  // Americas
  { flag: "🇺🇸", port: "New York", country: "USA", region: "Americas" },
  { flag: "🇺🇸", port: "Los Angeles", country: "USA", region: "Americas" },
  { flag: "🇺🇸", port: "Houston", country: "USA", region: "Americas" },
  { flag: "🇨🇦", port: "Vancouver", country: "Canada", region: "Americas" },
];

const regions = [
  "All",
  "South Asia",
  "Southeast Asia",
  "East Asia",
  "Middle East",
  "East Africa",
  "Southern Africa",
  "Europe",
  "Americas",
];

const regionColors: Record<string, string> = {
  "South Asia":     "bg-amber-50 text-amber-700 border-amber-100",
  "Southeast Asia": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "East Asia":      "bg-rose-50 text-rose-700 border-rose-100",
  "Middle East":    "bg-purple-50 text-purple-700 border-purple-100",
  "East Africa":    "bg-teal-50 text-teal-700 border-teal-100",
  "Southern Africa":"bg-lime-50 text-lime-700 border-lime-100",
  "Europe":         "bg-blue-50 text-blue-700 border-blue-100",
  "Americas":       "bg-indigo-50 text-indigo-700 border-indigo-100",
};

export default function PortsTable() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const filtered =
    activeRegion === "All"
      ? ports
      : ports.filter((p) => p.region === activeRegion);

  return (
    <div>
      {/* Region filter pills */}
      <div className="flex flex-wrap gap-2 mb-7">
        {regions.map((r) => (
          <button
            key={r}
            onClick={() => setActiveRegion(r)}
            className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
              activeRegion === r
                ? "bg-brand-blue text-white shadow-sm"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-5 py-3.5 text-left text-[10px] uppercase tracking-[0.22em] text-slate-400 font-semibold w-16">
                Flag
              </th>
              <th className="px-5 py-3.5 text-left text-[10px] uppercase tracking-[0.22em] text-slate-400 font-semibold">
                Port
              </th>
              <th className="px-5 py-3.5 text-left text-[10px] uppercase tracking-[0.22em] text-slate-400 font-semibold hidden sm:table-cell">
                Country
              </th>
              <th className="px-5 py-3.5 text-left text-[10px] uppercase tracking-[0.22em] text-slate-400 font-semibold hidden md:table-cell">
                Region
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr
                key={`${p.port}-${i}`}
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`border-b border-slate-100 last:border-0 transition-all duration-150 cursor-default group ${
                  hoveredRow === i ? "bg-blue-50/70" : "bg-white"
                }`}
              >
                <td className="px-5 py-3.5 text-xl leading-none">{p.flag}</td>
                <td
                  className={`px-5 py-3.5 text-sm font-semibold transition-colors duration-150 ${
                    hoveredRow === i ? "text-brand-blue" : "text-slate-800"
                  }`}
                >
                  {p.port}
                </td>
                <td className="px-5 py-3.5 text-sm text-slate-500 hidden sm:table-cell">
                  {p.country}
                </td>
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      regionColors[p.region] ?? "bg-slate-100 text-slate-500 border-slate-100"
                    }`}
                  >
                    {p.region}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-slate-400 text-sm">
            No ports found for this region.
          </div>
        )}
      </div>

      <p className="mt-4 text-xs text-slate-400 text-right">
        {filtered.length} port{filtered.length !== 1 ? "s" : ""} listed
        {activeRegion !== "All" ? ` in ${activeRegion}` : " worldwide"}
      </p>
    </div>
  );
}
