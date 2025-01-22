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
                <Box className="project" sx={{ marginBottom: '1.5rem' }}>
                    <Typography variant="h3" component="h3" sx={{ marginBottom: '0.5rem' }}>
                        Project: Spontaniius
                    </Typography>
                    <Typography variant="body1" component="p">
                        Spontaniius is an app designed to facilitate impromptu meetups, allowing users to quickly create events and broadcast them to others nearby. 
                        This was my first attempt at building a complete application with entrepreneurial potential. 
                        After testing with a few users, I found that scaling it would be challenging, especially with my move to a new city. 
                        Ultimately, I decided to retire the project, but it was a valuable learning experience.
                    </Typography>
                    <Link href="https://github.com/QuinnPaterson96/Spontaniius" target="_blank" rel="noopener">
                        Spontaniius Repo
                    </Link>
                </Box>
                <Box className="project" sx={{ marginBottom: '1.5rem' }}>
                    <Typography variant="h3" component="h3" sx={{ marginBottom: '0.5rem' }}>
                        Project: Reformer Tabletop Game
                    </Typography>
                    <Typography variant="body1" component="p">
                        While working on a tabletop game recently, I thought it might be nice to use HTML to try and 
                        demo out some looks for the playing cards of the game. I'd used Excel for designing the cards and had the realization 
                        that HTML and JavaScript could be used to quickly get an idea of what they would look like, in addition to providing me something to
                        print (and that could also therefore be used to easily iterate on cards as I got more feedback).
                        
                        An example of what this looks like:
                    </Typography>
                    <br/>
                    <Link href="/images/reformer_cards/CabinetCards.png" rel="noopener">
                        {'>'} Cabinet Cards
                    </Link>
                    <br/>
                    <Link href="/images/reformer_cards/PresidentCards.png" rel="noopener">
                        {'>'} President Cards
                    </Link>
                    <br/>
                    <br/>
                    <Typography variant="body1" component="p">
                        Also, for developing this board game, I worked with ChatGPT. If you're curious about 
                        the experience, you can read more in my blog section.
                    </Typography>
                    <br/>
                    <Link href="/#/blog" rel="noopener" sx={{
                    display: 'block',
                    overflowX: 'hidden',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                    }}>How I Used ChatGPT to Help Me Design a Board Game</Link>
                </Box>
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