import React, { useState, useLayoutEffect, useRef } from 'react';
import './Comment.css';


function Comment() {
    const textbox = useRef(null);

    function adjustHeight() {
        textbox.current.style.height = "inherit";
        textbox.current.style.height = `${textbox.current.scrollHeight}px`;
    }

    useLayoutEffect(adjustHeight, []);

    function handleKeyDown(e) {
        adjustHeight();
    }
    return (
      <div className="comment">
          <textarea
                     className="Scroll"
                     placeholder="Napisz komentarz..."  
                     ref={textbox}
                     onChange={handleKeyDown}/>
          <br />
          <button>Dodaj komentarz</button>
      </div>  
    );
}

export default Comment;