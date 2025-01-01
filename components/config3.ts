import { FaGraduationCap } from "react-icons/fa";
import { SiFuturelearn, SiFreelancer } from "react-icons/si";

interface Milestone {
  id: number;
  date: string;
  title: string;
  icon: React.ElementType;
  color: string;
  desc: string;
}

export const timelineData: Milestone[] = [
  {
    id: 1,
    date: "2017-2019",
    title: "Higher secondary education, RSVM Dhanbad",
    icon: FaGraduationCap,
    color: "bg-[#333643]",
    desc: "Completed my higher secondary education from RSVM Dhanbad.",
  },
  {
    id: 2,
    date: "2020-2024",
    title: "Bachelor of Technology, IIIT Dharwad, Karnataka, India",
    icon: FaGraduationCap,
    color: "bg-[#333643]",
    desc: "I pursued B.Tech in Computer Science and Engineering from IIIT Dharwad.",
  },
  {
    id: 3,
    date: "2024",
    title: "100xdevs",
    icon: SiFuturelearn,
    color: "bg-[#333643]",
    desc: "I joined the 100xDevs online coding bootcamp to learn full-stack MERN development, where I gained hands-on experience in building modern web applications using MongoDB, Express.js, React, Node.js and Next.js",
  },
  {
    id: 4,
    date: "2024",
    title: "Freelance",
    icon: SiFreelancer,
    color: "bg-[#333643]",
    desc: "Just started",
  },
];
