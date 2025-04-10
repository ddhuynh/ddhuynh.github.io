// Mostly html+css for the footer section. Don't forget to change links if you change something...

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Footer()
{
  return (
    <div className="sectionContainer" style={{backgroundColor: "#1b1f22"}}>
      <div className="footerContent">
        <div className="iconLinksContainer">
        <FaLinkedin size={30}/>
        <a href="https://github.com/DaviHynh" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare size={30}/>
        </a>
        </div>

          <p className="footerDescription">
            This site was made possible through the usage of vite, react, and github pages.
            Some notable packages I used to develop this site are react-boostrap and framer-motion.<br/>
            Thanks for visiting!
          </p>

      </div>
    </div>
  )
}

export default Footer;