import React from "react";
import Link from "next/link";

export const Contact = ({ title, description, buttons }) => {
  return (
    <div id="contact" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div>
          <p>{description}</p>
          <div className="">
            {buttons.map((value, index) =>
              value.isPrimary ? (
                <Link className="btn btn-primary" key={index} href={value.link}>
                  {value.title}
                </Link>
              ) : (
                <Link
                  className="btn btn-outline-primary my-1 mx-3"
                  key={index}
                  href={value.link}
                >
                  {value.title}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-secondary text-center py-2 px-5">
      <div className="container text-muted">
        <small>
          &copy; 2025{" "}
          <Link target="_blank" href="https://github.com/theharisamjad">
            harisamjad
          </Link>
        </small>
      </div>
    </footer>
  );
};
