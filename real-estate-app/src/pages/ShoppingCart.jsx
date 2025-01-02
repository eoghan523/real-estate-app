import { Button, Typography, Container, Box } from "@mui/material";
import { useAppContext } from "../context/AppContext";



const ShoppingCart = () => {
  const { cart, removeFromCart, clearCart } = useAppContext();


  return (
    <Box
      sx={{
        minHeight: '100vh', // Full viewport height
        backgroundImage: 'url(/images/shai-pal-bGphNIzQ5OA-unsplash.jpg)', // Background image
        backgroundSize: 'cover', // Cover the entire screen with the image
        backgroundPosition: 'center', // Center the image
        display: 'flex', // Use flexbox for centering
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', 
        padding: 2,
        width: '100%', // Full width
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
                  display: 'flex', // Flexbox layout for cart items
                  flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, row on larger screens
                  justifyContent: 'space-between', // Spread out the content
                  alignItems: 'center', // Center the content
                  marginBottom: 2,
                  padding: 2,
                  border: '1px solid #ddd',
                  borderRadius: 1,
                  backgroundColor: 'white',
                  boxShadow: 1,
                }}
              >
                <Typography variant="body1" sx={{ flex: 1 }}>
                  <img
                    src={item.images[0]} // Product image URL
                    alt={item.name} // Alt text for accessibility
                    style={{
                      width: '100px', // Adjust the width of the image
                      height: '100px', // Adjust the height of the image
                      objectFit: 'cover', // Ensure the image covers the area without stretching
                      borderRadius: '10%', // Circular image (optional)
                      marginRight: '20px', // Space between the image and text
                    }}
                  />
                  {item.name} - £{item.price} 
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
              Total: £{cart.reduce((total, item) => total + item.price, 0)}
            </Typography>
          </Box>
        )}

    
        <Box sx={{ textAlign: 'center', marginTop: 3 }}>
          {cart.length > 0 && (
            <Button
              variant="contained"
              color="error"
              onClick={clearCart}
              sx={{ padding: '10px 20px' }}
            >
              Clear Cart
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ShoppingCart;
