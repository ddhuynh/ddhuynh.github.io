import Banner from "../components/Banner";
import BodyContent from "../components/BodyContent";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

function HomePage()
{
  return (
    <>
      <div className="pageContainer">
        <Banner />
        <AboutMe />
        <BodyContent />
        <Footer />
      </div>
    </>
  )
}

export default HomePage;