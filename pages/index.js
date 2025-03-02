import React, { Fragment } from "react";
import { Nav } from "../components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { Intro, About } from "../components/Intro";
import { Services, Projects, Skills } from "../components/Work";
import { Footer, Contact } from "../components/Footer";
import {
  about,
  contact,
  intro,
  navigation,
  projects,
  SEO,
  skills,
  work,
} from "../config/config";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <Analytics />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About title={about.title} description={about.description} />
      <Services title={work.title} cards={work.cards} />
      <Skills skills={skills} />
      <Projects title={projects.title} cards={projects.cards} />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}
