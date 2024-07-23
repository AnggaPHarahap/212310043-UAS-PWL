import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#3b6f7b" }}
    >
      <div className="container">
        <a className="navbar-brand text-white" href="/">
          Logo Siancimun
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/ profil"
              >
                Profil Desa
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pemerintahan
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/presensi">
                    Presensi
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/lembaga-desa">
                    Lembaga Desa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/pegawai-desa">
                    Pegawai Desa
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/agenda">
                Agenda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/program">
                Program
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/informasi">
                Informasi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
