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

          <p style={{width: "80%", alignSelf: "center"}}>
            {`I initially started my career thinking it would revolve around biological science, 
            but after a year in college, I discovered the world of coding and realized that 
            I actually enjoyed solving problems and developing real-world applications.
            As a result, I've worked on a variety of projects, ranging from concurrent programs to full-stack web apps!`}
          </p>
          <p style={{width: "80%", alignSelf: "center"}}>
            {`In the time I've spent developing these projects, I've learned to enjoy the challenge that comes with learning something new, 
            and to embrace meeting and socializing with different people. You can check out some of these projects down below!`}
          </p>
        </div>
      </div>
  )
}

export default AboutMe;