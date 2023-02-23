import { createAction } from "@reduxjs/toolkit";
import { PhoneNumberStructure } from "../model/phoneNumber";
import { phoneActions } from "./phone.actions.types";

export const addCreator = createAction<PhoneNumberStructure>(phoneActions.add);
export const deleteCreator = createAction(phoneActions.delete);
