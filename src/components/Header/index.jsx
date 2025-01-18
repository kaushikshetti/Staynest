import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import logo from "../../assets/logo/logo1.png";
import { Link } from 'react-router-dom';

const navItems = ['Home', 'About', 'Contact'];

function CustomAppBar({ handleDrawerToggle }) {
  return (
    <AppBar component="nav">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" style={{ height: '40px' }} />
        </Box>

        {/* Navigation items for desktop */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }}>
              <Link to="/home" style={{ color: '#fff', textDecoration: 'none' }}>{item}</Link>
            </Button>
          ))}
        </Box>

        {/* Hamburger Icon for mobile on the right */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

CustomAppBar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default CustomAppBar;
