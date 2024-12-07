import { Button, Typography, Container } from "@mui/material";
import { useAppContext } from "../context/AppContext";

//Shopping cart function 
const ShoppingCart = () => {
  const { cart, removeFromCart } = useAppContext();
//`useAppContext` to access the cart data and the function to remove an item
  return (
    <Container>
      <Typography variant="h4">Shopping Cart</Typography>
      {cart.length === 0 ? (
        <Typography>No items in the cart</Typography>
      ) : (
        <div>
               {/* Loop through each item in the cart and render it */}
          {cart.map(item => (
            <div key={item.id}>
              <Typography>{item.name} - ${item.price}</Typography>
              {/* Button to remove the item from the cart */}
              <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          ))}
           {/* Calculate and display the total price of all items in the cart */}
          <Typography>Total: ${cart.reduce((total, item) => total + item.price, 0)}</Typography>
        </div>
      )}
    </Container>
  );
};

export default ShoppingCart;
