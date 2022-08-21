import { Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
const WebSocketServer = require("ws");

function heartbeat() {
    this.isAlive = true;
}

export default function HomePage() {

    // const [data, setData] = useState(exampleData);
    // const wss = CreateWebsocketServer(setData);

    // return (
    //     <Grid container>
    //         {Object.keys(data).map((key) => {
    //             const item = data[key];
    //             return <Grid item>
    //                 <Paper elevation={12}>
    //                     <Typography variant="h5">
    //                         {key}: {item.name}, {item.version}
    //                     </Typography>
    //                 </Paper>
    //             </Grid>
    //         }
    //         )
    //         }
    //     </Grid>
    // );

    return (<h1>Lazarillo</h1>)
}
