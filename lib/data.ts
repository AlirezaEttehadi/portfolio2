import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGlobe, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import LegamartWebsiteImg from "@/public/legamart.png";
import VitrinWebsiteImg from "@/public/vitrin.png";
import HeliTechnologyWebsiteImg from "@/public/heli.png";
import DigikalaWebsiteImg from "@/public/digikala.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "bachelor of Mechanical engineering",
    location: "Tehran, Iran",
    description:
      "I graduated after 4 years of studying. I immediately start to get projects as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2017",
  },
  {
    title: "Freelance Front-End Developer",
    location: "Tehran, Iran",
    description:
      "I'm now a front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript and Node.js. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2020",
  },
  {
    title: "Front-End Developer",
    location: "Tehran, Iran",
    description:
      "I worked as a front-end developer for 2 years in 2 jobs. I also worked hard to get the senior role in the market.",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
  {
    title: "Senior Front-End Engineer",
    location: "WorldWide",
    description: "I'm now a senior front-end engineer.",
    icon: React.createElement(FaGlobe),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Digikala",
    description:
      "Digikala Group is a leading e-commerce organization with a strong presence in multiple online industries.",
    tags: ["React", "Next.js", "React-native", "NX monorepo", "Java"],
    imageUrl: DigikalaWebsiteImg,
    link: "https://digikala.com/",
  },
  {
    title: "Heli Technology",
    description:
      "Heli Technology is a remote-first company focused on building user-centered digital products that solve real-world problems.",
    tags: ["React", "Next.js", "React-vite", "NX monorepo", "Playwright"],
    imageUrl: HeliTechnologyWebsiteImg,
    link: "https://heli.technology/",
  },
  {
    title: "LegaMart",
    description:
      "Legamart services is an online legal services ecosystem that helps applicants find and hire lawyers and subsidiary necessary services in foreign jurisdictions.",
    tags: ["React", "Next.js", "Tailwind", "NX monorepo", "Cypress"],
    imageUrl: LegamartWebsiteImg,
    link: "https://legamart.com/",
  },
  {
    title: "Vitrin",
    description:
      "Vitrin is a commerce platform like Shopify, Square, etc including products such as Website Builder, POS Desktop Application, and Business listing service.",
    tags: ["React", "Next.js", "Redux", "Bootstrap", "PWA"],
    imageUrl: VitrinWebsiteImg,
    link: "https://vitrin.me/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Git",
  "Tailwind",
  "Tanstack Query",
  "Tanstack Router",
  "Redux",
  "Framer Motion",
  "Sass",
  "Material-UI",
  "Ant Design",
  "PWA",
  "NX monorepo",
  "Webpack",
  "Strapi",
  "styled-components",
  "Storybook",
  "Jest",
  "React Testing Library",
  "Cypress",
  "Playwright",
  "Docker",
  "SWR",
  "Zustand",
] as const;
