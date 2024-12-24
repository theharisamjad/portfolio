import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  icons?: { icon: any; link: string }[] | null;
}

interface SectionProps {
  title: string;
  cards: CardProps[];
}

export const Skills: React.FC<SectionProps> = ({ title, cards }) => {
  return (
    <div id="skills" className="bg-secondary py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icons={value.icons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC<SectionProps> = ({ title, cards }) => {
  return (
    <div id="projects" className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold">{title}</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icons={value.icons}
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

export const Card: React.FC<CardProps> = ({ title, description, icons }) => {
  return (
    <div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: '20rem' }}>
      <h4 className="text-primary">{title}</h4>
      <p className="text-dark">{description}</p>
      <div className="text-end row">
        {icons &&
          icons.map((value, index) => (
            <Link key={index} href={value.link} target="_blank" rel="noreferrer">
              <div >
                <FontAwesomeIcon className="col icon-style mx-1" icon={value.icon} size="2x" />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};