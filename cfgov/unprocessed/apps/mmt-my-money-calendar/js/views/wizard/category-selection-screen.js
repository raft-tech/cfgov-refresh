import { observer } from 'mobx-react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useStore } from '../../stores';
import { useEffect, useState, useCallback } from 'react';

function CategorySelectionScreen() {
  const store = useStore();
  const { uiStore, eventStore } = store;

  console.log('Category Input Screen loaded');
  const [housing, setHousing] = useState(false);

  const addHousing = useCallback(
    (event) => {
      event.preventDefault();
      console.log('housing is %s', housing);
      uiStore.addEvent({
        pageTitle: 'Expense: Housing',
        pageImage: '../../../img/icon-housing.png',
        subtitle: 'Tell us about your Housing Costs',
        description: 'This is where any additional description will go.',
      });
    },
    [housing, uiStore]
  );

  return (
    <section className="expenses-step">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.png" alt="" className="u-hide-on-print" />

      <div className="c-step-title">
        <h4>Expenses</h4>
      </div>

      <div className="c-step-container">
        <div className="c-step-img">
          <img src="/static/apps/mmt-my-money-calendar/img/expense-img.png" alt="" classNames="u-hide-on-print" />
        </div>
        <div className="c-step-title">Tell us about your expenses</div>
      </div>
      <div>Check off those that you currently have</div>

      <form className="wizard-form" onSubmit={addHousing}>
        <div className="c-wizard-form__field">
          <input
            class="a-checkbox"
            type="checkbox"
            value="housing"
            id="housing"
            name="Housing"
            onChange={(event) => setHousing(event.target.value)}
          />
          <label className="a-label" htmlFor="starting-balance">
            Housing
          </label>
        </div>
        <Button type="submit">Add Housing to List</Button>
      </form>

      <br />
      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/expenses-step25" className="a-btn a-btn__full-on-xs">
            Next
          </Link>
        </div>
        <div>
          <Link to="/income-step75" className="a-btn a-btn__full-on-xs">
            Back
          </Link>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>

      <br />
      <br />
    </section>
  );
}

export default observer(CategorySelectionScreen);
