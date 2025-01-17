/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "@/images/react-logo.png";
import HTML from "@/images/html5-logo.png";
import CSS from "@/images/css-logo.png";
import JS from "@/images/js-logo.png";
import TS from "@/images/ts-logo.png";
import NPM from "@/images/npm-logo.png";
import YARN from "@/images/yarn-logo.png";
import Git from "@/images/git-logo.png";
import Next from "@/images/nextjs-logo.png";
import NodeJS from "@/images/nodej-js.png";
import Python from "@/images/python.png";
import SQL from "@/images/sql.png";
import MongoDb from "@/images/mongodb-logo.png";
import MySql from "@/images/mysql-logo.png";
import Supabase from "@/images/Supabase-logo.png";
import Prisma from "@/images/prisma-logo.png";
import Express from "@/images/express-logo.png";
import GSAP from "@/images/gsap-logo.jpg";
import Redux from "@/images/redux.png";
import Canvas from "@/images/canvashtml.jpg";
import Jest from "@/images/jest.png";
import Sass from "@/images/sass.svg";
import Tailwindcss from "@/images/tailwindcss.png";
import Emailjs from "@/images/emailjs.png";
import ReactHookForm from "@/images/react-hook-form.png";
import DaisyUi from "@/images/daisyui.png";
import AWS from "@/images/aws.png";

export type Skill = {
  name: string;
  img: any;
  url: string;
};

export type SkillsType = {
  type: string;
  description: string;
  skills: Skill[];
};

export const getSkill = (names: string[]) => {
  const toReturn: Skill[] = [];
  names.map((name: string) => {
    [...allSkills, ...additionalSkills].map((skill: Skill) => {
      if (skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  });
  return toReturn;
};

export const additionalSkills: Skill[] = [
  {
    name: "Contribution",
    url: "",
    img: Git,
  },
];

export const allSkills: Skill[] = [
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: JS,
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    img: TS,
  },
  {
    name: "Python",
    url: "https://www.python.org/",
    img: Python,
  },
  {
    name: "NodeJS",
    url: "https://nodejs.org/en/",
    img: NodeJS,
  },
  {
    name: "Express.Js",
    url: "https://expressjs.com/",
    img: Express,
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    img: React,
  },
  {
    name: "Redux",
    url: "https://redux.org/",
    img: Redux,
  },
  {
    name: "NEXT.js",
    url: "https://nextjs.org/",
    img: Next,
  },
  {
    name: "GSAP",
    url: "https://gsap.org/",
    img: GSAP,
  },
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: HTML,
  },
  {
    name: "canvas-html",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas",
    img: Canvas,
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: CSS,
  },
  {
    name: "TailwindCSS",
    url: "https://tailwindcss.com/",
    img: Tailwindcss,
  },
  {
    name: "Daisy UI",
    url: "https://daisyui.com/",
    img: DaisyUi,
  },
  {
    name: "react-hook-form",
    url: "https://react-hook-form.com/",
    img: ReactHookForm,
  },
  {
    name: "Sass",
    url: "https://sass-lang.com/",
    img: Sass,
  },
  {
    name: "NPM",
    url: "https://www.npmjs.com/",
    img: NPM,
  },
  {
    name: "YARN",
    url: "https://yarnpkg.com/",
    img: YARN,
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    img: Git,
  },
  {
    name: "Supabase",
    url: "https://supabase.com/",
    img: Supabase,
  },
  {
    name: "Prisma",
    url: "https://prisma.io/",
    img: Prisma,
  },
  {
    name: "JestJs",
    url: "https://jestjs.io/",
    img: Jest,
  },
  {
    name: "AWS",
    url: "https://aws.amazon.com/",
    img: AWS,
  },
  {
    name: "Email.js",
    url: "https://www.emailjs.com/",
    img: Emailjs,
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    img: SQL,
  },
  {
    name: "MongoDb",
    url: "https://www.mongodb.org/",
    img: MongoDb,
  },
  {
    name: "MySql",
    url: "https://www.mysql.com/",
    img: MySql,
  },
];

export const skillsEn: SkillsType[] = [
  {
    type: "Languages",
    description: "Programing languages I use:",
    skills: getSkill(["TypeScript", "JavaScript", "HTML", "CSS", "Python"]),
  },
  {
    type: "Frameworks",
    description: "Frameworks with which I build my projects:",
    skills: getSkill([
      "React",
      "Redux",
      "Next.js",
      "React Native",
      "NodeJS",
      "Express.Js",
    ]),
  },
  {
    type: "Tools",
    description: "Tools I use during my development:",
    skills: getSkill([
      "NPM",
      "YARN",
      "Git",
      "Supabase",
      "Prisma",
      "JestJs",
      "AWS",
    ]),
  },
  {
    type: "Data",
    description: "Projects I use for data in my applications",
    skills: getSkill(["PostgreSQL", "MongoDb", "MySql"]),
  },
];
