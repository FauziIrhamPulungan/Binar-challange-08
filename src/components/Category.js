import React from "react";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../redux/features/Categoryslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "swiper/css";

function Category() {
  const { Category } = useSelector((state) => state.category);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div>
      <div className="titlec d-flex justify-content-between">
        <h1 style={{ marginLeft: "20px", color: "white" }}>
          Browse by category
        </h1>
      </div>

      <div
        className="buttonc"
        style={{
          margin: "5px",
        }}
      >
        {Category.genres.map((genre) => (
          <button
            className="buttonc"
            onClick={() => navigate("/search/" + genre.name)}
            style={{
              borderRadius: "50px",
              backgroundColor: "white",
              height: "40px",
              width: "100px",
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;
