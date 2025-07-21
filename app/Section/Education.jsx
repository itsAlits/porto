"use client";
import { motion } from "framer-motion";

export default function Education() {
  const dataEdu = [
    {
      year: "2018 - 2021",
      school: "SMAN 2 Denpasar",
      major: "Science",
      desc: "Studied fundamental natural sciences, including physics, chemistry, and biology, as a foundation for further studies",
    },
    {
      year: "2021 - 2025",
      school: "Udayana University",
      major: "Informathics",
      desc: "Studying various aspects of informatics, including software development, information systems, computer networks, and data analysis.",
    },
    {
      year: "2024 - 2024",
      school: "Hacktiv8",
      major: "Backend Web Development",
      desc: "The NODEJS Program contains all the basic things needed to become a Back End Web Developer",
    },
    {
      year: "2024 - 2024",
      school: "StartUP Campus",
      major: "Data Science & Artificial Intelligence",
      desc: "Studied fundamental natural sciences, including physics, chemistry, and biology, as a foundation for further studies",
    },
  ];

  return (
    <section
      id="education"
      className="snap-start lg:pt-0 flex items-center justify-center"
    >
      <div className="h-auto lg:h-dvh relative px-6 lg:px-0 container mx-auto flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-10 w-full justify-end hidden lg:flex"
        >
          <h1 className="text-sm">The Journey Ahead</h1>
        </motion.div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-6xl text-center lg:text-start"
          >
            My Education Journey
          </motion.h1>
          {dataEdu.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="mt-10 block text-sm lg:flex gap-8 lg:text-lg"
            >
              <h1>{item.year}</h1>
              <div>
                <h1>{item.school}</h1>
                <p className="text-gray-400">{item.major}</p>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
