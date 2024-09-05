import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Overview = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Total Blood Units Available</Typography>
          <Typography variant="body1">A+: 10, A-: 5, B+: 15, B-: 8, AB+: 7, AB-: 2, O+: 20, O-: 12</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Recent Donations</Typography>
          <Typography variant="body1">John Doe (A+), Jane Smith (O-)...</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Pending Requests</Typography>
          <Typography variant="body1">O+ (Urgent), B- (Moderate)...</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Overview;
