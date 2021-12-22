import { IFormValidation } from "./validation";
import { FormTypes } from "../redux/Form/constants";
// Start Interfaces


export interface IFinishUpdate {
  type: FormTypes.FINISH;
}
export interface IStorageForm {
  type: FormTypes.STORE_FORM_DATA;
  payload: IFormValidation;
}

export type ActionsType =
   IFinishUpdate | IStorageForm;
