// ! Warning !
//   Unit tests rely on this data, be careful when changing
//    - Calendar.test.js
export const exampleMonthlyData = {
  "October 2019": {
    startingBalance: {
      checking: 0,
      prepaid: 0,
      other: 0,
      total: 0,
      startDay: 4
    },
    incomes: {
      "1": {
        id: "1",
        type: { value: "retirement", label: "Retirement" },
        name: "Acme Inc. paycheck",
        amount: 185000,
        recurring: true,
        date: "2019-10-05"
        // date: "Saturday, October 5, 2019"
      },
      "2": {
        id: "2",
        type: { value: "retirement", label: "Retirement" },
        name: "Acme Inc. paycheck",
        amount: 185000,
        recurring: true,
        date: "2019-10-24"
        //  date: "Thursday, October 24, 2019"
      }
    },
    expenses: {
      "1": {
        id: "1",
        type: { value: "rent", label: "Rent or mortgage" },
        name: "Apt. Rent",
        amount: 170000,
        recurring: true,
        date: "2019-10-01"
        //  date: "Tuesday, October 1, 2019"
      },
      "2": {
        id: "2",
        type: { value: "rent", label: "Rent or mortgage" },
        name: "Apt. Rent",
        amount: 170000,
        recurring: true,
        date: "2019-10-15"
        //  date: "Tuesday, October 15, 2019"
      },
      "3": {
        id: "3",
        type: { value: "savings", label: "Savings" },
        name: "for car",
        amount: 20000,
        recurring: true,
        date: "2019-10-15"
        //  date: "Tuesday, October 15, 2019"
      },
      "4": {
        id: "4",
        type: { value: "savings", label: "Savings" },
        name: "Holiday Gifts",
        amount: 25,
        recurring: true,
        date: "2019-10-15"
        //  date: "Tuesday, October 15, 2019"
      }
    }
  },
  "November 2019": {
    startingBalance: {
      checking: 0,
      prepaid: 0,
      other: 0,
      total: 0,
      startDay: null
    },
    incomes: {
      "1": {
        id: "1",
        type: { value: "retirement", label: "Retirement" },
        name: "Acme Inc. paycheck",
        amount: 110000,
        recurring: true,
        date: "2019-11-15"
        //  date: "Friday, November 15, 2019"
      }
    },
    expenses: {
      "2": {
        id: "2",
        type: { value: "rent", label: "Rent or mortgage" },
        name: "Apt. Rent",
        amount: 100000,
        recurring: true,
        date: "2019-11-05"
        //  date: "Tuesday, November 5, 2019"
      }
    }
  }
};
