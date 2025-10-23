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
import SmartTask from "@/images/SmartTask.png";
import NFT from "@/images/NFT.png";
import Espresso from "@/images/Espresso.png";
import xclone from "@/images/xclone.png";
import gwi from "@/images/gwi.png";
import cs from "@/images/cs.png";

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
      "Created a developer-focused social platform where users can connect, chat in real time, and build dynamic portfolios. The app features GitHub login, AI-powered resume formatting, and a fully optimized AWS deployment for seamless performance.",
    image: Connect100xdevs,
    url: "https://connect100xdevs.xyz/",
    github: "https://github.com/tanzeem131/Tinder4Devs",
    technologies: getSkill([
      "Node.js",
      "Express.Js",
      "MongoDb",
      "AWS",
      "React",
      "Redux",
      "react-hook-form",
      "JWT",
      "javascript",
      "TailwindCSS",
      "Daisy UI",
    ]),
  },
  {
    name: "Edurights Admission cons.",
    description:
      "As a freelance developer, I designed and built an admission consulting website with an intuitive, easy-to-use form system that helps students share their details effortlessly for personalized guidance.",
    image: Edurights,
    url: "https://edurights-consultancy.netlify.app/",
    github: "https://github.com/tanzeem131/edurights-admission-consultancy",
    technologies: getSkill([
      "React",
      "react-hook-form",
      "javascript",
      "Node.js",
      "Express.Js",
      "TailwindCSS",
    ]),
  },
  {
    name: "SmartTask",
    description:
      "SmartTask aims to provide a lightweight task management system where users can login, create and organize their tasks, and monitor their completion progress from any device.",
    image: SmartTask,
    url: "https://smarttask-covalense.netlify.app/",
    github: "https://github.com/tanzeem131/SmartTask",
    technologies: getSkill([
      "React",
      "javascript",
      "Node.js",
      "Express.Js",
      "MongoDb",
      "JWT",
      "TailwindCSS",
    ]),
  },
  {
    name: "Career Shuruvat",
    description:
      "Code Your Future. We'll Handle the Rest.Not Just Another Job Board",
    image: cs,
    url: "https://careershuruvat.netlify.app/",
    github: "https://github.com/Tarunvats9068/job-portal/commits/stg/",
    technologies: getSkill([
      "NEXT.js",
      "typescript",
      "Node.js",
      "Express.Js",
      "Nodemailer",
      "MongoDb",
      "JWT",
      "TailwindCSS",
    ]),
  },
  {
    name: "Espresso World Events",
    description:
      "Built an interactive world events map for Espresso Systems that visualizes past and upcoming events across the globe. Integrated dynamic filtering, location-based search, and responsive UI for a seamless user experience.",
    image: Espresso,
    url: "https://espresso-map.netlify.app/",
    github: "https://github.com/tanzeem131/espresso-event-map",
    technologies: getSkill(["React", "javascript", "TailwindCSS", "css"]),
  },
  {
    name: "Grow With Influence",
    description:
      "The best place to grow your Brand. growwithinfluence offers brands detailed Instagram user data to find and hire influencers for targeted ads",
    image: gwi,
    url: "https://growwithinfluence.netlify.app/",
    github: "https://growwithinfluence.netlify.app/",
    technologies: getSkill(["NEXT.js", "typescript", "TailwindCSS", "css"]),
  },
  {
    name: "X clone",
    description: "Created a FullStack Twitter Clone",
    image: xclone,
    url: "https://github.com/tanzeem131/TweetLoom",
    github: "https://github.com/tanzeem131/TweetLoom-Server",
    technologies: getSkill([
      "Node.js",
      "Express.Js",
      "Prisma",
      "JWT",
      "AWS",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "GraphQL",
      "React Query",
      "typescript",
      "NEXT.js",
      "TailwindCSS",
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
    ]),
  },
  {
    name: "EHYZ NFT",
    description: "UI for EHYZ NFT website",
    image: NFT,
    url: "https://margdarshi.netlify.app/",
    github: "https://github.com/tanzeem131/margdarshi-frontend",
    technologies: getSkill(["NEXT.js", "typescript", "TailwindCSS", "css"]),
  },
  {
    name: "Portfolio",
    description:
      "Explore my portfolio for a glimpse into my diverse projects and coding expertise.",
    image: PortfolioNew,
    url: "https://tanzeem.me/",
    github: "https://github.com/tanzeem131/tanzeem.me",
    technologies: getSkill(["TypeScript", "NEXT.js", "TailwindCSS", "css"]),
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
