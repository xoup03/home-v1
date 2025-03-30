"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    id: 1,
    name: "Bibu",
    role: "Founder",
    bio: "Visionary leader with a passion for innovation and building impactful products. Founded the company with a mission to transform how businesses operate in the digital age.",
    image:
      "https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0=",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    skills: [
      "Leadership",
      "Strategy",
      "Product Vision",
      "Business Development",
    ],
  },
  {
    id: 2,
    name: "Debu",
    role: "CTO",
    bio: "Tech genius with extensive experience in architecting scalable systems. Leads our engineering team with a focus on innovation, quality, and developer experience.",
    image:
      "https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0=",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    skills: [
      "System Architecture",
      "Engineering Leadership",
      "Cloud Infrastructure",
      "Tech Strategy",
    ],
  },
  {
    id: 3,
    name: "Sudip",
    role: "Senior Developer",
    bio: "Backend specialist who builds robust and efficient systems. Known for solving complex problems with elegant solutions and mentoring junior developers.",
    image:
      "https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0=",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    skills: [
      "Backend Development",
      "Database Design",
      "API Architecture",
      "Performance Optimization",
    ],
  },
  {
    id: 4,
    name: "Pritam",
    role: "Product Designer",
    bio: "Creative mind with an eye for detail and user experience. Combines aesthetic sensibility with practical functionality to create intuitive and beautiful designs.",
    image:
      "https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0=",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
    skills: ["UI/UX Design", "User Research", "Prototyping", "Design Systems"],
  },
  {
    id: 5,
    name: "Adrash",
    role: "Frontend Developer",
    bio: "UI wizard who transforms designs into seamless interactive experiences. Passionate about creating accessible and performant web applications.",
    image:
      "https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0=",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    skills: [
      "Frontend Frameworks",
      "Animation",
      "Responsive Design",
      "Web Performance",
    ],
  },
  {
    id: 6,
    name: "Hemanth",
    role: "Data Scientist",
    bio: "Analytics expert who turns data into insights. Develops algorithms and models that help drive business decisions and product improvements.",
    image:
      "https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0=",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Statistical Modeling",
      "Python",
    ],
  },
  {
    id: 7,
    name: "Aryan",
    role: "DevOps Engineer",
    bio: "Infrastructure specialist who ensures our systems run smoothly and securely. Expert in automation, deployment pipelines, and monitoring solutions.",
    image:
      "https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0=",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    skills: ["CI/CD", "Kubernetes", "Cloud Services", "Security"],
  },
];

const MeetOurTeam = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <>
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-zinc-600 font-semibold tracking-wide uppercase">
            Our People
          </h2>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Meet Our Team
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            The brilliant minds behind our success. A diverse team of experts
            committed to excellence and innovation.
          </p>
        </div>

        {/* Featured Team Members (Founder & CTO) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {teamMembers.slice(0, 2).map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img
                    className="h-full w-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="uppercase tracking-wide text-sm text-zinc-500 font-semibold">
                    {member.role}
                  </div>
                  <h3 className="mt-1 text-2xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-gray-600">{member.bio}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-800">
                      Expertise
                    </h4>
                    <div className="mt-2 flex flex-wrap">
                      {member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="m-1 bg-zinc-50 text-zinc-700 text-xs px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <a
                      href={member.socialLinks.linkedin}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href={member.socialLinks.twitter}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href={member.socialLinks.github}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(2).map((member) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setActiveId(member.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="relative">
                <img
                  className="h-64 w-full object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transform transition-all duration-300 ${
                    activeId === member.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-white text-sm font-light">{member.bio}</p>
                  <div className="mt-3 flex space-x-3">
                    <a
                      href={member.socialLinks.linkedin}
                      className="text-white hover:text-zinc-200 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href={member.socialLinks.twitter}
                      className="text-white hover:text-zinc-200 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href={member.socialLinks.github}
                      className="text-white hover:text-zinc-200 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-zinc-600 font-medium">{member.role}</p>
                <div className="mt-3">
                  <div className="flex flex-wrap mt-1">
                    {member.skills.slice(0, 2).map((skill, index) => (
                      <span
                        key={index}
                        className="mr-2 mb-1 bg-zinc-50 text-zinc-700 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 2 && (
                      <span className="text-xs text-gray-500 flex items-center">
                        +{member.skills.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        {/* <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            The principles that guide our work and define our culture.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 text-zinc-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We constantly push boundaries and explore new possibilities to deliver exceptional solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 text-zinc-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">We believe in the power of teamwork and diverse perspectives to create exceptional outcomes.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 text-zinc-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in everything we do, from code quality to customer service.</p>
            </div>
          </div>
        </div> */}
        {/* Team Values */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            The principles that guide our work and define our culture.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries and explore new possibilities to deliver exceptional solutions.",
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and diverse perspectives to create exceptional outcomes.",
                icon: (
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Excellence",
                description:
                  "We strive for the highest standards in everything we do, from code quality to customer service.",
                icon: (
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-24 bg-zinc-600 rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:py-16 md:px-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                <span className="block">Ready to join our team?</span>
                <span className="block text-zinc-200">
                  We're always looking for talented individuals.
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-zinc-100">
                Join us in building innovative solutions that make a difference.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/Hiring"
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-zinc-600 bg-white hover:bg-zinc-50"
                >
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default MeetOurTeam;
