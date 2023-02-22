//import { useContext } from "react";
//import { AppContext } from "../../../core/context/app.context";

/* eslint-disable jsx-a11y/anchor-is-valid */
export function Actions() {
  /*   const { isCalling, phoneNumber, handleCall, handleHang } =
    useContext(AppContext);
  let activeCallButton = "";
  let activeHangButton = "";

  phoneNumber.length >= 9
    ? (activeCallButton = "call active")
    : (activeCallButton = "call");

  isCalling ? (activeHangButton = "hang active") : (activeHangButton = "hang"); */

  return (
    <>
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->  */}
      {/* <!-- el número de teléfono tiene 9 cifras --  */}
      <a href="#" className="activeCallButton">
        Call
      </a>
      {/* <!- Sólo se tiene que ver un botón u otro ->  */}
      <a href="#" className="activeCallButton">
        Hang
      </a>
    </>
  );
}
