
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between">
      <div className="">
        FTJ <span className="font-bold">KOROBI</span>
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-2xl">
      <a
          href="https://www.linkedin.com/in/fatema-korobi/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          <FaLinkedin />
          
        </a>
        <a
          href="https://github.com/Korobiftj"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          
        <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
