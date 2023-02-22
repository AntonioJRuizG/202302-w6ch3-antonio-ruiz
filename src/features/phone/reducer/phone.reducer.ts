import { createReducer } from "@reduxjs/toolkit";
import { PhoneNumberStructure } from "../model/phoneNumber";
import * as ac from "./phone.action.creator";

const initialState: PhoneNumberStructure = ""; // Esto me costó :)

export const phoneReducer = createReducer(initialState, (builder) => {
  // Imprescindible usar siempre addDefaultCase, Si no se añade default, y al disparar los reducers no lo encuentra, saltaria error.
  builder.addCase(ac.addCreator, (state, { payload }) => state + payload);

  builder.addCase(ac.deleteCreator, (state) => (state = ""));

  builder.addDefaultCase((state) => state); // En caso de error devuelve el mismo estado
});
