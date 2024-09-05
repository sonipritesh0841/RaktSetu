import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// Sample data
const sampleRequests = [
  { id: 1, requester: 'Hospital A', bloodType: 'A+', quantity: 5, urgency: 'High' },
  { id: 2, requester: 'Individual B', bloodType: 'O-', quantity: 2, urgency: 'Medium' },
  // Add more sample data as needed
];

const BloodRequests = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Blood Requests</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Requester</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Urgency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleRequests.map(request => (
              <TableRow key={request.id}>
                <TableCell>{request.requester}</TableCell>
                <TableCell>{request.bloodType}</TableCell>
                <TableCell>{request.quantity}</TableCell>
                <TableCell>{request.urgency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BloodRequests;
