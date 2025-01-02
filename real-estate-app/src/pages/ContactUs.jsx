import { useState } from 'react'; // Make sure to import useState
import { Box, Typography, TextField, Button, Container } from "@mui/material";

const ContactUs = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to handle error
  const [error, setError] = useState('');

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
    } else {
      setError(''); 
      console.log("Form Data Submitted:", formData);

      //----------------------------- Future API to handle form submition----------------------------------//
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <Container sx={{
         padding: { xs: "20px", sm: "40px"},
         backgroundImage: 'url(/images/uniq-trek-FCzVD0ZQZJA-unsplash.jpg)',
         minHeight: '100vh', // Full viewport height
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center', 
         padding: 2,
         width: '100%', // Full width
           
         
         }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: 'lightyellow',
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          Contact Us
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "20px", textAlign: "center" }}>
          Interested in a property? We'd love to hear from you... Please fill out the form below or email us directly.
        </Typography>

        {/* Display error message if validation fails */}
        {error && (
          <Typography variant="body2" sx={{ color: "red", marginBottom: "20px", textAlign: "center" }}>
            {error}
          </Typography>
        )}

        {/* Contact form */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            variant="outlined"
            name="name" 
            value={formData.name}
            onChange={handleChange}
            sx={{ marginBottom: "20px", width: "100%" }}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            type="email"
            name="email" 
            value={formData.email}
            onChange={handleChange}
            sx={{ marginBottom: "20px", width: "100%" }}
          />
          <TextField
            label="Tell us what property you are interested in..."
            variant="outlined"
            multiline
            rows={4}
            name="message" 
            value={formData.message}
            onChange={handleChange}
            sx={{ marginBottom: "20px", width: "100%" }}
          />

          <Button variant="contained" color="primary" sx={{ width: "100%" }} type="submit">
            Submit
          </Button>
        </form>

        {/* Contact info */}
        <Typography variant="body2" sx={{ marginTop: "20px", textAlign: "center" }}>
          Or you can reach us at: <br />
          <strong>Email: contact@lockeandquay.com</strong> <br />
          <strong>Phone: (123) 456-7890</strong>
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactUs;
