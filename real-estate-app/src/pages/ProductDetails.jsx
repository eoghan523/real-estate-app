import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Button, Typography, Container, Box } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useAppContext();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <Typography variant="h6">Product not found</Typography>;

  return (
    <Container sx={{ padding: { xs: "20px", sm: "40px" } }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3 }}>
        <Box sx={{ flex: 1 }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            £{product.price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addToCart(product)}
            sx={{ marginTop: 2 }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;