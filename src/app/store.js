import { configureStore } from "@reduxjs/toolkit";
import educationReducer from '../redux/aboutMe/educationSlice';
import experienceReducer from '../redux/aboutMe/experienceSlice';
import trainingReducer from '../redux/aboutMe/trainingsSlice';
import skillsReducer from '../redux/aboutMe/skillsSlice';
import miniProjectReducer from '../redux/portfolio/miniProjectSlice';
import modalProjectReducer from '../redux/portfolio/modalSlice';
import contactInfoReducer from '../redux/contact/contactSlice';

export const store = configureStore({
    reducer: {
       education: educationReducer,
       experience: experienceReducer,
       training: trainingReducer,
       skills: skillsReducer,
       miniProject: miniProjectReducer,
       project: modalProjectReducer,
       contact: contactInfoReducer,
    }
})

