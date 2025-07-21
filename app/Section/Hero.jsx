"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="snap-start flex items-center justify-center">
      <div className="h-dvh lg:h-dvh relative px-6 lg:px-0 container mx-auto flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 w-full justify-end hidden lg:flex"
        >
          <h1 className="text-sm">Where The Story Started</h1>
        </motion.div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-6xl"
          >
            I'm Ngakan Made Alit Wiradhanta
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full lg:w-3/4 text-gray-400 mt-4"
          >
            <p className="text-sm lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              at commodi quaerat molestias! Sed ex deleniti sapiente magni.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-4 mt-6"
          >
            <button className="btn px-6 font-normal">
              <a href="" className="flex items-center gap-2">
                My Work{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </button>
            <button>
              <a href="">Hire Me</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
