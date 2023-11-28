import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGlobe, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import LegamartWebsiteImg from "@/public/legamart.png";
import OneSellWebsiteImg from "@/public/1sell.png";
import VitrinWebsiteImg from "@/public/vitrin.png";
import CoimexWebsiteImg from "@/public/coimex.png";

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
      "I'm now a front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Node.js and Redux. I'm open to full-time opportunities.",
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
    description:
      "I'm now a senior front-end engineer. I'm also open to relocate.",
    icon: React.createElement(FaGlobe),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "LegaMart",
    description:
      "Legamart services is an online legal services ecosystem that helps applicants find and hire lawyers and subsidiary necessary services in foreign jurisdictions.",
    tags: ["React", "Next.js", "Tailwind", "NX monorepo", "Cypress"],
    imageUrl: LegamartWebsiteImg,
    link: "https://legamart.com/",
  },
  {
    title: "1Sell",
    description:
      "1Sell is the leading Qatari platform for the E-Commerce industry. The mission is to be the global platform for all the Fashion & Beauty goods.",
    tags: ["React", "Next.js", "Ant Design", "Sass", "Storybook"],
    imageUrl: OneSellWebsiteImg,
    link: "https://1sell.com/",
  },
  {
    title: "Vitrin",
    description:
      "Vitrin is a commerce platform like Shopify, Square, etc including products such as Website Builder, POS Desktop Application, and Business listing service.",
    tags: ["React", "Next.js", "Redux", "Bootstrap", "PWA"],
    imageUrl: VitrinWebsiteImg,
    link: "https://vitrin.me/",
  },
  {
    title: "Coimex Inc.",
    description:
      "Coimex is a B2B Foreign Trade Platform that connects you with trustable traders worldwide to build long term partnerships.",
    tags: ["React", "Next.js", "Firebase", "Bootstrap", "Redux"],
    imageUrl: CoimexWebsiteImg,
    link: "https://coimex.co/",
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
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Framer Motion",
  "Sass",
  "Redux-Saga",
  "Material-UI",
  "Ant Design",
  "Bootstrap",
  "PWA",
  "NX monorepo",
  "Webpack",
  "Strapi",
  "styled-components",
  "Storybook",
  "Jest",
  "React Testing Library",
  "Cypress",
  "Firebase",
  "Docker",
  "SWR",
  "Zustand",
  "Vercel",
] as const;
