import Button from 'react-bootstrap/Button';
import { ImEnlarge2 } from "react-icons/im";
import { useState, Dispatch, SetStateAction } from "react";

// Need to give my first prop this type.
interface ObjectContent
{
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
  moreInfo: string;
}

// The first prop is a json object, declared above. The 2nd and 3rd are both usestates, so use Dispatch and SetStateAction.
interface IProps
{
  postItemProp: ObjectContent;
  setShowModalProp: Dispatch<SetStateAction<boolean>>;
  setPathProp: Dispatch<SetStateAction<string>>;
}

// This function takes a json object to display the image associated with the project and some extended info on the back of a card.
// The two usestates are used to enlarge the image. (pull up the modal + set the image path)
export default function CardFlip({postItemProp, setShowModalProp, setPathProp} : IProps)
{
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flip ? 'flip' : ''}`}>

      {/* This allows you to click on the front of the card to flip it. */}
      <div className='front' onClick={() => {setFlip(!flip)}}>
        <img className='contentImage' src={`${postItemProp.image}`}></img>
      </div>

      {/* This allows you to click on the back of the card to flip it again. */}
      <div className='back' onClick={() => {setFlip(!flip)}}>
        <p style={{whiteSpace: "pre-line", padding: "5px"}}>{postItemProp.moreInfo}</p>
      </div>

      {/* When the enlage button is clicked, show the large modal with the specified image path. */}
      <Button variant="info" className='enlargeImage' onClick={() => {setShowModalProp(true); setPathProp(`${postItemProp.image}`)}}>
        <ImEnlarge2 />
      </Button>

    </div>
  )
}
