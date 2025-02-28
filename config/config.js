import profile from "./profile.png";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Haris",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Haris",
  description: "A Software Engineer developing cool mobile applications.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "View Resume",
      link: "https://docs.google.com/document/d/1vpr6HTMBLcIuFqF2PzaKUOWN_jIo-WIEJA7SM6fETQo/edit?usp=sharing",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "I'm a software engineer who started his career in 2018 as junior application developer, after spending more than 7 years in the industry, I now specialize in cross-platform mobile development with Meta's React Native, i love to create user-centric applications that are picture perfect and easy to use.",
    "The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. Personally i like to build side projects that I opensource from a place of empathy - for future developers, and users..",
    "When I’m not programming, I focus on my hobbies which are: playing football, video games, meeting people and growing my network.",
  ],
};

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Mobile App Development",
      description:
        "I create pixel perfect iOS and Andriod apps using React Native/Expo or Xamarin/.NET MAUI.",
      icons: null,
    },
    {
      title: "Training & Mentorship",
      description:
        "I assist people in learning programming and troubleshooting bugs encountered during mobile development.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Fasset Mobile App",
      description:
        "A fintech app that focuses on digital asset investment and tokenized real-world assets, giving opportunity for users to invest in stocks and cryptocurrencies.",
      tags: ["Javascript", "React Native", "Redux", "Jest"],
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/fasset-buy-digital-assets/id1599893605",
          toolTipText: "App Store",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.fasset.cashapp",
          toolTipText: "Google Play Store",
        },
      ],
    },
    {
      title: "Graana.com Mobile App",
      description:
        "A real estate app that helps users to buy/rent or sell their properties online within a few clicks in secured and transparent manner.",
      tags: ["TypeScript", "React Native", "Redux", "React-native-maps"],
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/pk/app/graana-real-estate-portal/id1438849353",
          toolTipText: "App Store",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.graanaapp&hl=en&pli=1",
          toolTipText: "Google Play Store",
        },
      ],
    },
    {
      title: "WorksApp",
      description:
        "A real estate lead management app that streamlines property transactions with lead tracking, client management, deal monitoring, and management of day-to-day tasks.",
      tags: ["JavaScript", "React Native", "React-navigation", "Axios"],
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/app/worksapp-graana/id6499518397",
          toolTipText: "App Store",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.graana.worksapp&hl=en",
          toolTipText: "Google Play Store",
        },
      ],
    },

    {
      title: "Weather World",
      description:
        "A simple mobile application that fetches weather data dynamically by city search in real time and shows weather forecast for next 3 days.",
      tags: [
        "TypeScript",
        "Expo",
        "Redux/toolkit",
        "React-native-paper",
        "Eas",
      ],
      icons: [
        {
          icon: faCloudSunRain,
          link: "https://appetize.io/app/b_54wt3owegydw4jszwrdx5up22i",
          toolTipText: "Demo",
        },
        {
          icon: faGithub,
          link: "https://github.com/theharisamjad/WeatherWorld",
          toolTipText: "Github",
        },
      ],
    },

    {
      title: "Note IT",
      description:
        "A Note application developed in React Native/Expo which users can use to jolt down their notes and day-to-day tasks.",
      tags: ["TypeScript", "Expo", "Zustand", "Async-storage", "Eas"],
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/theharisamjad/Note-IT",
          toolTipText: "Github",
        },
      ],
    },
  ],
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "C#",
  "Java",
  "Swift",
  "HTML",
  "CSS",
  "React",
  "React Native",
  "Redux",
  "Zustand",
  "Expo",
  "Firebase",
  "Xamarin",
  ".NET MAUI",
  "Android",
  "iOS",
  "SQL",
  "MongoDB",
  "Realm",
  "SQLite",
  "Node JS",
  "Express JS",
  "Github",
  "Figma",
  "Jira",
  "Xcode",
  "Android Studio",
  "EAS",
];

export const contact = {
  title: "Get in touch",
  description:
    "Please do not hesitate to reach out directly by email at harisamjad0525@gmail.com or drop a text at +923336610199",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:harisamjad0525@gmail.com",
      isPrimary: true,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title:
    "Haris Amjad | Senior Software Engineer | React Native | Xamarin Developer",
  description:
    "I am a software engineer who creates cool and innovative cross platform mobile applications using react native & expo",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@harisamjad",
  description: "Senior Software Engineer | React Native | Xamarin Developer",
  cards: [
    {
      title: "My website",
      link: "/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/theharisamjad",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/haris-amjad-71b5a3117/",
    },
  ],
};
