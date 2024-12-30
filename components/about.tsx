import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineArrowRight,
  AiOutlineMail,
} from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import "./About.css";
import { text } from "@/helpers/text";
import ProfileImage from "./../images/profile-img.jpg";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="bg">
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-title space-y-2 mt-2">
              <h1 className="text-5xl">{text.en.aboutHi}</h1>
              <h1 className="text-5xl">
                {text.en.aboutIam}{" "}
                <span className="tanzeem text-8xl">{text.en.aboutName}</span>
              </h1>
            </div>
            <div className="about-text-desc">
              <h1 className="text-3xl">
                {text.en.aboutSkilled}{" "}
                <span className="name">FULLSTACK DEVELOPER</span>{" "}
                {text.en.aboutText}
              </h1>
            </div>
            <div className="icons">
              <Link
                href="https://github.com/tanzeem131"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="icon" />
              </Link>
              <Link
                href="https://x.com/Tanzeem_Dev"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle className="icon" />
              </Link>
              <Link
                href="mailto:dev.tanzeem@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail className="icon" />
              </Link>
            </div>
            <Link href="mailto:dev.tanzeem@gmail.com">
              <button className="flex flex-nowrap w-[100%] p-2 h-fit bg-[#f2613f] text-black hover:bg-[#d25036]">
                {text.en.contactButton}
                <AiOutlineArrowRight className="text-xl" />
              </button>
            </Link>
          </div>
          <div className="about-avatar">
            <Image src={ProfileImage} alt="bg-img" />
          </div>
        </div>
        <div className="icon-wrapper">
          <div className="bottom-icon">
            <Link href="#more">
              <BsChevronDown />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
