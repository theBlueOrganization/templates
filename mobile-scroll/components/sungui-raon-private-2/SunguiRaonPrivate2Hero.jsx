export default function SunguiRaonPrivate2Hero({ heroImage, alt }) {
  return (
    <section
      className="landing-hero hero--has-mobile"
      id="hero"
      role="img"
      aria-label={alt}
      style={{
        "--hero-bg-pc": `url(${heroImage.pc})`,
        "--hero-bg-mobile": `url(${heroImage.mobile})`,
      }}
    >
      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
