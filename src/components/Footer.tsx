import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaLinkedin />, href: '#' },
    { icon: <FaGithub />, href: '#' },
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Alpha Trust Solutions. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
