import { Link } from "react-router-dom";

import trueCostSliderImg from "../../img/true-cost-slider.png";

export const TrueCostSlider = props => (
  <div>
    <div>
      <h3>See how adjusting the credit APR affects the true cost</h3>
      <div className="m-tool__image-full">
        <img src={trueCostSliderImg} alt="True Cost Slider" />
      </div>
    </div>
    <div>
      <Link to="/">How is this calculated?</Link>
    </div>
  </div>
);
