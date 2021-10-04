import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export const About = () => {
    return (
        <div>
          <Stack sx={{width:'60%', margin:'10px auto'}}>
              <Box>
                  <Typography variant='h2'>
                      About Us
                  </Typography>
                  <Typography paragraph={true}>
                      We are here to build the Future and make the future Generation Tech ready.
                      We put our all the Resources to make sure our students are always up to date.
                      So we make sure our materials are also upto date . so that everyone learns 
                      the best practice and writes cleaner codes . and Our Goal is to make sure
                      We can make A new Generation of effeciant programmars who are willing to
                      always learn and grow. 
                  </Typography>
                  <Typography variant='h4'>
                      Few Words from our instructors 
                  </Typography>
                  <Typography variant='h5'>
                      Andrei :
                  </Typography>
                  <Typography paragraph={true}>
                  Web development is not easy with the growing demands the code base are always changing
                  and updating . We always should try to learn the most updated technologies and 
                  covention but most importantly one must be detarmined or they will not 
                  succeed in this field
                  </Typography>
                  <Typography variant='h5'>
                     Mosh Hamadani :
                  </Typography>
                  <Typography paragraph={true}>
                  i have been programming for 10 years and teaching to do it for about 5 years. 
                  and i have seen people try and fail after just 6 months . but I also witnessed
                  People who didnt knew to learn one line of code got jobs in the big tech company
                  and making their future bright. So here the determination is the key . Anyone 
                  can code if they have the passion
                  </Typography>
                  <Typography variant='h5'>
                    Colt Steele :
                  </Typography>
                  <Typography paragraph={true}>
               From my Junior High School I have been just coding . then I got into college to get a 
               Computer's degree . but everyone doesnt need a degree to learn how to code. Code is the 
               only profession where your background doesnt matter if you are willing put the hard work
               and do your best. Success just becomes matter of time
                  </Typography>
                  <Typography variant='h6'>
                    Our Address:
                  </Typography>
                  <Typography paragraph={true}>
             24/b Block C , East Wing , Dhaka Bangladesh . 
            <br/> Phone : 0412354125, 031254584
                  </Typography>
              </Box>
          </Stack>
        </div>
    )
}
