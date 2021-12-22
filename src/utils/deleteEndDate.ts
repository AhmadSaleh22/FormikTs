import { IFormValidation } from "../@types/validation";

export const checkCurrentlyWork = (Experience: IFormValidation) => {
  if (Experience.currentlyWork) {
    delete Experience.endDate;
  }
};