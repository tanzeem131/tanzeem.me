import {
  AiFillGithub,
  AiOutlineArrowRight,
  AiOutlineMail,
} from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import "./About.css";
import { text } from "@/helpers/text";
import ProfileImage from "./../images/profile-img.jpg";
import Image from "next/image";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";

export default function About() {
  return (
    <>
      <div className="bg">
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-title mt-4">
              <h1 className="text-5xl">{text.en.aboutHi}</h1>
              <h1 className="text-5xl mt-1">
                {text.en.aboutIam}{" "}
                <span className="tanzeem text-8xl">{text.en.aboutName}</span>
              </h1>
            </div>
            <div className="about-text-desc">
              <h1 className="text-3xl">
                {text.en.aboutSkilled}{" "}
                <span className="name uppercase">{text.en.aboutRole}</span>{" "}
                {text.en.aboutText}
              </h1>
            </div>
            <div className="icons">
              <Link href="https://github.com/tanzeem131">
                <AiFillGithub className="icon" />
              </Link>
              <Link href="https://x.com/Tanzeem_Dev">
                <RiTwitterXLine className="icon" />
              </Link>
              <Link href="mailto:dev.tanzeem@gmail.com">
                <AiOutlineMail className="icon" />
              </Link>
            </div>
            <Link href="mailto:dev.tanzeem@gmail.com" className="icons">
              <button className="flex flex-nowrap justify-stretch text-2xl p-1 items-center bg-[#f2613f] text-black hover:bg-[#d25036]">
                {text.en.contactButton}
                <AiOutlineArrowRight className="text-2xl" />
              </button>
            </Link>
          </div>
          <div className="about-avatar filter drop-shadow-crimson">
            <Image src={ProfileImage} alt="bg-img" />
          </div>
        </div>
      </div>
    </>
  );
}
