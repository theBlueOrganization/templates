import SunguiRaonPrivate2FadeSection from "./SunguiRaonPrivate2FadeSection";

export default function SunguiRaonPrivate2SitePlan({ images }) {
  return (
    <section className="landing-section" id="site_plan">
      <SunguiRaonPrivate2FadeSection>
        <div className="section-header">
          <span className="section-en">SITE PLAN</span>
          <h2 className="section-title">단지안내</h2>
        </div>
        <div className="section-list">
          {images.map((img) => (
            <div key={img.src} className="section-list__item">
              <h3 className="section-list__subtitle">{img.caption}</h3>
              <img src={img.src} alt={img.alt} width={img.width} height={img.height} />
            </div>
          ))}
        </div>
      </SunguiRaonPrivate2FadeSection>
    </section>
  );
}
