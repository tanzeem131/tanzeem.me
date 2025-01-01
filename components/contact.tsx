import { MdOutlineEmail } from "react-icons/md";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import "./Contact.css";
import { text } from "@/helpers/text";
import Link from "next/link";

export type Contact = {
  name: string;
  info: string;
  icon: React.ReactElement;
  url: string;
};

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "dev.tanzeem@",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:dev.tanzeem@gmail.com",
  },
  {
    name: "TWITTER:",
    info: "@Tanzeem_Dev",
    icon: <RiTwitterXLine className="contact-icon" />,
    url: "https://twitter.com/Tanzeem_Dev",
  },
  {
    name: "DISCORD:",
    info: "crashcode__",
    icon: <FaDiscord className="contact-icon" />,
    url: "https://discord.com/users/crashcode__",
  },
  {
    name: "GitHub:",
    info: "@Tanzeem_Dev",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/tanzeem131",
  },
  {
    name: "LOCATION & ZONE:",
    info: "India, UTC+05:30",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/time/zone/india",
  },
];

const Contact = () => {
  return (
    <div className="bg-contact">
      <div className="contact-header">
        <p className="sm:text-8xl text-3xl sm:font-extrabold font-bold">
          {text.en.contactHeading}
        </p>
        <p className="sm:text-2xl text-lg">{text.en.contactDesc}</p>
      </div>
      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return (
            <Link
              key={uuidv4()}
              href={contact.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-section">
                {contact.icon}
                <div className="contact-text-div">
                  <p className="contact-title">{contact.name}</p>
                  <p className="contact-details">{contact.info}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="button-container flex justify-center">
        <Link href="mailto:dev.tanzeem@gmail.com">
          <button className="contact-btn rounded-full px-2 flex flex-nowrap justify-center items-center bg-[#f2613f] hover:bg-[#d25036] text-black">
            {text.en.contactButton}
            <AiOutlineArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
