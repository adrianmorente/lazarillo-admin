import { Grid } from "@mui/material";
import RobotComponent from "./RobotComponent";

// lista de prueba
const Item = { name: "lzr 1", version: "v1.0", url: "ws://localhost:8080" };
const Robots = [Item, Item, Item];
////

const Home = () => {
    return (
        <Grid container alignItems="center" padding={5}>
            {
                Robots.map((item) =>
                    <Grid item xs={6}>
                        <RobotComponent item={item}></RobotComponent>
                    </Grid>
                )
            }
        </Grid>
    );
}

export default Home;
