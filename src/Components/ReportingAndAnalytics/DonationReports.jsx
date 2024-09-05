import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// Sample donation data
const sampleDonations = [
  { id: 1, donor: 'John Doe', date: '2024-08-01', bloodType: 'A+', units: 2 },
  { id: 2, donor: 'Jane Smith', date: '2024-08-05', bloodType: 'B-', units: 1 },
  { id: 3, donor: 'Alice Johnson', date: '2024-08-10', bloodType: 'O+', units: 3 },
  // Add more sample data as needed
];

const DonationReports = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Donation Reports</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Donor</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Units</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleDonations.map(donation => (
              <TableRow key={donation.id}>
                <TableCell>{donation.donor}</TableCell>
                <TableCell>{donation.date}</TableCell>
                <TableCell>{donation.bloodType}</TableCell>
                <TableCell>{donation.units}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DonationReports;
