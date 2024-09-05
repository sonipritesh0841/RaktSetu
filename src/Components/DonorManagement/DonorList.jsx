import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper, Typography } from '@mui/material';

// Sample data
const sampleDonors = [
  { id: 1, name: 'John Doe', bloodType: 'A+', donations: 5 },
  { id: 2, name: 'Jane Smith', bloodType: 'O-', donations: 3 },
  // Add more sample data as needed
];

const DonorList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDonors = sampleDonors.filter(donor =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Donor List</Typography>
      <TextField
        label="Search Donors"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>Donations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDonors.map(donor => (
              <TableRow key={donor.id}>
                <TableCell>{donor.name}</TableCell>
                <TableCell>{donor.bloodType}</TableCell>
                <TableCell>{donor.donations}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DonorList;
