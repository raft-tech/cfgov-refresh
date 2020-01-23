export default function HeroReturning() {
  return (
    <section className="m-hero">
      <div className="m-hero_wrapper wrapper">
        <div className="m-hero_text">
          <h3>Welcome back!</h3>
          <h2 className="m-hero_heading">My Money Calendar</h2>
          <div className="m-hero_subhead">
            We see that you have already started using My Money Calendar and
            have entered some data.
          </div>
        </div>
        <div className="m-hero_image-wrapper">
          <div className="m-hero_image">
            <img
              src="/static/apps/mmt-my-money-calendar/img/Hero_2.png"
              alt=""
              className="u-hide-on-print"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
