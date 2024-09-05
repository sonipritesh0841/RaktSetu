import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const sampleStock = [
  { bloodType: 'A+', quantity: 10 },
  { bloodType: 'O-', quantity: 5 },
  // Add more sample data as needed
];

const RequestFulfillment = () => {
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleFulfillRequest = () => {
    // Logic to fulfill request
    console.log({ selectedBloodType, quantity });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Request Fulfillment</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Blood Type</InputLabel>
        <Select
          value={selectedBloodType}
          onChange={(e) => setSelectedBloodType(e.target.value)}
          label="Blood Type"
        >
          {sampleStock.map((stock, index) => (
            <MenuItem key={index} value={stock.bloodType}>
              {stock.bloodType}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Quantity"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleFulfillRequest}>
        Fulfill Request
      </Button>
    </Paper>
  );
};

export default RequestFulfillment;
