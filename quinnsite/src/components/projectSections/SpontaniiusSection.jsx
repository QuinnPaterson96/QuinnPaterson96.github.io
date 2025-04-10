// src/components/SpontaniiusSection.jsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const SpontaniiusSection = () => {
    return (
        <Box className="project" sx={{ marginBottom: '3rem' }}>
            <Typography variant="h3" component="h3" sx={{ marginBottom: '0.5rem' }}>
                Project: Spontaniius
            </Typography>
            <Typography variant="body1" component="p" sx={{ marginBottom: '1rem' }}>
                Want to make new friends? Why not invite people nearby to join you for a spontaneous meetup?
                <br /><br />
                <strong>Spontaniius</strong> is an app designed to facilitate impromptu meetups, allowing users to quickly create events and broadcast them to others nearby.
                The first app that I published, Spontaniius was a great learning experience for me. I had previously put it to rest due to life
                getting busy, but I recently picked it back up and the app is now back live on the Play Store!
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: '1rem', marginLeft: '2rem' }}>
                <img
                    src="/images/SpontaniiusIcon.jpg"
                    alt="Spontaniius App Icon"
                    style={{ width: 60, height: 60, borderRadius: '12px', objectFit: 'contain', marginTop: '2px' }}
                />
                <a
                    href="https://play.google.com/store/apps/details?id=com.spontaniius&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src="/images/GooglePlayBadge.png"
                    alt="Get it on Google Play"
                    style={{ height: 60 }}
                    />
                </a>
            </Box>

            <Typography variant="body1" component="p" sx={{ marginBottom: '0.5rem' }}>
                Also, if you're interested in the learning experience come check out my blog post about it:
            </Typography>

            <Link
                href="/#/blog"
                rel="noopener"
                sx={{
                    display: 'block',
                    overflowX: 'hidden',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                }}
            >
                Technical Debt and Reviving a 4-Year-Old Application
            </Link>
        </Box>
    );
};

export default SpontaniiusSection;
