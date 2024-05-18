import Content from "./Content"

function Body()
{
    return (
        <>
        <div className="bannerContainer">
            <div className="bannerContent">
                <p>
                    My Portfolio
                </p>
                <p>
                    About
                </p>

            </div>
        </div>


        <div className="bodyContainer">
            <div className="bodyContent">
                <Content />
            </div>
        </div>


        <div className="footerContainer">
            <div className="footerContent">
                <p>
                    footer content goes here i guess
                </p>
            </div>
        </div>
        </>
    )
}

export default Body