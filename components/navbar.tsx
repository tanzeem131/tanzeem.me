"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import india from "../images/india.svg";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.4) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar ${
        showNavbar ? "show" : ""
      } filter drop-shadow-crimson`}
    >
      <div>
        <div className="navbarText">
          <h1 className="name text-2xl">Tanzeem</h1>
          <p className="name text-2xl">Fullstack developer</p>
        </div>
      </div>
      <div className="navbarRight flex flex-wrap items-center">
        <div className="icons">
          <Link
            href="https://github.com/tanzeem131"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="icon" />
          </Link>
          <Link
            href="https://twitter.com/Tanzeem_Dev"
            target="_blank"
            rel="noreferrer"
          >
            <RiTwitterXLine className="icon" />
          </Link>
          <Link
            href="mailto:dev.tanzeem@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className="icon" />
          </Link>
        </div>
        <div>
          <Link href="#">
            <Image src={india} className="language w-6 h-5" alt="india" />
          </Link>
        </div>
      </div>
    </div>
  );
}
