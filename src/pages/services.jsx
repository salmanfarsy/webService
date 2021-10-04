import React from 'react';
import CardComponent from '../components/card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Services = ({services}) => {
    const cards = services.map((s, i)=> (  
        <Grid item xs={6}>
    <CardComponent  key={i}
        image ={s.image}
        price={s.price}
        name={s.name} 
        duration={s.duration}
        avatar={s.avatar}
        instructor={s.instructor}/>
         </Grid>))
    return (
        <div className='services'>
        <Box component="span" sx={{ width:'100%'  }}>
         <h1>Services page</h1>
        
        </Box> 
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {cards}
          </Grid>
        </Box>
         
            </div>
    )
}
