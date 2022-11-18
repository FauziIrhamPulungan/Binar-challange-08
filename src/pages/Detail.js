import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/features/detailSlice";
import { getCast } from "../redux/features/Castslice";
import { Button } from "react-bootstrap";

// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";

function Detail() {
  const { id } = useParams();

  const { Detail } = useSelector((state) => state.detail);
  const { Credits } = useSelector((state) => state.cast);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getCast(id));
  }, [dispatch, id]);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
        }}
      >
        <div
          className="example1"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",

            background: "rgba(0,0,0,.5)",
          }}
        ></div>
        <div
          id="examplee"
          className="example"
          style={{
            background: `url('https://image.tmdb.org/t/p/w500${Detail.poster_path}')`,
            height: "100vh",
            width: "100%",
            marginBottom: "10px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div style={{ position: "relative", height: "100vh" }}>
        <div
          className="3"
          style={{
            position: "absolute",
            left: "40px",
            top: "190px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "61px",
              fontWeight: "600",
            }}
          >
            {Detail.original_title}
          </h1>
          <h4
            className="d-flex"
            style={{
              gap: "1rem",
              color: "white",
              fontSize: "18px",
              marginTop: "15px",
              marginBottom: "30px",
            }}
          >
            {Detail.genres?.map((el) => (
              <button
                className="buttond"
                style={{
                  borderRadius: "10px",
                  background: "red",
                  fontWeight: "800",
                  color: "white",
                  border: "none",
                }}
                key={el.id}
              >
                {el.name}
              </button>
            ))}
          </h4>
          <p style={{ color: "white", fontSize: "18px", marginTop: "15px" }}>
            {Detail.overview}
          </p>
          <h5 style={{ color: "white", fontSize: "18px", marginTop: "15px" }}>
            ⭐ {(Detail.vote_average / 2).toFixed(1)} / 5
          </h5>
          <Button
            href={`https://www.youtube.com/results?search_query=${
              Detail.original_name || Detail.original_title
            }`}
            className=" trailer bg-danger"
            style={{
              marginTop: "15px",
              color: "white",
              border: "50px",
              borderRadius: "500px",
              width: "170px",
              height: "40px",
              fontWeight: "700",
            }}
          >
            Watch Trailer
          </Button>
          <img
            alt=""
            src="/icons/circle-play-regular.svg"
            style={{
              position: "relative",
              right: "160px",
              width: "15px",
              top: "8px",
            }}
          />
        </div>
      </div>

      <div
        className="cast"
        style={{
          background: "black",
          width: "100%",
          padding: "10px",
        }}
      >
        <h1 style={{ color: "white" }}>Cast</h1>

        <Swiper
          style={{ marginLeft: "10px" }}
          {...options}
          className="mySwiper"
        >
          {Credits.cast
            .filter((casts, index) => index <= 7)
            .map((casts) => (
              <SwiperSlide>
                <div
                  id="cardc1"
                  className="card"
                  style={{
                    borderRadius: "10px",
                    borderColor: "white",
                    marginTop: "50px",
                    marginLeft: "30px",
                    background: "black",
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
                      className="example3"
                      style={{
                        marginLeft: "25px",
                        color: "white",
                      }}
                    >
                      {casts.original_name}
                    </h5>
                    <p
                      style={{
                        marginLeft: "25px",
                        color: "white",
                      }}
                    >
                      {casts.character}
                    </p>
                  </div>

                  <img
                    className="cardimage"
                    src={`https://image.tmdb.org/t/p/original${casts.profile_path}`}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <footer
        className="d-flex justify-content-center"
        style={{ background: "red" }}
      >
        <span style={{ color: "white" }}>&copy;2022 Created by FiP</span>
      </footer>
    </div>
  );
}

export default Detail;

const options = {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: { 500: { slidesPerView: 5, spaceBetween: 20 } },
};
