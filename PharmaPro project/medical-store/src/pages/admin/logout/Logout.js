import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Clear localStorage for user logout
        localStorage.removeItem("user");

        // Redirect to homepage after 3 seconds
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);

        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, [navigate]);

    return (
        <div className="container my-4">
            <h2 className="text-center text-success">User Logged Out Successfully!</h2>
            {location.state && (
                <p className="text-center mt-3">
                    Goodbye, {location.state.name}! You will be redirected to the homepage shortly...
                </p>
            )}
        </div>
    );
}


