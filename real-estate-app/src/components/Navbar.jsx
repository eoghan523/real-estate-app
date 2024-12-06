import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";

// creates Navbar function and app bar that sticks.
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/cart">Shopping Cart</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
