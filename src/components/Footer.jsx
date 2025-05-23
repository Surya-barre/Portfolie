import { FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Portfolio</h3>
            <p className="text-gray-400 mt-2">
              Turning ideas into real-world applications
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end text-gray-400">
              Made with <FiHeart className="mx-1 text-red-500" /> using React &
              Tailwind
            </p>
            <p className="text-gray-500 mt-2">
              © {currentYear} Surya barre. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
