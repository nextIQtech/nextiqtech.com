import React from "react";
import { Box, TextField, Button, Grid } from "@mui/material";

const ContactForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    onClose();
  };

  return (
    <Box
      className="bg-white p-5 rounded-lg shadow-lg custom-form"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: 600,
        width: '100%',
        boxShadow: 24,
        borderRadius: 2,
      }}
    >
      <h2 className="text-xl font-semibold text-[#170f49] mb-4">Get in touch</h2>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2} className="py-5">
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          margin="normal"
          label="First Name"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          margin="normal"
          label="Last Name"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          type="email"
          required
        /></Grid>
         <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          margin="normal"
          label="Phone"
          variant="outlined"
          type="number"
        /></Grid>
        <Grid item xs={12} sm={12}>
        <TextField
          fullWidth
          margin="normal"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4 custom-button"
        >
          Submit
        </Button>
        </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
