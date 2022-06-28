import { createSlice } from "@reduxjs/toolkit";
import {servicesObj} from '../../constants/services';

const initialState = {
    services: servicesObj,
}

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {

    }
})



export const selectServices = (state) => state.services.services;
export default servicesSlice.reducer;