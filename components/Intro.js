import React from "react";
import getConfig from "next/config";
import Link from "next/link";

const { publicRuntimeConfig } = getConfig();

export const Intro = ({ title, description, image, buttons }) => {
  return (
    <div className="bg-primary py-5 px-5 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center text-center text-sm-start">
          {/* Image Section - Move Below on Small Screens */}
          <div className="col-12 col-sm-6 order-1 order-sm-2 text-center mb-4 mb-sm-0">
            <img
              className="img-fluid card-image"
              width="250"
              height="250"
              src={image}
              alt="profile of harisamjad"
            />
          </div>

          {/* Content Section - Stays Above on Small Screens */}
          <div className="col-12 col-sm-6 order-2 order-sm-1">
            <h1 className="text-secondary fw-bold display-3">{title}</h1>
            <p className="text-secondary">{description}</p>
            <div className="text-center">
              {buttons.map((value, index) =>
                value.isPrimary ? (
                  <Link
                    className="btn btn-secondary my-1 mx-3"
                    key={index}
                    href={value.link}
                  >
                    {value.title}
                  </Link>
                ) : (
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-secondary my-1 mx-3"
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
