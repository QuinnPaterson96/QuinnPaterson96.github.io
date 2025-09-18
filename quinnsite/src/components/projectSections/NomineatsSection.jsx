import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const NomineatsSection = () => {
    return (
        <Box className="project" sx={{ marginBottom: '3rem' }}>
            <Typography variant="h3" component="h3" sx={{ marginBottom: '0.5rem' }}>
                Project: Nomineats
            </Typography>

            <Typography variant="body1" component="p" sx={{ marginBottom: '1rem' }}>
                <strong>Nomineats</strong> is a restaurant review platform that flips the typical 5-star rating model on its head.
                Instead of scoring every meal, users can only nominate their <strong>top three restaurants per city</strong>.
                This simple twist cuts through noise and highlights authentic favorites.
                <br /><br />
                Beyond reviews, Nomineats adds creative features like <strong>postcard generation</strong>, letting users share their
                culinary journeys in a travel-lite, microblogging style. It’s part social food diary, part recommendation engine —
                designed to surface the best of local dining while staying lightweight and fun.
            </Typography>

            {/* Thumbnail image */}
            <Box sx={{ textAlign: 'center', mb: 2 }}>
                <img
                    src="/images/nomineats/top-resturants.png"
                    alt="Nomineats Homepage"
                    style={{
                        maxWidth: '300px',
                        width: '100%',
                        borderRadius: '8px',
                        boxShadow: '0px 2px 6px rgba(0,0,0,0.15)',
                    }}
                />
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    Nomineats homepage — Top Restaurants view
                </Typography>
            </Box>

            <Typography variant="body1" component="p" sx={{ marginBottom: '0.5rem' }}>
                If you’d like to see more or explore the live app:
            </Typography>

            <Link
                href="/#/Nomineats"
                rel="noopener"
                sx={{
                    display: 'block',
                    overflowX: 'hidden',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                }}
            >
                Nomineats Project Page
            </Link>
        </Box>
    );
};

export default NomineatsSection;
