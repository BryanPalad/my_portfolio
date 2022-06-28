import { createSlice } from "@reduxjs/toolkit";
import { qualificationsObj } from "../../constants/about";

const initialState = {
    qualifications: qualificationsObj,
}


export const qualificationSlice = createSlice({
    name: 'qualifications',
    initialState,
    reducers: {

    }
})



export const selectQualifications = (state) => state.qualifications.qualifications;
export default qualificationSlice.reducer;