import React from "react";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = ({ textColor }) => {
  return (
    <footer
      className={`w-full py-4 text-center bg-transparent mt-auto border-t-[1px] ${textColor}`}
    >
      <div className="w-full flex flex-col sm:flex-row items-center justify-between   gap-2 sm:gap-6 sm:px-8 md:px-24 lg:px-32">
        <p className="mb-1 sm:mb-0">
          &copy; {new Date().getFullYear()} Blog.com. All rights reserved.
        </p>
        <div className="flex sm:flex flex-row items-center gap-3 sm:gap-2">
          <span>Connect with me:</span>
          <div className="flex gap-3 justify-center items-center">
            <a
              href="mailto:umarfarooq63425@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail"
            >
              <Mail className="w-6 h-6 hover:text-blue-700 transition" />
            </a>
            <a
              href="https://github.com/umar-farooqqq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <Github className="w-6 h-6 hover:text-blue-700 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/umar-farooq-uf2003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
