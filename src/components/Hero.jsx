import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiFileText, FiCode } from 'react-icons/fi';
import profileImage from "../assets/profile2.jpg";
const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-primary-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-primary-600">Surya Barre</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
              FullStack Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl leading-relaxed">
              I build exceptional digital experiences that are fast, accessible,
              and user-focused. Passionate about clean code and solving complex
              problems with elegant solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="https://linkedin.com/in/surya18-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin className="mr-2" /> LinkedIn
              </motion.a>
              <motion.a
                href="https://leetcode.com/BarreSuryaNaidu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCode className="mr-2" /> LeetCode
              </motion.a>
              <motion.a
                href="/MainResume.pdf"
                className="btn btn-secondary"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiFileText className="mr-2" /> Resume
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Surya-barre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/surya18-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={profileImage} // Replace this with a valid image link or base64
                  alt="Surya Barre"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
