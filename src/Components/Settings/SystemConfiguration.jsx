import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// Sample configuration options
const notificationOptions = ['Email', 'SMS', 'Push Notification'];

const SystemConfiguration = () => {
  const [notificationType, setNotificationType] = useState(notificationOptions[0]);
  const [alertThreshold, setAlertThreshold] = useState(10);

  const handleSaveConfig = () => {
    // Logic to save system configuration
    console.log({ notificationType, alertThreshold });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">System Configuration</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Notification Type</InputLabel>
        <Select
          value={notificationType}
          onChange={(e) => setNotificationType(e.target.value)}
        >
          {notificationOptions.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Alert Threshold"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={alertThreshold}
        onChange={(e) => setAlertThreshold(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSaveConfig}>
        Save Configuration
      </Button>
    </Paper>
  );
};

export default SystemConfiguration;
