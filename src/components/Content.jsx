import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import { ImEnlarge2 } from "react-icons/im";
import { useState } from 'react';

import content from "../assets/postContent.json"

function Content()
{
  const [flip, setFlip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [path, setPath] = useState("");


  const displayContent = content.map((postItem, index) => (
    <Carousel.Item key={index}>
      <div className="postContent">
        <h2><a href={postItem.link} target="_blank" rel="noopener noreferrer">{postItem.title}</a></h2>
        <h5>{postItem.date}</h5>
        <p className='postDescription'>{postItem.description}</p>
        {/* <img className='postImage' src={`${postItem.image}`}></img> */}


        <div className='cardContainer'>
            <div className={`card ${flip ? 'flip' : ''}`}>
              <div className='front' onClick={() => {setFlip(!flip)}}>
                <img className='postImage' src={`${postItem.image}`}></img>



              </div>
              <div className='back' onClick={() => {setFlip(!flip)}}>
                <p>{postItem.moreInfo}</p>
              </div>
                <Button variant="info" className='enlargeImage' onClick={() => {setShowModal(true); setPath(`${postItem.image}`)}}>
                <ImEnlarge2 />
                </Button>
            </div>
        </div>
        </div>
    </Carousel.Item>
  ));



  return (
    <>
      <Carousel data-bs-theme='dark' interval={null} onSelect={() => setFlip(false)}>
        {displayContent}
      </Carousel>

      <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName='customModalClass' centered>
        <Modal.Body onClick={() => setShowModal(false)} style={{padding: "0px"}}>
          <img className='modalImage' src={path}></img>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default Content