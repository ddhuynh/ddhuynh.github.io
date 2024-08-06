import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


function Footer()
{
  return (
    <div className="sectionContainer">
      <div className="footerContent">
        <FaLinkedin size={30}/>
        <a href="https://github.com/DaviHynh" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare size={30}/>
        </a>
      </div>
    </div>
  )
}

export default Footer;