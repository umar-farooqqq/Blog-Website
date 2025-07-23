import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import React from "react";
import { Children, cloneElement } from "react";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = darkMode
    ? "bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950"
    : "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400";

  const textColor = darkMode ? "text-white" : "text-black";

  const bgColor = darkMode ? "bg-gray-800" : "bg-gray-200";

  const childrenWithProps = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return cloneElement(child, { textColor, bgColor });
    }
    return child;
  });

  return (
    <div className={`flex flex-col min-h-screen ${toggleDarkMode}`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        textColor={textColor}
      />
      <main className="flex-grow">{childrenWithProps}</main>
      <Footer textColor={textColor} />
    </div>
  );
}
