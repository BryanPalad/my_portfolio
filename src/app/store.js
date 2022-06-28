import { configureStore } from "@reduxjs/toolkit";
import educationReducer from '../redux/about/educationSlice';
import experienceReducer from '../redux/about/experienceSlice';
import qualificationReducer from '../redux/about/qualificationsSlice';
import skillsReducer from '../redux/about/skillsSlice';
import trainingsReducer from '../redux/about/trainingsAndCertSlice';
import contactInfoReducer from '../redux/contact/contactInfoSlice';
import miniProjectReducer from '../redux/portfolio/miniProjectsSlice';
import projectModalReducer from '../redux/portfolio/modalSlice';
import servicesReducer from '../redux/services/servicesSlice';
import styleSwitchReducer from '../redux/styleswitch/styleSwitchSlice';

export const store = configureStore({
    reducer: {
        education: educationReducer,
        experience: experienceReducer,
        qualifications: qualificationReducer,
        skills: skillsReducer,
        trainings: trainingsReducer,
        contact: contactInfoReducer,
        miniProjects: miniProjectReducer,
        projectModal: projectModalReducer,
        services: servicesReducer,
        themeColors: styleSwitchReducer,
    }
})