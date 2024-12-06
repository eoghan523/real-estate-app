import { Grid, Card, CardContent, Typography, Button, CardMedia } from "@mui/material";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

//Defining home function
const Home = () => {
  const { products, addToCart } = useAppContext();

  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia component="img" image={product.image} alt={product.name} />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="h6">${product.price}</Typography>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
              <Button component={Link} to={`/product/${product.id}`}>View Details</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
