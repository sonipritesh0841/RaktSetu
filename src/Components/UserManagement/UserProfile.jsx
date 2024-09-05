import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

// Sample user data
const sampleUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  contact: '123-456-7890',
  // Add more fields as needed
};

const UserProfile = () => {
  const [userData, setUserData] = useState(sampleUser);

  const handleUpdateProfile = () => {
    // Logic to update user profile
    console.log(userData);
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">User Profile</Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <TextField
        label="Contact"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userData.contact}
        onChange={(e) => setUserData({ ...userData, contact: e.target.value })}
      />
      <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
        Update Profile
      </Button>
    </Paper>
  );
};

export default UserProfile;
