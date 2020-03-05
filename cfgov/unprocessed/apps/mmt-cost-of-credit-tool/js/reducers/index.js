import * as actions from "../actions";

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
  promoDealMonths: null
};

export const cocReducer = (state = initialState, action) => {
  if (action.type = actions.SET_TOTAL_PURCHASE_AMOUNT) {
    return Object.assign({}, state, {
      totalPurchaseAmount: action.amount
    });
  } else if (action.type = actions.SET_DOWN_PAYMENT) {
    return Object.assign({}, state, {
      downPayment: action.amount
    });
  } else if (action.type = actions.ADD_TODO) {
    return [
      ...state,
      todo(undefined, action)
    ];
  } else if (action.type = actions.TOGGLE_TODO) {
    return state.monthlyPayment(t => todo(t, action));
  }
  return state;
};
