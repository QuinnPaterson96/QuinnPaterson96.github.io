import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import './Home.css';
import '../styles/global.css';
import SpontaniiusSection from '../components/projectSections/SpontaniiusSection';
import ReformerSection from '../components/projectSections/ReformerSection';
import WarForTheWastelandSection from '../components/projectSections/WarForTheWastelandSection';


const Home = () => {
    return (
        <Container>
            <Header />
            <Navbar />

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
                <SpontaniiusSection />
                <ReformerSection />
                <WarForTheWastelandSection />
            </Box>

            <Box component="section" id="contact" sx={{ marginTop: '2rem' }}>
                <Typography variant="h2" component="h2" sx={{ marginBottom: '1rem' }}>
                    Contact
                </Typography>
                <Typography variant="body1" component="p">
                    Interested in working together? Reach out to me on{' '}
                    <Link
                        href="https://www.linkedin.com/in/quinn-paterson-694656123"
                        target="_blank"
                        rel="noopener"
                        sx={{margin: '0px' }} // Adjust spacing here
                    >
                        LinkedIn
                    </Link>
                    {' '}or{' '}
                    <Link
                        href="mailto:quinnpaterson1996@gmail.com"
                        sx={{margin: '0px' }}
                    >
                        email me
                    </Link>.
                </Typography>
            </Box>

            <Box component="footer" sx={{ textAlign: 'center', padding: '1rem', backgroundColor: '#333', color: 'white', marginTop: '2rem' }}>
                <Typography variant="body1" component="p">
                    © 2024 Quinn
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;