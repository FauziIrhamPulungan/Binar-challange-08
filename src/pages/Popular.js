import React from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../redux/features/allSlice";

function Popular() {
  const { All } = useSelector((state) => state.all);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // getData();
    dispatch(getAll());
  }, [dispatch]);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          alt="/"
          style={{ height: "60vh", width: "100%" }}
          src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
        />

        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "60vh",
            background: "rgba(0,0,0,.5)",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "61px",
              fontWeight: "600",
              marginTop: "130px",
              padding: "50px",
            }}
          >
            Popular Movies
          </h1>
        </div>
        <div>
          <h1 style={{ padding: "50px", marginTop: "50px", color: "white" }}>
            Popular Movies
          </h1>

          <div
            className="cardp"
            style={{
              padding: "30px",
              // display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr)",
              //     // gap: "1rem",
              marginBottom: "50px",
            }}
          >
            {All?.results?.map((film) => (
              <div>
                <span onClick={() => navigate("/Detail/" + film.id)}>
                  <div
                    className="card"
                    style={{
                      background: "black",
                      borderRadius: "10px",
                      borderColor: "white",
                      width: "250px",
                      height: "400px",
                      marginLeft: "50px",
                      marginBottom: "50px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <div
                      className="card-info"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        color: "black",
                      }}
                    >
                      <h5
                        style={{
                          marginLeft: "25px",
                          color: "white",
                        }}
                      >
                        {film.title}
                      </h5>
                      <p style={{ marginLeft: "25px", color: "white" }}>
                        ⭐ {(film.vote_average / 2).toFixed(1)} / 5
                      </p>
                    </div>
                    <img
                      className="cardimage"
                      src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </span>
              </div>
            ))}
          </div>

          <footer
            className="d-flex justify-content-center"
            style={{ background: "red" }}
          >
            <span style={{ color: "white" }}>&copy;2022 Created by FiP</span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Popular;
