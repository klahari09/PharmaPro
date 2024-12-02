import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const navigate = useNavigate();

    const handleRemoveFromCart = (productId) => {
        const updatedCart = cart.filter(product => product.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert("Product removed from cart.");
    };

    const handleMoveToWishlist = (product) => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!wishlist.find(item => item.id === product.id)) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            alert(`${product.name} moved to wishlist!`);
        } else {
            alert(`${product.name} is already in the wishlist.`);
        }
        handleRemoveFromCart(product.id);
    };

    const handleProceedToCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty.");
        } else {
            sessionStorage.setItem('checkoutAllowed', 'true'); 
            navigate('/checkout'); // Correctly redirect to the Checkout page
        }
    };

    return (
        <div className="container my-4">
            <h2 className="text-center text-primary mb-4">My Cart</h2>
            <div className="mb-3">
                <Link to="/" className="btn btn-outline-secondary btn-sm me-2">Back to Home</Link>
                <Link to="/wishlist" className="btn btn-outline-secondary btn-sm me-2">Back to Wishlist</Link>
                <Link to="http://localhost:3000/admin/products" className="btn btn-outline-secondary btn-sm">Back to Product List</Link>
            </div>
            {cart.length > 0 ? (
                <div className="row">
                    {cart.map((product, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card shadow-sm">
                                <img
                                    src={`http://localhost:4000/images/${product.imageFilename}`}
                                    alt={product.name}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text text-success fw-bold">Price: Rs.{product.price}</p>
                                    <div className="d-flex justify-content-between mt-3">
                                        <button
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={() => handleMoveToWishlist(product)}
                                        >
                                            Move to Wishlist
                                        </button>
                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => handleRemoveFromCart(product.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-12 text-center mt-4">
                        <button
                            className="btn btn-success btn-lg"
                            onClick={handleProceedToCheckout}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-info">Your cart is empty.</p>
            )}
        </div>
    );
}


