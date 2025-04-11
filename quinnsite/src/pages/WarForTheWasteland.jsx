import React, { useState } from 'react';
import { Box, Typography, Link, useMediaQuery, Dialog, DialogContent, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const WarForTheWasteland = () => {
    const isMobile = useMediaQuery('(max-width:900px)');
    const [openImage, setOpenImage] = useState(null);

    const handleImageClick = (src) => setOpenImage(src);
    const handleClose = () => setOpenImage(null);

    return (
        <div id="root">
            <Header />
            <Navbar />

            <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
                <img
                    src="/images/war_for_the_wasteland/active_game_example.jpg"
                    alt="Playtesting War for the Wasteland with friends"
                    style={{
                        maxWidth: '400px',
                        width: '100%',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    }}
                />
                <Typography variant="caption" display="block" sx={{ marginTop: '0.5rem' }}>
                    Playtesting War for the Wasteland with friends
                </Typography>
            </Box>

            <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <Typography variant="h3" component="h1" sx={{ marginBottom: '0.5rem' }}>
                    War for the Wasteland – Strategic Deckbuilding Mayhem
                </Typography>

                <Typography variant="subtitle1" sx={{ marginBottom: '2rem', color: 'gray' }}>
                    *Currently in early prototype — help shape its evolution by playtesting or sharing feedback!*
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'flex-start',
                        gap: '2rem',
                        marginBottom: '3rem',
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" component="p" sx={{ marginBottom: '1.5rem' }}>
                            In a desolate world where power is up for grabs, eight warlords clash to claim dominance over a fractured land.
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ marginBottom: '1.5rem' }}>
                            <strong>War for the Wasteland</strong> is a competitive deckbuilding and bidding game for 2–8 players. Use trickery, planning,
                            and strategy to acquire bases and units, and gain victory through battlefield dominance. With simultaneous bidding,
                            no player elimination, and fast-paced turns, it’s built to handle larger groups while staying engaging and strategic.
                        </Typography>
                        <Typography variant="body1" component="p">
                            The game supports strategic depth through card economy, mid-game build-up, and a compelling mix of bluffing and tactics. 
                            Players continue generating resources even after losing bases, keeping everyone in the game and encouraging comeback strategies.
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <Box onClick={() => handleImageClick('/images/war_for_the_wasteland/wasteland-unit-cards.PNG')} sx={{ cursor: 'pointer' }}>
                            <img
                                src="/images/war_for_the_wasteland/wasteland-unit-cards.PNG"
                                alt="Unit Cards"
                                style={{ width: '100%', maxWidth: '1000px', borderRadius: '8px' }}
                            />
                            <Typography variant="h6" display="block" align="center" sx={{ marginBottom: '1rem' }}>
                                Unit Cards (Click to expand)
                            </Typography>
                        </Box>

                        <Box onClick={() => handleImageClick('/images/war_for_the_wasteland/wasteland-base-cards.PNG')} sx={{ cursor: 'pointer' }}>
                            <img
                                src="/images/war_for_the_wasteland/wasteland-base-cards.PNG"
                                alt="Base Cards"
                                style={{ width: '100%', maxWidth: '1000px', borderRadius: '8px' }}
                            />
                            <Typography variant="h6" display="block" align="center" sx={{ marginBottom: '1rem' }}>
                                Base Cards (Click to expand)
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Divider sx={{ marginY: '2rem' }} />

                {/* Showcase Individual Cards */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        marginTop: '2rem',
                        marginBottom: '3rem'
                    }}
                >
                    <img src="/images/war_for_the_wasteland/unit-card-1.PNG" alt="Unit Card 1" style={{ maxWidth: '120px', borderRadius: '6px' }} />
                    <img src="/images/war_for_the_wasteland/unit-card-2.PNG" alt="Unit Card 2" style={{ maxWidth: '120px', borderRadius: '6px' }} />
                    <img src="/images/war_for_the_wasteland/unit-card-3.PNG" alt="Unit Card 3" style={{ maxWidth: '120px', borderRadius: '6px' }} />
                </Box>

                <Divider sx={{ marginY: '2rem' }} />

                {/* Game Board */}
                <Box sx={{ marginBottom: '3rem' }}>
                    <Typography variant="h5" component="h2" sx={{ marginBottom: '0.5rem' }}>
                        Player Board
                    </Typography>
                    <Typography variant="body1" component="p">
                        You can view a preview of the War for the Wasteland player board below:
                    </Typography>
                    <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
                        <Link
                            href="/images/war_for_the_wasteland/War For the Wasteland Player Board.png"
                            target="_blank"
                            rel="noopener"
                            sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}
                        >
                            View Game Board (Image)
                        </Link>
                    </Box>
                </Box>

                {/* Rulebook */}
                <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem' }}>
                    Rulebook
                </Typography>
                <Typography variant="body1" component="p">
                    You can view the current War for the Wasteland rulebook as a downloadable PDF below:
                </Typography>
                <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
                    <Link
                        href="/assets/War For The Wasteland Game.pdf"
                        target="_blank"
                        rel="noopener"
                        sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}
                    >
                        View Rulebook (PDF)
                    </Link>
                </Box>

                <Divider sx={{ marginY: '2rem' }} />

                <Box sx={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Typography variant="body1">
                        Want to try this game or share feedback?
                    </Typography>
                    <Typography variant="body2">
                        Reach out via{' '}
                        <Link href="https://www.linkedin.com/in/quinn-paterson-694656123" target="_blank" rel="noopener">
                            LinkedIn
                        </Link>{' '}
                        or{' '}
                        <Link href="mailto:quinnpaterson1996@gmail.com">
                            Email
                        </Link>
                        .
                    </Typography>
                </Box>
            </Box>

            <Dialog open={Boolean(openImage)} onClose={handleClose} maxWidth="xl" fullWidth>
                <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {openImage && (
                        <img
                            src={openImage}
                            alt="Expanded view"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '1200px',
                                display: 'block',
                                margin: '0 auto'
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default WarForTheWasteland;
