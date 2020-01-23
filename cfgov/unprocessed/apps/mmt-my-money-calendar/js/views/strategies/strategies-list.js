import { Link } from "react-router-dom";

export default function StrategiesList() {
  return (
    <section className="strategies-list">
      <div className="c-step-title">
        <h4>Your Strategies</h4>
      </div>

      <div className="c-step-container">
        <div className="c-step-img">
          <img
            src="/static/apps/mmt-my-money-calendar/img/expense-img.png"
            alt=""
            classNames="u-hide-on-print"
          />
        </div>
        <div className="c-step-title">
          Here are some new ways of doing things.
        </div>
      </div>
      <div>
        <strong>Try some of these to improve your cash flow</strong>.
      </div>

      <div className="c-strategies list">
        <ul>
          <li>
            <div>
              <strong>Strategy 1</strong>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ex nisi, aliquam sed finibus et, sollicitudin sed mauris. Nullam
              ornare leo interdum, posuere nisl in, ullamcorper leo. Sed
              fringilla condimentum diam, a accumsan felis tempus eu.
            </div>
          </li>
          <li>
            <div>
              <strong>Strategy 2</strong>
            </div>
            <div>
              Curabitur malesuada, dui sit amet vestibulum pulvinar, orci velit
              varius mi, id interdum ligula lectus nec orci. Ut vestibulum, orci
              id sollicitudin consectetur, lacus dolor tempor velit, eget varius
              augue mauris ut eros. Vestibulum lacus turpis, cursus aliquet ex
              eu, laoreet placerat risus. Aliquam erat volutpat.
            </div>
          </li>
          <li>
            <div>
              <strong>Strategy 3</strong>
            </div>
            <div>
              Curabitur malesuada, dui sit amet vestibulum pulvinar, orci velit
              varius mi, id interdum ligula lectus nec orci. Ut vestibulum, orci
              id sollicitudin consectetur, lacus dolor tempor velit, eget varius
              augue mauris ut eros. Vestibulum lacus turpis, cursus aliquet ex
              eu, laoreet placerat risus. Aliquam erat volutpat.
            </div>
          </li>
        </ul>
      </div>
      <div className="c-nav-buttons">
        <div>
          <Link to="/" className="a-btn a-btn__full-on-xs">
            Print your strategies
          </Link>
        </div>
        <div>
          <Link to="/summary-month-jan" className="a-btn a-btn__full-on-xs">
            Return to month summary
          </Link>
        </div>
      </div>

      <br />
      <div className="c-nav-buttons">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
}
