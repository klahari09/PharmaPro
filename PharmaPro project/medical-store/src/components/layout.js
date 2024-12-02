import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          <img src="/icon.jpeg" alt="Logo" width="30" className="me-2" />
          PharmaPro
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/">
                <i className="bi bi-house-door-fill me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/contact">
                <i className="bi bi-envelope-fill me-1"></i> Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark fw-semibold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle me-1"></i> Admin
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                <li>
                  <Link className="dropdown-item" to="/admin/products">
                    <i className="bi bi-box-seam me-2"></i> Products
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    <i className="bi bi-person-fill me-2"></i> Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/wishlist">
                    <i className="bi bi-heart-fill me-2"></i> WishList
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cart">
                    <i className="bi bi-cart-fill me-2"></i> Cart
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/checkout">
                    <i className="bi bi-credit-card-fill me-2"></i> Check Out
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item text-danger" to="/logout">
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <div
      className="text-center p-4 border-top"
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "monospace",
        fontSize: "14px",
      }}
    >
      <img src="/icon.jpeg" alt="Logo" width="30" className="me-2" />
      <span className="fw-bold text-primary">PharmaPro</span> &copy; 2024
    </div>
  );
}
