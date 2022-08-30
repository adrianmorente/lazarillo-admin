import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    robots: [],
    updatedRobots: false,
}

const robotsSlice = createSlice({
    name: 'robots',
    initialState,
    reducers: {
        fetchRobotsList(state, action) {
            state.robots = action.payload;
            state.updatedRobots = true;
            console.log("Robots list: ", state.robots);
        }
    }
})

export const { fetchRobotsList } = robotsSlice.actions;
export default robotsSlice.reducer;
