import Banner from "../components/Banner";
import Body from "../components/Body";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

function HomePage()
{
  return (
    <>
      <div className="pageContainer">
        <Banner />
        <AboutMe />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default HomePage;