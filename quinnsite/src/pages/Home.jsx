import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Home = () => {
    return (
        <div id="root">
            <Header/>
            <Navbar />

            <section id="about">
                <h2>About Me</h2>
                <p>Hi, I'm Quinn! I'm a passionate software developer with extensive experience in test automation and embedded development, 
                    as well as some hands-on experience in AI, web development, app development, and more. 
                    I'm currently open to opportunities that allow me to apply my skills, as well as those that encourage me to grow in new areas.</p>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <div className="project">
                    <h3>Project: Spontaniius</h3>
                    <p>Spontaniius is an app designed to facilitate impromptu meetups, allowing users to quickly create events and broadcast them to others nearby. 
                        This was my first attempt at building a complete application with entrepreneurial potential. 
                        After testing with a few users, I found that scaling it would be challenging, especially with my move to a new city. 
                        Ultimately, I decided to retire the project, but it was a valuable learning experience.</p>
                    <a href="https://github.com/QuinnPaterson96/Spontaniius">Spontaniius Repo</a>
                </div>

                <div className="project">
                    <h3>Project: Reformer tabletop game</h3>
                    <p>
                        While working on a tabletop game recently I thought it might be nice to use HTML to try and 
                        demo out some looks for the playing cards of the game. I'd used Excel for designing the cards, and had the realizaiton 
                        that HTML and Javascript could be used to quickly get an idea of what they would look like, in addition to providing me somthing to
                        print (and that could also therefore be used to easily iterate on cards as I got more feeback)
                        
                        An example of what this looks like
                    </p>
                    <a href="projects/card_generator/cabinetcardgenerator.html">Reformer Cabinet Cards</a>
                    <a href="projects/card_generator/presidentcardgenerator.html">Reformer President Cards</a>
                    <p>
                        Also, for developing this boardgame I worked with ChatGPT, if you're curious about the experience you can read more at my blog section
                    </p>
                    <a href="blog.html#boardgame"> How I Used ChatGPT to Help Me Design a Board Game</a>
                </div>
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <p>Interested in working together? Reach out to me on <a href="https://www.linkedin.com/in/quinn-paterson-694656123">LinkedIn</a> or <a href="mailto:quinnpaterson1996@gmail.com">email me</a>.</p>
            </section>

            <footer>
                <p>© 2024 Quinn</p>
            </footer>
        </div>
    );
};

export default Home;