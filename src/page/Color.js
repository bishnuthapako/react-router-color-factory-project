import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Color({ colors }) {
  const navigate = useNavigate();
  const { color } = useParams();
  const findColor = colors.find((cname) => cname.name === color);

  if (!findColor) return <Navigate to="/" />;

  return (
    <div
      className="color-background text-center"
      style={{ backgroundColor: `${findColor.color}` }}
    >
      <div className="main">
        <h1 className="text-uppercase">THIS IS {findColor.name}</h1>
        <h1>ISN'T IT BEAUTIFUL?</h1>
        <button
          onClick={() => navigate("/")}
          type="button"
          className="btn btn-large btn-info fw-bold"
          style={{ width: "200px" }}
        >
          GO BACK
        </button>
      </div>
    </div>
  );
}

export default Color;
