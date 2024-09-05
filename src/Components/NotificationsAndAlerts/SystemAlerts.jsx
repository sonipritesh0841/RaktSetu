import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

// Sample alerts
const sampleAlerts = [
  { id: 1, type: 'Urgent', message: 'Blood type A+ is running low!' },
  { id: 2, type: 'Reminder', message: 'Upcoming donor appointment on September 10th.' },
  { id: 3, type: 'Info', message: 'New blood request received from Hospital B.' },
  // Add more sample data as needed
];

const SystemAlerts = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">System Alerts</Typography>
      <List>
        {sampleAlerts.map(alert => (
          <ListItem key={alert.id}>
            <ListItemText
              primary={alert.type}
              secondary={alert.message}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SystemAlerts;
