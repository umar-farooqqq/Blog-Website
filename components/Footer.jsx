import React from "react";

const Footer = ({ textColor }) => {
  return (
    <footer
      className={`w-full py-2 text-center bg-transparent mt-auto border-t-[1px] ${textColor}`}
    >
      <p>&copy; {new Date().getFullYear()} Blog.com. All rights reserved.</p>
      <p>Made with ❤︎ by Umar</p>
    </footer>
  );
};

export default Footer;
