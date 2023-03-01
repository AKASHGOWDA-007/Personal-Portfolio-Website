import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX, FaUserAlt } from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>
          Akash <span>.</span>
        </h1>
      </div>
      <ul className="app_navbar-links">
        {/* {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))} */}
        <li className="app__flex p-text"><a href="#home"><i className="fa-solid fa-house"></i> Home</a></li>
        <li className="app__flex p-text"><a href="#about"><i className="fa-solid fa-user"></i> About</a></li>
        <li className="app__flex p-text"><a href="#skills"><i className="nav-icon fas fa-cog"></i> Skills</a></li>
        <li className="app__flex p-text"><a href="#projects"><i className="nav-icon fas fa-cog"></i> Projects</a></li>
        <li className="app__flex p-text"><a href="#contact"><i className="fa-solid fa-address-book"></i> Contact</a></li>
      
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
