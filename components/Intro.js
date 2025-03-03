import React from "react";
import getConfig from "next/config";
import Link from "next/link";

const { publicRuntimeConfig } = getConfig();

export const Intro = ({ title, description, image, buttons }) => {
  return (
    <div className="bg-primary min-vh-100 d-flex align-items-center py-5 px-4 px-md-5">
      <div className="container">
        <div className="row align-items-center text-center text-md-start g-5">
          {" "}
          <div className="col-12 col-md-6 mb-2 mb-md-0 px-3">
            {" "}
            <h1 className="text-secondary fw-bold display-3 mb-4">
              {title}
            </h1>{" "}
            <p className="text-secondary mb-4">{description}</p>{" "}
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-4">
              {" "}
              {buttons.map((value, index) =>
                value.isPrimary ? (
                  <Link
                    className="btn btn-secondary px-4 py-2"
                    key={index}
                    href={value.link}
                  >
                    {value.title}
                  </Link>
                ) : (
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-secondary px-4 py-2"
                    key={index}
                    href={value.link}
                  >
                    {value.title}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end px-3">
            {" "}
            <img
              className="img-fluid my-4 my-md-0 card-image"
              width="250"
              height="250"
              src={image}
              alt="profile of harisamjad"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const About = ({ title, description }) => {
  return (
    <div id="about" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="px-sm-5">
          {description.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
