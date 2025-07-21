"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="snap-start pt-24 lg:pt-0 flex items-center justify-center"
    >
      <div className="h-auto lg:h-dvh relative px-6 lg:px-0 container mx-auto flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-10 w-full justify-end hidden lg:flex"
        >
          <h1 className="text-sm">Where You Can Find Me</h1>
        </motion.div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-6xl text-center lg:text-start"
          >
            Contact Me
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 text-sm lg:text-lg text-gray-400"
          >
            {[
              "WhatsApp : +62 853 3351 51518",
              "Address : Jl. Tunggak Bingin No.6c, Semawang, Sanur Kauh, Denpasar Selatan, Kota Denpasar, Bali 80226",
              "Email : alitwira08@gmail.com",
            ].map((item, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className={index > 0 ? "mt-2" : ""}
              >
                {item}
              </motion.h1>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
