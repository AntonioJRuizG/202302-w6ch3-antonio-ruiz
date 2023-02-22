import { useContext } from "react";
import { AppContext } from "../../../core/context/app.context";

export function Info() {
  const { isCalling } = useContext(AppContext);

  return <span className="message"> {isCalling ? "Calling..." : "..."}</span>;
}
