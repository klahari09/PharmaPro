
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function CheckOut() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkoutAllowed = sessionStorage.getItem('checkoutAllowed');
        if (!checkoutAllowed) {
            alert('You cannot access the checkout page directly. Redirecting to Cart.');
            navigate('/cart');
        }
    }, [navigate]);

    const handleConfirmOrder = () => {
        if (paymentMethod === 'Cash on Delivery') {
            setOrderConfirmed(true);

            // Clear the session flag and remove cart items
            sessionStorage.removeItem('checkoutAllowed');
            localStorage.removeItem('cart'); // Clear the cart from localStorage

            setTimeout(() => {
                navigate('/'); // Redirect to the home page after 3 seconds
            }, 3000);
        } else {
            alert('Please select a payment method.');
        }
    };

    return (
        <div className="container my-4">
            <h2 className="text-center text-primary mb-4">Checkout</h2>
            <div className="mb-3">
                <Link to="/" className="btn btn-outline-secondary btn-sm me-2">Back to Home</Link>
                <Link to="/cart" className="btn btn-outline-secondary btn-sm">Back to Cart</Link>
            </div>
            {orderConfirmed ? (
                <div className="text-center">
                    <h4 className="text-success">Thanks for ordering!</h4>
                    <p>You will be redirected to the home page shortly...</p>
                </div>
            ) : (
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title mb-4">Select Payment Method</h5>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod"
                                id="cod"
                                value="Cash on Delivery"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="cod">
                                Cash on Delivery
                            </label>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <button
                                className="btn btn-success btn-lg"
                                onClick={handleConfirmOrder}
                            >
                                Confirm Order
                            </button>
                            <Link
                                to="/cart"
                                className="btn btn-outline-secondary btn-lg"
                            >
                                Back to Cart
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

