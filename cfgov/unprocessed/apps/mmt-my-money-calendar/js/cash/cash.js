// import React, { useState } from "react";
// import { cashConfig } from "../config/cash-config";
// import { CashEdit } from "./cash-edit";
// import { CashHeader } from "./cash-header";
// import { CashList } from "./cash-list";

// /**
//  * CashIn/CashOut sections of DayModal
//  * @param {String} section incomes/expenses
//  * @param {Date} date selected date
//  */
// export const Cash = ({ section, date, data, setState, selectedMonth }) => {
//   const [editing, setEditing] = useState(false);
//   const [selected, setSelected] = useState({});

//   if (!selectedMonth) return null;

//   const config = cashConfig[section];

//   return (
//     <div className="cash-section">
//       <CashHeader
//         editing={editing}
//         setEditing={setEditing}
//         icon={config.icon}
//         title={config.title}
//       />

//       {!editing && (
//         <CashList
//           data={data}
//           setEditing={setEditing}
//           setSelected={setSelected}
//           addButtonText={config.addButtonText}
//           section={section}
//           date={date}
//         />
//       )}

//       {editing && (
//         <CashEdit
//           current={selected}
//           setState={setState}
//           data={data}
//           setEditing={setEditing}
//           section={section}
//           selectedMonth={selectedMonth}
//         />
//       )}
//     </div>
//   );
// };

// export default Cash;

// Cash.defaultProps = {
//   section: "incomes",
//   date: null,
//   data: [],
//   setState: null,
//   selectedMonth: null
// };
