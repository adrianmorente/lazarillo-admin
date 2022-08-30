import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import RobotComponent from "./RobotComponent";
import { useDispatch, useSelector } from 'react-redux'
import ViewLayer from "../ViewLayer";
import { fetchRobotsList } from "../redux/robotReducer";

const Robots = () => {
    const dispatch = useDispatch();
    const { robots, updatedRobots } = useSelector((state) => state.robots);

    if (!updatedRobots) {
        fetch("http://localhost:5000/devices").then((res) =>
            res.json()
        ).then((data) => {
            dispatch(fetchRobotsList(data.data));
        });
    }

    return (
        <ViewLayer>
            <Paper>
                <Grid container alignItems="center" padding={2}>
                    {
                        robots.map((item, index) =>
                            <Grid item key={index}>
                                <RobotComponent key={index} item={item}></RobotComponent>
                            </Grid>
                        )
                    }
                </Grid>
            </Paper>
        </ViewLayer>
    );
}

export default Robots;
