import { useCart } from "../context/CartContext";

const ProductDetails = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart(product, 1)}>
      Add to Cart
    </button>
  );
};
