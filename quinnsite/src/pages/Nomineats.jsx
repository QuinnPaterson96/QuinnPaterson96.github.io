import React, { useState } from 'react';
import {
  Box,
  Typography,
  Link,
  useMediaQuery,
  Dialog,
  DialogContent,
  IconButton,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Nomineats = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  const [openImage, setOpenImage] = useState(null);

  const handleImageClick = (src) => setOpenImage(src);
  const handleClose = () => setOpenImage(null);

  return (
    <div id="root">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <img
          src="/images/nomineats/top-resturants.png"
          alt="Nomineats Homepage – Top Restaurants"
          style={{
            maxWidth: '600px',
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
          }}
        />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Nomineats homepage — discover top restaurants through authentic Top 3 picks
        </Typography>
      </Box>

      <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Nomineats – Top 3 Restaurant Picks Per City
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Nomineats</strong> is a restaurant review platform with a twist: instead of 1–5 star ratings,
          users can only select their <strong>top three restaurants per city</strong>. This approach highlights
          authentic favorites, filters out noise, and makes recommendations more meaningful for travelers and food lovers.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          The platform includes familiar social features (adding reviews, browsing by city, cuisine filters) while also
          introducing unique elements like <strong>postcard generation</strong> that lets users share their culinary
          journey as a visual story. Nomineats bridges the gap between food blogging and lightweight travel journaling.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Think of it as <em>food microblogging</em> a simple but powerful way to showcase your most loved dining
          experiences.
        </Typography>

        {/* Screenshots */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" sx={{ mb: 2 }}>
          Screenshots
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { src: '/images/nomineats/top-resturants.png', caption: 'Top Restaurants (Homepage)' },
            { src: '/images/nomineats/your-cities.png', caption: 'Your Cities view' },
            { src: '/images/nomineats/postcards.png', caption: 'Food Journey Postcards' },
          ].map(({ src, caption }) => (
            <Box
              key={src}
              onClick={() => handleImageClick(src)}
              sx={{ cursor: 'pointer', textAlign: 'center', flex: 1 }}
            >
              <img
                src={src}
                alt={caption}
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  borderRadius: '8px',
                  boxShadow: '0px 2px 6px rgba(0,0,0,0.15)',
                }}
              />
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                {caption} (Click to expand)
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Links */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" sx={{ mb: 2 }}>
          Explore Nomineats
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Link
            href="https://www.nomineats.com"
            target="_blank"
            rel="noopener"
            underline="none"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              maxWidth: 600,
              p: 2,
              border: '1px solid #ddd',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
              },
            }}
          >
            <img
              src="/images/nomineats/top-resturants.png"
              alt="Nomineats preview"
              style={{
                width: 120,
                height: 80,
                objectFit: 'cover',
                borderRadius: '8px',
                marginRight: '1rem',
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                Nomineats
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Restaurant reviews reimagined — only your top 3 per city, with postcards to share your journey.
              </Typography>
              <Typography
                variant="caption"
                color="primary"
                sx={{ display: 'block', mt: 0.5 }}
              >
                www.nomineats.com →
              </Typography>
            </Box>
          </Link>
        </Box>

        {/* Tech Stack */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" sx={{ mb: 2 }}>
          Tech Stack & Architecture
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Nomineats is built with a modern web stack optimized for scalability and rapid iteration:
        </Typography>

        <Box component="ul" sx={{ pl: 3, mb: 3, ml: 6 }}>
          <li>
            <strong>Frontend:</strong> React (with hooks & responsive design)
          </li>
          <li>
            <strong>Hosting & Deployment:</strong> Vercel for fast global deployments
          </li>
          <li>
            <strong>Backend & Database:</strong> Supabase (Postgres + Auth) for real-time data sync and secure API handling
          </li>
          <li>
            <strong>Storage & Media:</strong> Google Cloud Platform (GCP) for image storage and delivery
          </li>
          <li>
            <strong>APIs & Integrations:</strong> Google Places API for restaurant details, Google Cloud Vision for image safety checks
          </li>
        </Box>

        <Typography variant="body1" sx={{ mb: 4 }}>
          This architecture supports a seamless experience for users adding reviews, browsing restaurants, and sharing
          their <em>Top 3</em> journeys while keeping the stack lightweight and easy to evolve.
        </Typography>
      </Box>

      {/* Dialog for expanded screenshots */}
      <Dialog open={Boolean(openImage)} onClose={handleClose} maxWidth="lg">
        <DialogContent>
          <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>
          {openImage && <img src={openImage} alt="Expanded" style={{ width: '100%', height: 'auto' }} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Nomineats;
