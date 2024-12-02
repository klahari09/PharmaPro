import React from "react";

export default function Home() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        PharmaPro
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">
                                    Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admin/products">
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="bg-success text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">Welcome to PharmaPro</h1>
                    <p className="lead">
                        Your trusted online pharmacy for medicines, health supplements, and personal care.
                    </p>
                    <a href="/admin/products" className="btn btn-light btn-lg">
                        Shop Now
                    </a>
                </div>
            </header>

            {/* Categories Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Shop by Categories</h2>
                    <div className="row text-center">
                        <div className="col-lg-4 mb-4">
                            <div className="card shadow-sm">
                                <img src="/med.jpeg" className="card-img-top" alt="Medicines" />
                                <div className="card-body">
                                    <h5 className="card-title">Medicines</h5>
                                    <p className="card-text">Browse a wide range of medicines for all your healthcare needs.</p>
                                    <a href="/admin/products?category=medicines" className="btn btn-success">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card shadow-sm">
                                <img src="/supplements.jpeg" className="card-img-top" alt="Supplements" />
                                <div className="card-body">
                                    <h5 className="card-title">Health Supplements</h5>
                                    <p className="card-text">Boost your health with the best supplements for vitality.</p>
                                    <a href="/admin/products?category=supplements" className="btn btn-success">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card shadow-sm">
                                <img src="personalcare.jpeg" className="card-img-top" alt="Personal Care" />
                                <div className="card-body">
                                    <h5 className="card-title">Personal Care</h5>
                                    <p className="card-text">Explore personal care items to enhance your well-being.</p>
                                    <a href="/admin/products?category=personal-care" className="btn btn-success">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-success text-white text-center py-4">
                <div className="container">
                    <p className="mb-0">© 2024 PharmaPro. All Rights Reserved.</p>
                    <p>Contact Us: support@pharmapro.com</p>
                </div>
            </footer>
        </div>
    );
}

