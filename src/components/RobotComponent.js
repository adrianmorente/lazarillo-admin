import React, { useState, useEffect } from 'react';
import { Button, Paper, Typography } from "@mui/material";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { SignalWifi3Bar, SignalWifiOff } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

const RobotComponent = ({ item }) => {

    const handleClick = () => {
        sendMessage("to remove robot");
    };

    const socketUrl = item.address;
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    const { connectionIcon, setConnectionIcon } = useState();

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    useEffect(() => {
        if (lastMessage !== null) {
            console.log("last message: ", lastMessage.data);
        }

        if (connectionStatus === ReadyState.OPEN) {
            setConnectionIcon(<SignalWifi3Bar color="success" />);
        }
        else {
            setConnectionIcon(<SignalWifiOff color="secondary" />);
        }
    }, [lastMessage, connectionStatus, setConnectionIcon]);


    return (
        item ?
            <Paper elevation="12" sx={{ m: 1 }}>
                <Typography variant="subtitle1" >
                    {item.name}
                </Typography>

                <Typography variant="body2" >
                    {item.version}
                </Typography>

                {connectionIcon}

                <Button onClick={handleClick}>
                    <DeleteIcon />
                </Button>
            </Paper>
            : <></>
    );
}

export default RobotComponent;
