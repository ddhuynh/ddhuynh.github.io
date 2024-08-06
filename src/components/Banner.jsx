import { Link } from "react-router-dom";

function Banner()
{
  return (
    <div className="sectionContainer" style={{borderBottom: "orange solid"}}>
      <div className="bannerContent">
        <p>
          <Link to="/">
            My Portfolio
          </Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>
    </div>
  )
}

export default Banner;