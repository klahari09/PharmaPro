import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const params = useParams();
  const [initialData, setInitialData] = useState();
  const [validationErrors, setValidationErrors] = useState({});

  function getProduct() {
    fetch("http://localhost:4000/products/" + params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((data) => {
        setInitialData(data);
      })
      .catch((error) => {
        alert("Unable to read the product details.");
      });
  }

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const product = Object.fromEntries(formData.entries());

    if (!product.name || !product.brand || !product.category || !product.price || !product.description) {
      alert("Please fill all the fields!!!");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/products/" + params.id, {
        method: "PATCH",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        // Product updated correctly
        navigate("/admin/products");
      } else if (response.status === 400) {
        setValidationErrors(data);
      } else {
        alert("Unable to update the product.");
      }
    } catch (error) {
      alert("Unable to connect to the server!");
    }
  }

  useEffect(getProduct, []);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 mx-auto rounded border p-4 shadow-sm">
          <h2 className="text-center mb-5 text-primary">Edit Product</h2>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label text-success">ID</label>
            <div className="col-sm-8">
              <input readOnly className="form-control-plaintext" defaultValue={params.id} />
            </div>
          </div>
          {initialData && (
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label text-success">Name</label>
                <div className="col-sm-8">
                  <input className="form-control" name="name" defaultValue={initialData.name} />
                  <span className="text-danger">{validationErrors.name}</span>
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-4 col-form-label text-success">Brand</label>
                <div className="col-sm-8">
                  <input className="form-control" name="brand" defaultValue={initialData.brand} />
                  <span className="text-danger">{validationErrors.brand}</span>
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-4 col-form-label text-success">Category</label>
                <div className="col-sm-8">
                  <select className="form-select" name="category" defaultValue={initialData.category}>
                    <option value="Other">Others</option>
                    <option value="Pain Reliever">Pain Reliever</option>
                    <option value="Antibiotic">Antibiotic</option>
                    <option value="Antihistamine">Antihistamine</option>
                    <option value="Cholesterol Medication">Cholesterol Medication</option>
                    <option value="Acid Reducer">Acid Reducer</option>
                    <option value="Blood Pressure Medication">Blood Pressure Medication</option>
                    <option value="Bronchodilator">Bronchodilator</option>
                  </select>
                  <span className="text-danger">{validationErrors.category}</span>
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-4 col-form-label text-success">Price</label>
                <div className="col-sm-8">
                  <input className="form-control" name="price" type="number" step="0.01" min="1" defaultValue={initialData.price} />
                  <span className="text-danger">{validationErrors.price}</span>
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-4 col-form-label text-success">Description</label>
                <div className="col-sm-8">
                  <textarea className="form-control" name="description" rows="4" defaultValue={initialData.description} />
                  <span className="text-danger">{validationErrors.description}</span>
                </div>
              </div>

              <div className="row mb-3">
                <div className="offset-sm-4 col-sm-8">
                  <img src={"http://localhost:4000/images/" + initialData.imageFilename} width="150" alt="..." />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-4 col-form-label text-success">Image</label>
                <div className="col-sm-8">
                  <input className="form-control" type="file" name="image" />
                  <span className="text-danger">{validationErrors.image}</span>
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-4 col-form-label text-success">Created At</label>
                <div className="col-sm-8">
                  <input readOnly className="form-control-plaintext" defaultValue={initialData.createdAt.slice(0, 10)} />
                </div>
              </div>

              <div className="row">
                <div className="offset-sm-4 col-sm-4 d-grid">
                  <button type="submit" className="btn btn-primary">Update</button>
                </div>
                <div className="col-sm-4 d-grid">
                  <Link className="btn btn-outline-secondary" to="/admin/products" role="button">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
