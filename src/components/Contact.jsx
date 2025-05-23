import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiCode } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! I will get back to you soon.');
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="contact" className="section bg-primary-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-gray-600">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.div variants={containerVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 p-3 bg-primary-100 text-primary-600 rounded-full mr-4">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:alex@example.com"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      barresuryanarayana18@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 p-3 bg-primary-100 text-primary-600 rounded-full mr-4">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-600"> 7680933703</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 p-3 bg-primary-100 text-primary-600 rounded-full mr-4">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600"> mallam,pithapuram</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://linkedin.com/in/surya18-developer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-gray-700 hover:text-primary-600 rounded-full shadow-sm transition-colors"
                    whileHover={{ y: -3 }}
                    variants={itemVariants}
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Surya-barre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-gray-700 hover:text-primary-600 rounded-full shadow-sm transition-colors"
                    whileHover={{ y: -3 }}
                    variants={itemVariants}
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://leetcode.com/BarreSuryaNaidu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-gray-700 hover:text-primary-600 rounded-full shadow-sm transition-colors"
                    whileHover={{ y: -3 }}
                    variants={itemVariants}
                  >
                    <FiCode className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={containerVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;