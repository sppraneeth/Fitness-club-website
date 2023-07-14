import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px" >
    {/* <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography> */}
    <Typography fontWeight={700} color={'white'} sx={{ fontSize: { lg: '38px', xs: '40px' } }} mb="23px" mt="30px">
      Build Your Body <br />
       Transform Your Life
    </Typography>
    <Typography color={'white'} fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      A Safer, Simpler way to exercise 
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    
  </Box>
);

export default HeroBanner;
