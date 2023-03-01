import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from "../../wrapper";
import "./Skills.scss"
import {skill} from "../Skills/skill";

function Skills() {
  const [skills, setSkills] = useState(skill);

  return (
    <div className='app__skills'>
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={skill.image} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(Skills, 'skills');
