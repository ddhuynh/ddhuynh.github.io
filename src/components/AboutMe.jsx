import FadeText from "../hooks/FadeText";
import { motion } from "framer-motion";

import profileImage from "../assets/profile.png"

function AboutMe()
{
  return (
      <div className="sectionContainer">
        <div className="aboutContent">
          <h1>
            <FadeText text={"Hi, I'm David."} delay={0}/>
          </h1>
          <h3>
            <FadeText text={"Welcome to my portfolio."} delay={1000}/>
          </h3>

          <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 2}}
          >
            <img src={profileImage} className="profileImg" />
          </motion.div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>Click on an image in the carousel to read more about the project!</p>

        </div>
      </div>
  )
}

export default AboutMe;