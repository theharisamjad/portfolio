import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Tooltip from "../components/Tooltip";

export const Services = ({ title, cards }) => {
  return (
    <div id="services" className="bg-secondary py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              link={value.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Skills = ({ skills, color = "primary" }) => {
  return (
    <div id="skills" className="bg-light py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">Skills</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center mt-5">
          {skills.map((value, index) => (
            <span
              key={index}
              className={`badge bg-primary me-3 mb-2 mt-2 p-1.5`} // Added p-2 for padding
              style={{ fontSize: "1.1rem" }} // Increased font size
            >
              {value}
            </span>
          ))}
        </div>
        {/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
      </div>
    </div>
  );
};

export const Projects = ({ title, cards }) => {
  return (
    <div id="projects" className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold">Projects</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icons={value.icons}
              tags={value.tags}
            />
          ))}
        </div>
        {/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
      </div>
    </div>
  );
};

export const Card = ({ title, description, icons, tags }) => {
  return (
    <div
      className="card py-3 px-3 mx-sm-4 my-4 card-work"
      style={{ width: "20rem" }}
    >
      <h4 className="text-primary">{title}</h4>
      <p className="text-dark">{description}</p>
      <div className="d-flex flex-row flex-wrap justify-content-center mb-2">
        {tags?.map((value, index) => (
          <span
            key={index}
            className={`badge bg-primary me-3 mb-1 mt-2 p-1.5`} // Added p-2 for padding
            style={{ fontSize: "1.0rem" }} // Increased font size
          >
            {value}
          </span>
        ))}
      </div>
      <div className="text-end mt-auto">
        {icons &&
          icons.map((value, index) => (
            <Tooltip key={index} text={value.toolTipText} position="bottom">
              <Link
                target="_blank"
                rel="noreferrer"
                key={index}
                href={value.link}
              >
                <FontAwesomeIcon
                  className="icon-style mx-1"
                  icon={value.icon}
                  size="2x"
                />
              </Link>
            </Tooltip>
          ))}
      </div>
    </div>
  );
};
