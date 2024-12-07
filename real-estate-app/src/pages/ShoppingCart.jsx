import { Button, Typography, Container, Box } from "@mui/material";
import { useAppContext } from "../context/AppContext";

const ShoppingCart = () => {
  const { cart, removeFromCart } = useAppContext();

  return (
    <Box
      sx={{
        minHeight: '100vh', // Full viewport height
        backgroundImage: 'url("https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGUlMjBzaWdufGVufDB8fDB8fHww")', // Background image
        backgroundSize: 'cover', // Cover the entire screen with the image
        backgroundPosition: 'center', // Center the image
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        width: '100%',

      }}
    >
      <Container
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background for content
          padding: { xs: '20px', sm: '40px' }, // Responsive padding
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: '1200px', // Max width for better readability on large screens
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3 }}>
          Shopping Cart
        </Typography>

        {cart.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            No items in the cart
          </Typography>
        ) : (
          <Box sx={{ marginTop: 2 }}>
            {cart.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: 'flex', // Changed from 'content' to 'flex'
                  flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, row on larger screens
                  justifyContent: 'space evenly',
                  alignItems: 'center',
                  marginBottom: 2,
                  padding: 2,
                  border: '1px solid #ddd',
                  borderRadius: 1,
                  backgroundColor: 'white', // White background for each cart item
                  boxShadow: 1,
                }}
              >
                <Typography variant="body1" sx={{ flex: 1 }}>
                  {item.name} - ${item.price}
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Box>
            ))}
            <Typography variant="h6" sx={{ marginTop: 2, textAlign: 'right' }}>
              Total: ${cart.reduce((total, item) => total + item.price, 0)}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ShoppingCart;
