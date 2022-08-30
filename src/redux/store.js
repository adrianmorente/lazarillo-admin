import { configureStore } from "@reduxjs/toolkit";
import robotReducer from "./robotReducer";

export const store = configureStore({
    reducer: {
        robots: robotReducer,  
    }
})
