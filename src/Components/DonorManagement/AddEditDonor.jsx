import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

const AddEditDonor = ({ donor, onSave }) => {
  const [name, setName] = useState(donor ? donor.name : '');
  const [bloodType, setBloodType] = useState(donor ? donor.bloodType : '');
  const [donations, setDonations] = useState(donor ? donor.donations : 0);

  const handleSave = () => {
    onSave({ id: donor ? donor.id : Date.now(), name, bloodType, donations });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">{donor ? 'Edit Donor' : 'Add New Donor'}</Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Blood Type"
        variant="outlined"
        fullWidth
        margin="normal"
        value={bloodType}
        onChange={(e) => setBloodType(e.target.value)}
      />
      <TextField
        label="Number of Donations"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
        value={donations}
        onChange={(e) => setDonations(Number(e.target.value))}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Paper>
  );
};

export default AddEditDonor;
