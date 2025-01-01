"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Project } from "./config2";
import { AiFillGithub } from "react-icons/ai";
import { Skill } from "./config";
import "./Projects.css";
import { text } from "@/helpers/text";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [amount, setAmount] = useState(8);

  const viewMore = () => {
    const len = text.en.projects.length;
    if (len === amount) {
      setAmount(8);
    } else {
      setAmount(len);
    }
  };

  const viewMoreText = () => {
    if (amount === text.en.projects.length) {
      return text.en.projectsViewLess;
    } else {
      return text.en.projectsViewMore;
    }
  };

  return (
    <div className="bg-projects">
      <p className="sm:text-8xl text-3xl sm:font-extrabold font-bold">
        {text.en.projectsHeading}
      </p>
      <p className="sm:text-2xl text-lg mt-2">{text.en.projectsDescription}</p>
      <div className="projects-grid">
        {text.en.projects.slice(0, amount).map((project: Project) => {
          return (
            <div key={uuidv4()} className="project">
              <Image
                placeholder="blur"
                loading="lazy"
                src={project.image}
                alt="Project Image"
              />
              <div className="project-info">
                <p className="text-[17px] bg-cyan-100 text-black w-fit px-2 rounded-full">
                  {project.name}
                </p>
                <p className="text-sm">{project.description}</p>
                <div className="project-tags flex flex-wrap gap-1 items-center">
                  {project.technologies.map((tech: Skill) => {
                    return (
                      <Link key={uuidv4()} href={tech.url}>
                        <div className="tech-tag flex items-center gap-1 bg-cyan-100 text-black p-1 rounded-lg">
                          <Image
                            alt="text-img"
                            className="w-4 h-4"
                            src={tech.img}
                          />
                          <div>{tech.name}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="flex flex-nowrap justify-start items-center gap-2">
                  <Link href={project.github}>
                    <button className="flex bg-[#1B1C23] p-1 rounded-lg flex-nowrap justify-center items-center">
                      <AiFillGithub className="mr-1" />
                      GitHub
                    </button>
                  </Link>
                  {project.url.length > 0 ? (
                    <Link href={project.url}>
                      <button className="bg-cyan-900 p-1 rounded-md flex flex-nowrap justify-center items-center">
                        Demo
                      </button>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="git-hub-btn viewMore" onClick={() => viewMore()}>
        {viewMoreText()}
      </button>
    </div>
  );
}
