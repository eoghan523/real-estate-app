import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Box, Typography, IconButton } from "@mui/material";

// Nav Bar function with Material UI styling. 
const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'teal' }}>
      <Toolbar>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            
            {/* Logo and Company Name */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Wrap IconButton with Link to navigate to the homepage */}
              <Link to="/">
                <IconButton edge="start" color="inherit" aria-label="logo">
                  <img 
                    src="/images/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg"  // Corrected image path
                    alt="Locke & Quay Logo"               
                    style={{ borderRadius: '50%', width: 40, height: 40, objectFit: 'cover' }} 
                  />
                </IconButton>
              </Link>
              
              {/* Company Name */}
              <Typography 
                variant="h6" 
                sx={{ 
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                  ml: 1, 
                  textTransform: "capitalize", 
                  color: 'azure',  
                  display: { xs: "none", sm: "block" }, // Hide on small screens
                }}
              >
                Locke & Quay 
              </Typography>
            </Box>
            
            {/* Navigation Links */}
            <Box sx={{ display: { xs: "flex", sm: "flex" } }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/cart">
                Shopping Cart
              </Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
