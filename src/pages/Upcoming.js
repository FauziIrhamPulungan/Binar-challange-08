import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUpcoming } from "../redux/features/upcomingSlice";

// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";

function Upcoming() {
  const { Upcoming } = useSelector((state) => state.upcoming);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcoming());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <h1 style={{ color: "white", margin: "20px" }}>Up Coming</h1>
        </div>

        <Swiper
          style={{ marginLeft: "30px" }}
          {...options}
          className="mySwiper"
        >
          <div
            classname="topr"
            // style={{
            //   padding: "50px",
            //   display: "grid",
            //   gridTemplateColumns: "repeat(5, minmax(0, 1fr)",
            //   gap: "1rem",
            //   background: "black",
            // }}
          >
            {Upcoming?.results?.map((film) => (
              <SwiperSlide>
                <span onClick={() => navigate("/Detail/" + film.id)}>
                  <div
                    id="cardu"
                    className="card"
                    style={{
                      borderRadius: "10px",
                      borderColor: "white",
                      background: "black",
                      height: "250px",
                      width: "250px",
                      overflow: "hidden",
                      position: "relative",
                      // marginBottom: "70px",
                      marginTop: "50px",
                      marginLeft: "30px",
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
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Upcoming;

const options = {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    clickable: true,
  },
  breakpoints: { 500: { slidesPerView: 5, spaceBetween: 20 } },
};
