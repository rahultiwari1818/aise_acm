import { useState, useEffect, useCallback } from "react";
import img_kh_1 from "../assets/gallery/kh-1.jpg";
import img_kh_3 from "../assets/gallery/kh-3.jpg";
import img_kh_6 from "../assets/gallery/kh-6.jpg";
import img_kh_8 from "../assets/gallery/kh-8.jpg";
import img_kh_9 from "../assets/gallery/kh-9.jpg";
import img_kh_11 from "../assets/gallery/kh-11.jpg";
import img_kh_13 from "../assets/gallery/kh-13.jpg";
import img_kh_14 from "../assets/gallery/kh-14.jpg";
import img_kh_15 from "../assets/gallery/kh-15.jpg";
import img_kh_16 from "../assets/gallery/kh-16.jpg";
import img_kh_21 from "../assets/gallery/kh-21.jpg";
import img_kh_23 from "../assets/gallery/kh-23.jpg";
import img_kh_24 from "../assets/gallery/kh-24.jpg";
import img_kh_25 from "../assets/gallery/kh-25.jpg";
import img_kh_26 from "../assets/gallery/kh-26.jpg";
import img_kh_32 from "../assets/gallery/kh-32.jpg";
import img_kh_34 from "../assets/gallery/kh-34.jpg";
import img_kh_38 from "../assets/gallery/kh-38.jpg";
import img_kh_39 from "../assets/gallery/kh-39.jpg";
import img_kh_44 from "../assets/gallery/kh-44.jpg";
import img_kh_49 from "../assets/gallery/kh-49.jpg";
import img_kh_64 from "../assets/gallery/kh-64.jpg";
import img_kh_67 from "../assets/gallery/kh-67.jpg";
import img_kh_68 from "../assets/gallery/kh-68.jpg";
import img_kh_73 from "../assets/gallery/kh-73.jpg";
import img_kh_74 from "../assets/gallery/kh-74.jpg";
import img_kh_75 from "../assets/gallery/kh-75.jpg";
import img_kh_76 from "../assets/gallery/kh-76.jpg";
import img_kh_80 from "../assets/gallery/kh-80.jpg";

// ─── All images ───────────────────────────────────────────────────────────────
const images = [
  img_kh_1,  img_kh_3,  img_kh_6,  img_kh_8,  img_kh_9,
  img_kh_11, img_kh_13, img_kh_14, img_kh_15, img_kh_16,
  img_kh_21, img_kh_23, img_kh_24, img_kh_25, img_kh_26,
  img_kh_32, img_kh_34, img_kh_38, img_kh_39, img_kh_44,
  img_kh_49, img_kh_64, img_kh_67, img_kh_68, img_kh_73,
  img_kh_74, img_kh_75, img_kh_76, img_kh_80,
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
    strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
    strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const IconZoom = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState(null);
  const [downloading, setDownloading] = useState(false);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const navigate = useCallback((dir) => {
    if (sliding) return;
    setSlideDir(dir);
    setSliding(true);
    setTimeout(() => {
      setCurrent(c =>
        dir === "next"
          ? (c + 1) % images.length
          : (c - 1 + images.length) % images.length
      );
      setSlideDir(null);
      setSliding(false);
    }, 240);
  }, [sliding]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft")  navigate("prev");
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, onClose]);

  // Touch swipe support
  useEffect(() => {
    let startX = null;
    const onTouchStart = (e) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
      if (startX === null) return;
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) navigate(diff > 0 ? "next" : "prev");
      startX = null;
    };
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [navigate]);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const res = await fetch(images[current]);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `photo-${current + 1}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(images[current], "_blank");
    } finally {
      setDownloading(false);
    }
  };

  const imgStyle = {
    opacity: sliding ? 0 : 1,
    transform: sliding
      ? slideDir === "next" ? "translateX(-48px) scale(0.97)" : "translateX(48px) scale(0.97)"
      : "translateX(0) scale(1)",
    transition: "opacity 240ms ease, transform 240ms cubic-bezier(.4,0,.2,1)",
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: "rgba(5,5,8,0.96)", backdropFilter: "blur(16px)" }}>

      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-5 py-3 flex-shrink-0"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>
          {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-2">
          {/* Download */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all"
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 12,
              letterSpacing: "0.06em",
              background: downloading ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
              color: downloading ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: downloading ? "default" : "pointer",
            }}
          >
            <IconDownload />
            <span className="hidden sm:inline">{downloading ? "Saving..." : "Download"}</span>
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-lg transition-all"
            style={{
              background: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(239,68,68,0.18)"; e.currentTarget.style.color = "#f87171"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
          >
            <IconClose />
          </button>
        </div>
      </div>

      {/* ── Main image ── */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden min-h-0 px-16 py-6">

        {/* Prev button */}
        <button
          onClick={() => navigate("prev")}
          className="absolute left-3 sm:left-5 z-10 flex items-center justify-center w-11 h-11 rounded-full transition-all"
          style={{ background: "rgba(255,255,255,0.07)", color: "white", border: "1px solid rgba(255,255,255,0.12)" }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.16)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
        >
          <IconChevronLeft />
        </button>

        {/* Image */}
        <div style={imgStyle} className="flex items-center justify-center w-full h-full">
          <img
            key={current}
            src={images[current]}
            alt={`Photo ${current + 1}`}
            className="max-h-full max-w-full rounded-2xl object-contain select-none"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.8)", maxHeight: "calc(100vh - 220px)" }}
            draggable={false}
          />
        </div>

        {/* Next button */}
        <button
          onClick={() => navigate("next")}
          className="absolute right-3 sm:right-5 z-10 flex items-center justify-center w-11 h-11 rounded-full transition-all"
          style={{ background: "rgba(255,255,255,0.07)", color: "white", border: "1px solid rgba(255,255,255,0.12)" }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.16)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
        >
          <IconChevronRight />
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex-shrink-0 flex items-center justify-center gap-1.5 pb-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              borderRadius: 99,
              background: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
              transition: "all 0.25s ease",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ── Thumbnail strip ── */}
      <div
        className="flex-shrink-0 flex gap-2 px-4 pb-4 overflow-x-auto"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: 10,
          justifyContent: images.length < 10 ? "center" : "flex-start",
          scrollbarWidth: "none",
        }}
      >
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="flex-shrink-0 rounded-lg overflow-hidden transition-all"
            style={{
              width: 56,
              height: 42,
              outline: i === current ? "2px solid rgba(255,255,255,0.85)" : "2px solid transparent",
              outlineOffset: 2,
              opacity: i === current ? 1 : 0.38,
              transform: i === current ? "scale(1.07)" : "scale(1)",
              transition: "all 0.2s ease",
            }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" draggable={false} />
          </button>
        ))}
      </div>
    </div>
  );
}

