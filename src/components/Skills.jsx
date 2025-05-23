import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillsData } from "../data/skillsData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const categories = skillsData.map((item) => item.category);
  const activeSkills =
    skillsData.find((item) => item.category === activeCategory)?.skills || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-gray-600">
              Here are the technologies and tools I'm proficient with. I'm
              constantly learning and expanding my skill set.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => handleCategoryChange(category)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              key={activeCategory}
              initial="hidden"
              animate="visible"
            >
              {activeSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-primary-600">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-primary-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
