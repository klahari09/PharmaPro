import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState({ name: "", email: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login/Signup
    const navigate = useNavigate();

    // Monitor user login status
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false); // Automatically log out
        }
    }, []); // Runs on mount

    // Watch for changes in localStorage (logout effect)
    useEffect(() => {
        const handleStorageChange = () => {
            const storedUser = localStorage.getItem("user");
            if (!storedUser) {
                setIsLoggedIn(false);
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.name && user.email) {
            localStorage.setItem("user", JSON.stringify(user)); // Save user details
            setIsLoggedIn(true);
            alert(isSignUp ? "User Signed Up successfully!" : "User Logged In successfully!");
        } else {
            alert("Please fill out all fields.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user"); // Clear user details
        navigate("/logout", { state: user }); // Pass user details to Logout.js
    };

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp); // Toggle between Login and Sign Up
    };

    return (
        <div className="page-container d-flex align-items-center justify-content-center">
            {!isLoggedIn ? (
                <div className="form-container mx-auto">
                    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm wider-form">
                        <h2 className="text-center mb-4">{isSignUp ? "Sign Up" : "Login"}</h2>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className={`btn w-100 ${isSignUp ? "btn-success" : "btn-primary"}`}>
                            {isSignUp ? "Sign Up" : "Login"}
                        </button>
                        <p className="text-center mt-3">
                            {isSignUp ? (
                                <>
                                    Already have an account?{" "}
                                    <button
                                        type="button"
                                        className="btn btn-link text-primary"
                                        onClick={toggleSignUp}
                                    >
                                        Login
                                    </button>
                                </>
                            ) : (
                                <>
                                    Don't have an account?{" "}
                                    <button
                                        type="button"
                                        className="btn btn-link text-success"
                                        onClick={toggleSignUp}
                                    >
                                        Sign Up
                                    </button>
                                </>
                            )}
                        </p>
                    </form>
                </div>
            ) : (
                <div className="card wider-card text-center">
                    <div className="card-body">
                        <h2 className="card-title mb-4">Profile</h2>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <button className="btn btn-danger w-100" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
