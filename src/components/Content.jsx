import TempImage from "../assets/TempImage.png"
import content from "../assets/postContent.json"

function Content()
{
  const displayContent = content.map((postItem, index) => (
    <div key={index} className="postContent">
      <h2>{postItem.title}</h2>
      <h4>{postItem.date}</h4>
      <p>{postItem.description}</p>
      <img src={TempImage}></img>
    </div>
  ));



  return (
    <>
      {/* {displayContent} */}
      <div className="postContent">
          <h2>Hello World!!!</h2>
          <h4>Date: 9000000000</h4>
          <p>Short Description</p>
          <img src={TempImage}></img>
      </div>
    </>
  )
}

export default Content