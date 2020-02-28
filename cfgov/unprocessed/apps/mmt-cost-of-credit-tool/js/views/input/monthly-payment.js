import { useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../../components/button";

import { useScrollToTop } from "../../components/scroll-to-top";

import arrowRight from "@cfpb/cfpb-icons/src/icons/arrow-right.svg";
import arrowLeft from "@cfpb/cfpb-icons/src/icons/arrow-left.svg";

export default function MonthlyPayment() {
  useScrollToTop();

  const history = useHistory();

  const prevPage = useCallback(
    evt => {
      evt.preventDefault();
      history.push("/credit-apr");
    },
    [history]
  );

  const nextPage = useCallback(
    evt => {
      evt.preventDefault();
      history.push("/deals-and-promotions");
    },
    [history]
  );

  return (
    <div className="m-tool-card__bottom-border">
      <form>
        <div className=" m-tool__tag">step 4/4</div>
        <div class="m-form-field-with-button margin-top-bottom">
          <h2>Monthly payment</h2>
          <div className="one-line-desc">
            How much can you comfortably pay each month?
          </div>
          <div class="form-group">
            <input
              id=""
              type=""
              name=""
              placeholder=""
              className="response-input__long"
            />
            <Button type="submit" className="button-center">
              Monthly payment
            </Button>
            <br />
            <br />
            <div className="m-tool__tag"> - or - </div>
            <h2>Months to pay off</h2>
            <div className="m-tool-card__desc">
              How many months will it take you to pay off?
            </div>
            <input
              id=""
              type=""
              name=""
              placeholder=""
              className="response-input__long"
            />
          </div>
        </div>

        <Button type="submit" className="button-center">
          Months
        </Button>
      </form>
      <br />
      <div className="display-row margin-top-bottom">
        <div>
          <Button icon={arrowLeft} iconSide="left" onClick={prevPage}>
            APR
          </Button>
        </div>
        <div className="margin-left">
          <Button icon={arrowRight} iconSide="right" onClick={nextPage}>
            Deals/promos
          </Button>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
