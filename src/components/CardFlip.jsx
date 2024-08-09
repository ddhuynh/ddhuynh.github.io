import Button from 'react-bootstrap/Button';
import { ImEnlarge2 } from "react-icons/im";

import { useState } from "react";
import PropTypes from 'prop-types';

// This component obtains an image from a json prop, and creates flippable cards.
// From the json prop, it sets the image path, an extended description, and adds onclick functions for the usestates.

export default function CardFlip({postItemProp, setShowModalProp, setPathProp})
{
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flip ? 'flip' : ''}`}>
      <div className='front' onClick={() => {setFlip(!flip)}}>
        <img className='contentImage' src={`${postItemProp.image}`}></img>
      </div>

      <div className='back' onClick={() => {setFlip(!flip)}}>
        <p style={{whiteSpace: "pre-line", padding: "5px"}}>{postItemProp.moreInfo}</p>
      </div>

      <Button variant="info" className='enlargeImage' onClick={() => {setShowModalProp(true); setPathProp(`${postItemProp.image}`)}}>
        <ImEnlarge2 />
      </Button>
    </div>
  )
}

CardFlip.propTypes = {
  postItemProp: PropTypes.object,
  setShowModalProp: PropTypes.func,
  setPathProp: PropTypes.func
}