import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// Sample data
const sampleHistory = [
  { id: 1, requester: 'Hospital A', bloodType: 'A+', quantity: 5, status: 'Fulfilled' },
  { id: 2, requester: 'Individual B', bloodType: 'O-', quantity: 2, status: 'Pending' },
  // Add more sample data as needed
];

const RequestHistory = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Request History</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Requester</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleHistory.map(history => (
              <TableRow key={history.id}>
                <TableCell>{history.requester}</TableCell>
                <TableCell>{history.bloodType}</TableCell>
                <TableCell>{history.quantity}</TableCell>
                <TableCell>{history.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RequestHistory;
