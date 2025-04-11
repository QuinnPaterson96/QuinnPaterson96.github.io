import React, { useState } from 'react';
import { Box, Modal, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/global.css';

const BlogImageGrid = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const handleNext = () => setCurrentIndex((currentIndex + 1) % images.length);
  const handlePrev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'Escape') handleClose();
  };

  return (
    <Box className="blog-image-grid-wrapper" sx={{ my: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {images.map((imgPath, index) => (
          <Grid item xs={6} key={index}>
            <img
              src={imgPath}
              alt={`blog-img-${index}`}
              onClick={() => handleOpen(index)}
              className="blog-image"
              style={{
                width: '100%',
                height: 'auto',
                cursor: 'pointer',
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose} onKeyDown={handleKeyDown}>
        <Box className="modal-content" tabIndex={0}>
          <IconButton className="close-button" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <IconButton className="nav-button left" onClick={handlePrev}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <img
            src={images[currentIndex]}
            alt={`modal-img-${currentIndex}`}
            className="modal-image"
          />
          <IconButton className="nav-button right" onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default BlogImageGrid;
