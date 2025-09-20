// ** Scrolling an image into view 
import React from 'react'
import './Scrolling_img.css'
import { useRef } from 'react'
const Scrolling_img=()=>{
  const listRef=useRef(null);

  const scrollToIndex=(index)=>{
    const listNode=listRef.current;
    const imgNode=listNode.querySelectorAll('li >img')[index];
    imgNode.scrollIntoView({
      behavior:'smooth',
      block:'nearest',
      inline:'center'
    });
    // **Why not 'ul > img'? => The <img> is not a direct child of <ul>. "Select all <img> elements that are direct children of <li> elements."


  }
  return (
    <div>
<nav>
  <button onClick={()=>scrollToIndex(0)}>
    Girl1
  </button>
  <button onClick={()=>scrollToIndex(1)}>Girl2</button>
  <button onClick={()=>scrollToIndex(2)}>Girl3</button>
</nav>

<div className="scroll-container">
  <ul className="card-list"  ref={listRef}>  
<li className="card" style={{ backgroundColor: '#ffe0e0' }}> 

  <img src='https://img.freepik.com/premium-photo/3d-cartoon-cute-girl_995235-7.jpg' alt="Girl1"/>
  <div className="card-name">Girl1</div>
  </li>

 <li className="card" style={{ backgroundColor: '#e0f7ff' }}> 
  <img src='https://img.freepik.com/premium-photo/3d-cute-cartoon-cute-girl-with-book_982935-3069.jpg' alt='Girl2'/>
<div className="card-name">Girl2</div>
  </li>

<li className="card" style={{ backgroundColor: '#e0ffe4' }}> 
  <img src='https://img.freepik.com/premium-photo/cute-cartoon-girl-with-ponytail-orange-earrings_1410957-100292.jpg' alt='Girl3'/>
    <div className="card-name">Girl3</div>

</li>
</ul>
</div>
    </div>
  )
};

export default Scrolling_img


