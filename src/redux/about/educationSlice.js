import { createSlice } from "@reduxjs/toolkit";
import { schoolObj } from "../../constants/about";


const initialState = {
    education: schoolObj,
}


export const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {

    }
})



export const selectSchool = (state) => state.education.education;
export default educationSlice.reducer;