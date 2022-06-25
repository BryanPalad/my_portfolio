import { createSlice } from '@reduxjs/toolkit';
import { trainingsandcertsObj } from '../../constants/about';

const initialState = {
    training: trainingsandcertsObj,
}


export const trainingSlice = createSlice({
    name:'training',
    initialState,
    reducers: {

    }
})


export const selectTrainingInfo = (state) => state.training.training;

export default trainingSlice.reducer;