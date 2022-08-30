import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    robots: [],
    updatedRobots: false,
}

const robotsSlice = createSlice({
    name: 'robots',
    initialState,
    reducers: {
        fetchRobotsList(state, action){
            robots = [
                {name: "aadsdas" , address: "ws:/dfads", version: "091"}
            ]
            updatedRobots = true;
        }
    }
})

export const { fetchRobotsList } = robotsSlice.actions;
export default robotsSlice.reducer;