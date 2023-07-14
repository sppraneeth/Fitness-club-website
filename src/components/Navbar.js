import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      
        <Typography fontWeight={800} color={'white'} fontSize={25} ml={5} mt={2}>FITNESS CLUB</Typography>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'white', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: 'white' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
