import { IFormValidation } from "../../@types/validation";
import { FormTypes } from "./constants";

export default function FormReduser(state: { isUpdate: boolean } = { isUpdate: false }, action: { type: string, payload: IFormValidation }) {
  switch (action.type) {
    case FormTypes.STORE_FORM_DATA:
      return {
        ...state,
        workExperiances: action.payload,
        isUpdate: true,
      };
    case FormTypes.FINISH:
      return {
        ...state,
        workExperiances: state,
        isUpdate: false,
      };
    default:
      return state;
  }
}