import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// Sample data
const sampleStock = [
  { bloodType: 'A+', quantity: 10, expiration: '2024-12-01' },
  { bloodType: 'O-', quantity: 5, expiration: '2024-10-15' },
  // Add more sample data as needed
];

const BloodStockLevels = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Blood Stock Levels</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Blood Type</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Expiration Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleStock.map((stock, index) => (
              <TableRow key={index}>
                <TableCell>{stock.bloodType}</TableCell>
                <TableCell>{stock.quantity}</TableCell>
                <TableCell>{stock.expiration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BloodStockLevels;
