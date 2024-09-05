import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// Sample request data
const sampleRequests = [
  { id: 1, requestor: 'Hospital A', date: '2024-08-02', bloodType: 'A+', quantity: 5, status: 'Fulfilled' },
  { id: 2, requestor: 'Hospital B', date: '2024-08-06', bloodType: 'B-', quantity: 2, status: 'Pending' },
  { id: 3, requestor: 'Individual C', date: '2024-08-12', bloodType: 'O+', quantity: 3, status: 'Fulfilled' },
  // Add more sample data as needed
];

const RequestReports = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Request Reports</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Requestor</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleRequests.map(request => (
              <TableRow key={request.id}>
                <TableCell>{request.requestor}</TableCell>
                <TableCell>{request.date}</TableCell>
                <TableCell>{request.bloodType}</TableCell>
                <TableCell>{request.quantity}</TableCell>
                <TableCell>{request.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RequestReports;
