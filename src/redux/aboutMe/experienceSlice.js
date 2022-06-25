import { createSlice } from "@reduxjs/toolkit";
import { experienceObj } from '../../constants/about';

const initialState = {
    experience: experienceObj,
}

export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {

    }
})

export const selectExperienceInfo = (state) => state.experience.experience;
export default experienceSlice.reducer;