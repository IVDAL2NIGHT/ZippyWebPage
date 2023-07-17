import React from "react";
import "./Navbar.css";

function NavbarStation() {
  return (
    <nav
      class="navbar navbar-dark navbar-expand-md bg-dark py-3"
      data-bs-smooth-scroll="true"
      data-bs-target="#navcol-6"
      style={{
        background: "var(--bs-primary)",
        fontSize: "35px",
        color: "var(--swiper-theme-color)",
        "--bs-dark": "#01182e",
        "--bs-dark-rgb": "1, 24, 46",
        "--bs-primary": "#01182e",
        "--bs-primary-rgb": "1, 24, 46"
      }}
    >
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="./index.html">
          <span
            class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"
            style={{
              background: "#e1e619",
              color: "var(--bs-black)",
              width: "38px",
              height: "38px"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icon-tabler-scooter-electric fs-2 d-xl-flex flex-row"
              style={{ fontSize: "28px" }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="18" cy="17" r="2"></circle>
              <circle cx="6" cy="17" r="2"></circle>
              <path d="M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1"></path>
              <path d="M10 4l-2 4h3l-2 4"></path>
            </svg>
          </span>
          <span class="fs-4" style={{ fontSize: "22px" }}>
            Zippy
          </span>
        </a>
        <button
          data-bs-toggle="collapse"
          class="navbar-toggler"
          data-bs-target="#navcol-6"
        >
          <span class="visually-hidden">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse flex-grow-0 order-md-first"
          id="navcol-6"
        >
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active fs-5" href="#" style={{ fontSize: "18px" }}>
                Sobre nosotros
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fs-5"
                href="#Contact Details"
                style={{ fontSize: "18px", color: "var(--bs-gray-400)" }}
              >
                Contacto
              </a>
            </li>
          </ul>
          <div class="d-md-none my-2">
            <button class="btn btn-light me-2" type="button">
              <span style={{ color: "rgb(1, 24, 46)" }}>Iniciar sesión</span>
            </button>
            <button
              class="btn btn-primary"
              type="button"
              style={{ background: "#e1e619" }}
            >
              <span style={{ color: "rgb(1, 24, 46)" }}>Registro</span>
            </button>
          </div>
        </div>
        <div class="d-none d-md-block">
          <a class="btn btn-light me-2" role="button" href="login.html">
            Iniciar Sesión
          </a>
          <a
            class="btn btn-primary"
            role="button"
            href="login.html"
            style={{ background: "#e1e619", color: "var(--bs-black)" }}
          >
            Registro
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarStation;
