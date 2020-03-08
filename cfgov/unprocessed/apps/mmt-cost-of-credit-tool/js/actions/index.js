export const SET_TOTAL_PURCHASE_AMOUNT = 'SET_TOTAL_PURCHASE_AMOUNT';
export const setTotalPurchaseAmount = (amount) => ({
  type: SET_TOTAL_PURCHASE_AMOUNT,
  amount,
});

export const SET_DOWN_PAYMENT = 'SET_DOWN_PAYMENT';
export const setDownPayment = (amount) => ({
  type: SET_DOWN_PAYMENT,
  amount,
});

export const SET_CREDIT_APR_PCT = 'SET_CREDIT_APR_PCT';
export const setCreditAprPct = (apr) => ({
  type: SET_CREDIT_APR_PCT,
  apr,
});

export const SET_MONTHLY_PAYMENT = 'SET_MONTHLY_PAYMENT';
export const setMonthlyPayment = (amount) => ({
  type: SET_MONTHLY_PAYMENT,
  amount,
});

export const SET_MONTHS_TO_PAY_OFF = 'SET_MONTHS_TO_PAY_OFF';
export const setMonthsToPayOff = (months) => ({
  type: SET_MONTHS_TO_PAY_OFF,
  months,
});
