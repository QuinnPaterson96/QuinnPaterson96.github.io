// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use this if using React Router for navigation
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
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



    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={Link} to="/#about" onClick={() => handleNavigation('/#about')}>About Me</Button>
                    <Button color="inherit" component={Link} to="/#projects" onClick={() => handleNavigation('/#projects')}>Projects</Button>
                    <Button color="inherit" component={Link} to="/#contact" onClick={() => handleNavigation('/#contact')}>Contact</Button>
                    <Button color="inherit" component={Link} to="/resume">Resume</Button>
                    <Button color="inherit" component={Link} to="/blog">Blog</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;