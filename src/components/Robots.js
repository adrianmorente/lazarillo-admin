import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import RobotComponent from "./RobotComponent";
import { useDispatch } from 'react-redux'

const Robots = () => {
    // const dispatch = useDispatch(); 

    const [answer, setAnswer] = useState([]);

    const getAnswer = async () => {
        const res = await fetch("http://localhost:5000/devices");
        const data = await res.json();
        console.log(data);
        setAnswer(data);
    };

    // const Item = {
    //     name: 'Lazarillo Hall',
    //     address: 'ws://localhost',
    //     version: '1.0'
    // };

    // const answer = [Item, Item, Item];

    // useEffect(() => {
    //     const timer = setInterval(getAnswer, 2000);
    //     return () => clearInterval(timer);
    // }, []);

    return (
        <div>{JSON.stringify(answer)}</div>
        // <Paper>
        //     <Grid container alignItems="center" padding={5}>
        //         {
        //             answer.map((item) =>
        //                 <Grid item xs={3}>
        //                     <RobotComponent item={item}></RobotComponent>
        //                 </Grid>
        //             )
        //         }
        //     </Grid>
        // </Paper>
    );
}

export default Robots;
