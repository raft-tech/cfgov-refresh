import { observer } from 'mobx-react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useStore } from '../../stores';
import { useEffect, useState, useCallback } from 'react';

function CategorySelectionScreen() {
  const store = useStore();
  const { uiStore, eventStore } = store;

  console.log('Category Input Screen loaded');
  const [housing, setHousing] = useState(false);
  const [transportation, setTransportation] = useState(false);
  const [groceries, setGroceries] = useState(false);
  const [entertainment, setEntertainment] = useState(false);
  const [phone, setPhone] = useState(false);
  const [childcare, setChildcare] = useState(false);

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
      <form className="wizard-form" onSubmit={addTransportation}>
        <div className="c-wizard-form__field">
          <input
            class="a-checkbox"
            type="checkbox"
            value="transportation"
            id="transportation"
            name="Transportation"
            onChange={(event) => setTransportation(event.target.value)}
          />
          <label class="a-label" for="transportation">
            <span>Transportation</span>
          </label>
        </div>
        <Button type="submit">Add Transportation to List</Button>
      </form>
      <form className="wizard-form" onSubmit={addGroceries}>
        <div className="c-wizard-form__field"></div>
        <div className="c-wizard-form__field">
          <input
            class="a-checkbox"
            type="checkbox"
            value="groceries"
            id="groceries"
            name="Groceries"
            onChange={(event) => setGroceries(event.target.value)}
          />
          <label class="a-label" for="groceries">
            <span>Groceries</span>
          </label>
        </div>
        <Button type="submit">Add Groceries to List</Button>
      </form>
      <form className="wizard-form" onSubmit={addEntertainment}>
        <div className="c-wizard-form__field"></div>
        <div className="c-wizard-form__field">
          <input
            class="a-checkbox"
            type="checkbox"
            value="entertainment"
            id="entertainment"
            name="Entertainment"
            onChange={(event) => setEntertainment(event.target.value)}
          />
          <label class="a-label" for="entertainment">
            <span>Entertainment</span>
          </label>
        </div>
        <Button type="submit">Add Entertainment to list</Button>
      </form>
      <form className="wizard-form" onSubmit={addPhone}>
        <div className="c-wizard-form__field"></div>
        <div className="c-wizard-form__field">
          <input
            class="a-checkbox"
            type="checkbox"
            value="phone"
            id="phone"
            name="Phone"
            onChange={(event) => setPhone(event.target.value)}
          />
          <label class="a-label" for="phone">
            <span>Phone</span>
          </label>
        </div>
        <Button type="submit">Add Phone to List</Button>
      </form>
      <form className="wizard-form" onSubmit={addChildcare}>
        <div className="c-wizard-form__field"></div>
        <div className="c-wizard-form__field">
          <input
            class="a-checkbox"
            type="checkbox"
            value="childcare"
            id="childcare"
            name="Childcare"
            onChange={(event) => setChildcare(event.target.value)}
          />
          <label class="a-label" for="childcare">
            <span>Childcare</span>
          </label>
        </div>
        <Button type="submit">Add Childcare to List</Button>
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
