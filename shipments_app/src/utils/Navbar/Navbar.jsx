// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  const location = useLocation();

  const isCurrentRoute = (route) => location.pathname === route;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color={isCurrentRoute('/') ? 'primary' : 'inherit'} component={Link} to="/">
          Home
        </Button>
        <Button color={isCurrentRoute('/inbound') ? 'primary' : 'inherit'} component={Link} to="/inbound">
          Inbound
        </Button>
        <Button color={isCurrentRoute('/outbound') ? 'primary' : 'inherit'} component={Link} to="/outbound">
          Outbound
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
