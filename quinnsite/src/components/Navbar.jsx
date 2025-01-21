// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use this if using React Router for navigation
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        setTimeout(() => {
            const elementId = path.split('#')[1];
            if (elementId) {
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    element.classList.add('highlight');
                    setTimeout(() => {
                        element.classList.remove('highlight');
                    }, 5000); // Adjust the duration as needed
                }
            }
        }, 0);
    };



    return (
        <nav>
            <ul>
                <li><Link to="/#about" onClick={() => handleNavigation('/#about')}>About Me</Link></li>
                <li><Link to="/#projects" onClick={() => handleNavigation('/#projects')}>Projects</Link></li>
                <li><Link to="/#contact" onClick={() => handleNavigation('/#contact')}>Contact</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;