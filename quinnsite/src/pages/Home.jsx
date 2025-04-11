import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import './Home.css';
import '../styles/global.css';
import SpontaniiusSection from '../components/projectSections/SpontaniiusSection';
import ReformerSection from '../components/projectSections/ReformerSection';
import WarForTheWastelandSection from '../components/projectSections/WarForTheWastelandSection';

const Home = () => {
    const isMobile = useMediaQuery('(max-width:900px)');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>    
            <Box
                sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1200,
                backgroundColor: 'white'
                }}>
                <Header /> 
                <Navbar />
            </Box>
  
            <Box sx={{ flex: 1, maxWidth: '1200px', margin: '0 auto', paddingTop: { xs: '220px', md: '220px' }  }}>
                <Container>
              

                    <Box component="section" id="about" sx={{ marginTop: '2rem' }}>
                        <Typography variant="h2" component="h2" sx={{ marginBottom: '1rem' }}>
                            About Me
                        </Typography>
                        <Typography variant="body1" component="p">
                            Hi, I'm Quinn! I'm a software developer passionate about solving real-world problems
                            in areas like medical technology, construction, finance, logistics, and beyond.
                            I bring extensive experience in test automation and embedded development,
                            with additional hands-on knowledge in AI, web development, and app development.
                            I'm eager to tackle your toughest challenges and contribute to meaningful solutions.

                            Currently open to opportunities that allow me to apply my skills and grow
                            in exciting new directions.
                        </Typography>
                    </Box>

                    <Box component="section" id="projects" sx={{ marginTop: '2rem' }}>
                        <Typography variant="h2" component="h2" sx={{ marginBottom: '1rem' }}>
                            Projects
                        </Typography>

                        <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h5">Spontaniius</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SpontaniiusSection />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h5">Reformer Tabletop Game</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ReformerSection />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h5">War for the Wasteland Tabletop Game</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <WarForTheWastelandSection />
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box component="section" id="contact" sx={{ marginTop: '4rem', borderTop: '1px solid #ddd', paddingTop: '2rem' }}>
                        <Typography variant="h2" component="h2" sx={{ marginBottom: '1rem' }}>
                            Let's Connect
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '1.5rem' }}>
                            Whether it's to collaborate on a project, discuss new opportunities, or just chat tech — I'm always open to connecting.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            <Box sx={{ textAlign: 'center' }}>
                                <IconButton href="https://www.linkedin.com/in/quinn-paterson-694656123" target="_blank">
                                    <LinkedInIcon fontSize="large" />
                                </IconButton>
                                <Typography variant="body2">LinkedIn</Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <IconButton href="mailto:quinnpaterson1996@gmail.com">
                                    <EmailIcon fontSize="large" />
                                </IconButton>
                                <Typography variant="body2">Email</Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <IconButton href="https://github.com/QuinnPaterson96" target="_blank">
                                    <GitHubIcon fontSize="large" />
                                </IconButton>
                                <Typography variant="body2">GitHub</Typography>
                            </Box>
                        </Box>
                        <Typography variant="caption" display="block" align="center" sx={{ fontStyle: 'italic', color: 'gray' }}>
                            "Always building, always learning."
                        </Typography>
                    </Box>

                    <Box component="footer" sx={{ textAlign: 'center', padding: '1rem', backgroundColor: '#333', color: 'white', marginTop: '2rem' }}>
                        <Typography variant="body1" component="p">
                            © 2024 Quinn
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Sidebar Contact Panel (only visible on desktop) */}
            {!isMobile && (
                <Box sx={{ width: '250px', padding: '2rem', position: 'sticky', paddingTop: { xs: '180px', md: '220px' }, height: '100vh' }}>
                    <Typography variant="h6" sx={{ marginBottom: '1rem' }}>Contact</Typography>
                    <Link href="https://www.linkedin.com/in/quinn-paterson-694656123" target="_blank" rel="noopener">
                        <IconButton><LinkedInIcon /></IconButton>
                    </Link>
                    <Link href="mailto:quinnpaterson1996@gmail.com">
                        <IconButton><EmailIcon /></IconButton>
                    </Link>
                    <Link href="https://github.com/QuinnPaterson96" target="_blank" rel="noopener">
                        <IconButton><GitHubIcon /></IconButton>
                    </Link>
                    <Link component={RouterLink} to="/resume">
                        <Typography variant="body2" sx={{ marginTop: '1rem', display: 'block' }}>View Resume</Typography>
                    </Link>
                </Box>
            )}
        </Box>
    );
};

export default Home;
