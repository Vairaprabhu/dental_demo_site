import { useState } from "react";
import { photo } from "../data/siteData.js";

export default function ComparisonSlider() {
  const [position, setPosition] = useState(52);
  const image = photo("photo-1606811971618-4486d14f3f99", 1500);

  return (
    <div className="comparison">
      <div className="comparison-images">
        <img
          className="comparison-base"
          src={image}
          alt="Illustrative close-up smile; not a patient photograph or treatment result"
          loading="lazy"
        />
        <div className="comparison-overlay" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={{ filter: "saturate(.6) brightness(.88)" }}
          />
        </div>
        <span className="comparison-label comparison-label-left">Illustrative view A</span>
        <span className="comparison-label comparison-label-right">Illustrative view B</span>
        <span className="comparison-divider" style={{ left: `${position}%` }} aria-hidden="true">
          <span>↔</span>
        </span>
        <input
          className="comparison-range"
          type="range"
          min="5"
          max="95"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Move the illustrative smile comparison divider"
        />
      </div>
      <p className="comparison-disclaimer">
        Interactive visual demonstration only. This is not a before-and-after
        patient result and does not represent a treatment outcome.
      </p>
    </div>
  );
}
