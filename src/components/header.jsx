import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            News
          </Typography>
            <Button><NavLink exact activeClassName='active' to='/'>Home</NavLink></Button>
            <Button><NavLink activeClassName='active' to='/services'>Services</NavLink></Button>
            <Button> <NavLink activeClassName='active' to='/about'>About</NavLink></Button>
            <Button><NavLink activeClassName='active' to='/contact'>Contact</NavLink></Button>
            
           
            
        </Toolbar>
      </AppBar>
    </Box>
  );
}




