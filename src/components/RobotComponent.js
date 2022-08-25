import React, { useState, useEffect } from 'react';
import { Button, Paper, Typography } from "@mui/material";
import useWebSocket, { ReadyState } from "react-use-websocket";

const RobotComponent = ({ item }) => {

    const handleClick = () => {
        console.log("clicado robot " + item.name);
    };

    const socketUrl = item.url;
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    useEffect(() => {
        if (lastMessage !== null) {
            console.log("last message: ", lastMessage.data);
        }
    }, [lastMessage]);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    return (
        item ?
            <Paper elevation="12" sx={{ m: 1 }}>
                <Typography variant="h5" >
                    {item.name} - {item.version}
                </Typography>

                <Typography variant="h6" >
                    {connectionStatus}
                </Typography>

                <Button onClick={handleClick}>
                    Prueba
                </Button>
            </Paper>
            : <></>
    );
}

export default RobotComponent;
