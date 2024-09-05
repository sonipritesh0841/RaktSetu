import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

const ManageAppointments = () => {
  const [appointmentId, setAppointmentId] = useState('');
  const [newDate, setNewDate] = useState('');
  const [action, setAction] = useState('');

  const handleManageAppointment = () => {
    // Logic to reschedule or cancel the appointment
    console.log({ appointmentId, newDate, action });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Manage Appointments</Typography>
      <TextField
        label="Appointment ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={appointmentId}
        onChange={(e) => setAppointmentId(e.target.value)}
      />
      <TextField
        label="New Date"
        variant="outlined"
        fullWidth
        margin="normal"
        type="date"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Action (Reschedule/Cancel)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={action}
        onChange={(e) => setAction(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleManageAppointment}>
        Submit
      </Button>
    </Paper>
  );
};

export default ManageAppointments;

