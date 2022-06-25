import { createSlice } from '@reduxjs/toolkit';
import { contactinfoObj } from '../../constants/contact';

const initialState = {
    contact: contactinfoObj,
}

export const contactInfoSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {

    }
})


export const selectContactInfo = (state) => state.contact.contact;
export default contactInfoSlice.reducer;