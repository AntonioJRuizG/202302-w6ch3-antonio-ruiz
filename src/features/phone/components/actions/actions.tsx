/* eslint-disable jsx-a11y/anchor-is-valid */
export function Actions() {
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
