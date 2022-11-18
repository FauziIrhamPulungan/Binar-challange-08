import React from "react";

import { Nav } from "react-bootstrap";

function Trending() {
  return (
    <div id="text" className="d-flex justify-content-between">
      <h1 style={{ marginTop: "90px", marginLeft: "30px", color: "white" }}>
        Popular Movie
      </h1>
      <div className="d-flex justify-content-between">
        <Nav.Link className="textt" href="/popular" style={{ color: "red" }}>
          View All
        </Nav.Link>
        <img
          className="icont"
          alt="icon"
          src="/icons/arrow-right-solid.svg"
          style={{
            position: "relative",
            right: "50px",
            width: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default Trending;
