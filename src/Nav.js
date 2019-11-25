import React from 'react';
import './Nav.scss';

const Nav = (props) => {
  return (
    <nav>
      <div className="nav-content">
        <span>tweeter</span>
        <div className="write-tweet" onClick={props.writeTweet}>
          <p><span>Write</span> a new tweet</p>
          <i className="fas fa-angle-double-down"></i>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
