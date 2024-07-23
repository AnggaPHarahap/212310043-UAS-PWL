import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import icon from "../../assets/Icon.png";
import berita from "../../assets/berita1.png";
import berita2 from "../../assets/berita2.png";
import maps from "../../assets/Maps.png";
import Hero from "./components/hero";

const HomePage = () => {
  return (
    <>
      <Hero />

      <Container>
        <Row>
          {[
            "Layanan Masyarakat",
            "Potensi Desa",
            "Event Desa",
            "Pembangunan Desa",
          ].map((title, index) => (
            <Col md={3} key={index}>
              <a href="">
                <img src={icon} alt="icon" style={{ width: "300px" }} />
              </a>
              <p className="text-center">{title}</p>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <p style={{ color: "#215273", fontWeight: "bold" }}>
              Berita Terkini
            </p>
            <hr style={{ border: "1px solid #215273", width: "100%" }} />
            <div className="d-flex mb-4">
              <a href="">
                <img
                  src={berita}
                  alt="icon"
                  className="berita-img"
                  style={{ marginRight: "15px" }}
                />
              </a>
              <div>
                <p
                  className="text-align-justify"
                  style={{ color: "#215273", fontWeight: "bold" }}
                >
                  PT. PIS serahkan CSR bantuan alat tulis Siswa/i SD 167 paket
                </p>
                <p>
                  Manegement PT. Paluta Inti Sawit (PIS) Maneger Berinto
                  Simanjorang diwakili Kepala Tata Usaha Ali Umar menyampaikan
                  kegiatan Corporate Social Responsbility (CSR) PT. PIS
                  penyerahan bantuan alat tulis untuk siswa/i sekolah dasar(SD)
                  untuk anak masyarakat Desa Siancimun Kecamatan Halongonan
                  Timur.
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} className="offset-md-1">
            <p style={{ color: "#215273", fontWeight: "bold" }}>Pengumuman</p>
            <hr style={{ border: "1px solid #215273", width: "100%" }} />
            <div className="mt-4">
              {["Vaksin Booster 2", "Kerja Bakti", "Lowongan Kerja"].map(
                (announcement, index) => (
                  <Button
                    key={index}
                    className="mb-2"
                    style={{
                      width: "100%",
                      height: "50px",
                      backgroundColor: "#215273",
                      color: "white",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {announcement}
                  </Button>
                )
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={8}>
            <div className="d-flex mb-4">
              <a href="">
                <img
                  src={berita2}
                  alt="icon"
                  className="berita-img"
                  style={{ marginRight: "15px" }}
                />
              </a>
              <div>
                <p
                  className="text-align-justify"
                  style={{ color: "#215273", fontWeight: "bold" }}
                >
                  Pemerintah Desa Bekerja Sama Dengan PT SSSL Memperbaiki
                  Lapangan Sepak Bola
                </p>
                <p>
                  Pelaksanaan perbaikan lapangan ini dipantau langsung oleh
                  Camat Halongonan Timur, Ahmad Syukri Siregar, S.STP, M.AP,
                  yang di wakili Staf Kantor Camat Haltim Beja, Kepala Desa
                  Siancimun Ardiansyah Harahap, Maneger PT SSSL Raymon Wirya
                  D.S, di dampingi Humas PT.SSSL Murdani Siregar, Ketua NNB
                  Siancimun Alan Debby Hasibuan.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <p style={{ color: "#215273", fontWeight: "bold" }}>Galeri Desa</p>
            <hr style={{ border: "1px solid #215273", width: "100%" }} />
            <Row>
              {[...Array(3)].map((_, index) => (
                <img
                  key={index}
                  src={berita2}
                  alt="Galerix"
                  style={{ width: "250px", height: "100%" }}
                />
              ))}
            </Row>
          </Col>
          <Col md={3} className="offset-md-1">
            <p style={{ color: "#215273", fontWeight: "bold" }}>
              Struktur Organisasi
            </p>
            <hr style={{ border: "1px solid #215273", width: "100%" }} />
            {/* <div className="d-flex mb-4">
              <Carousel>
                {["berita2.png", "Kades.png", "berita1.png"].map(
                  (img, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={`${process.env.PUBLIC_URL}/image/${img}`}
                        className="d-block w-100"
                        alt="..."
                      />
                    </Carousel.Item>
                  )
                )}
              </Carousel>
            </div> */}
            <div className="d-flex justify-content-center">
              <Button
                style={{
                  width: "493px",
                  height: "70%",
                  backgroundColor: "#215273",
                  color: "white",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                Ardiansyah
                <span style={{ fontWeight: "normal" }}>Kepala Desa</span>
              </Button>
            </div>
            <p>Kode Pos: 22753 </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="mt-5">
            <a
              href="https://maps.app.goo.gl/Ut3tpucGqLnU85Pq6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={maps}
                alt="icon"
                className="berita-img"
                style={{ marginRight: "15px" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
