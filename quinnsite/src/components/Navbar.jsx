import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
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

  const handleProjectsMenu = (event) => setAnchorEl(event.currentTarget);
  const handleProjectsClose = () => setAnchorEl(null);

  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ overflowX: 'hidden' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingX: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Button color="inherit" component={Link} to="/#about" onClick={() => handleNavigation('/#about')}>
              About Me
            </Button>
            <Button color="inherit" component={Link} to="/resume">
              Resume
            </Button>
            <Button color="inherit" component={Link} to="/blog">
              Blog
            </Button>

            {/* Desktop-only Project dropdown */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button color="inherit" onClick={handleProjectsMenu}>
                Projects
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProjectsClose}
              >
                <MenuItem onClick={handleProjectsClose} component={Link} to="/#projects">
                  Project Overview
                </MenuItem>
                <MenuItem onClick={handleProjectsClose} component={Link} to="/reformer">
                  Reformer
                </MenuItem>
                <MenuItem onClick={handleProjectsClose} component={Link} to="/war-for-the-wasteland">
                  War for the Wasteland
                </MenuItem>
              </Menu>

              <Button color="inherit" component={Link} to="/#contact" onClick={() => handleNavigation('/#contact')}>
                Contact
              </Button>
            </Box>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'absolute',
              right: 16,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, paddingTop: 2 }} role="presentation" onClick={toggleDrawer(false)}>
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
          </List>

          <Divider sx={{ marginY: 2 }} />

          <List subheader={<Typography variant="subtitle2" sx={{ pl: 2 }}>Connect With Me</Typography>}>
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
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/resume">
                <ListItemText primary="View Resume" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
