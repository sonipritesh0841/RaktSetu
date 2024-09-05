import  { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

const AddNewStock = () => {
  const [bloodType, setBloodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiration, setExpiration] = useState('');

  const handleAddStock = () => {
    // Logic to add new stock
    console.log({ bloodType, quantity, expiration });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Add New Blood Stock</Typography>
      <TextField
        label="Blood Type"
        variant="outlined"
        fullWidth
        margin="normal"
        value={bloodType}
        onChange={(e) => setBloodType(e.target.value)}
      />
      <TextField
        label="Quantity"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <TextField
        label="Expiration Date"
        variant="outlined"
        fullWidth
        margin="normal"
        type="date"
        value={expiration}
        onChange={(e) => setExpiration(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary" onClick={handleAddStock}>
        Add Stock
      </Button>
    </Paper>
  );
};

export default AddNewStock;
