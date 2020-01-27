export const exampleMonthlyData = {
  startDay: 15, //  ??Meissa has startDay 4, I was going to use current date Which?  Why?  Should be January 15, 2020
  startDate: "2020-01-15",
  lastDayOfPeriod: "04/15/2020", // ??  Wednesday, April 15, 2020

  startingBalance: {
    checking: 40000,
    savings: 32500,
    prepaid: 0,
    cash: 10000,
    other: 0,
    total: 82500 //  ??  Meissa, why is this static as opposed to calculated?
  },
  "January 2020": {
    incomes: {
      "1": {
        id: "1",
        subCategory: { value: "paycheck", label: "Paycheck" },
        desc: "Macy's paycheck",
        recurs: true,
        frequency: "every two weeks", // ??should this be an id? or a text descriptor
        // ????  If it is an occasional transaction date, then recurring should be false
        startDate: "2020-01-17", //  Friday, January 17, 2020 should be available to the app
        amount: 48700 // being stored in cents
        // ??need ability to add a second paycheck; what are the issues here, given the same category name.  are there any issues?
      },
      "2": {
        id: "2",
        subCategory: { value: "child support", label: "Child Support" },
        desc: "Child Support - John ",
        recurs: true,
        frequency: "monthly", // ??should this be an id? or a text descriptor
        // ????  If it is an occasional transaction date, then recurring should be false
        startDate: "2020-02-01", //  Saturday, February 2, 2020 should be available to the app
        amount: 25000
      },
      "3": {
        id: "3",
        subCategory: { value: "SNAP", label: "SNAP" },
        desc: "SNAP benefit",
        recurring: {
          //??  huh?  Is this the way it should be?
          recurs: true,
          frequency: "every two weeks", // ??should this be an id? or a text descriptor
          startDate: "2020-01-17" //  Friday, January 17, 2020 should be available to the app
        },
        oneTimeTransaction: false, // ????  If it is recurring, then you do not have a oneTimeTransaction date
        // ????  If it is an occasional transaction date, then recurring should be false
        amount: 19600,
        startDate: "2019-02-01" //  ??  Saturday, February 1, 2020 should be available to the app.  What about Saturdays?  Should
      },
      "4": {
        id: "4",
        subCategory: { value: "other", label: "Other" },
        desc: "Babysitting",
        recurring: {
          //??  huh?  Is this the way it should be?
          recurs: false,
          frequency: "" // ??should this be an id? or a text descriptor
        },
        oneTimeTransaction: true, // ????  If it is recurring, then you do not have a oneTimeTransaction date
        // ????  If it is an occasional transaction date, then recurring should be false
        amount: 5000,
        startDate: "2019-01-25" //  ??  Saturday, January 25, 2020 should be available to the app.
      }
    },
    expenses: {
      "1": {
        id: "1",
        subCategory: { value: "rent", label: "Rent" },
        name: "Apt. Rent",
        recurring: {
          //??  huh?  Is this the way it should be?
          recurs: true,
          frequency: "monthly", // ??should this be an id? or a text descriptor
          startDate: "2020-02-01" //  Saturday, February 1, 2020 should be available to the app
          // do we account for Saturdays..  Maybe we should account for Saturdays with some expenses and not others.
          //  i.e. rent is always due on a particular day and you don't get any flexibility based on weekend
        },
        oneTimeTransaction: false, // ????  If it is recurring, then you do not have a oneTimeTransaction date
        // ????  If it is an occasional transaction date, then recurring should be false
        amount: 100000,
        recurring: true,
        date: "2019-10-01"
        //  date: "Tuesday, October 1, 2019"
      },
      "2": {
        id: "2",
        type: { value: "rent", label: "Rent or mortgage" },
        desc: "Apt. Rent",
        recurring: {
          //??  huh?  Is this the way it should be?
          recurs: false,
          frequency: "", // ??should this be an id? or a text descriptor
          startDate: "" //  Friday, January 17, 2020 should be available to the app
        },
        oneTimeTransaction: true, // ????  If it is recurring, then you do not have a oneTimeTransaction date
        // ????  If it is an occasional transaction date, then recurring should be false
        amount: 170000,
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
  "February 2020": {
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
  },
  "March 2020": {
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
