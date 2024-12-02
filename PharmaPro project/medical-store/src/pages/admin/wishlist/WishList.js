import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WishList() {
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);

    // Function to handle moving a product to the cart
    const handleMoveToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if already in cart
        } else {
            cart.push({ ...product, quantity: 1 }); // Add product to cart with quantity 1
        }

        localStorage.setItem('cart', JSON.stringify(cart)); // Update cart in localStorage
        handleRemove(product.id); // Remove product from wishlist after moving to cart
        alert(`${product.name} moved to cart!`);
    };

    // Function to handle removing a product from the wishlist
    const handleRemove = (productId) => {
        const updatedWishlist = wishlist.filter(product => product.id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Update wishlist in localStorage
        alert("Product removed from wishlist.");
    };

    return (
        <div className="container my-4">
            <h2 className="text-center text-success mb-4">My Wishlist</h2>
            <div className="mb-3">
                <Link to="/" className="btn btn-outline-secondary btn-sm me-2">Back to Home</Link>
                <Link to="http://localhost:3000/admin/products" className="btn btn-outline-secondary btn-sm me-2">Back to Product List</Link>
                <Link to="/cart" className="btn btn-outline-primary btn-sm">Go to Cart</Link> {/* Cart Button */}
            </div>
            {wishlist.length > 0 ? (
                <div className="row">
                    {wishlist.map((product, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card shadow-sm">
                                <img
                                    src={`http://localhost:4000/images/${product.imageFilename}`} // Replace with product image path
                                    alt={product.name}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">ID: {product.id}</h6>
                                    <p className="card-text text-success fw-bold">Price: Rs.{product.price}</p>
                                    <div className="d-flex justify-content-between mt-3">
                                        <button
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={() => handleMoveToCart(product)}
                                        >
                                            Move to Cart
                                        </button>
                                        <button
                                            className="btn btn-outline-success btn-sm"
                                            onClick={() => handleRemove(product.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-info">Your wishlist is empty.</p>
            )}
        </div>
    );
}



