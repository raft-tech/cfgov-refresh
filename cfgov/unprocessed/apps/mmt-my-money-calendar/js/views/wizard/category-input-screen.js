import { observer } from 'mobx-react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useStore } from '../../stores';

function CategoryInputScreen() {
  const store = useStore();
  const { wizardStepStore } = store;
  //   useEffect(() => console.log(wizardStepStore);

  return (
    <section className="category-input-screen">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.25.png" alt="" className="u-hide-on-print" />
      <div className="c-step-title">
        {/* <h4>{wizardStepStore.pageTitle}</h4> */}
        <h4>Expense: Housing</h4>
      </div>

      <div className="c-row-container c-increment-title-container">
        <div className="c-increment-img">
          {/* <img src={wizardStepStore.pageImage} alt="" className="u-hide-on-print c-increment-icon" /> */}
          housing icon/image will go here.
        </div>
      </div>
      <br />

      <div>
        <h3 className="c-increment-subtitle">{wizardStepStore.subtitle}</h3>
      </div>
      <div>{wizardStepStore.description}</div>
      <div className="c-category-input-container">
        <label className="a-label a-label__heading" for="payment-due-date">
          What day is your Next housing payment due?
        </label>
        <div class="form-l_col c-input">
          <input id="payment-due-date" className="c-category-input" name="name" type="type" placeholder="02/01/2020" />
        </div>
      </div>
      <div className="c-category-input-container">
        <label className="a-label a-label__heading" for="payment-amount">
          How much do you pay each month for housing (rent or mortgage)?
        </label>
        <div className="form-l_col c-input">
          <input id="payment-amount" className="c-category-input" name="name" type="type" placeholder="$850.00" />
        </div>
      </div>

      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/" className="a-btn a-btn__full-on-xs">
            Input your Groceries
          </Link>
        </div>
        <div>
          <Link to={`{wizardStepStore.prevScreenPath}`} className="a-btn a-btn__full-on-xs">
            Back to Transportation
          </Link>
        </div>
      </div>

      <br />
      <br />
    </section>
  );
}

export default observer(CategoryInputScreen);
