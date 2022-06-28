import { createSlice } from "@reduxjs/toolkit";
import {themeColorsObj} from '../../constants/styleswitch';

const initialState = {
    themeColors: themeColorsObj,
}

export const styleSwitchSlice = createSlice({
    name: 'themeColors',
    initialState,
    reducers: {

    }
})



export const selectThemeColors = (state) => state.themeColors.themeColors;
export default styleSwitchSlice.reducer;