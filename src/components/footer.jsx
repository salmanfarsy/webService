import React from 'react'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Box sx={{ width: '100%' }}>

      <BottomNavigation
      sx={{ width: '100%', backgroundColor:'black', color:'white' , display:'flex', flexDirection:'column'}}
        >
      <p>This is just a React demo page</p>
      <Box>
      <FacebookIcon/>
      <TwitterIcon/>
      <GitHubIcon/>
      </Box>
    
    
      </BottomNavigation>
    </Box>
  );
}