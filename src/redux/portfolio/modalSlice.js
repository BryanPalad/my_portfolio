import { createSlice } from "@reduxjs/toolkit";
import {modalObj} from '../../constants/portfolio';

const initialState = {
    projectModal: modalObj,
}

export const projectModal = createSlice({
    name: 'projectModal',
    initialState,
    reducers: {

    }
})



export const selectProjectModal = (state) => state.projectModal.projectModal;
export default projectModal.reducer;