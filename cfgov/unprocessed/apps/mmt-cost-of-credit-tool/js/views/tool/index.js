import { Link } from 'react-router-dom';

import DownPayment from '../../components/down-payment';
import TotalPurchaseAmount from '../../components/total-purchase-amount';

export default function Tool() {
  return (
    <section id="tool">
      <Link to="/" className="a-btn a-btn__full-on-xs">
        Home
      </Link>
      <br />
      <div className="m-tool__tag">True Cost Tool</div>
      <h1>Enter the purchase details</h1>
      <div className="m-tool-card__desc">It's okay to estimate if you're not sure.</div>
      <div className="o-tool-card-group">
        <div className="m-tool-card">
          <TotalPurchaseAmount />
        </div>
        <div className="m-tool-card">
          <DownPayment />
        </div>
      </div>
    </section>
  );
}
