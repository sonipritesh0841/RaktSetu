import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

const ContactSupport = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Logic to send the support message
    console.log({ message });
    setMessage('');
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Contact Support</Typography>
      <TextField
        label="Your Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send Message
      </Button>
    </Paper>
  );
};

export default ContactSupport;
