import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Box, Typography } from '@mui/material';

const BlogLayout = ({ title, children }) => (
  <div id="root">
    <Header />
    <Navbar />
    <Box sx={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h3" sx={{ marginBottom: '2rem' }}>
        {title}
      </Typography>
      {children}
    </Box>
  </div>
);

export default BlogLayout;
