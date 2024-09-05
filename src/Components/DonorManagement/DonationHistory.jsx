import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// Sample data
const sampleDonationHistory = [
  { donorId: 1, date: '2024-01-15', bloodType: 'A+' },
  { donorId: 1, date: '2024-03-22', bloodType: 'A+' },
  // Add more sample data as needed
];

const DonationHistory = ({ donorId }) => {
  const donorHistory = sampleDonationHistory.filter(record => record.donorId === donorId);

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Donation History</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Blood Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donorHistory.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.bloodType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DonationHistory;
