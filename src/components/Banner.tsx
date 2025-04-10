import { Link } from "react-router-dom";

function Banner()
{
  return (
    <div className="sectionContainer" style={{borderBottom: "orange solid"}}>
      <div className="bannerContent">
        <p>
          <Link to="/" style={{textDecoration: "none"}}>
            My Portfolio
          </Link>
        </p>
        <p>
          {/* If I ever get around to making an about page... */}
          {/* <Link to="/about">About</Link> */}
          <a href="https://github.com/ddhuynh" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
          My GitHub
          </a>
        </p>
      </div>
    </div>
  )
}

export default Banner;