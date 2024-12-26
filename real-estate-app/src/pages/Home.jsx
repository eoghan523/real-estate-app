import { Grid, Card, CardContent, Typography, Button, CardMedia } from "@mui/material";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { products, addToCart } = useAppContext();

  return (
    <Grid container spacing={4} sx={{ padding: "20px" }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{
                height: 200,
                objectFit: "cover",
                width: "100%",
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
                {product.description}
              </Typography>
              <Typography variant="h6" sx={{ fontSize: { xs: "1.2rem", sm: "1.4rem" } }}>
                £{product.price}
              </Typography>
              <Button 
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => addToCart(product)}                 //Event Handler on Click
                sx={{ marginTop: 2 }}
              >
                Add to Cart
              </Button>
              <Button
                fullWidth
                component={Link}
                to={`/product/${product.id}`}
                variant="outlined"
                color="secondary"
                sx={{ marginTop: 1 }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
