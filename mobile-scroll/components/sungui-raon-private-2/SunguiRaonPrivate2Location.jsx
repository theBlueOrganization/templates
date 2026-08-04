import SunguiRaonPrivate2FadeSection from "./SunguiRaonPrivate2FadeSection";

export default function SunguiRaonPrivate2Location({ image }) {
  return (
    <section className="landing-section" id="location">
      <SunguiRaonPrivate2FadeSection>
        <div className="section-header">
          <span className="section-en">LOCATION</span>
          <h2 className="section-title">입지환경</h2>
        </div>
        <div className="img-frame">
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} className="section-img" />
        </div>
      </SunguiRaonPrivate2FadeSection>
    </section>
  );
}
