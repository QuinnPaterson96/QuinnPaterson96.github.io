import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Resume = () => {
    return (
        <div id="root">
            <Header/>
            <Navbar />

            <iframe src="assets/QuinnPatersonResume.pdf" width="100%" height="800px">
                <p>Your browser does not support PDFs. <a href="assets/QuinnPatersonResume2.pdf" download>Download the resume here.</a></p>
            </iframe>
        </div>
    );
};

export default Resume;