import { useState } from 'react';

export default function CategorySelectionScreen() {
  const [housing, setHousing] = useState(false);
  const [transportation, setTransportation] = useState(false);
  const [groceries, setGroceries] = useState(false);
  const [entertainment, setEntertainment] = useState(false);
  const [phone, setPhone] = useState(false);

  console.log('housing is ', housing);
  console.log('transportation is ', transportation);
  console.log('groceries is ', groceries);
  console.log('entertainment is ', entertainment);
  console.log('phone is ', phone);

  return (
    <section className="expenses-step">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.png" alt="" className="u-hide-on-print" />

      <div className="c-step-title">
        <h4>Expenses</h4>
      </div>

      <div className="c-step-container">
        <div className="c-step-img">
          <img src="/static/apps/mmt-my-money-calendar/img/expense-img.png" alt="" className="u-hide-on-print" />
        </div>
        <div className="c-step-title">Tell us about your expenses</div>
      </div>
      <div>Check off those that you currently have</div>
      <form className="wizard-form">
        <div>
          <input
            className="a-checkbox"
            type="checkbox"
            value=false
            id="housing"
            name="Housing"
            onChange={(event) => setHousing(event.target.value)}
          />
          <label className="a-label" htmlFor="starting-balance">
            Housing
          </label>
        </div>
        {/* <Button type="submit">Add Housing to List</Button> */}
        <fieldset className="o-form_fieldset ">
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="transportation"
              id="transportation"
              name="Transportation"
              onChange={(event) => setTransportation(event.target.value)}
            />
            <label className="a-label" htmlFor="transportation">
              <span>Transportation</span>
            </label>
          </div>
          {/* <Button type="submit">Add Transportation to List</Button> */}

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="groceries"
              id="groceries"
              name="Groceries"
              onChange={(event) => setGroceries(event.target.value)}
            />
            <label className="a-label" htmlFor="groceries">
              <span>Groceries</span>
            </label>
          </div>
          {/* <Button type="submit">Add Groceries to List</Button> */}

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="entertainment"
              id="entertainment"
              name="Entertainment"
              onChange={(event) => setEntertainment(event.target.value)}
            />
            <label className="a-label" htmlFor="entertainment">
              <span>Entertainment</span>
            </label>
          </div>
          {/* <Button type="submit">Add Entertainment to list</Button> */}

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="phone"
              id="phone"
              name="Phone"
              onChange={(event) => setPhone(event.target.value)}
            />
            <label className="a-label" htmlFor="phone">
              <span>Phone</span>
            </label>
          </div>
          {/* <Button type="submit">Add Phone to List</Button> */}

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="childcare"
              id="childcare"
              name="Childcare"
              onChange={(event) => setChildcare(event.target.value)}
            />
            <label className="a-label" htmlFor="childcare">
              <span>Childcare</span>
            </label>
          </div>
          {/* <Button type="submit">Add Childcare to List</Button> */}
        </fieldset>
      </form>

      <br />
      <br />

      <br />
      <br />
    </section>
  );
}
