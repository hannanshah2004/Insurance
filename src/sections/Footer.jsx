import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col items-center mb-8">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-yellow-300 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300">Contact Us</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} AHS Insurance. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-300 transition duration-300"
              >
                <img src={social.icon} alt={social.name} className="h-6 w-6 filter invert" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
