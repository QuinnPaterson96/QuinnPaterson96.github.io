// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText, CssBaseline,
  Divider, Menu, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [projectsAnchorEl, setProjectsAnchorEl] = useState(null);
  const [blogAnchorEl, setBlogAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      const elementId = path.split('#')[1];
      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          element.classList.add('highlight');
          setTimeout(() => element.classList.remove('highlight'), 5000);
        }
      }
    }, 0);
  };

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: 2 }}>
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <Button color="inherit" component={Link} to="/#about" onClick={() => handleNavigation('/#about')}>
              About Me
            </Button>
            <Button color="inherit" component={Link} to="/resume">Resume</Button>

            {/* Blog Dropdown */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button color="inherit" onClick={(e) => setBlogAnchorEl(e.currentTarget)}>Blog</Button>
              <Menu
                anchorEl={blogAnchorEl}
                open={Boolean(blogAnchorEl)}
                onClose={() => setBlogAnchorEl(null)}
              >
                <MenuItem component={Link} to="/blog/reviving-app" onClick={() => setBlogAnchorEl(null)}>
                  Reviving A 5 Year Old Android App
                </MenuItem>
                <MenuItem component={Link} to="/blog/chatgpt-boardgame" onClick={() => setBlogAnchorEl(null)}>
                    Using ChatGPT for Boardgame Design
                </MenuItem>
              </Menu>

              {/* Projects Dropdown */}
              <Button color="inherit" onClick={(e) => setProjectsAnchorEl(e.currentTarget)}>Projects</Button>
              <Menu
                anchorEl={projectsAnchorEl}
                open={Boolean(projectsAnchorEl)}
                onClose={() => setProjectsAnchorEl(null)}
              >
                <MenuItem component={Link} to="/#projects" onClick={() => setProjectsAnchorEl(null)}>
                  Project Overview
                </MenuItem>
                <MenuItem component={Link} to="/reformer" onClick={() => setProjectsAnchorEl(null)}>
                  Reformer
                </MenuItem>
                <MenuItem component={Link} to="/war-for-the-wasteland" onClick={() => setProjectsAnchorEl(null)}>
                  War for the Wasteland
                </MenuItem>
              </Menu>

              <Button color="inherit" component={Link} to="/#contact" onClick={() => handleNavigation('/#contact')}>
                Contact
              </Button>
            </Box>
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', right: 16 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, pt: 2 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/#projects" onClick={() => handleNavigation('/#projects')}>
                <ListItemText primary="Projects Overview" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/reformer">
                <ListItemText primary="Reformer" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/war-for-the-wasteland">
                <ListItemText primary="War for the Wasteland" />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 2 }} />

            <ListItem disablePadding>
              <ListItemButton component={Link} to="/blog/reviving-app">
                <ListItemText primary="Blog: Reviving A 5 Year Old Android App" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/blog/chatgpt-boardgame">
                <ListItemText primary="Blog: Using ChatGPT in boardgame-design" />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 2 }} />

            <ListItem disablePadding>
              <ListItemButton component={Link} to="/resume">
                <ListItemText primary="Resume" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/#contact" onClick={() => handleNavigation('/#contact')}>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 2 }} />

            <ListItem disablePadding>
              <ListItemButton component="a" href="https://www.linkedin.com/in/quinn-paterson-694656123" target="_blank">
                <LinkedInIcon sx={{ mr: 1 }} />
                <ListItemText primary="LinkedIn" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="mailto:quinnpaterson1996@gmail.com">
                <EmailIcon sx={{ mr: 1 }} />
                <ListItemText primary="Email" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="https://github.com/QuinnPaterson96" target="_blank">
                <GitHubIcon sx={{ mr: 1 }} />
                <ListItemText primary="GitHub" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
