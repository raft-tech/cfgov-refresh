import {
  SET_TOTAL_PURCHASE_AMOUNT,
  SET_DOWN_PAYMENT,
  SET_CREDIT_APR_PCT,
  SET_MONTHLY_PAYMENT,
  SET_MONTHS_TO_PAY_OFF,
} from '../actions';

const initialState = {
  // Initial inputs
  totalPurchaseAmount: 45000,
  downPaymentAmount: 56000,
  creditAprPct: 6,
  monthlyPayment: 25000,
  monthsToPayOff: 24,

  // True cost breakdown
  trueCostAmount: 0,
  totalFinanceCharge: 0,
  addedCreditCostPct: 0,

  // Special financing

  promoDealPct: null,
  promoDealMonths: null,

  // Feedback
  tips: [
    {
      type: 'Yes',
      tip:
        'You are charged interest on the amount you borrow.  This adds' +
        ' up over time.  If you add a little bit extra to your credit card' +
        ' payment each month and pay off your debt faster, you can save money' +
        ' on interest.',
      resource:
        'Make sure your credit card bill due date falls at the right' +
        ' time.  Figure out the timing of when your money comes in and when interest' +
        ' goes out, so your can avoid late fees  Check out the myMoneyCalendar.',
    },
    {
      type: 'No',
      tip:
        'Consider buying something that costs less or planning to pay off your' +
        ' credit card over a longer period of time.  This will lower your monthly' +
        ' payment, bur it may not lower the total True Xost.  Go back to the top of this' +
        ' tool and play around with the numbers.',
      resource:
        'Make a plan to save up for a down payment. A larger down payment means you will' +
        ' have to borrow less and your monthly payment will be smaller.  Create a savings' +
        ' plan.',
    },
    {
      name: 'Not sure',
      tip:
        'You are charged interest on the amount you borrow.  This adds' &
        ' up over time.  If you add a little bit extra to your credit card' &
        ' payment each month and pay off your debt faster, you can save money' &
        ' on interest.',
      resource:
        'Make sure your credit card bill due date falls at the right' &
        ' time.  Figure out the timing of when your money comes in and when interest' &
        ' goes out, so your can avoid late fees  Check out the myMoneyCalendar.',
    },
  ],
};

export default (state = initialState, action) => {
  if (action.type === SET_TOTAL_PURCHASE_AMOUNT) {
    return Object.assign({}, state, {
      totalPurchaseAmount: action.amount,
    });
  } else if (action.type === SET_DOWN_PAYMENT) {
    return Object.assign({}, state, {
      downPayment: action.amount,
    });
  } else if (action.type === SET_CREDIT_APR_PCT) {
    return Object.assign({}, state, {
      creditAprPct: action.apr,
    });
  } else if (action.type === SET_MONTHLY_PAYMENT) {
    return Object.assign({}, state, {
      monthlyPayment: action.amount,
    });
  } else if (action.type === SET_MONTHS_TO_PAY_OFF) {
    return Object.assign({}, state, {
      monthsToPayOff: action.months,
    });
  }
  return state;
};
