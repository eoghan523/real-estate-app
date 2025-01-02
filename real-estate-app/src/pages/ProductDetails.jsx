import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Button, Typography, Container, Box } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useAppContext();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <Typography variant="h6">Product not found</Typography>;

  const productImage = product.images[0] || "/images/shai-pal-bGphNIzQ5OA-unsplash.jpg"; // Fallback image

  // ------------------------------------Image Slider settings -------------------------------------------------//
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Only one image at a time
    slidesToScroll: 1, // Scroll one image at a time
  };


  return (
    <Container sx={{ padding: { xs: "20px", sm: "40px" } }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3 }}>
        <Box sx={{ flex: 1 }}>
          <img src={product.images[0]} alt={product.name} style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }} />
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