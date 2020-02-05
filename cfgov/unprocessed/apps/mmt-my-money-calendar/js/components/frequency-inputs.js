function FrequencyInputs(props) {
  console.log('props', props);

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
                <input type="radio" name="frequency" value="monthly" defaultChecked />
                Monthly
                <br />
                <input type="radio" name="frequency" value="weekly" />
                Weekly
                <br />
                <input type="radio" name="frequency" value="every-other-week" />
                Every Other Week
                <br />
                <input type="radio" name="frequency" value="twice-monthly" />
                Twice Monthly
                <br />
              </fieldset>
            );
          case 'Housing':
          case 'Phone':
            return (
              <fieldset className="c-radio-input-fieldset" onChange={props.onChange}>
                <input type="radio" name="frequency" value="monthly" defaultChecked />
                Monthly
                <br />
              </fieldset>
            );
          case 'Groceries':
          case 'Transportation':
          case 'Entertainment':
          case 'Childcare':
            return (
              <fieldset className="c-radio-input-fieldset" onChange={props.onChange}>
                <input type="radio" name="frequency" value="monthly" defaultChecked />
                Monthly
                <input type="radio" name="frequency" value="weekly" />
                Weekly
                <br />
              </fieldset>
            );
        }
      })()}
    </div>
  );
}

export default FrequencyInputs;
