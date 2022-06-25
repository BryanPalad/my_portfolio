import { createSlice } from '@reduxjs/toolkit'
import { modalObj } from '../../constants/portfolio'

const initialState = {
    project: modalObj,
}

export const modalProjectSlice = createSlice({
    name:'project',
    initialState,
    reducers: {

    }
})


export const selectProject = (state) => state.project.project;
export default modalProjectSlice.reducer;