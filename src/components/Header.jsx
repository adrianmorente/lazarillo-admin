import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Link, IconButton, Divider } from "@mui/material";
import { ChevronLeft, SmartToyTwoTone, Menu } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Drawer = ({ open, toggleDrawer }) => {

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1]
        }}
      >
        <Link
          style={{ padding: 10 }}
          underline="none"
          variant="button"
          color="textPrimary"
          component={NavLink}
          to="/about" >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeft />
          </IconButton>
        </Link>
      </Toolbar>
      <Divider />
    </Drawer>
  );
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((old) => !old)
  }

  return (
    <AppBar position="absolute" color="primary" enableColorOnDark open={open}>
      <Toolbar sx={{ pr: '24px' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <Menu />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Lazarillo Admin
        </Typography>
      </Toolbar>
      {/* <Drawer open={open} toggleDrawer={toggleDrawer} /> */}
    </AppBar>
  );
}

export default Header;
