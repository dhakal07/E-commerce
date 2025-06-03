import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css"; // Assume you have a CSS file for styling

function CheckoutPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate a payment process (replace with actual payment API call)
    setTimeout(() => {
      setPaymentStatus("Payment successful!");
      clearCart(); // Clear cart after successful payment
      navigate("/"); // Redirect to home page
    }, 1000); // Simulate async payment
  };

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <form onSubmit={handlePayment}>
        <button type="submit">Complete Payment</button>
      </form>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
}

export default CheckoutPage;