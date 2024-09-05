import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

// Sample data
const sampleAlerts = [
  { bloodType: 'O-', message: 'Low stock level' },
  { bloodType: 'B+', message: 'Expiration approaching' },
  // Add more sample alerts as needed
];

const AlertSystem = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Alert System</Typography>
      <List>
        {sampleAlerts.map((alert, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${alert.bloodType}: ${alert.message}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AlertSystem;
