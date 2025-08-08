import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ContactPage = () => {
  return (
    <div className="bg-white ">
      {/* Header */}


      <h1 className="font-serif text-3xl font-bold text-center md:text-4xl">Contact Us</h1>
      <p className="mt-3 text-sm font-thin text-center text-gray-600">
        Have questions or need help? We’re here to assist you.
      </p>

      {/* Get In Touch Section */}
      <div className=" bg-gray-50">
        <motion.h3
          className="mt-2 mb-6 font-bold text-center text-black tex-4xl fon6t-serif"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-xl">Get In Touch</span>
        </motion.h3>

        <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
          {[FaGlobe, FaPhoneAlt, FaEnvelope].map((Icon, i) => (
            <motion.div
              key={i}
              className="p-6 text-center bg-white border rounded-md shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex items-center justify-center mx-auto mb-4 text-2xl text-white bg-orange-500 rounded-full w-14 h-14">
                <Icon />
              </div>

              {i === 0 && (
                <p className="text-gray-700">
                  Swavalamban Bhavan, C-11, G-Block,
                  Bandra Kurla Complex, Bandra (E),
                  Mumbai – 400051

                </p>
              )}

              {i === 1 && (
                <>
                  <p className="font-semibold text-gray-900">Support 24/7</p>
                  <a
                    href="tel:+918981437136"
                    className="inline-block mt-1 text-blue-600 hover:underline"
                  >
                    +91 9134254602
                  </a>
                </>
              )}

              {i === 2 && (
                <>
                  <p className="font-semibold text-gray-900">Business Query</p>
                  <a
                    href="mailto:support@dhani-finance.com"
                    className="inline-block mt-1 text-blue-600 hover:underline"
                  >
                    Info@mudraloan.in
                  </a>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
