// src/pages/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Container } from '@mui/material';

const Blog = () => {
  return (
    <div id="root">
      <Header />
      <Navbar />
      <Container>
        <Box sx={{ paddingY: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          <Typography variant="h2" sx={{ marginBottom: '2rem' }}>
            Blog
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/blog/reviving-app">
                <ListItemText primary="Technical Debt and Reviving a 4-Year-Old Application" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/blog/chatgpt-boardgame">
                <ListItemText primary="How I Used ChatGPT to Help Me Design a Board Game" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Container>
    </div>
  );
};

export default Blog;
