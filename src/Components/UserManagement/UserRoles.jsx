import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

// Sample roles data
const sampleRoles = [
  { id: 1, role: 'Admin', description: 'Full access to all features and settings.' },
  { id: 2, role: 'Manager', description: 'Can manage inventory and requests.' },
  { id: 3, role: 'Coordinator', description: 'Can manage donor appointments and communications.' },
  // Add more sample roles as needed
];

const UserRoles = () => {
  const [newRole, setNewRole] = useState('');
  const [description, setDescription] = useState('');

  const handleAddRole = () => {
    // Logic to add a new role
    console.log({ newRole, description });
    setNewRole('');
    setDescription('');
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Admin/User Roles</Typography>
      <List>
        {sampleRoles.map(role => (
          <ListItem key={role.id}>
            <ListItemText
              primary={role.role}
              secondary={role.description}
            />
          </ListItem>
        ))}
      </List>
      <TextField
        label="New Role"
        variant="outlined"
        fullWidth
        margin="normal"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddRole}>
        Add Role
      </Button>
    </Paper>
  );
};

export default UserRoles;
