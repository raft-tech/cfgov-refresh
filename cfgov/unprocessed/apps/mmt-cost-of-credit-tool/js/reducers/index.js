import { SET_TOTAL_PURCHASE_AMOUNT, SET_DOWN_PAYMENT, SET_CREDIT_APR_PCT } from '../actions';

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
  }
  return state;
};
