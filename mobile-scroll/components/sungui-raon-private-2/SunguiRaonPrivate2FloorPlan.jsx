"use client";

import { useState } from "react";
import SunguiRaonPrivate2FadeSection from "./SunguiRaonPrivate2FadeSection";

export default function SunguiRaonPrivate2FloorPlan({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <section className="landing-section" id="floor_plan">
      <SunguiRaonPrivate2FadeSection>
        <div className="section-header">
          <span className="section-en">FLOOR PLAN</span>
          <h2 className="section-title">평형안내</h2>
        </div>

        <div className="floor-tabs">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              type="button"
              className={`floor-tab${idx === active ? " active" : ""}`}
              onClick={() => setActive(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="floor-images">
          <div className="floor-image">
            <img
              key={tabs[active].src}
              src={tabs[active].src}
              alt={tabs[active].alt}
              width={tabs[active].width}
              height={tabs[active].height}
            />
          </div>
        </div>
      </SunguiRaonPrivate2FadeSection>
    </section>
  );
}
