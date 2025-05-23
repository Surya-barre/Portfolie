import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-gray-600">
              Here are some of my recent projects. Each one presented unique
              challenges and opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                className="card overflow-hidden"
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform:
                        hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 text-xs font-medium bg-primary-500 bg-opacity-90 text-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <FiGithub className="mr-2" /> View Code
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" variants={itemVariants}>
            <a
              href="https://github.com/Surya-barre"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FiGithub className="mr-2" /> View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;