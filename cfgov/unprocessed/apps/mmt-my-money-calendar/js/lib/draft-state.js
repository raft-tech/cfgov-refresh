//  This is a draft state

// state = {
//   startingBalance: {
//     startDate: "01/15/2020", // todaysDate,  display => Next Due Date, store => cents
//     checking: 0, // 0, display => Checking Account, store => cents
//     savings: 0, // 0, display => Savings Account, store => cents
//     cash: 0, // 0, display => Cash, store => cents
//     prepaid: 0, // 0, display => Prepaid, store => cents
//     other // 0, display => Other, store => cents
//   },
//   month: {
//     income: {
//       id: {
//         id: 1, // auto-increment, display => none, store => ?
//         type: "Paycheck", // ?, display => ?, store => ?
//         subtype: null, // display =>?, store => c?
//         frequency: "every two weeks", // monthly, display => ?, store => ?
//         name: "", // display => dollar amount, store => ?
//         amount: 0, // display => dollar amount, store =>?
//         startDate: "01/01/2020" // display => dollar amount, store => ?
//       },
//       expenses: {
//         id: {
//           id: 1, // display => dollar amount, store => ?
//           category: "Housing", // display => dollar amount, store => ?
//           subCategory: "Rent", // display => dollar amount, store => ?
//           frequency: "monthly", // monthly, display => ?, store => ?
//           name: "", // display => dollar amount, store => ?
//           amount: 0, // display => dollar amount, store => ?
//           startDate: "01/01/2020" // display => dollar amount, store => ?
//         }
//       }
//     }
//   },
//   steps: [
//       {
//        value: "startingBalance",
//        label:"Starting Balance"
//     },{
//       value: "income",
//       label: "Income"
//     },
//     {
//       value: "expense",
//       label: "Expense"
//     }
//   ],
//   category: {
//       id: 0,
//       stepType:"", // display => ?, store => ?
//   },
//   subCategory: {
//       id: 0,
//       stepType:"",  //stepTypes are:  "startingBalance", "Income", "Expenses"
//       categoryType:"",  // current categoryTypes are
//                        //income:  "Paycheck", "Benefits", "Other"
//                        //expenses: "Housing", "Transportation", "Utilities", "Other"
//       value:"", //some current subCategoryTypes are:
//                        // income: "Benefits" "SNAP"
//       label:""                 // expenses: "Housing", "Rent"

//   },

//   // flags needed

//   }
// }
