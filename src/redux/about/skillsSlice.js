import { createSlice } from "@reduxjs/toolkit";
import { skillsObj } from "../../constants/about";

const initialState = {
    skills: skillsObj,
}


export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {

    }
})



export const selectSkills = (state) => state.skills.skills;
export default skillsSlice.reducer;