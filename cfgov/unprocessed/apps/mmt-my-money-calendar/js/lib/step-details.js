export const CategorySelectionScreenDetails = [
  {
    screenNumber: 0,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: `Let's add the inputs for your cash on hand.`,
    prevButtonText: ``,
    step: 'Beginning Balance',
    pageImage: '/static/apps/mmt-my-money-calendar/img/starting_balance.png',
    stepTitle: 'Lets look at at the cash you have on hand',
    description: 'check off those that you currently have',
    categoryOptions: `<fieldset className="o-form_fieldset ">
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Checking Account"
              name="Checking Account"
              onChange={handleCheckbox}
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Checking Account'))}
            />
            <label className="a-label" htmlFor="Checking Account">
              <span>Checking Accountg</span>
            </label>
          </div>
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Savings Account"
              name="Savings Account"
              onChange={handleCheckbox}
              checked={!!InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Savings Account')}
            />
            <label className="a-label" htmlFor="Savings Account">
              <span>Savings Account</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Cash"
              name="Cash"
              onChange={handleCheckbox}
              checked={!!InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Cash')}
            />
            <label className="a-label" htmlFor="Cash">
              <span>Cash</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="Prepaid Cards"
              id="Prepaid Cards"
              name="Prepaid Cards"
              onChange={handleCheckbox}
              checked={Boolean(
                InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Prepaid Cards')
              )}
            />
            <label className="a-label" htmlFor="Prepaid Cardst">
              <span>Prepaid Cards</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="Other"
              id="Other"
              name="Other"
              onChange={handleCheckbox}
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Other'))}
            />
            <label className="a-label" htmlFor="Other">
              <span>Othere</span>
            </label>
          </div>
        </fieldset>`,
  },
  {
    screenNumber: 0,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: `Let's add the inputs for your income.`,
    prevButtonText: ``,
    step: 'Income',

    pageImage: '/static/apps/mmt-my-money-calendar/img/income-img.png',
    stepTitle: 'Tell us about your Income',
    description: 'check off those that you currently have',
    categoryOptions: `<fieldset className="o-form_fieldset ">
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Paycheck"
              name="Paycheck"
              onChange={handleCheckbox}
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Paycheck'))}
            />
            <label className="a-label" htmlFor="Paycheck">
              <span>Paycheck</span>
            </label>
          </div>
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Child Support"
              name="Child Support"
              onChange={handleCheckbox}
              checked={!!InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Child Support')}
            />
            <label className="a-label" htmlFor="Child Supportn">
              <span>Child Support</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Disability Benefits"
              name="Disability Benefits"
              onChange={handleCheckbox}
              checked={!!InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Disability Benefits')}
        />
            <label className="a-label" htmlFor="Disability Benefits">
              <span>Disability Benefits</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="SNAP"
              id="SNAP"
              name="SNAP"
              onChange={handleCheckbox}
              checked={Boolean(
                InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'SNAP')
              )}
            />
            <label className="a-label" htmlFor="SNAP">
              <span>SNAP</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="TANF"
              id="TANF"
              name="TANF"
              onChange={handleCheckbox}
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'TANF'))}
            />
            <label className="a-label" htmlFor="TANF">
              <span>TANF</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="Other"
              id="Other"
              name="Other"
              onChange={handleCheckbox}
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Other'))}
            />
            <label className="a-label" htmlFor="Other">
              <span>Other</span>
            </label>
          </div>
        </fieldset>`,
  },
  {
    screenNumber: 0,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: `Lets add the inputs for your expenses.`,
    prevButtonText: ``,
    step: 'Expenses',
    pageImage: '/static/apps/mmt-my-money-calendar/img/expense-img.png',
    stepTitle: 'Tell us about your Expenses',
    description: 'check off those that you currently have',
    categoryOptions: ` <form className="wizard-form"><fieldset className="o-form_fieldset ">
        <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Housing"
              name="Housing"
              onChange={handleCheckbox}
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Housing'))}
            />
            <label className="a-label" htmlFor="Housing">
              <span>Housing</span>
            </label>
          </div>
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Transportation"
              name="Transportation"
              onChange={handleCheckbox}
              checked={!!InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Transportation')}
            />
            <label className="a-label" htmlFor="Transportation">
              <span>Transportation</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Groceries"
              name="Groceries"
              onChange={handleCheckbox}
              checked={!!InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Groceries')}
            />
            <label className="a-label" htmlFor="Groceries">
              <span>Groceries</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="Entertainment"
              id="Entertainment"
              name="Entertainment"
              onChange={handleCheckbox}
              checked={Boolean(
                InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Entertainment')
              )}
            />
            <label className="a-label" htmlFor="Entertainment">
              <span>Entertainment</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="Phone"
              id="Phone"
              name="Phone"
              onChange={handleCheckbox}
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Phone'))}
            />
            <label className="a-label" htmlFor="Phone">
              <span>Phone</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="Childcare"
              id="Childcare"
              name="Childcare"
              onChange={handleCheckbox}
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Childcare'))}
            />
            <label className="a-label" htmlFor="Childcare">
              <span>Childcare</span>
            </label>
          </div>
        </fieldset></form>`,
  },
];

export const stepSummaryDetails = [
  {
    screenNumber: 0,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: `Great work!  Now, let's add your income.`,
    prevButtonText: ``,
    step: 'Starting Balance',
    calendarImage: '/static/apps/mmt-my-money-calendar/img/jan-month-beg-balance.png',
    subtitle: 'Yeah!  You added some details on yhour starting balance.',
    description: 'You have added the following',
    totalsSummary: `<ul className="c-item-list-two">
          <li>
            <div>Checking</div>
            <div>$400</div>
          </li>
          <li>
            <div>Savings</div>
            <div>$325</div>
          </li>
          <li>
            <div>Cash</div>
            <div>$100</div>
          </li>
        </ul>
        <div className="c-step-title">Total: $825</div>`,
  },
  {
    screenNumber: 0,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: `Great work!  Now, let's add your Expenses.`,
    prevButtonText: ``,
    step: 'Income',
    calendarImage: '/static/apps/mmt-my-money-calendar/img/jan-month-beg-balance.png',
    subtitle: 'Yeah!  You added some details on yhour starting balance.',
    description: 'You have added the following',
    totalsSummary: ` <ul className="c-item-list-four">
          <li>
            <div>Job</div>
            <div>every 2 weeks</div>
            <div>starts 1/17</div>
            <div>$487</div>
          </li>
          <li>
            <div>Child Support</div>
            <div>monthly</div>
            <div>starts 2/01</div>
            <div>$350</div>
          </li>
          <li>
            <div>SNAP</div>
            <div>monthly</div>
            <div>starts 2/01</div>
            <div>$196</div>
          </li>
        </ul>`,
  },
  {
    screenNumber: 0,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: `Let's see the payoff!`,
    prevButtonText: ``,
    step: 'Expenses',
    calendarImage: '/static/apps/mmt-my-money-calendar/img/jan-month-beg-balance.png',
    subtitle: 'Yeah!  You added some details on yhour starting balance.',
    description: 'You have added the following',
    totalsSummary: ` <div className="c-item-list-four">
        <ul>
          <li>
            <div>Housing</div>
            <div>monthly</div>
            <div>starts 02/01</div>
            <div>$487</div>
          </li>
          <li>
            <div>Groceries</div>
            <div>weekly</div>
            <div></div>
            <div>$200</div>
          </li>
          <li>
            <div>Phone</div>
            <div>monthly</div>
            <div>starts 01/26</div>
            <div>$272</div>
          </li>
        </ul>
      </div>`,
  },
];
