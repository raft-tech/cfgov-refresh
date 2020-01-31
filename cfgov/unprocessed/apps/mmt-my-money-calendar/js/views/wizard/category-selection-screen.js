import { observer } from 'mobx-react';
import { useState, useCallback, useEffect } from 'react';
import { useStore } from '../../stores';
import routeOptionReducer from '../../../../youth-employment-success/js/reducers/route-option-reducer';

function CategorySelectionScreen() {
  const store = useStore();
  const { wizardStepStore } = store;
  console.log('this line is right above the useEffect');
  // useEffect(() => console.log(wizardStepStore.category), [wizardStepStore.cateo]);

  // This will log the state of the store as an object

  const [housing, setHousing] = useState(false);
  const [transportation, setTransportation] = useState(false);
  const [groceries, setGroceries] = useState(false);
  const [entertainment, setEntertainment] = useState(false);
  const [phone, setPhone] = useState(false);
  const [childcare, setChildcare] = useState(false);
  const [selectedCategoriesArray, setSelectedCategoriesArray] = useState([]);

  // useEffect(() => console.log(uiStore.uieventsById), [uiStore.uieventsById]);
  const handleHousing = useCallback((event) => {
    event.preventDefault();
    console.log('selected housing is ', selectedCategoriesArray);
    setHousing(!housing);
    setSelectedCategoriesArray((selectedCategoriesArray) => [...selectedCategoriesArray, 'housing']);
  });

  const handleTransportation = useCallback((event) => {
    event.preventDefault();
    console.log('selected categories is ', selectedCategoriesArray);
    setTransportation(!transportation);
    setSelectedCategoriesArray((selectedCategoriesArray) => [...selectedCategoriesArray, 'transportation']);
  });

  const handleGroceries = useCallback((event) => {
    event.preventDefault();
    setGroceries(!groceries);
    setSelectedCategoriesArray((selectedCategoriesArray) => [...selectedCategoriesArray, 'groceries']);
  });
  const handleEntertainment = useCallback((event) => {
    event.preventDefault();
    setTransportation(!entertainment);
    setSelectedCategoriesArray((selectedCategoriesArray) => [...selectedCategoriesArray, 'entertainment']);
  });
  const handlePhone = useCallback((event) => {
    event.preventDefault();
    setPhone(!phone);
    setSelectedCategoriesArray((selectedCategoriesArray) => [...selectedCategoriesArray, 'phone']);
  });
  const handleChildcare = useCallback((event) => {
    event.preventDefault();
    setChildcare(!childcare);
    setSelectedCategoriesArray((selectedCategoriesArray) => [...selectedCategoriesArray, 'childcare']);
  });

  return (
    <section className="expenses-step">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.png" alt="" className="u-hide-on-print" />

      <div className="c-step-title">
        <h4>Expenses</h4>
      </div>
      <div>On clicking 'Next' following step input screens will come up in order</div>
      <div>{selectedCategoriesArray}</div>

      <div className="c-step-container">
        <div className="c-step-img">
          <img src="/static/apps/mmt-my-money-calendar/img/expense-img.png" alt="" className="u-hide-on-print" />
        </div>
        <div className="c-step-title">Tell us about your expenses</div>
      </div>
      <div>Check off those that you currently have</div>
      <br />

      <form className="wizard-form">
        <fieldset className="o-form_fieldset ">
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox">
            <input
              className="a-checkbox"
              type="checkbox"
              value={housing}
              id="housing"
              name="Housing"
              onChange={handleHousing}
            />
            <label className="a-label" htmlFor="starting-balance">
              Housing
            </label>
          </div>
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="transportation"
              value={transportation}
              name="Transportation"
              onClick={handleTransportation}
            />
            <label className="a-label" htmlFor="transportation">
              <span>Transportation</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="groceries"
              id="groceries"
              name="Groceries"
              onChange={handleGroceries}
            />
            <label className="a-label" htmlFor="groceries">
              <span>Groceries</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="entertainment"
              id="entertainment"
              name="Entertainment"
              onChange={handleEntertainment}
            />
            <label className="a-label" htmlFor="entertainment">
              <span>Entertainment</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="phone"
              id="phone"
              name="Phone"
              onChange={handlePhone}
            />
            <label className="a-label" htmlFor="phone">
              <span>Phone</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="childcare"
              id="childcare"
              name="Childcare"
              onChange={handleChildcare}
            />
            <label className="a-label" htmlFor="childcare">
              <span>Childcare</span>
            </label>
          </div>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>

      <br />
      <br />

      <br />
      <br />
    </section>
  );
}

export default observer(CategorySelectionScreen);
