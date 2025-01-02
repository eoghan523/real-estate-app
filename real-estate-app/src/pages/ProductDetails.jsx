import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Button, Typography, Container, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useAppContext();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <Typography variant="h6">Product not found</Typography>;


    // ------------------------------------Image Slider settings -------------------------------------------------//
  // const settings = {
  //   dots: true, // Show navigation dots
  //   infinite: true, // Infinite loop
  //   speed: 500, // Transition speed
  //   slidesToShow: 1, // Only one image at a time
  //   slidesToScroll: 1, // Scroll one image at a time
  // };

  return (
    <Container sx={{ padding: { xs: "20px", sm: "40px" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Responsive design feature
          gap: 3,
          position: "relative",
          backgroundColor: 'lightyellow',
          backgroundSize: "cover", // Ensure the background image covers the entire container
          backgroundPosition: "center",
          borderRadius: "30px", // Rounded corners to the wrapper
          padding: { xs: "20px", sm: "40px" }, // Padding to keep the content from touching the edges
        }}
      >
        <Box sx={{ flex: 1 }}>
          {/* Image 1 with hover effect */}
          <img
            src={product.images[0]}
            alt={product.name}
            style={{
              width: "100%",
              objectFit: "cover",
              padding: '4px',
              borderRadius: "8px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="product-image"
          />
          {/* Image 2 with hover effect */}
          <img
            src={product.images[1]}
            alt={product.name}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="product-image"
          />
          {/* Image 3 with hover effect */}
          <img
            src={product.images[2]}
            alt={product.name}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="product-image"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{
              textAlign: 'center', 
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
              fontWeight: 'bold', 
              color: 'teal',
              marginBottom: '16px', 
            }}>
            {product.name}
          </Typography>

          <Typography variant="body1" sx={{ 
            marginTop: 3,
            textAlign: 'center',
          }}>
            {product.description}
          </Typography>
          <Typography variant="h5" sx={{ 
            marginTop: 3,
            textAlign: 'center',
             }}>
            £{product.price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addToCart(product)}
            sx={{ 
              marginTop: 4,
              textAlign: 'center',
              justifyContent: "center",
              display: 'flex',
              marginLeft: 24,
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
