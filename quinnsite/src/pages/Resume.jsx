import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Divider,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const resumeLinks = {
  'test-automation': 'https://docs.google.com/document/d/1IGWifsYTgv4rszNUmSIAVfMBE9ve75wKcyl861TTAi0/preview',
  'full-stack': 'https://docs.google.com/document/d/1Vj-Gm3TpiJqfNAJfWSuEX4-PsHlolTN5Rw5vYpFj57w/preview',
  'mobile': 'https://docs.google.com/document/d/1F3Dlxok3Zd-o9fhdlIijd7jRKar7e_nFR2acch6TpOc/preview',
  'embedded': 'https://docs.google.com/document/d/171l_m-rAhZnocEVafyYIRkHWiOZb93sP_mzG2pP6yng/preview',
  'analyst': 'https://docs.google.com/document/d/10KzSEgo3NKxAPic00MRLs1iUOpWDvCzJ-N_e799LiYQ/preview',
};

const primaryResumes = [
  { label: 'Test Automation', value: 'test-automation' },
  { label: 'Full Stack', value: 'full-stack' },
];
const secondaryResumes = [
  { label: 'Mobile Development', value: 'mobile' },
  { label: 'Embedded', value: 'embedded' },
  { label: 'Analyst', value: 'analyst' },
];

const Resume = () => {
  const [selectedResume, setSelectedResume] = useState('test-automation');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleChange = (event, newValue) => {
    if (newValue !== 'more') {
      setSelectedResume(newValue);
    }
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = (value) => {
    setAnchorEl(null);
    if (value) setSelectedResume(value);
  };

  const currentLink = resumeLinks[selectedResume];
  const downloadLink = currentLink.replace('/preview', '/export?format=pdf');
  const label =
    [...primaryResumes, ...secondaryResumes].find((o) => o.value === selectedResume)?.label;

  return (
    <div id="root">
      <Header />
      <Navbar />

      <Box sx={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column', mt: 2 }}>
        {/* Tabs Section */}
        <Box
          sx={{
            minWidth: isDesktop ? 220 : '100%',
            borderRight: isDesktop ? 1 : 0,
            borderBottom: isDesktop ? 0 : 1,
            borderColor: 'divider',
          }}
        >
          <Typography variant="subtitle1" align="center" gutterBottom sx={{ mt: 1 }}>
            Tailor the resume:
          </Typography>
          <Tabs
            orientation={isDesktop ? 'vertical' : 'horizontal'}
            value={
              primaryResumes.find((r) => r.value === selectedResume)
                ? selectedResume
                : 'more'
            }
            onChange={handleChange}
            variant="fullWidth"
            centered={!isDesktop}
          >
            {primaryResumes.map((option) => (
              <Tab key={option.value} label={option.label} value={option.value} />
            ))}
            <Tab
              icon={<MoreVertIcon />}
              value="more"
              onClick={handleMenuOpen}
              aria-controls={menuOpen ? 'resume-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? 'true' : undefined}
            />
          </Tabs>
          <Menu
            id="resume-menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={() => handleMenuClose(null)}
          >
            {secondaryResumes.map((option) => (
              <MenuItem
                key={option.value}
                onClick={() => handleMenuClose(option.value)}
              >
                {option.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Resume Viewer */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
          {/* Header row with download button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <Tooltip title={`Download ${label} Resume`}>
              <IconButton
                component="a"
                href={downloadLink}
                download="QuinnPatersonResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadIcon />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Iframe or mobile fallback */}
          <Box sx={{ height: '800px' }}>
            {isMobile ? (
              <Box textAlign="center" sx={{ my: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Viewing on mobile? Open the resume in Google Docs:
                </Typography>
                <Link href={currentLink} target="_blank" rel="noopener">
                  Open Resume
                </Link>
              </Box>
            ) : (
              <iframe
                title={`${selectedResume} resume`}
                src={currentLink}
                width="100%"
                height="800px"
                style={{ border: 'none' }}
              />
            )}
          </Box>

          <Divider sx={{ my: 3 }} />
        </Box>
      </Box>
    </div>
  );
};

export default Resume;
