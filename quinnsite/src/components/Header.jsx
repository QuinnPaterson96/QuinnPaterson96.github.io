import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Header = () => {
    return (
        <Box component="header" sx={{ textAlign: 'center', padding: '1rem', backgroundColor: '#333', color: 'white' }}>
            <Typography variant="h1" component="h1" sx={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                The QuinnSite
            </Typography>
            <Typography variant="h6" component="p">
                Software Developer | Problem Solver | Avid Nerd
            </Typography>
        </Box>
    );
};

export default Header;