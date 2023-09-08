import React from "react";
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
            <img src={images.profileImage} alt="profile" />
          </motion.div>
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.75 }}
          >
            <div className="about-text">
              <p>
                Akash is a passionate and highly motivated <strong>DevOps Engineer</strong>, eager to embark on a career in the world of technology and automation.
                <br /> He has successfully completed technical training on <strong>Linux, AWS & DevOps</strong> from <strong>Besant Technologies</strong>
                <br /> During this time, he honed his skills in version control, <strong>continuous integration</strong>, and <strong>deployment automation</strong>. 
                <br /> He also gained hands-on experience with tools like <strong>Git, Jenkins, Maven, Docker,</strong> and <strong>Kubernetes.</strong>
                <br /> Akash is known for his problem-solving skills and is committed to staying updated in the ever-evolving DevOps landscape.
                <br /> With a strong work ethic, he's ready to collaborate and contribute to innovative solutions on a DevOps team.
                <br /> Apart from his skills in DevOps world, he his also skilled in Frontend Development.
              </p>
              <div className="buttons">
                <a
                  className="btn"
                  href="https://drive.google.com/file/d/1Kb21ItDBMDx1tOg7yIoXTbT4Gop2LlZM/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  hire me
                </a>
                <a
                  className="btn"
                  href="mailto:akashgowdasde@gmail.com"
                  target="_blank"
                  rel="noreferrer"
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
