import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black py-5 text-light">
      <div className="container container-fluid mt-5 w-100 ">
        <div className="d-lg-flex justify-content-between">
          <div className="intro ">
            <h5 className="py-2 text-danger">
              <i class="fa-solid fa-bowl-food"></i> Restopedia
            </h5>
            <p>
              Lorem ipsum dolor sit,
              <br /> amet consectetur adipisicing elit. <br /> Inventore soluta
              nulla hic quibusdam ipsa.
            </p>
            <p>Code Licensed Luminar, docs CC by 3.0</p>
            <p>Currently v5.3.2.</p>
          </div>
          <div className="links d-flex flex-column">
            <h5 className="py-2 text-danger">Links</h5>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </div>
          <div className="Guides d-flex flex-column">
            <h5 className="py-2 text-danger">Guides </h5>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              lorem
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              lorem
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              Lorem
            </a>
          </div>
          <div className="Contact d-flex flex-column">
            <h5 className="py-2 text-danger">Contact Us</h5>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Email id Please"
                className="form-control"
              />
              <button className="btn btn-danger ms-2">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="icons d-flex justify-content-between mt-3">
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center p-4">
          <p>Copyright © 2024 Restopedia. Built with React.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
