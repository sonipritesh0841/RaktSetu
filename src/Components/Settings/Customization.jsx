import React, { useState } from 'react';
import { Paper, Typography, Button, TextField } from '@mui/material';

const Customization = () => {
  const [theme, setTheme] = useState('Light');
  const [layout, setLayout] = useState('Default');

  const handleSaveCustomization = () => {
    // Logic to save customization settings
    console.log({ theme, layout });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Customization</Typography>
      <TextField
        label="Theme"
        variant="outlined"
        fullWidth
        margin="normal"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      />
      <TextField
        label="Layout"
        variant="outlined"
        fullWidth
        margin="normal"
        value={layout}
        onChange={(e) => setLayout(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSaveCustomization}>
        Save Customization
      </Button>
    </Paper>
  );
};

export default Customization;
