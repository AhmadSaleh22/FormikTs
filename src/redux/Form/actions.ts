import { Dispatch } from "@reduxjs/toolkit";
import {ActionsType} from '../../@types/types'
import { IFormValidation } from "../../@types/validation";
import { checkCurrentlyWork } from "../../utils/deleteEndDate"
import { FormTypes } from "./constants";

export const storeFormData = (data: IFormValidation) => (dispatch: Dispatch<ActionsType>) => {
    checkCurrentlyWork(data);
    //to add new data on payload typed in FormValidation data.
    dispatch({
        type: FormTypes.STORE_FORM_DATA,
        payload: data,
    });
}

export const finishUpdate = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch({ type: FormTypes.FINISH });
}