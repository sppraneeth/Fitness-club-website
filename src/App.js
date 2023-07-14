import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CenterFocusStrong } from '@mui/icons-material';

const App = () => (
  
  <Box width="400px" sx={{ width: { xl: '1488px' }, backgroundImage: '../assets/images/banner.png', backgroundRepeat: 'no-repeat', height: 400 }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
