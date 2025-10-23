import {
  AiFillGithub,
  AiOutlineArrowRight,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import "./About.css";
import { text } from "@/helpers/text";
import ProfileImage from "@/images/profile-img.jpg";
import Image from "next/image";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";

export default function About() {
  return (
    <>
      <div className="bg">
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-title sm:mt-4 mt-6">
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#f2613f] relative inline-block">
                <span className="relative text-black text-5xl">
                  {text.en.aboutHi}
                </span>
              </span>
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
              <Link href="https://www.linkedin.com/in/mr-tanzeem/">
                <AiOutlineLinkedin className="icon" />
              </Link>
              <Link href="https://x.com/Tanzeem_Dev">
                <RiTwitterXLine className="icon" />
              </Link>
              <Link href="mailto:dev.tanzeem@gmail.com">
                <AiOutlineMail className="icon" />
              </Link>
            </div>
            <div className="icons">
              <Link href="https://drive.google.com/file/d/1z3KXGk7iGWDPe9qQyobuk2VcHIJTRU9U/view?usp=sharing">
                <button className="flex flex-nowrap justify-stretch text-3xl p-1 items-center bg-[#f2613f] text-black hover:bg-[#d25036]">
                  {text.en.contactButton}
                  <AiOutlineArrowRight className="text-2xl sm:ml-2 ml-1" />
                </button>
              </Link>
            </div>
          </div>
          <div className="about-avatar">
            <Image placeholder="blur" src={ProfileImage} alt="bg-img" />
          </div>
        </div>
      </div>
    </>
  );
}
