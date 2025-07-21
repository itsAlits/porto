"use client";

import Project0 from "@/public/Slide 16_9 - 8.png";
import Project1 from "@/public/Taksu.png";
import Project2 from "@/public/Slide 16_9 - 1.png";
import Project3 from "@/public/Slide 16_9 - 5.png";
import Project4 from "@/public/sepetakAlam.png";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkPage() {
  const projects = [
    {
      title: "HIMAIF Official Website",
      description:
        "Personal portfolio website with modern design and animations",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image:
        "https://sinmawa.unud.ac.id/img/admin/gallery/8212d0a3d2247daea01ea79238b9f825.jpg",
      link: "#",
      tags: "WEB PROFILE",
      year: "2022",
    },
    {
      title: "Kara.Co",
      description:
        "Personal portfolio website with modern design and animations",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image:
        "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg",
      link: "#",
      tags: "WEB APPLICATION",
      year: "2022",
    },
    {
      title: "Sumiartha Furniture",
      description:
        "Personal portfolio website with modern design and animations",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image:
        "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg",
      link: "#",
      tags: "E-COMMERCE",
      year: "2022",
    },
    {
      title: "IBLIX",
      description:
        "Personal portfolio website with modern design and animations",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image:
        "https://img.freepik.com/free-photo/top-view-film-elements-white-background_23-2148416838.jpg",
      link: "#",
      tags: "RECOMENDATION WEB APPLICATION",
      year: "2023",
    },
    {
      title: "Se-PetakAlam",
      description:
        "Personal portfolio website with modern design and animations",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image:
        "https://img.freepik.com/free-photo/view-tropical-beach-sea-rocks-turquoise-ocean-blue-sky-atuh-beach-nusa-penida-island-indonesia-travel-concept-indonesia_1321-1930.jpg",
      link: "#",
      tags: "WEB PROFILE",
      year: "2023",
    },
    {
      title: "Wayang App",
      description:
        "Personal portfolio website with modern design and animations",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image:
        "https://adhiwiguna.wordpress.com/wp-content/uploads/2014/10/wayang-kulit-bali.jpg",
      link: "#",
      tags: "WEB APPLICATION",
      year: "2023",
    },
  ];

  function Card({ tags, title, image, year, index, description, tech }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="border cursor-pointer border-gray-800 border-t-4 relative border-t-white h-[500px] w-[400px] group"
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-mono">N°{index}</span>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-gray-400">{tags}</span>
            </div>
          </div>

          <div className="flex-grow pt-24">
            <h2 className="text-3xl font-light mt-auto">{title}</h2>
            <p className="text-sm text-gray-400 mt-2">YEAR — {year}</p>
          </div>
        </div>
        <div className="absolute bottom-0">
          <img
            src={image}
            alt={title}
            className="w-full aspect-video h-[250px] object-cover"
          />
          {/* Hover Overlay */}
        </div>
        <div className="absolute h-full inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-400 p-6 flex flex-col justify-center">
          <p className="text-gray-200 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, i) => (
              <span
                key={i}
                className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-dvh"
    >
      {/* Hero Section */}
      <section className="h-dvh flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-0 overflow-x-hidden">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-end"
          >
            <h1 className="text-4xl lg:text-6xl">What I've Worked On</h1>
            <p className="text-gray-400 mt-4">
              Here are a few projects I've worked on recently.
            </p>
          </motion.div>
          <div className="flex w-full mt-14 overflow-x-auto gap-6 items-center">
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <Card key={index} {...project} index={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
