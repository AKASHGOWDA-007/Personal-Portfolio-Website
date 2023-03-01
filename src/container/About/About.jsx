import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const myStyle = {
  "@media (minWidth: 500px)": {
    margin: "10px",
  },
};

const About = () => {
  return (
    <>
      <div style={myStyle}>
        <h2 className="head-text">About Me</h2>
        <div className="app__profiles">
          <motion.div
            whileInView={{ x: [-200, 0] }}
            transition={{ duration: 0.5 }}
            className="about__image"
          >
            <img src={images.profileImage} alt="profile-image" />
          </motion.div>
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.75 }}
          >
            <div className="about-text">
              <p>
                I'm a frontend developer living in Bangalore, India, Who likes
                to provide solutions for people's <br /> projects and businesses
                which it is a challenge that I enjoy overcoming.
                <br /> I am highly proficient in CSS, SASS but have built some other projects with JavaScript and React.
                <br /> I am currently working on improving my JavaScript skills by building various projects to enhance my abilities.
                <br /> I build websites using HTML, CSS, JavaScript, and a other frameworks and libraries with a  focus <br /> on responsiveness, accessibility and pleasing aesthetics.
                <br /> I spend most days learning and building up, either start it from scratch or adding some <br /> customized features and functionality for outdated websites to make them shine again.</p>
              <div className="buttons">
                <a
                  className="btn"
                  href="https://flowcv.com/resume/24gw2gs0s2"
                  target="_blank"
                >
                  hire me
                </a>
                <a
                  className="btn"
                  href="mailto:g.akash712@gmail.com"
                  target="_blank"
                >
                  contact me
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(About, "about");
