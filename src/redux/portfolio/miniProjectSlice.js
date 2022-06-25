import { createSlice } from '@reduxjs/toolkit';
import { miniprojectObj } from '../../constants/portfolio';

const initialState = {
    miniProject: miniprojectObj,
}

export const miniProjectSlice = createSlice({
    name: 'miniProject',
    initialState,
    reducers: {

    }
})

export const selectMiniProjects = (state) => state.miniProject.miniProject;
export default miniProjectSlice.reducer;