import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Box, Typography, IconButton } from "@mui/material";

//Nav Bar function with  Material UI styling. 
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            
            {/* Logo and Company Name */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              
              
              
              <IconButton edge="start" color="inherit" aria-label="logo">
                <img 
                  src="./public/images/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg"  
                  alt="Locke & Quqy Logo" 
                  style={{borderRadius: 50,  width: 40, height: 40, objectFit: 'cover' }} 
                />
              </IconButton>
              <Typography variant="h6" sx={{ fontWeight: "bold", ml: 1 }}>
                Locke & Quay 
              </Typography>
            </Box>
            
            {/* Navigation Links */}
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
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
