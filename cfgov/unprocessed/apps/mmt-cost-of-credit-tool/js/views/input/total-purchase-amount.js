import { useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../../components/button";

import { useScrollToTop } from "../../components/scroll-to-top";

import arrowRight from "@cfpb/cfpb-icons/src/icons/arrow-right.svg";
import arrowLeft from "@cfpb/cfpb-icons/src/icons/arrow-left.svg";

export default function TotalPurchaseAmount() {
  useScrollToTop();

  const history = useHistory();

  const prevPage = useCallback(
    evt => {
      evt.preventDefault();
      history.push("/");
    },
    [history]
  );

  const nextPage = useCallback(
    evt => {
      evt.preventDefault();
      history.push("/down-payment");
    },
    [history]
  );
  return (
    <div className="m-tool-card__bottom-border">
      <form>
        <div className=" m-tool__tag">step 1/4</div>
        <h2>Total purchase amount</h2>
        <div className="one-line-desc">
          Estimate the cost of the item including tax.
        </div>
        <div className="m-form-field-with-button margin-top-bottom">
          <div className="form-group">
            <input
              id=""
              type=""
              name=""
              placeholder=""
              className="response-input__long"
            />
          </div>
        </div>
        <br />
        <Button type="submit">Add total purchase amount</Button>
        <div className="display-row margin-top-bottom">
          <div>
            <Button icon={arrowLeft} iconSide="left" onClick={prevPage}>
              Home
            </Button>
          </div>
          <div className="margin-left">
            <Button icon={arrowRight} iconSide="right" onClick={nextPage}>
              Down payment
            </Button>
          </div>
        </div>
      </form>
      <br />
      <br />
    </div>
  );
}
