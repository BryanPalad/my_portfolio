import { createSlice } from "@reduxjs/toolkit";
import { trainingsandcertsObj } from "../../constants/about";


const initialState = {
    trainings: trainingsandcertsObj,
}


export const trainingsSlice = createSlice({
    name: 'trainings',
    initialState,
    reducers: {

    }
})



export const selectTrainingsAndCerts = (state) => state.trainings.trainings;
export default trainingsSlice.reducer;