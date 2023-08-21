// import images
import Hero_person from "./assets/images/Hero/myHero (1) (1).webp";
import Tailwind from "./assets/images/Skills/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8 (2).svg";
import next from "./assets/images/Skills/nextjs-icon.svg";
import ts from "./assets/images/Skills/tss.png";
import reactjs from "./assets/images/Skills/react.png";
import mui from "./assets/images/Skills/mui.png";
import js from "./assets/images/Skills/JavaScript-logo.png";

import services_logo1 from "./assets/images/Services/logo1.png";
// import services_logo2 from "./assets/images/Services/logo2.png";
// import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/pj/netflix.PNG";
import project2 from "./assets/images/pj/shopping.png";
import project3 from "./assets/images/pj/Captureghazachi.PNG";
import project4 from "./assets/images/pj/crypto.PNG";

// import person_project from "./assets/images/projects/person.png";

import Hireme_person2 from "./assets/images/Hireme/seat (1).webp";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Front End Developer",
    firstName: "Amir Mohammad",
    LastName: "Hmazavi",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Front",
      },
      {
        count: "",
        text: "",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "",
    skills_content: [
      {
        name: "Tailwind",
        para: "",
        logo: Tailwind,
      },
      {
        name: "Material UI",
        para: "",
        logo: mui,
      },
      {
        name: "TypeScript",
        para: "",
        logo: ts,
      },
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "Next js",
        para: "",
        logo: next,
      },
      {
        name: "Javascript",
        para: "",
        logo: js,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: " As a  React developer, I am passionate about building beautiful and functional web applications that provide great user experiences. With my skills in React, JavaScript, HTML, CSS, and other front-end technologies, I am dedicated to creating engaging and responsive designs that meet the needs of users.",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: Hireme_person2,
    project_content: [
      {
        title: "Mini Netflix",
        image: project1,
        link: `https://my-netflix-seven.vercel.app/`,
      },
      {
        title: "Shopping Cart",
        image: project2,
        link: `https://shopping-cart-shq4.vercel.app/`,
      },
      {
        title: "Ghazachi Shop (jsut UI)",
        image: project3,
        link: `https://restaurant-ghazachi.vercel.app/`,
      },
      {
        title: "Crypto website",
        image: project4,
        link: `https://crypto-app-darkmode.vercel.app/`,
      },
    ],
  },

  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "amirhamzavi44@gmail.com",
        icon: GrMail,
        link: "#contact",
      },
      {
        text: "my linkedin profile",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/amir-mohammad-hamzavi-97ab82279?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGJhbdi3uSOyR1itiuMXYBQ%3D%3D",
      },
      {
        text: "+98 922 131 2297",
        icon: MdCall,
        link: "tel:+98 922 131 2297",
      },
      {
        text: "amir_hmzv",
        icon: BsInstagram,
        link: "https://www.instagram.com/amir_hmzv/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
