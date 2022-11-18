import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getToprated } from "../redux/features/topratedSlice";

function Toprated() {
  const { Toprated } = useSelector((state) => state.toprated);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToprated());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <h1 style={{ color: "white", margin: "20px" }}>Top Rated</h1>
        </div>

        <div className="topr">
          {Toprated?.results?.map((film) => (
            <span onClick={() => navigate("/Detail/" + film.id)}>
              <div
                className="card"
                style={{
                  borderRadius: "10px",
                  borderColor: "white",
                  background: "black",
                  height: "300px",
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
                  }}
                />
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Toprated;
