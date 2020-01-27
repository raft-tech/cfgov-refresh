// import { isEmpty } from "lodash";

// import { Divider } from "../shared/divider";
// import { AddCashButton } from "./add-cash-button";
// import { CashListEntry } from "./cash-list-entry";

// const CashListEmptyState = () => (
//   <p className="empty-state">You haven't added anything yet.</p>
// );

// const CashListEntries = ({ data, ...setters }) => (
//   <>
//     {data.map(current => (
//       <CashListEntry key={current.id} current={current} {...setters} />
//     ))}
//     <Divider />
//   </>
// );

// export const CashList = ({ data, editing, addButtonText, ...setters }) => {
//   const empty = isEmpty(data);
//   const classname = "cash-list" + (empty ? " empty" : "");

//   return (
//     <div className={classname}>
//       {empty && <CashListEmptyState />}
//       {!empty && <CashListEntries data={data} {...setters} />}
//       <AddCashButton addButtonText={addButtonText} {...setters} />
//     </div>
//   );
// };

// CashList.defaultProps = {
//   data: [],
//   editing: false,
//   addButtonText: "",
//   setSelected: null,
//   setEditing: null
// };
