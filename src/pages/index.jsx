import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchBar from '../components/SearchBar';
import Visits from '../components/Visits';
import Room from '../components/Room';
import RentalCard from '../components/Rental/RentalCard';
import FavoritesList from '../components/Rental/FavoritesList';
import logo from '../assets/logo/logo.png';
import CustomAppBar from "../components/Header"
import Footer from "../components/Footer"

const drawerWidth = 240;

function Main(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Use CustomAppBar here */}
      <CustomAppBar handleDrawerToggle={handleDrawerToggle} />
      
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
  
        </Drawer>
      </nav>

      <Box sx={{ p: 3 }}>
        <Toolbar />
        <SearchBar />
        <Visits />
        <Room />
        <Footer />
      </Box>
    </Box>
  );
}

Main.propTypes = {
  window: PropTypes.func,
};

export default Main;
