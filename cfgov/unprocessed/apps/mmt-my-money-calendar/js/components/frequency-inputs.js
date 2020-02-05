function FrequencyInputs(props) {
  return (
    <div>
      {(() => {
        switch (props.category) {
          case 'Checking Account':
          case 'Savings Account':
          case 'Cash':
          case 'Prepaid Cards':
          case 'Other':
            return <div>nothing</div>;
          case 'Paycheck':
          case 'Child Support':
          case 'Disability Benefits':
          case 'SNAP':
          case 'TANF':
          case 'Other':
            return (
              <fieldset className="c-radio-input-fieldset" onChange={props.onChange}>
                <div className="c-freq-button">
                  <input type="radio" name="frequency" value="monthly" defaultChecked />
                  <span>Monthly</span>
                </div>
                <br />
                <div className="c-freq-button">
                  <input type="radio" name="frequency" value="weekly" />
                  <span>Weekly</span>
                </div>
                <br />
                <div className="c-freq-button">
                  <input type="radio" name="frequency" value="every-other-week" />
                  <span>Every Other Week</span>
                </div>
                <br />
                <div className="c-freq-button">
                  <input type="radio" name="frequency" value="twice-monthly" />
                  <span>Twice Monthly</span>
                </div>
                <br />
              </fieldset>
            );
          case 'Housing':
          case 'Phone':
            return (
              <fieldset className="c-radio-input-fieldset" onChange={props.onChange}>
                <div className="c-freq-button">
                  <input type="radio" name="frequency" value="monthly" defaultChecked />
                  <span>Monthly</span>
                </div>
                <br />
              </fieldset>
            );
          case 'Groceries':
          case 'Transportation':
          case 'Entertainment':
          case 'Childcare':
            return (
              <fieldset className="c-radio-input-fieldset" onChange={props.onChange}>
                <div className="c-freq-button">
                  <input type="radio" name="frequency" value="monthly" defaultChecked />
                  <span>Monthly</span>
                </div>
                <div className="c-freq-button">
                  <input type="radio" name="frequency" value="weekly" />
                  <span>Weekly</span>
                </div>
                <br />
              </fieldset>
            );
        }
      })()}
    </div>
  );
}

export default FrequencyInputs;
