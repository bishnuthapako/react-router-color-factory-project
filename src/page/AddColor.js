import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddColor({ addNewColor }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [color, setColor] = useState("#000000"); // Renish: Incase if the user didn't pick color.

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewColor(name, color);
    navigate("/");
  };

  return (
    <div className="text-center new-img">
      <div className="new-div">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 p-3 text-center" style={{ width: "50%" }}>
            <label className="form-label">Color name:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="form-label"
              name="name"
              value={name}
              placeholder="Enter color name"
              required
            />
            <label className="form-label">Color Value:</label>
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              className="form-control form-control-color mb-2"
              id="form-label"
              name="color"
              value={color}
              title="Choose your color"
              required
            />
            <button type="submit" className="btn btn-primary fw-bold">
              Add a color
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddColor;
