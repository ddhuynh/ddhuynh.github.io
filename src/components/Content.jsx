import Carousel from 'react-bootstrap/Carousel';
import content from "../assets/postContent.json"

import { useState } from 'react';

function Content()
{
  const [flip, setFlip] = useState(false);


  const displayContent = content.map((postItem, index) => (
    <Carousel.Item key={index}>
      <div className="postContent">
        <h2><a href={postItem.link} target="_blank" rel="noopener noreferrer">{postItem.title}</a></h2>
        <h5>{postItem.date}</h5>
        <p className='postDescription'>{postItem.description}</p>
        {/* <img className='postImage' src={`${postItem.image}`}></img> */}

        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
          <div className='front'>
            <img className='postImage' src={`${postItem.image}`}></img>
          </div>
          <div className='back'>
            <p>{postItem.moreInfo}</p>
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
    </>
  )
}

export default Content