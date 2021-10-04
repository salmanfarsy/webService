import React from 'react';
import CardComponent from '../components/card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';



export const Homepage = ({services}) => {
    console.log(services)
    const cards = services.filter((s, i)=> i<4).map((s, i)=> (  
        <Grid item xs={6}>
    <CardComponent  key={i}
        image ={s.image}
        price={s.price}
        name={s.name} 
        duration={null}
        avatar={null}
        instructor={null}
        />
         </Grid>));
         const instructors = services.filter((s, i)=> i<3).map((s, i)=> (
             <Box key={i} sx={{ display:'flex', justifyContent:'center'  }}>
                <Typography variant="h6">
                name: {s.instructor}
                </Typography>
                <Avatar alt={s.instructor} src={s.avatar} />
             </Box>
         ))
    return (
        <div className='homepage'>
    <Box component="span" sx={{ width:'100%'  }}>
     <h1>Welcome To our page</h1>
     <p>This page is to prepare future for the Technological Revolution</p>
    </Box>
    <div className="instructors">
        <h2>Our Instructors</h2>
    <Stack direction="row" spacing={4} sx={{ width:'100%' , margin: 1 , justifyContent:'center' }}>
        {instructors}
    </Stack>
    </div>
  
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {cards}
      </Grid>
    </Box>
     
        </div>
    )
}
