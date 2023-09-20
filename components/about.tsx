"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {`I'm`} <strong>Alireza Ettehadi</strong>, a Senior
        <strong> Front-end Engineer</strong> with over <b>6 years</b> of
        expertise in <strong>React</strong>, <strong>Next.js</strong>, and a
        range of web technologies. My journey began with a {`Bachelor's`} degree
        in
        <strong> Mechanical Engineering</strong>, but my passion for web
        development led me to excel in creating sleek and responsive web
        applications. {`I'm`} skilled in <strong>state management</strong>,
        <strong> server-side rendering</strong>, and have a deep understanding
        of <strong>JavaScript</strong>,<strong> HTML</strong>, and{" "}
        <strong>CSS</strong>.
      </p>

      <p>
        Throughout my career, {`I've`} consistently delivered projects on time
        and within budget, collaborating effectively in <strong>Agile </strong>
        environments with a strong grasp of <strong>Git</strong> version
        control. {`I've`}
        <strong> mentored</strong> junior developers, nurturing their growth,
        and have been a key contributor to large-scale projects with over 20
        developers and 500,000+ lines of code. My commitment to innovation and
        exceptional <strong>user experiences</strong> drives me, and {`I'm`}{" "}
        excited to bring my skills to your next project.
      </p>
    </motion.section>
  );
}
