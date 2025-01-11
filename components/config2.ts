/* eslint-disable @typescript-eslint/no-explicit-any */
import { Skill, getSkill } from "./config";
import Forkify from "@/images/forkify.png";
import PortfolioOld from "@/images/portfolio-old.png";
import PortfolioNew from "@/images/portfolio-new.png";
import UrbanTastes from "@/images/urbantastes.png";
import Trackr from "@/images/trackr.png";
import GSAP1 from "@/images/gsaplandingpage1.png";
import GSAP2 from "@/images/gsaplandingpage2.png";
import Weather from "@/images/weatherapp.png";
import Infinity from "@/images/infinitybusiness.png";
import BankistUser from "@/images/bankist-user-page.png";
import Bankist from "@/images/bankist.png";
import Guess from "@/images/guessingthenumber.png";
import Edurights from "@/images/edurights.png";
import Connect100xdevs from "@/images/connnect100xdevs.png";

export type Project = {
  name: string;
  description: string;
  image: any;
  url: string;
  github: string;
  technologies: Skill[];
};

export const projectsEn: Project[] = [
  {
    name: "Connect100xdevs",
    description:
      "Building a social media-inspired website for the developer community where developers can send/accept/reject the request of another developer.",
    image: Connect100xdevs,
    url: "https://connect100xdevs.xyz/",
    github: "https://github.com/tanzeem131/Tinder4Devs",
    technologies: getSkill([
      "NodeJS",
      "Express.Js",
      "React",
      "javascript",
      "TailwindCSS",
      "Daisy UI",
      "AWS",
      "git",
      "npm",
    ]),
  },
  {
    name: "Edurights Admission consultancy",
    description:
      "As a freelance developer, designed and developed the full application of an admission consulting website, creating a seamless and intuitive interface for form submissions, enabling prospective students to easily provide their details for personalized consultation and guidance.",
    image: Edurights,
    url: "https://edurights-consultancy.netlify.app/",
    github: "https://github.com/tanzeem131/edurights-admission-consultancy",
    technologies: getSkill([
      "React",
      "react-hook-form",
      "javascript",
      "NodeJS",
      "Express.Js",
      "TailwindCSS",
      "git",
      "npm",
    ]),
  },
  {
    name: "Urbantastes",
    description:
      "Developed the frontend of a restaurant application inspired by Swiggy, providing a seamless user experience for browsing, searching, and adding food items to the cart.",
    image: UrbanTastes,
    url: "https://urbantastes.netlify.app/",
    github:
      "https://github.com/tanzeem131/Namaste-React/tree/main/Final-Version",
    technologies: getSkill([
      "React",
      "Redux",
      "JestJs",
      "javascript",
      "TailwindCSS",
      "git",
      "npm",
    ]),
  },
  {
    name: "Portfolio",
    description:
      "Explore my portfolio for a glimpse into my diverse projects and coding expertise.",
    image: PortfolioNew,
    url: "https://tanzeem.me/",
    github: "https://github.com/tanzeem131/tanzeem.me",
    technologies: getSkill([
      "TypeScript",
      "NEXT.js",
      "TailwindCSS",
      "css",
      "git",
      "npm",
    ]),
  },
  {
    name: "Forkify",
    description: "A recipe search application made with javascript.",
    image: Forkify,
    url: "https://forkify-tanzeem131.netlify.app/",
    github: "https://github.com/tanzeem131/Forkify",
    technologies: getSkill(["javascript", "html", "Sass", "css", "git", "npm"]),
  },
  {
    name: "Portfolio",
    description:
      "Explore my portfolio for a glimpse into my diverse projects and coding expertise.",
    image: PortfolioOld,
    url: "https://tanzeem-iiit.netlify.app/",
    github: "https://github.com/tanzeem131/portfolio",
    technologies: getSkill([
      "canvas-html",
      "html",
      "javascript",
      "Email.js",
      "css",
      "git",
      "npm",
    ]),
  },
  {
    name: "Infinity Business",
    description:
      "Build a website that contains several unique design for different websites.",
    image: Infinity,
    url: "https://github.com/vinayak-upadh1/OOP-PROJECT-Infinity-Business",
    github:
      "https://github.com/vinayak-upadh1/OOP-PROJECT-Infinity-Business/deployments/github-pages",
    technologies: getSkill([
      "Contribution",
      "react",
      "javascript",
      "css",
      "git",
      "npm",
    ]),
  },
  {
    name: "Weather App",
    description: "Build an application to find the weather of a city.",
    image: Weather,
    url: "https://today-weathercast.netlify.app/",
    github: "https://github.com/tanzeem131/Weather-app",
    technologies: getSkill([
      "react",
      "javascript",
      "html",
      "css",
      "git",
      "npm",
    ]),
  },
  {
    name: "Bankist UI",
    description: "An online fictional Bank.",
    image: Bankist,
    url: "https://bankist-connect.netlify.app/",
    github:
      "https://github.com/tanzeem131/Bankist-When-a-banking-meets-minimalist",
    technologies: getSkill(["html", "css", "javascript", "git", "npm"]),
  },
  {
    name: "Bankist Dashboard",
    description: "Bankist user page that show the transactions details.",
    image: BankistUser,
    url: "https://bankistapppage.netlify.app/",
    github: "https://github.com/tanzeem131/Bankist-App",
    technologies: getSkill(["html", "css", "javascript", "git", "npm"]),
  },
  {
    name: "Trackr",
    description:
      "TRACKR is a workout tracker application that allows users to log and visualize their workouts based on geographical locations.",
    image: Trackr,
    url: "https://trackr-webapp.netlify.app/",
    github: "https://github.com/tanzeem131/TRACKR-MAP-YOUR-WORKOUTS",
    technologies: getSkill(["javascript", "css", "html", "git", "npm"]),
  },
  {
    name: "Guess the number",
    description: "Guess the number is a small web game.",
    image: Guess,
    url: "https://guessingthenumbers.netlify.app/",
    github:
      "https://github.com/tanzeem131/Guessing-the-number-Dom-manipulation-",
    technologies: getSkill(["javascript", "css", "html", "git", "npm"]),
  },
  {
    name: "Landing Page",
    description: "GSAP landing Page",
    image: GSAP1,
    url: "https://landingpage-gsap.netlify.app/",
    github: "https://github.com/tanzeem131/GSAP",
    technologies: getSkill(["GSAP", "javascript", "css", "html", "git", "npm"]),
  },
  {
    name: "Landing Page",
    description: "GSAP landing Page",
    image: GSAP2,
    url: "https://github.com/tanzeem131/GSAP-landing-page",
    github: "https://github.com/tanzeem131/GSAP-landing-page",
    technologies: getSkill(["GSAP", "javascript", "css", "npm"]),
  },
];
