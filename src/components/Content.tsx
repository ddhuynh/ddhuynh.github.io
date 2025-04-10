// In this file, I'm taking info from my json file and mapping it out for display.
// If you want to modify how stuff per block looks, you can do it here.
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import CardFlip from './CardFlip';

// This json file is an array of json objects. Each object contains information for each card.
import content from "../assets/postContent.json"

interface ObjectContent
{
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
  moreInfo: string;
}

function Content()
{
  const [showModal, setShowModal] = useState<boolean>(false);
  const [path, setPath] = useState<string>("");

  // I have an array of json objects (content). I'm mapping the content of that in the function below.
  // This takes a json object in the array, the index of the array, and maps it accordingly.
  const displayContent = content.map((postItem: ObjectContent, index: number) => (
      <div className='contentContainer' key={index}>
        <div className='contentImageContainer'>
          {/* Here, we send our singular json object to another component, which handles card flipping.*/}
          <CardFlip postItemProp={postItem} setShowModalProp={setShowModal} setPathProp={setPath} />
        </div>

        {/* This is a container that holds the title/date/description. */}
        <div className='contentInfoContainer'>
          {/* If the link is "#", it won't go anywhere. */}
          <h2><a href={postItem.link} target={postItem.link == "#" ? "_self" : "_blank"} rel="noopener noreferrer">{postItem.title}</a></h2>
          <h4>{postItem.date}</h4>
          <p className='contentDescription' style={{whiteSpace: "pre-line"}}>{postItem.description}</p>
        </div>
      </div>
  ));

  return (
    <>
      {displayContent}

      {/* This is just a modal from bootstrap that I use to bring up a larger version of the image. */}
      <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName='customModalClass' centered>
        <Modal.Body onClick={() => setShowModal(false)} style={{padding: "0px"}}>
          <img className='modalImage' src={path}></img>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Content
