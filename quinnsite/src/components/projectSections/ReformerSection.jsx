import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const ReformerSection = () => {
    return (
        <Box className="project" sx={{ marginBottom: '3rem' }}>
            <Typography variant="h3" component="h3" sx={{ marginBottom: '0.5rem' }}>
                Project: Reformer Tabletop Game
            </Typography>
            <Typography variant="body1" component="p" sx={{ marginBottom: '1rem' }}>
                <strong>Reformer</strong> is my spin on the social deduction genre. It uses deckbuilding, role asymmetry, and
                institutional dynamics to simulate the real-world challenge of pushing through political reform. The game explores
                the balance of cooperation and competition within a fragile coalition — giving each player a role in a fictional
                government facing internal ideological conflict.
                <br /><br />
                Players secretly align with competing reform agendas (e.g., capitalist vs. communist) while playing as ministers
                or the president, manipulating power and policy to achieve their goals. Reformer supports 5 players and is being
                expanded to support a 4–6 player experience. The game was also a great opportunity for me to use HTML to design
                and iterate on the cards quickly for physical playtesting.
            </Typography>

            <Typography variant="body1" component="p" sx={{ marginBottom: '0.5rem' }}>
                If you want to learn more or see the visual design and rulebook:
            </Typography>

            <Link
                href="/#/Reformer"
                rel="noopener"
                sx={{
                    display: 'block',
                    overflowX: 'hidden',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                }}
            >
                Reformer Project Page
            </Link>

            <Typography variant="body1" component="p" sx={{ marginTop: '1rem' }}>
                I also wrote about my experience using ChatGPT to co-design the game:
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
                How I Used ChatGPT to Help Me Design a Board Game
            </Link>
        </Box>
    );
};

export default ReformerSection;