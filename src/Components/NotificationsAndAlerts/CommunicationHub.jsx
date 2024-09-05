import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const sampleNotificationTypes = [
  { id: 1, type: 'Email' },
  { id: 2, type: 'SMS' },
  // Add more types as needed
];

const CommunicationHub = () => {
  const [notificationType, setNotificationType] = useState('');
  const [message, setMessage] = useState('');

  const handleSendNotification = () => {
    // Logic to send notification
    console.log({ notificationType, message });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Communication Hub</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Notification Type</InputLabel>
        <Select
          value={notificationType}
          onChange={(e) => setNotificationType(e.target.value)}
          label="Notification Type"
        >
          {sampleNotificationTypes.map(type => (
            <MenuItem key={type.id} value={type.type}>
              {type.type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSendNotification}>
        Send Notification
      </Button>
    </Paper>
  );
};

export default CommunicationHub;
