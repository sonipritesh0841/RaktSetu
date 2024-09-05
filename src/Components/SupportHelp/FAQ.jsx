import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

// Sample FAQ data
const faqs = [
  { question: 'How do I donate blood?', answer: 'You can donate blood by scheduling an appointment through our appointment calendar.' },
  { question: 'What are the requirements to donate blood?', answer: 'You must be in good health, at least 18 years old, and weigh at least 110 pounds.' },
  // Add more FAQs as needed
];

const FAQ = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">FAQ</Typography>
      <List>
        {faqs.map((faq, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={<Typography variant="subtitle1">{faq.question}</Typography>}
              secondary={<Typography variant="body2">{faq.answer}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default FAQ;
