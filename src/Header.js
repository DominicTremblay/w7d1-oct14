import React from 'react';
import './Header.scss';

const Header = ({ username, profileImg }) => {


  return (
    <header className="header-main">
      <div>
        <img src={profileImg} />
      </div>
      <br />
      <div>
        <h2>{username}</h2>
      </div>
    </header>
  );
}

export default Header;
