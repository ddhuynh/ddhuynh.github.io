import Content from "./Content"

function Body()
{
  return (
    <>
      <div className="sectionContainer" style={{flexGrow: "1"}}>
        <div className="bodyContent">
            <Content />
        </div>
      </div>
    </>
  )
}

export default Body