import { createSlice } from "@reduxjs/toolkit";
import {miniprojectObj} from '../../constants/portfolio';

const initialState = {
    miniProjects: miniprojectObj,
}

export const miniProjectSlice = createSlice({
    name: 'miniProjects',
    initialState,
    reducers: {

    }
})



export const selectMiniProject = (state) => state.miniProjects.miniProjects;
export default miniProjectSlice.reducer;