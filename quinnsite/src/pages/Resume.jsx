import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { Tabs, Tab, Box, Typography, Divider } from '@mui/material';

const resumeOptions = [
  { label: 'Test Automation', value: 'test-automation' },
  { label: 'Android', value: 'android' },
  { label: 'Embedded', value: 'embedded' },
];

const Resume = () => {
  const [selectedResume, setSelectedResume] = useState('test-automation');

  const handleChange = (event, newValue) => {
    setSelectedResume(newValue);
  };

  return (
    <div id="root">
      <Header />
      <Navbar />

      <Box>

        <Box sx={{ height: '800px', mb: 4 }}>
          <iframe
            title={`${selectedResume} resume`}
            src={`assets/${selectedResume}/QuinnPatersonResume.pdf`}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          >
            <p>
              Your browser does not support PDFs.{' '}
              <a
                href={`assets/${selectedResume}/QuinnPatersonResume.pdf`}
                download
              >
                Download the resume here.
              </a>
            </p>
          </iframe>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="subtitle1" align="center" gutterBottom>
          Tailor the resume to your target role:
        </Typography>

        <Tabs
          value={selectedResume}
          onChange={handleChange}
          centered
          variant="fullWidth"
          size="small"
        >
          {resumeOptions.map((option) => (
            <Tab key={option.value} label={option.label} value={option.value} />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default Resume;
