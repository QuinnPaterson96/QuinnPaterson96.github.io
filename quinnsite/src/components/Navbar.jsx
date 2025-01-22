// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use this if using React Router for navigation
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
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
                    setTimeout(() => {
                        element.classList.remove('highlight');
                    }, 5000); // Adjust the duration as needed
                }
            }
        }, 0);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            <CssBaseline />
            <AppBar
                position="static"
                sx={{
                    overflowX: 'hidden', // Prevent horizontal whitespace
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'center', // Center everything on desktop
                        alignItems: 'center', // Vertically align items
                        paddingX: 2, // Consistent padding
                    }}
                >
                    {/* Box for All Nav Items */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'nowrap', // Prevent wrapping
                            justifyContent: 'center', // Center all buttons
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        {/* Always Visible Links */}
                        <Button color="inherit" component={Link} to="/#about" onClick={() => handleNavigation('/#about')}>
                            About Me
                        </Button>
                        <Button color="inherit" component={Link} to="/resume">
                            Resume
                        </Button>
                        <Button color="inherit" component={Link} to="/blog">
                            Blog
                        </Button>

                        {/* Links Visible Only on Desktop */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 2,
                            }}
                        >
                            <Button color="inherit" component={Link} to="/#projects" onClick={() => handleNavigation('/#projects')}>
                                Projects
                            </Button>
                            <Button color="inherit" component={Link} to="/#contact" onClick={() => handleNavigation('/#contact')}>
                                Contact
                            </Button>
                        </Box>
                    </Box>

                    {/* Hamburger Menu for Mobile */}
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{
                            display: { xs: 'block', md: 'none' }, // Show only on mobile
                            position: 'absolute', // Position the icon correctly
                            right: 16, // Align to the right
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Hamburger Menu Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/#projects" onClick={() => handleNavigation('/#projects')}>
                                <ListItemText primary="Projects" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/#contact" onClick={() => handleNavigation('/#contact')}>
                                <ListItemText primary="Contact" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
