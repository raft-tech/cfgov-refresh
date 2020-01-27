import { joinClasses } from "../../services/string-services";

export const Divider = ({ color = "light" }) => (
  <div className={joinClasses(["divider", color])}></div>
);
