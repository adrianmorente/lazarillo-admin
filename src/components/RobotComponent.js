import React, { useState, useEffect } from 'react';
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { SignalWifi3Bar, SignalWifiOff } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

const RobotComponent = ({ item }) => {

    const handleClick = () => {
        sendMessage("to remove robot");
    };

    const socketUrl = item.address;
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    const [connectionIcon, setConnectionIcon] = useState();

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

        if (readyState === ReadyState.OPEN) {
            setConnectionIcon(<SignalWifi3Bar color="success" />);
        }
        else {
            setConnectionIcon(<SignalWifiOff color="secondary" />);
        }
    }, [lastMessage, connectionStatus, setConnectionIcon]);


    return (
        item ?
            <Paper elevation={8} sx={{ m: 1, p: 2, width: 250 }}>
                <Grid container>
                    <Grid item xs={10}>
                        <Typography variant="h6" >
                            {item.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton disabled>
                            {connectionIcon}
                        </IconButton>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="subtitle1" >
                            {item.version}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton onClick={handleClick}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
            : <></>
    );
}

export default RobotComponent;
