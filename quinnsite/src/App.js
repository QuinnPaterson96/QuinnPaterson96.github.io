import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Reformer from './pages/Reformer';
import WarForTheWasteland from './pages/WarForTheWasteland';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/global.css';
import ScrollToTop from './components/ScrollToTop';
import RevivingApp from './pages/blog/RevivingApp';
import ChatGPTBoardGame from './pages/blog/ChatGPTBoardgame';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Box className="App" sx={{ padding: 0 }}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/reviving-app" element={<RevivingApp />} />
          <Route path="/blog/chatgpt-boardgame" element={<ChatGPTBoardGame />} />
          <Route path="/reformer" element={<Reformer />} />
          <Route path="/war-for-the-wasteland" element={<WarForTheWasteland/>} />


        </Routes>
      </Box>
    </Router>
  );
}

export default App;