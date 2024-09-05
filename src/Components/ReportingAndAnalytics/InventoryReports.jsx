import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// Sample inventory data
const sampleInventory = [
  { id: 1, bloodType: 'A+', units: 10, usage: 5, wastage: 1 },
  { id: 2, bloodType: 'B-', units: 8, usage: 3, wastage: 0 },
  { id: 3, bloodType: 'O+', units: 15, usage: 7, wastage: 2 },
  // Add more sample data as needed
];

const InventoryReports = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Inventory Reports</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Blood Type</TableCell>
              <TableCell>Units Available</TableCell>
              <TableCell>Usage</TableCell>
              <TableCell>Wastage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleInventory.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.bloodType}</TableCell>
                <TableCell>{item.units}</TableCell>
                <TableCell>{item.usage}</TableCell>
                <TableCell>{item.wastage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default InventoryReports;
