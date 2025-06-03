import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutForm.css';

function CheckoutForm({ onClose, total }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'credit',
    showPaymentDetails: false,
  });
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [paypalEmail, setPaypalEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handlePaypalChange = (e) => {
    setPaypalEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, showPaymentDetails: true });
  };

  const handleFinalSubmit = () => {
    // Simulate payment processing
    alert('Payment successful! Order placed.');
    navigate('/');
    onClose();
  };

  return (
    <div className="checkout-modal-overlay" onClick={onClose}>
      <div className="checkout-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Checkout</h2>
        {!formData.showPaymentDetails ? (
          <form onSubmit={handleSubmit}>
            <h3>Total: ${total.toFixed(2)}</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
            <button type="submit">Place Order</button>
          </form>
        ) : (
          <div>
            <h3>Total: ${total.toFixed(2)}</h3>
            {formData.paymentMethod === 'credit' ? (
              <form onSubmit={handleFinalSubmit}>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number (e.g., 1234-5678-9012-3456)"
                  value={cardDetails.cardNumber}
                  onChange={handleCardChange}
                  required
                />
                <input
                  type="text"
                  name="expiry"
                  placeholder="Expiry (MM/YY)"
                  value={cardDetails.expiry}
                  onChange={handleCardChange}
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={handleCardChange}
                  required
                />
                <button type="submit">Confirm Payment</button>
              </form>
            ) : (
              <form onSubmit={handleFinalSubmit}>
                <input
                  type="email"
                  name="paypalEmail"
                  placeholder="PayPal Email"
                  value={paypalEmail}
                  onChange={handlePaypalChange}
                  required
                />
                <button type="submit">Confirm Payment</button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutForm;