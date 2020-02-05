export const CategorySelectionScreenDetails = [
  {
    screenNumber: 1000,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: 'Lets add the inputs for your cash on hand.',
    prevButtonText: '',
    step: 'Beginning Balance',
    pageImage: '/static/apps/mmt-my-money-calendar/img/starting_balance.png',
    stepTitle: 'Lets look at at the cash you have on hand',
    description: 'check off those that you currently have',
  },
  {
    screenNumber: 2000,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: 'Lets add the inputs for your income.',
    prevButtonText: '',
    step: 'Income',
    pageImage: '/static/apps/mmt-my-money-calendar/img/income-img.png',
    stepTitle: 'Tell us about your Income',
    description: 'check off those that you currently have',
    categoryOptions: '',
  },
  {
    screenNumber: 3000,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: 'Lets add the inputs for your expenses.',
    prevButtonText: '',
    step: 'Expenses',
    pageImage: '/static/apps/mmt-my-money-calendar/img/expense-img.png',
    stepTitle: 'Tell us about your Expenses',
    description: 'check off those that you currently have',
  },
];

export const StepSummaryDetails = [
  {
    screenNumber: 1001,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: 'Great work!  Now lets add your income.',
    prevButtonText: '',
    step: 'Starting Balance',
    calendarImage: '/static/apps/mmt-my-money-calendar/img/jan-month-beg-balance.png',
    subtitle: 'Yeah!  You added some details on yhour starting balance.',
    description: 'You have added the following',
    totalsSummary: 'totals summary',
  },
  {
    screenNumber: 2001,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: 'Great work!  Now, lets add your Expenses.',
    prevButtonText: '',
    step: 'Income',
    calendarImage: '/static/apps/mmt-my-money-calendar/img/jan-month-beg-balance.png',
    subtitle: 'Yeah!  You added some details on yhour starting balance.',
    description: 'You have added the following',
    totalsSummary: ` <ul class="c-item-list-four">
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
    step: 'Expenses',
    screenNumber: 3001,
    nextScreenNumber: 0,
    prevScreenNumber: 0,
    nextButtonText: 'Lets see the payoff!',
    prevButtonText: '',
    nextRoute: `/wizard/category-input-screen`,
    prevRoute: `/wizard/category-input-screen`,
    calendarImage: '/static/apps/mmt-my-money-calendar/img/jan-month-beg-balance.png',
    subtitle: 'Yeah!  You added some details on yhour starting balance.',
    description: 'You have added the following',
    totalsSummary: ` <div class="c-item-list-four">
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
