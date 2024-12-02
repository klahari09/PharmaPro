/*export default function Contact() {
    return(
        <div className="container my-4">
            <h2>Contact Us.</h2>
        </div>
    )
}*/
import React from "react";

export default function Contact() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container">
                    <a className="navbar-brand" href="/">
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
                                <a className="nav-link" href="/">
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
                                <a className="nav-link active" href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Contact Header */}
            <header className="bg-success text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">Contact Us</h1>
                    <p className="lead">
                        We're here to help! Reach out with any questions, feedback, or support needs.
                    </p>
                </div>
            </header>

            {/* Contact Form Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Get in Touch</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="5"
                                        placeholder="Type your message here"
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-success btn-lg">
                                        Submit
                                    </button>
                                </div>
                            </form>
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
