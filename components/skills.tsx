import { Skill, SkillsType } from "./config";
import { v4 as uuidv4 } from "uuid";
import "./Skills.css";
import { text } from "../helpers/text";
import Image from "next/image";
import Link from "next/link";

export default function Skills() {
  return (
    <div className="bg-skills">
      <p className="sm:text-8xl text-3xl sm:font-extrabold font-bold">
        {text.en.skillsetHeading}
      </p>
      <p className="sm:text-2xl text-lg">{text.en.skillsetDescription}</p>
      <div>
        {text.en.skills.map((skills: SkillsType) => {
          return (
            <div key={skills.type} className="skills-type">
              <div className="texts">
                <p className="sm:text-xl text-lg">
                  <b>{skills.type}</b>
                </p>
              </div>
              <div className="skill-icons-gird">
                {skills.skills.map((skill: Skill) => {
                  return (
                    <Link
                      key={uuidv4()}
                      href={skill.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="skill">
                        <Image src={skill.img} alt="Skill logo image" />
                      </div>
                      <p>{skill.name}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
