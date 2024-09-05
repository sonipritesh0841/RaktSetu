import  { useState } from 'react'; // Import React and useState
import Calendar from 'react-calendar';
import { Paper, Typography } from '@mui/material'; // Ensure @mui/material is installed
import 'react-calendar/dist/Calendar.css';

const AppointmentCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Logic to fetch or display appointments for the selected date
    console.log('Selected Date:', newDate);
  };

  return (
    <Paper sx={{ padding: 2 }}> {/* sx is Material-UI v5 syntax */}
      <Typography variant="h6">Appointment Calendar</Typography>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
    </Paper>
  );
};

export default AppointmentCalendar;
