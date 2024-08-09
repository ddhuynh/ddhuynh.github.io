import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import CardFlip from './CardFlip';
import content from "../assets/postContent.json"

function Content()
{
  const [showModal, setShowModal] = useState(false);
  const [path, setPath] = useState("");

  const displayContent = content.map((postItem, index) => (
      <div className='contentContainer' key={index}>
        <div className='contentImageContainer'>
          {/* This is a component that creates a flippable card. It uses postItem.image. */}
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

      <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName='customModalClass' centered>
        <Modal.Body onClick={() => setShowModal(false)} style={{padding: "0px"}}>
          <img className='modalImage' src={path}></img>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Content
