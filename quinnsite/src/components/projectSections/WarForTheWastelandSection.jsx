import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const WarForTheWastelandSection = () => {
    return (
        <Box className="project" sx={{ marginBottom: '3rem' }}>
            <Typography variant="h3" component="h3" sx={{ marginBottom: '0.5rem' }}>
                Project: War for the Wasteland Tabletop Game
            </Typography>

            <Typography variant="body1" component="p" sx={{ marginBottom: '1rem' }}>
                <strong>War for the Wasteland</strong> A post-apolyptic strategic deckbuilder that doesn't take forever to play.

                I'm a boardgame enthusiast, and my favorite types of games tend to be strategy heavy. This however creates a 
                a small problem. The games I like tend to max out at 4 players, run ~3 hours long and I have a large group of friends who love to 
                play games together. As such normally I end up playing games that are less strategic and more social. Strategy games
                naturally tend to demand some mental processing time, and as such tends to scale in time with number of players
                so, to borrow from long running processes in programming, why not make it asynchronous?
                <br /><br />

                Hidden bidding is my solution to this. The nice thing about hidden bidding is that it allows players to make decisions
                without needing to wait for other players to finish their turn. This allows for a game that can be played with 2-8 players 
                in a reasonable time frame. By having hidden values for bids it also allows for bluffing and deception, which adds to the 
                fun of the game and ties in thematically to real world issues like fog of war and information asymmetry.

                <br /><br />
                With simultaneous bidding, strategic base-building, and a no-player-elimination format, the game rewards planning,
                bluffing, and adaptability across large player counts—all while delivering satisfying battles and emergent strategy.
            </Typography>

            <Typography variant="body1" component="p" sx={{ marginBottom: '0.5rem' }}>
                If you want to learn more or see the visual design and rulebook:
            </Typography>

            <Link
                href="/#/war-for-the-wasteland"
                rel="noopener"
                sx={{
                    display: 'block',
                    overflowX: 'hidden',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                }}
            >
                War For The Wasteland Project Page
            </Link>
        </Box>
    );
};

export default WarForTheWastelandSection;
