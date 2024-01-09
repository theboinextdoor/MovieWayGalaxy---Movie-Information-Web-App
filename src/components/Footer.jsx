import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col items-center z-20  ">
      <div className="flex gap-3 mt-1">
        <a href="https://github.com/theboinextdoor" target="_blank">
          <FaGithub className="text-white w-auto  m-2 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/faraaz-ashraf-831796204/">
          <FaLinkedin className="text-white  w-auto m-2 cursor-pointer" />
        </a>
        <a href="mailto:cman55425@gmail.com">
          <SiGmail className="text-white w-auto m-2 cursor-pointer" />
        </a>
        <a href="https://twitter.com/heyanonymouss">
          <FaTwitter className="text-white  w-auto m-2 cursor-pointer" />
        </a>
      </div>
      <div className="text-white text-sm pb-2 font-semibold">
        <p>
          Copyright &copy; 2023 Deigned by{" "}
          <span className="text-red-800 font-semibold text-lg ">
            Faraaz Ashraf
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// fixed bottom-0 left-0 right-0
