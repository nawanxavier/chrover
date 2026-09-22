import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "images", "watches");
mkdirSync(OUT, { recursive: true });

const PALETTES = {
  gold:   { hi: "#f4dd8f", mid: "#d4af37", lo: "#7c5c12", label: "#6d5710" },
  steel:  { hi: "#ffffff", mid: "#c9cdd4", lo: "#5e6672", label: "#3c4249" },
  rose:   { hi: "#f7c7b2", mid: "#d49377", lo: "#7c4a38", label: "#66392b" },
  black:  { hi: "#6a6a6a", mid: "#2c2c2c", lo: "#0a0a0a", label: "#8a8a8a" },
  blue:   { hi: "#cfd7e8", mid: "#6f84ad", lo: "#2a3a5c", label: "#22304c" },
};

const DIALS = {
  ivory:      "#efe9dc",
  silver:     "#dfe3e8",
  black:      "#0f1013",
  navy:       "#18233a",
  green:      "#24443a",
  champagne:  "#e7d6ad",
  slate:      "#262b33",
  white:      "#f5f3ef",
};

const pct = (v) => { const n = parseFloat(v); return `${n.toFixed(3)}%`; };

function watchSVG(opts) {
  const {
    caseColor = "gold",
    dialColor = "ivory",
    type = "dress",
    time = { h: 10, m: 9, s: 38 },
    scale = 1,
    shift = 0,
    bgHue = 0,
    title = "AURELIA",
  } = opts;

  const P = PALETTES[caseColor];
  const dial = DIALS[dialColor];
  const dialDark = ["black", "navy", "green", "slate"].includes(dialColor);

  const cx = 450;
  const cy = 450 + shift;
  const s = 1 / scale;

  const R_CASE = 236;
  const R_BEZEL_IN = 202;
  const R_DIAL = 178;
  const R_TICK = 168;

  const minAngle = (time.h % 12) * 30 + time.m * 0.5;
  const hourAngle = minAngle - 90;
  const minuteAngle = time.m * 6 - 90;
  const secondAngle = time.s * 6 - 90;

  const casing = `color="${P.hi}" stop-color="${P.hi}"`;
  const metalGrad = `<linearGradient id="case${bgHue}" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" ${casing.slice(0, casing.indexOf(" ")) + " " + casing.slice(casing.indexOf("stop"))}/>
    <stop offset="45%" stop-color="${P.lo}" stop-opacity="0.9"/>
    <stop offset="100%" stop-color="${P.hi}"/>
  </linearGradient>`.replace(`color="${P.hi}" stop-color="${P.hi}"`, `stop-color="${P.hi}"`);

  const dialGrad = `<radialGradient id="dial${bgHue}" cx="0.38" cy="0.34" r="0.9">
    <stop offset="0%" stop-color="${dialDark ? lighten(dial, 14) : lighten(dial, 18)}"/>
    <stop offset="100%" stop-color="${dial}"/>
  </radialGradient>`;

  const ticksMajor = [];
  const ticksMinor = [];
  for (let i = 0; i < 60; i++) {
    const a = i * 6;
    if (i % 5 === 0) {
      const len = i % 15 === 0 ? 34 : 26;
      const w = i % 15 === 0 ? 9 : 6;
      ticksMajor.push(
        `<g transform="rotate(${a} ${cx} ${cy})"><rect x="${cx - w / 2}" y="${cy - R_TICK - len}" width="${w}" height="${len}" rx="${w / 2}" fill="${dialDark ? "#e8dcc0" : "#1a1a1a"}"/></g>`
      );
    } else {
      ticksMinor.push(
        `<g transform="rotate(${a} ${cx} ${cy})"><circle cx="${cx}" cy="${cy - R_TICK - 7}" r="2.1" fill="${dialDark ? "rgba(232,220,192,0.45)" : "rgba(20,20,20,0.4)"}"/></g>`
      );
    }
  }

  const hand = (angle, len, width, color, x1 = 26) =>
    `<g transform="rotate(${angle} ${cx} ${cy})">
       <rect x="${cx - width / 2}" y="${cy - len}" width="${width}" height="${len}" rx="${width / 2}" fill="${color}"/>
       <rect x="${cx - width / 2 * 1.9}" y="${cy + 6}" width="${width * 1.9}" height="${len * 0.18}" rx="${width / 2}" fill="${color}" opacity="0.92"/>
     </g>`;

  const secondsHand = `<g transform="rotate(${secondAngle} ${cx} ${cy})">
    <rect x="${cx - 1.2}" y="${cy - R_TICK + 26}" width="2.4" height="${R_TICK - 26}" rx="1.2" fill="#c9a24b"/>
    <circle cx="${cx}" cy="${cy - R_TICK + 24}" r="4" fill="#c9a24b"/>
    <rect x="${cx - 2.6}" y="${cy + 12}" width="5.2" height="${R_TICK - 30}" rx="2.6" fill="#c9a24b" opacity="0.85"/>
  </g>`;

  const centerCap = `<circle cx="${cx}" cy="${cy}" r="9" fill="${P.mid}"/>
    <circle cx="${cx}" cy="${cy}" r="4.5" fill="${P.hi}"/>
    <rect x="${cx - 1}" y="${cy - 1.5}" width="2" height="26" rx="1" fill="${P.hi}" opacity="0" />`;

  const subdial = (px, py, r = 26) => {
    const marks = [];
    for (let i = 0; i < 60; i++) {
      if (i % 5 === 0) {
        marks.push(`<g transform="rotate(${i * 6} ${px} ${py})"><rect x="${px - 1.2}" y="${py - r + 4}" width="2.4" height="${i % 15 === 0 ? 9 : 5}" rx="1" fill="${dialDark ? "#dfe2e6" : "#333"}"/></g>`);
      }
    }
    return `<circle cx="${px}" cy="${py}" r="${r}" fill="${dialDark ? "#14161b" : "#fbfaf6"}" stroke="${P.mid}" stroke-width="1.5"/>
      ${marks.join("")}
      <line x1="${px}" y1="${py}" x2="${px}" y2="${py - r + 10}" stroke="${P.mid}" stroke-width="2.8" stroke-linecap="round"/>
      <line x1="${px}" y1="${py}" x2="${px}" y2="${py - r + 10}" stroke="#c9a24b" stroke-width="1.2" stroke-linecap="round" transform="rotate(60 ${px} ${py})"/>
      <line x1="${px}" y1="${py}" x2="${px}" y2="${py - r + 10}" stroke="#c9a24b" stroke-width="1.2" stroke-linecap="round" transform="rotate(140 ${px} ${py})"/>
      <circle cx="${px}" cy="${py}" r="2.6" fill="${P.mid}"/>`;
  };

  let body = "";

  // rotating bezel (diver / pilot)
  if (type === "diver") {
    let marks = "";
    for (let i = 0; i < 60; i++) {
      const a = i * 6;
      const len = i % 5 === 0 ? 16 : 9;
      const w = i % 5 === 0 ? 5 : 2.4;
      marks += `<g transform="rotate(${a} ${cx} ${cy})"><rect x="${cx - w / 2}" y="${cy - (R_CASE - 14)}" width="${w}" height="${len}" rx="${w / 2}" fill="${i === 0 ? "#c9a24b" : "#d8d8d8"}"/></g>`;
    }
    const pip = `<path d="M ${cx - 14} ${cy - R_CASE + 26} L ${cx + 14} ${cy - R_CASE + 26} L ${cx} ${cy - R_CASE + 4} Z" fill="#c9a24b"/>`;
    body += `<g>${pip}${marks}</g>`;
  } else {
    let bezelMarks = "";
    // minimalist polished bezel band
    body += `<g>
      <circle cx="${cx}" cy="${cy}" r="${R_BEZEL_IN + 16}" fill="none" stroke="${P.hi}" stroke-opacity="0.55" stroke-width="1.4"/>
      <circle cx="${cx}" cy="${cy}" r="${R_BEZEL_IN + 6}" fill="none" stroke="${P.lo}" stroke-opacity="0.8" stroke-width="1"/>
    </g>`;
  }

  let dialExtra = "";
  if (type === "chrono") {
    dialExtra = `${subdial(cx - 62, cy - 62)}${subdial(cx + 62, cy - 62, 24)}${subdial(cx, cy + 64)}`;
  } else if (type === "skeleton") {
    for (let r = 46; r <= 120; r += 26) {
      dialExtra += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${dialDark ? "#3a3f4a" : "#cfc9bc"}" stroke-width="1.2"/>`;
    }
    dialExtra += `<circle cx="${cx + 2}" cy="${cy + 2}" r="120" fill="none" stroke="${P.mid}" stroke-width="0.8" stroke-dasharray="2 5"/>`;
    dialExtra += `<circle cx="${cx - 14}" cy="${cy - 16}" r="6" fill="${P.hi}" opacity="0.9"/>`;
    dialExtra += `<rect x="${cx + 78}" y="${cy + 40}" width="16" height="24" rx="3" fill="${P.lo}" transform="rotate(24 ${cx + 78} ${cy + 40})"/>`;
    dialExtra += `<rect x="${cx - 96}" y="${cy - 26}" width="12" height="18" rx="3" fill="${P.lo}" opacity="0.9"/>`;
  } else if (type === "pilot") {
    dialExtra += `<g font-family="Georgia, serif" font-size="30" fill="${dialDark ? "#e8dcc0" : "#1d1d1d"}" font-weight="600">
      <text x="${cx}" y="${cy - 92}" text-anchor="middle">12</text>
      <text x="${cx + 92}" y="${cy + 10}" text-anchor="middle">3</text>
      <text x="${cx}" y="${cy + 112}" text-anchor="middle">6</text>
      <text x="${cx - 92}" y="${cy + 10}" text-anchor="middle">9</text>
    </g>`;
  } else if (type === "dress" || type === "minimal") {
    dialExtra += `<circle cx="${cx}" cy="${cy}" r="${R_TICK - 34}" fill="none" stroke="${dialDark ? "rgba(232,220,192,0.25)" : "rgba(30,30,30,0.2)"}" stroke-width="1"/>`;
  }

  const dateWindow = `<g>
    <rect x="${cx + 84}" y="${cy - 16}" width="34" height="32" rx="6" fill="${dialDark ? "#f4f2ee" : "#fdfbf7"}" stroke="${P.mid}" stroke-width="1.4"/>
    <text x="${cx + 101}" y="${cy + 5}" text-anchor="middle" font-family="Georgia, serif" font-size="20" fill="${dialDark ? "#151515" : "#151515"}">${String(time.m % 31 || 1).padStart(2, "0")}</text>
  </g>`;

  const brand = `<text x="${cx}" y="${cy - R_TICK + 34}" text-anchor="middle" font-family="Georgia, serif" font-size="21" letter-spacing="7" fill="${dialDark ? "#d9c697" : "#7d6a34"}" font-weight="600">${title}</text>
    <text x="${cx}" y="${cy - R_TICK + 56}" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" letter-spacing="5" fill="${dialDark ? "rgba(232,220,192,0.6)" : "rgba(40,40,40,0.6)"}">AUTOMATIC</text>`;

  const strapPath = (x, yStart, yEnd, w) =>
    `<rect x="${cx - w / 2}" y="${yStart}" width="${w}" height="${yEnd - yStart}" rx="${w / 2}" fill="#23201c" stroke="${dialDark ? "#3a352e" : "#35302a"}" stroke-width="2"/>
     <rect x="${cx - w / 2 + 12}" y="${yStart + 26}" width="2" height="${yEnd - yStart - 52}" rx="1" fill="#8a7744" opacity="0.35"/>
     <rect x="${cx + w / 2 - 14}" y="${yStart + 26}" width="2" height="${yEnd - yStart - 52}" rx="1" fill="#8a7744" opacity="0.35"/>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900" font-family="Arial, sans-serif">
  <defs>
    <radialGradient id="bg${bgHue}" cx="0.5" cy="0.42" r="0.95">
      <stop offset="0%" stop-color="${shade(`hsl(${42 + bgHue} 28% 16%)`)}"/>
      <stop offset="70%" stop-color="#15120e"/>
      <stop offset="100%" stop-color="#0a0908"/>
    </radialGradient>
    ${metalGrad}
    ${dialGrad}
    <radialGradient id="caseRim${bgHue}" cx="0.5" cy="0.5" r="0.5">
      <stop offset="82%" stop-color="${P.hi}"/>
      <stop offset="92%" stop-color="${P.lo}"/>
      <stop offset="100%" stop-color="${P.lo}"/>
    </radialGradient>
    <linearGradient id="glass${bgHue}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fff" stop-opacity="0.32"/>
      <stop offset="45%" stop-color="#fff" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="900" height="900" fill="url(#bg${bgHue})"/>
  <ellipse cx="${cx}" cy="${cy + R_CASE - 4}" rx="250" ry="46" fill="#000" opacity="0.5"/>
  <ellipse cx="${cx}" cy="${cy + R_CASE - 2}" rx="240" ry="40" fill="#000" opacity="0.4"/>
  <g transform="scale(${s}) translate(${450 * (1 - s)} ${(450 - shift) * (1 - s)})">
    ${strapPath(cx, 4, cy - R_CASE + 8, 158)}
    ${strapPath(cx, cy + R_CASE - 8, 896, 158)}
    <rect x="${cx + R_CASE - 34}" y="${cy - 12}" width="22" height="24" rx="5" fill="${P.lo}" stroke="${P.hi}" stroke-width="1"/>
    <circle cx="${cx + R_CASE}" cy="${cy - 12}" r="18" fill="${P.mid}" stroke="${P.hi}" stroke-width="1.4"/>
    <circle cx="${cx + R_CASE}" cy="${cy + 12}" r="14" fill="${P.lo}" stroke="${P.hi}" stroke-width="1.2"/>
    <g fill="${P.mid}" stroke="${P.hi}" stroke-opacity="0.6" stroke-width="0.8">
      ${Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * 360;
        return `<path d="M ${cx + R_CASE + 4 * Math.cos((a * Math.PI) / 180)} ${cy - 26 + 4 * Math.sin((a * Math.PI) / 180)} L ${cx + R_CASE + 9 * Math.cos((a * Math.PI) / 180)} ${cy - 26 + 9 * Math.sin((a * Math.PI) / 180)}"/>`;
      }).join("")}
    </g>
    <circle cx="${cx}" cy="${cy}" r="${R_CASE}" fill="url(#caseRim${bgHue})"/>
    <circle cx="${cx}" cy="${cy}" r="${R_CASE - 12}" fill="none" stroke="${P.lo}" stroke-width="3"/>
    <circle cx="${cx}" cy="${cy}" r="${R_BEZEL_IN}" fill="url(#dial${bgHue})"/>
    ${body}
    <circle cx="${cx}" cy="${cy}" r="${R_TICK + 12}" fill="none" stroke="${dialDark ? "rgba(232,220,192,0.28)" : "rgba(30,30,30,0.35)"}" stroke-width="2"/>
    <circle cx="${cx}" cy="${cy}" r="${R_TICK + 6}" fill="none" stroke="${dialDark ? "rgba(232,220,192,0.16)" : "rgba(30,30,30,0.2)"}" stroke-width="1"/>
    ${ticksMinor.join("")}
    ${ticksMajor.join("")}
    ${brand}
    ${dialExtra}
    ${type === "chrono" ? "" : dateWindow}
    ${hand(hourAngle, 88, 9, dialDark ? "#efe9de" : "#1c1c1c")}
    ${hand(minuteAngle, 128, 6.5, dialDark ? "#efe9de" : "#1c1c1c")}
    ${secondsHand}
    ${centerCap}
    <path d="M ${cx - 128} ${cy - 138} Q ${cx - 58} ${cy - 168} ${cx + 42} ${cy - 118}" fill="none" stroke="url(#glass${bgHue})" stroke-width="26" stroke-linecap="round" opacity="0.9"/>
    <circle cx="${cx}" cy="${cy}" r="${R_CASE - 4}" fill="none" stroke="${P.hi}" stroke-opacity="0.35" stroke-width="1.4"/>
  </g>
</svg>`;

  return svg;
}

function lighten(hex, amt) {
  const n = hex.replace("#", "");
  let r = parseInt(n.slice(0, 2), 16) + amt;
  let g = parseInt(n.slice(2, 4), 16) + amt;
  let b = parseInt(n.slice(4, 6), 16) + amt;
  r = Math.min(255, r); g = Math.min(255, g); b = Math.min(255, b);
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

function shade(color) {
  return color;
}

function generateFile(name, opts) {
  const svg = watchSVG(opts);
  writeFileSync(join(OUT, `${name}.svg`), svg, "utf8");
  console.log(`wrote ${name}.svg`);
}

const PRODUCTS = [
  { id: "heritage-gold", caseColor: "gold", dialColor: "ivory", type: "dress", times: [{ h: 10, m: 9 }, { h: 2, m: 34 }, { h: 6, m: 22 }] },
  { id: "celeste-silver", caseColor: "steel", dialColor: "silver", type: "dress", times: [{ h: 10, m: 9 }, { h: 4, m: 18 }, { h: 8, m: 42 }] },
  { id: "regatta-chrono", caseColor: "steel", dialColor: "black", type: "chrono", times: [{ h: 10, m: 11 }, { h: 3, m: 47 }, { h: 7, m: 5 }] },
  { id: "meridian-diver", caseColor: "steel", dialColor: "navy", type: "diver", times: [{ h: 10, m: 8 }, { h: 1, m: 26 }, { h: 5, m: 54 }] },
  { id: "vela-minimal", caseColor: "steel", dialColor: "white", type: "minimal", times: [{ h: 10, m: 9 }, { h: 2, m: 53 }, { h: 9, m: 12 }] },
  { id: "nocturne-black", caseColor: "black", dialColor: "black", type: "dress", times: [{ h: 10, m: 9 }, { h: 3, m: 31 }, { h: 7, m: 44 }] },
  { id: "aurora-rose", caseColor: "rose", dialColor: "champagne", type: "dress", times: [{ h: 10, m: 9 }, { h: 5, m: 14 }, { h: 8, m: 5 }] },
  { id: "traverse-pilot", caseColor: "black", dialColor: "green", type: "pilot", times: [{ h: 10, m: 9 }, { h: 4, m: 40 }, { h: 6, m: 18 }] },
  { id: "celadon-green", caseColor: "steel", dialColor: "green", type: "minimal", times: [{ h: 10, m: 9 }, { h: 1, m: 58 }, { h: 9, m: 37 }] },
  { id: "vivace-skeleton", caseColor: "gold", dialColor: "slate", type: "skeleton", times: [{ h: 10, m: 9 }, { h: 2, m: 15 }, { h: 11, m: 42 }] },
  { id: "marino-blu", caseColor: "blue", dialColor: "navy", type: "diver", times: [{ h: 10, m: 9 }, { h: 3, m: 22 }, { h: 8, m: 57 }] },
  { id: "aurum-luxury", caseColor: "gold", dialColor: "black", type: "skeleton", times: [{ h: 10, m: 9 }, { h: 6, m: 46 }, { h: 4, m: 3 }] },
];

for (const p of PRODUCTS) {
  p.times.forEach((t, i) => {
    generateFile(`${p.id}-${i + 1}`, {
      caseColor: p.caseColor,
      dialColor: p.dialColor,
      type: p.type,
      time: { ...t, s: (t.m * 7 + 11) % 60 },
      scale: i === 1 ? 1.18 : i === 2 ? 1.05 : 1,
      shift: i === 2 ? -26 : 0,
      bgHue: i * 14,
    });
  });
}

// Hero asset
generateFile("hero-watch", {
  caseColor: "gold",
  dialColor: "ivory",
  type: "skeleton",
  time: { h: 10, m: 9, s: 22 },
  scale: 1.02,
  bgHue: 6,
});

// Brand/story asset
generateFile("story-watch", {
  caseColor: "steel",
  dialColor: "slate",
  type: "chrono",
  time: { h: 10, m: 9, s: 48 },
  scale: 1.0,
  shift: 20,
  bgHue: -14,
});

console.log("Done.");