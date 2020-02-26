const Hero = ({ tag, title, subtitle, image, alt = "" }) => {
  const imageTag =
    typeof image === "string" ? (
      <img src={image} alt={alt} className="u-hide-on-print" />
    ) : (
      image
    );

  return (
    <section className="m-hero-coc">
      <div className="m-hero-coc__wrapper">
        <div>
          <div className="m-tool__tag">{tag}</div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className="m-tool__image-full">{imageTag}</div>
      </div>
    </section>
  );
};

export default Hero;
