import { AppBar, Toolbar, Typography } from "@mui/material";
import SmartToyTwoToneIcon from "@mui/icons-material/SmartToyTwoTone";

const Header = () => {
    return (<AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
            <Typography variant="h4">Lazarillo Admin </Typography>
            <SmartToyTwoToneIcon />
        </Toolbar>
    </AppBar>);
}

export default Header;
