import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section bg-white py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 mb-4">
                I'm Surya, a dedicated web developer and AI-ML enthusiast
                currently in my 3rd year of B.Tech. I’ve completed internships
                at <strong>Krify</strong> as a PHP Developer and at{" "}
                <strong>BlackBuck</strong>
                as an AI-ML Intern, where I gained hands-on experience in both
                backend development and machine learning.
              </p>
              <p className="text-gray-600 mb-4">
                My technical journey is backed by strong projects, including a{" "}
                <strong>Real-Time Chat Application</strong>
                built with the MERN stack and a{" "}
                <strong>Weather Prediction App</strong> built with React and
                APIs.
              </p>
              <p className="text-gray-600 mb-4">
                With proficiency in React, Node.js, MongoDB, Firebase, PHP, and
                Python, I love solving real-world problems and creating seamless
                user experiences. I'm now seeking a full-time opportunity where
                I can contribute, grow, and innovate alongside a great team.
              </p>
              <p className="text-gray-600">
                I'm also passionate about learning, completing certifications in
                Cybersecurity, Core Java, Python, and C++, and ranked in the{" "}
                <strong>top 5%</strong> during my AI-ML internship with
                BlackBuck.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Experience Highlights
                </h3>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      AI-ML Intern
                    </h4>
                    <span className="text-sm text-gray-500">
                      Jun 2024 – Jul 2024
                    </span>
                  </div>
                  <p className="text-gray-700">BlackBuck, Bhimavaram</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Solved 15+ real-world AI problems using Python, ranked in
                    the top 5% out of 100+ participants, and deployed scalable
                    models in healthcare and finance.
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      PHP Developer Intern
                    </h4>
                    <span className="text-sm text-gray-500">
                      Aug 2019 – Jan 2020
                    </span>
                  </div>
                  <p className="text-gray-700">Krify, Kakinada</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Built CRUD operations for employee management in PHP,
                    optimized performance by 30%, and managed 500+ records in a
                    live database.
                  </p>
                </div>
                 <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Projects
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                    <li>
                      <strong>Chat App (MERN Stack):</strong> Secure
                      authentication, messaging, profile management — used by
                      200+ users with 40% more engagement.
                    </li>
                    <li>
                      <strong>Weather App (React):</strong> Real-time forecast
                      using APIs, with 95% prediction accuracy and 25%
                      improvement in UX.
                    </li>
                    <li>
                      <strong>Task Management App:</strong> Built with React and
                      Node.js, featuring task creation, categorization,
                      drag-and-drop prioritization, and deadline reminders for
                      improved productivity.
                    </li>
                    <li>
                      <strong>Ecommerce Website:</strong> Developed with React
                      and Express, includes product catalog, shopping cart, user
                      authentication, and Stripe payment integration for smooth
                      online purchases.
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Tech Stack
                  </h4>
                  <p className="text-gray-600 text-sm">
                    React, Node.js, Express, MongoDB, Firebase, JavaScript, PHP,
                    Python, MySQL, Git, Tailwind CSS, Bootstrap
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

