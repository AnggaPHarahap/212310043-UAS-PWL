import React from "react";
import bg from "../../../assets/background.png";
import rumah from "../../../assets/rumah.png";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <div
        className="body"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <Container className="h-100 d-flex align-items-center">
          <Row className="w-100 align-items-center">
            <Col md={5}>
              <span
                className="text-white display-3 fw-bold"
                style={{ textDecorationColor: "#CFF4D2" }}
              >
                Digitalisasi Desa
              </span>
              <p className="text-white mt-3">
                Membawa Desa ke Era Digital melalui Platform Website
              </p>
            </Col>
            <Col md={7} className="d-flex justify-content-end">
              <a href="">
                <img src={rumah} alt="image" style={{ width: "600px" }} />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
