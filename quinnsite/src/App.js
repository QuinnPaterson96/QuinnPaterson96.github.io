import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Box className="App" sx={{ padding: 0 }}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;