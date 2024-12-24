import React from 'react';
import Link from 'next/link'

interface Button {
  title: string;
  link: string;
  isPrimary: boolean;
}

interface ContactProps {
  title: string;
  description: string;
  buttons: Button[];
}

export const Contact = ({ title, description, buttons }: ContactProps) => {
  return (
    <div id="contact" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="px-sm-5">
          <p>{description}</p>
          <div className="">
            {buttons.map((value, index) => (
              (value.isPrimary) ?
                <Link key={index} href={value.link}>
                  <button className="btn btn-primary my-1 mx-3">
                    {value.title}
                  </button>
                </Link>
                :
                <Link key={index} href={value.link}>
                  <button className="btn btn-outline-primary my-1 mx-3">
                    {value.title}
                  </button>
                </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Footer = () => {
  return (
    <footer className="bg-secondary text-center py-2 px-5">
      <div className="container text-muted">
        <small>&copy; 2021 {" "}
          <Link href="https://github.com/hashirshoaeb">
            <>hashirshoaeb</>
          </Link>
          . Open sourced with love under {" "}
          <Link href="https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE">
            MIT
          </Link>
          {" "} License
        </small>
      </div>
    </footer>
  );
}