import React, { useState } from 'react';
import { Box, Typography, Link, useMediaQuery, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Reformer = () => {
    const isMobile = useMediaQuery('(max-width:900px)');
    const [openImage, setOpenImage] = useState(null);

    const handleImageClick = (src) => setOpenImage(src);
    const handleClose = () => setOpenImage(null);

    return (
        <div id="root">
            <Header />
            <Navbar />

            <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <Typography variant="h3" component="h1" sx={{ marginBottom: '1.5rem' }}>
                    Reformer – A Tabletop Game of Ideological Power Struggles
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
                            <strong>Reformer</strong> is a social deduction game set within the fractured cabinet of a government on the brink of transformation. 
                            Players secretly align with competing ideologies—capitalist or communist—while occupying roles such as the President or Ministers 
                            of Police, Economy, Civil Service, or the Military.
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ marginBottom: '1.5rem' }}>
                            Through intense voting rounds and strategic card play, players must balance cooperation and deception to push reforms, manage 
                            instability, and navigate shifting institutional power.
                        </Typography>
                        <Typography variant="body1" component="p">
                            <strong>Reformer</strong> offers a deep political simulation with emergent narrative, hidden roles, and asymmetric power dynamics. 
                            Every decision can reshape the government—or lead to its collapse.
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <Box onClick={() => handleImageClick('/images/reformer_cards/CabinetCards.png')} sx={{ cursor: 'pointer' }}>
                            <img
                                src="/images/reformer_cards/CabinetCards.png"
                                alt="Cabinet Cards"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                            <Typography variant="caption" display="block" align="center" sx={{ marginBottom: '1rem' }}>
                                Cabinet Cards (Click to expand)
                            </Typography>
                        </Box>

                        <Box onClick={() => handleImageClick('/images/reformer_cards/PresidentCards.png')} sx={{ cursor: 'pointer' }}>
                            <img
                                src="/images/reformer_cards/PresidentCards.png"
                                alt="President Cards"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                            <Typography variant="caption" display="block" align="center" sx={{ marginBottom: '1rem' }}>
                                President Cards (Click to expand)
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Showcase Individual Cards */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        marginTop: '3rem',
                        marginBottom: '3rem'
                    }}
                >
                    <img src="/images/reformer_cards/CardVictoryExample1.PNG" alt="Victory Card 1" style={{ maxWidth: '200px', borderRadius: '6px' }} />
                    <img src="/images/reformer_cards/CardVictoryExample2.PNG" alt="Victory Card 2" style={{ maxWidth: '200px', borderRadius: '6px' }} />
                    <img src="/images/reformer_cards/CardInstitutionExample.PNG" alt="Institution Card" style={{ maxWidth: '200px', borderRadius: '6px' }} />
                </Box>

                {/* Game Board Link */}
                <Box sx={{ marginBottom: '3rem' }}>
                    <Typography variant="h5" component="h2" sx={{ marginBottom: '0.5rem' }}>
                        Game Board
                    </Typography>
                    <Typography variant="body1" component="p">
                        You can view a preview of the Reformer game board below:
                    </Typography>
                    <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
                        <Link
                            href="/images/refomer_game_board.jpg"
                            target="_blank"
                            rel="noopener"
                            sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}
                        >
                            View Game Board (Image)
                        </Link>
                    </Box>
                </Box>

                <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem' }}>
                    Rulebook
                </Typography>
                <Typography variant="body1" component="p">
                    You can view the current Reformer rulebook as a PDF below:
                </Typography>
                <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
                    <Link
                        href="/assets/ReformerGameRules.pdf"
                        target="_blank"
                        rel="noopener"
                        sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}
                    >
                        View Reformer Rulebook (PDF)
                    </Link>
                </Box>
            </Box>

            <Dialog open={Boolean(openImage)} onClose={handleClose} maxWidth="lg">
                <DialogContent>
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {openImage && (
                        <img src={openImage} alt="Expanded view" style={{ width: '100%', height: 'auto' }} />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Reformer;
