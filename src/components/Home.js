import "../App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import Trending from "../pages/Trending";
import Category from "./Category";
import Toprated from "../pages/Toprated";
import Upcoming from "../pages/Upcoming";
import "../style/landingPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/features/popularSlicer";

// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";

function Home() {
  const { Movies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      <div>
        <Carousel />
      </div>

      <div className="trending">
        <Trending />
        <Swiper
          {...options}
          style={{ marginLeft: "30px" }}
          className="mySwiper"
        >
          {Movies?.results?.map((film) => (
            <SwiperSlide>
              <span onClick={() => navigate("/Detail/" + film.id)}>
                <div
                  className="card-popular"
                  style={{
                    borderRadius: "10px",
                    background: "black",
                    height: "400px",
                    overflow: "hidden",
                    position: "relative",
                    marginRight: "20px",
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
        </Swiper>
      </div>
      <Category />
      <Toprated />
      <Upcoming />

      <footer
        className=" footer d-flex justify-content-center"
        style={{ background: "red" }}
      >
        <span style={{ color: "white" }}>&copy;2022 Created by FiP</span>
      </footer>
    </div>
  );
}

export default Home;

const options = {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    clickable: true,
  },
  breakpoints: { 500: { slidesPerView: 5, spaceBetween: 20 } },
};
