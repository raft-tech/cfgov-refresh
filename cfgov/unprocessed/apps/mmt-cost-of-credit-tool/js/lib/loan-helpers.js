/**
 * Generates 
 * Amortized Loan Payment Formula: Formula: a/{[(1+r)^n]-1}/[r(1+r)^n]=p
 * a: 100,000, the amount of the loan
 * r: 0.005 (6% annual rate—expressed as 0.06—divided by 12 monthly payments per year)
 * n: 360 (12 monthly payments per year times 30 years)
 * Example:  Calculation: 100,000/{[(1+0.005)^360]-1}/[0.005(1+0.005)^360]=599.55, or 100,000/166.7916=599.55
 * The monthly payment is $599.55. savings total for use with 'Totals Summary'
 * 
 * 
 * @param {Object} expenseObj Number of options to generate in addition to current month
 *
 * True cost is total cost of loan
 * 
 * p: get from: state.totalPurchaseAmount: $2000
 * r: get from: state.creditAprPct: 6/100 (interest rate)
 * n: get from: state.monthsToPayOff: 24
 * t: set: state.trueCostAmount 
 * f: set: state.totalFinanceCharge
 * to get trueCostAmount
 * 

export const savingsTotal = expenseObj =>
  expenseObj
    .filter(item => item.type.value === "savings")
    .map(entry => entry.amount)
    .reduce((total, current) => total + current, 0);

/**
 * Generates expense total for use with 'Totals Summary'
 * @param {Object} expenseObj Number of options to generate in addition to current month
 */

export const totalInterest = (p, i, n) => {
  let r;
  r = i / 100;
  let t;
  t = n / 12;
  let simpleInterestPaid;
  simpleInterestPaid = p * r * t;
  return simpleInterestPaid;
};
// export const expenseTotal = expenseObj =>
//   expenseObj
//     .filter(item => item.type.value !== "savings")
//     .map(entry => entry.amount)
//     .reduce((total, current) => total + current, 0);
