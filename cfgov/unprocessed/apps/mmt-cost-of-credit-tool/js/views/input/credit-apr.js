import { useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../../components/button";

import { useScrollToTop } from "../../components/scroll-to-top";

import arrowRight from "@cfpb/cfpb-icons/src/icons/arrow-right.svg";
import arrowLeft from "@cfpb/cfpb-icons/src/icons/arrow-left.svg";

export default function CreditApr() {
  useScrollToTop();

  const history = useHistory();

  const prevPage = useCallback(
    evt => {
      evt.preventDefault();
      history.push("/down-payment");
    },
    [history]
  );

  const nextPage = useCallback(
    evt => {
      evt.preventDefault();
      history.push("/monthly-payment");
    },
    [history]
  );
  return (
    <div className="m-tool-card__bottom-border">
      <form>
        <div className=" m-tool__tag">step 3/4</div>
        <h2>
          {" "}
          Credit APR <em>?</em>
        </h2>
        <div className="one-line-desc">
          Enter the annual interest rate for the credit card you're paying with.
        </div>

        <div class="m-form-field-with-button margin-top-bottom">
          <div class="form-group">
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
        <Button type="submit">Add credit APR</Button>
        <div className="display-row margin-top-bottom">
          <div>
            <Button icon={arrowLeft} iconSide="left" onClick={prevPage}>
              Down pmt
            </Button>
          </div>
          <div className="margin-left">
            <Button icon={arrowRight} iconSide="right" onClick={nextPage}>
              Monthly pmt
            </Button>
          </div>
        </div>
      </form>
      <br />
      <br />
    </div>
  );
}
