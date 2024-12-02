import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    function getProducts() {
        fetch("http://localhost:4000/products?_sort=id&_order=asc")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                alert("Unable to get the data");
            });
    }

    useEffect(getProducts, []);

    function deleteProduct(id) {
        fetch("http://localhost:4000/products/" + id, {
            method: "DELETE"
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error();
                }
                getProducts();
            })
            .catch(error => {
                alert("Unable to delete the product.");
            });
    }

    function handleAddToWishlist(productId) {
        const product = products.find(p => p.id === productId);
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!wishlist.some(item => item.id === productId)) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            alert("Product added to wishlist!");
        } else {
            alert("Product is already in your wishlist!");
        }
    }

    function handleAddToCart(productId) {
        const product = products.find(p => p.id === productId);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Product added to cart!");
    }

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Products</h2>

            <div className="row mb-3">
                <div className="col d-flex justify-content-between">
                    <Link className="btn btn-primary btn-sm" to="/admin/products/create">
                        Create Product
                    </Link>
                    <div>
                        <Link className="btn btn-info btn-sm me-2" to="/wishlist">View Wishlist</Link>
                        <Link className="btn btn-warning btn-sm" to="/cart">View Cart</Link>
                    </div>
                    <button type="button" className="btn btn-success btn-sm" onClick={getProducts}>Refresh</button>
                </div>
            </div>

            <div className="row">
                {products.map((product, index) => (
                    <div className="col-md-4 col-lg-3 mb-4" key={index}>
                        <div className="card h-100">
                            <img 
                                src={"http://localhost:4000/images/" + product.imageFilename} 
                                className="card-img-top" 
                                alt={product.name} 
                                style={{ maxHeight: "200px", objectFit: "cover" }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text text-muted">Brand: {product.brand}</p>
                                <p className="card-text">Category: {product.category}</p>
                                <p className="card-text text-success">Price: Rs.{product.price}</p>
                                <p className="card-text"><small>Created At: {product.createdAt ? product.createdAt.slice(0, 10) : 'N/A'}</small></p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <Link className="btn btn-success btn-sm" to={`/admin/products/edit/${product.id}`}>Edit</Link>
                                <button className="btn btn-primary btn-sm" onClick={() => deleteProduct(product.id)}>Delete</button>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-outline-success btn-sm" onClick={() => handleAddToWishlist(product.id)}>Add to Wishlist</button>
                                <button className="btn btn-outline-primary btn-sm" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
